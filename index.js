const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { nanoid } = require('nanoid');

const { users, posts, comments } = require('./data');

const typeDefs = gql`
    type User{
        id: ID!
        fullName: String!
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Post{
        id: ID!
        title: String!
        user_id: ID!
        user: User!
        comments: [Comment!]!
    }

    type Comment{
        id: ID!
        text: String!
        post_id: ID!
        user: User!
        post: Post!

    }

    type Query{
        # User
        users: [User!]!
        user(id: ID!): User!

        # Post
        posts: [Post!]!
        post(id: ID!): Post!

        # Comment
        comments: [Comment!]!
        comment(id: ID!): Comment!
    }

    type Mutation {
        createUser(fullName: String!): User!
        createPost(title: String!, user_id: ID!): Post!
        createComment(text: String!, post_id: ID!, user_id: ID!): Comment!
    }
`;

const resolvers = {
    Query: {
        // User
        users: () => users,
        user: (parent, args) => users.find((user) => user.id === args.id),

        // Post
        posts: () => posts,
        post: (parent, args) => posts.find(post => post.id === args.id),

        // Comments
        comments: () => comments,
        comment: (parent, args) => comments.find(comment => comment.id === args.id),
    },

    User: {
        posts: (parent) => posts.filter((post) => post.user_id === parent.id),

        comments: (parent) => comments.filter((comment) => comment.user_id === parent.id)
    },

    Post: {
        user: (parent) => users.find((user) => user.id === parent.user_id),

        comments: (parent) => comments.filter((comment) => comment.post_id === parent.id)
    },

    Comment: {
        user: (parent) => users.find((user) => user.id === parent.user_id),

        post: (parent) => posts.find((post) => post.id === parent.post_id)
    },

    Mutation: {
        createUser: (parent, { fullName }) => {

            const user = { 
                id: nanoid(), 
                // fullName: args.fullName 
                fullName
            }

            users.push(user);


            return user;
        },

        createPost: (parent, { title, user_id }) => {

            const post = {
                id: nanoid(),
                title,
                user_id
            }

            posts.push(post);

            return post;
        },

        createComment: (parent, { text, post_id, user_id }) => {
            const comment = {
                id: nanoid(),
                text,
                post_id,
                user_id
            }

            comments.push(comment);

            return comment;
        } 
    }
};

const server = new ApolloServer({            
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({})
    ]
});

server.listen().then(( { url } ) => {
    console.log(`Server ready at ${url}`) 
});