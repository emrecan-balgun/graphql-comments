const { ApolloServer, gql } = require('apollo-server');
const { users, posts, comments } = require('./data');

const typeDefs = gql`

`

const resolvers = {
    Query: {

    },
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(( { url } ) => {
    console.log(`Server ready at ${url}`) 
});