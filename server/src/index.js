const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

//TODO
const server = new ApolloServer({
  typeDefs
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    ❓  Query at https://studio.apollographql.com/dev
`);
});
