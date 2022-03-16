const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { users, posts, comments } = require('./data');

const typeDefs = gql`
    type User{
        id: ID!
        fullName: String!
    }

    type Post{
        id: ID!
        title: String!
        user_id: ID!
    }

    type Comments{
        id: ID!
        text: String!
        post_id: ID!
    }

    type Query{
        users: [User!]!
        posts: [Post!]!
        comments: [Comments!]!
    }
`

const resolvers = {
    Query: {
        users: () => users,
        posts: () => posts,
        comments: () => comments,
    },
}

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