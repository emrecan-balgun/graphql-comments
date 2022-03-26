import { RedisPubSub } from 'graphql-redis-subscriptions';
import * as Redis from 'ioredis';

const options = {
  host: "redis-12022.c9.us-east-1-2.ec2.cloud.redislabs.com",
  port: 12022,
  password: "Qvt1h9QU3t30klw6EiPG35whCnF4No8f",
  retryStrategy: times => {
    // reconnect after
    return Math.min(times * 50, 2000);
  }
};

const pubsub = new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options)
});

module.exports = pubsub;