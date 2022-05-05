const { gql } = require("apollo-server");

const typeDefs = gql`
  # schema defined here
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track!
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    # Returns the resultant track
    track: Track
    # Returns the status of the mutation
    code: Int!
    # Returns whether the mutation was succesfull or not
    success: Boolean!
    # Returns information on mutation, see if all response was returned as expect
    info: String
  }

  type Author {
    id: ID!
    name: String
    photo: String
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int @deprecated(reason: "replaced with durationInSeconds field")
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
    durationInSeconds: Int
  }

  type Module {
    id: ID!
    title: String
    # Length of module in minutes
    length: Int
      @deprecated(reason: "replaced with the durationInSeconds field!")
    durationInSeconds: Int
  }
`;

/**
 * Create a full schema with: a type Query containing a field spaceCats to fetch a List of SpaceCat. A type SpaceCat with its subfields: id of type ID!, name of type String!, age of type Int and missions of type List of Mission. Finally define the Mission type with its subfields: id of type ID!, name of type String!, and description of type String!.
 */

module.exports = typeDefs;
