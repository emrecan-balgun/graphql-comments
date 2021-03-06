import { GraphQLServer } from 'graphql-yoga';
import resolvers from '@resolvers';
import typeDefs from '@type-defs';
import pubsub from './pubsub';

import db from './db';
db();

import User from './models/User';
import Post from './models/Post';
import Comment from './models/Comment';

// fake data
import data from './data';

// setTimeout(async () => {
//     const comments = await Comment.find();
//     console.log(comments);
// }, 2000)

const server = new GraphQLServer({ 
    typeDefs, 
    resolvers, 
    context: { 
        pubsub,
        db: data,
        _db: {
            User,
            Post,
            Comment,
        }
    } 
});

server.start(() => console.log("Server is running on localhost:4000"))