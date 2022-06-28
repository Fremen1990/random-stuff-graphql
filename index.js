const { ApolloServer, gql } = require("apollo-server");
const PORT = process.env.PORT || 4000;

const typeDefs = gql`
  type Query {
    greeting: String
    interestingUrls: [String]
    favouriteNumber: Int
  }
`;

const data = {
  greeting: "Hello Man!", //number will be automatically converted to String (JS thing :D )
  interestingUrls: [
    "https://devthomas.pl",
    "https://www.devthomas.pl/tomasz-stanisz-web-developer-cv/",
  ],
  favouriteNumber: 69,
};

const server = new ApolloServer({
  typeDefs,
  rootValue: data,
  playground: true,
  introspection: true,
});

server
  .listen({ port: PORT })
  .then((result) => console.log("Apollo is running on: ", result.url));
