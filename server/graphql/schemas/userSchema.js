const { gql } = require('apollo-server-express');

const userSchema = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    # Additional fields like roles, status
  }

  type Query {
    user(id: ID!): User
    # Other queries
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    # Other mutations
  }
`;

module.exports = userSchema;
