const resolvers = {
  Query: {
    tracksForHome: (_, __, context) => {
      const { dataSources } = context;
      return dataSources.trackAPI.getTracksForHome();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        let track = await dataSources.trackAPI.incrementTrackViews(id);

        return {
          track,
          code: 200,
          success: true,
          info: "Successfully resolved mutation",
        };
      } catch (err) {
        return {
          track: null,
          code: err.extensions.response.status,
          success: false,
          info: err.extensions.response.body,
        };
      }
    },
  },
  Track: {
    // Track's parent is tracksForHome, since it is
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getModules(id);
    },
  },
};

module.exports = resolvers;
