const { GraphQLServer } = require('graphql-yoga');

const pubsub = require('./pubsub');

const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/type-defs');

const db = require('./data');


const server = new GraphQLServer({ 
    typeDefs, 
    resolvers, 
    context: { 
        pubsub,
        db,
    } 
});

server.start(() => console.log("Server is running on localhost:4000"))