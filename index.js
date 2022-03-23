const { GraphQLServer, PubSub } = require('graphql-yoga');

// const { ApolloServer, gql } = require('apollo-server');
// const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { nanoid } = require('nanoid');

const { users, posts, comments } = require('./data');

const typeDefs = `

    # User
    type User{
        id: ID!
        fullName: String!
        age: Int!
        posts: [Post!]!
        comments: [Comment!]!
    }

    input createUserInput {
        fullName: String!
        age: Int!
    }

    input UpdateUserInput {
        fullName: String
        age: Int
    }


    # Post
    type Post{
        id: ID!
        title: String!
        user_id: ID!
        user: User!
        comments: [Comment!]!
    }

    input createPostInput {
        title: String!
        user_id: ID!
    }

    input UpdatePostInput {
        title: String
        user_id: ID
    }

    # Comment
    type Comment{
        id: ID!
        text: String!
        post_id: ID!
        user: User!
        post: Post!

    }

    input createCommentInput {
        text: String! 
        post_id: ID!
        user_id: ID!
    }

    input UpdateCommentInput {
        text: String
        post_id: ID
        user_id: ID
    }

    # Delete All Output
    type DeleteAllOutput {
        count: Int!
    }

    # Query
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
        # User
        createUser(data: createUserInput!): User!
        updateUser(id: ID!, data: UpdateUserInput!): User!
        deleteUser(id: ID!): User!
        deleteAllUsers: DeleteAllOutput!

        # Post
        createPost(data: createPostInput!): Post!
        updatePost(id: ID!, data: UpdatePostInput!): Post!
        deletePost(id: ID!): Post!
        deleteAllPosts: DeleteAllOutput!

        # Comment
        createComment(data: createCommentInput!): Comment!
        updateComment(id: ID!, data: UpdateCommentInput!): Comment!
        deleteComment(id: ID!): Comment!
        deleteAllComments: DeleteAllOutput!
    }

    type Subscription {
        userCreated: User!
        userUpdated: User!
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
        // User
        createUser: (parent, { data }, { pubsub }) => {
            const user = { 
                id: nanoid(),
                // fullName: args.data.fullName
                ...data
            }

            users.push(user);
            pubsub.publish('userCreated', { userCreated: user })

            return user;
        },
        updateUser: (parent, { id, data }) => {
            const user_index = users.findIndex(user => user.id === id)

             if(user_index === -1) {
                 throw new Error('User not found')
             }

             const updated_user = users[user_index] = {
                 ...users[user_index],
                 ...data
             }

             pubsub.publish('userUpdated', { userUpdated: updated_user })

             return updated_user;
        },
        deleteUser: (parent, { id }) => {
            const user_index = users.findIndex(user => user.id === id)

            if(user_index === -1) {
                throw new Error("User not found")
            }

            const deleted_user = users[user_index]

            users.splice(user_index, 1)

            return deleted_user;
        },
        deleteAllUsers: () => {
            const length = users.length
            users.splice(0, length)

            return {
                count: length,
            }
        },

        // Post
        createPost: (parent, { data }) => {

            const post = {
                id: nanoid(),
                ...data
            }

            posts.push(post);

            return post;
        },
        updatePost: (parent, { id, data }) => {
            const post_index = posts.findIndex(post => post.id === id)

            if(post_index === -1) {
                throw new Error ('Post not found')
            }

            const updated_post = posts[post_index] = {
                ...posts[post_index],
                ...data
            }

            return updated_post;
        },
        deletePost: (parent, { id }) => {
            const post_index = posts.findIndex(post => post.id === id)

            if(post_index === -1) {
                throw new Error("Post not found")
            }

            const deleted_post = posts[post_index]

            posts.splice(post_index, 1)

            return deleted_post;
        },
        deleteAllPosts: () => {
            const length = posts.length
            posts.splice(0, length)

            return {
                count: length,
            }
        },

        // Comment
        createComment: (parent, { data }) => {
            const comment = {
                id: nanoid(),
                ...data
            }

            comments.push(comment);

            return comment;
        } ,
        updateComment: (parent, { id, data }) => {
            const comment_index = comments.findIndex(comment => comment.id === id)

            if(comment_index === -1) {
                throw new Error ('Comment not found')
            }

            const updated_comment = comments[comment_index] = {
                ...comments[comment_index],
                ...data
            }

            return updated_comment;
        },
        deleteComment: (parent, { id }) => {
            const comment_index = comments.findIndex(comment => comment.id === id)

            if(comment_index === -1) {
                throw new Error("Comment not found")
            }

            const deleted_comment = comments[comment_index]

            comments.splice(comment_index, 1)

            return deleted_comment;
        },
        deleteAllComments: () => {
            const length = comments.length
            comments.splice(0, length)

            return {
                count: length,
            }
        },
    },

    Subscription: {
        userCreated: {
            subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('userCreated'),
        },

        userUpdated: {
            subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('userUpdated'),
        },
    },
} 

// const server = new ApolloServer({            
//     typeDefs,
//     resolvers,
//     plugins: [
//         ApolloServerPluginLandingPageGraphQLPlayground({})
//     ]
// });

const pubsub = new PubSub();
const server = new GraphQLServer({ 
    typeDefs, 
    resolvers, 
    context: { 
        pubsub 
    } 
});

server.start(() => console.log("Server is running on localhost:4000"))

// server.listen().then(( { url } ) => {
//     console.log(`Server ready at ${url}`) 
// });