const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    bulletins: [Bulletin]
  }

  type Bulletin {
    _id: ID
    title: String
    body: String
    user: String
    createdAt: String
    priority: Boolean
  }

  type Query {
    bulletins: [Bulletin]
    bulletin(_id: ID!): Bulletin
  }

  type Query {
    users: [User]
    user(_id: ID!): User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    deleteUser(_id: ID!): User
    updateUser(_id: ID!, name: String, email: String, password: String): User
  }
`;

module.exports = typeDefs;
