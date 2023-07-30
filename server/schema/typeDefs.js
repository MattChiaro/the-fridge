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
    users: [User]
    user(_id: ID!): User
    bulletins: [Bulletin]
    bulletin(_id: ID!): Bulletin
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    deleteUser(_id: ID!): User
    updateUser(_id: ID!, name: String, email: String, password: String): User
    addBulletin(title: String!, body: String!, user: String!, priority: Boolean): Bulletin
    editBulletin(_id: ID!, title: String, body: String, user: String, priority: Boolean): Bulletin
    removeBulletin(_id: ID!): Bulletin
  }
`;

module.exports = typeDefs;

