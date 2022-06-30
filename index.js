const { ApolloServer } = require("apollo-server");
const PORT = process.env.PORT || 4000;
const typeDefs = require("./typeDefs");
const rootValue = require("./rootValue");

const server = new ApolloServer({
  typeDefs,
  rootValue,
  introspection: true,
  playground: true,
});

server
  .listen({ port: PORT })
  .then((result) => console.log("Apollo is running on: ", result.url));
