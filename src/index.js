const { ApolloServer } = require("apollo-server");
const TrackAPI = require("./data-sources/track-api");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
  }),
  Track: () => ({
    id: () => "track_1",
    title: () => "Learning Track",
    author: () => ({
      id: "author_1",
      name: "Thomas Crisp",
      photo:
        "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
    }),
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
    length: () => 12,
    modulesCount: () => 3,
  }),
};

const server = new ApolloServer({
  typeDefs,
  //   mocks,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(() => {
  console.log(`
        Server is running!
    `);
});
