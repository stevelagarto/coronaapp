'use strict';

const { ApolloServer, gql } = require('apollo-server');
const schemas = require('./schemas');

const typeDefs = gql(schemas);
const resolvers = require('./resolvers');
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // eslint-disable-line no-console
});
