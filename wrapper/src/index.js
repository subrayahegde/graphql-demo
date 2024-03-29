const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')
const { resolvers } = require ('./resolvers');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
