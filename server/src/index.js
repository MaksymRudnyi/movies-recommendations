const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');

const Query = require('./resolvers/Query')

const resolvers = {
  Query
}

const context = ({ req, res }) => ({
  locale: req?.headers?.locale || 'en-US'
})

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );