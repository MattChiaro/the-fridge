// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type User {
//     _id: ID
//     name: String
//     email: String
//     password: String
//     bulletins: [Bulletin]
//   }

//   type Bulletin {
//     _id: ID
//     title: String
//     body: String
//     user: String
//     createdAt: String
//     priority: Boolean
//   }

//   type Query {
//     users: [User]
//     user(_id: ID!): User
//     bulletins: [Bulletin]
//     bulletin(_id: ID!): Bulletin
//   }

//   type Mutation {
//     addUser(name: String!, email: String!, password: String!): User
//     deleteUser(_id: ID!): User
//     updateUser(_id: ID!, name: String, email: String, password: String): User
//     addBulletin(title: String!, body: String!, user: String!, priority: Boolean): Bulletin
//     editBulletin(_id: ID!, title: String, body: String, user: String, priority: Boolean): Bulletin
//     removeBulletin(_id: ID!): Bulletin
//   }
// `;

// module.exports = typeDefs;



// updated with fridge model 
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

  type Event {
    _id: ID
    start: String
    end: String
    title: String
    update: Boolean
    allday: Boolean
    time: String
  }

  type Fridge {
    _id: ID
    user: User
    bulletins: [Bulletin]
    calendar: [Event]
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    bulletins: [Bulletin]
    bulletin(_id: ID!): Bulletin
    events: [Event]
    event(_id: ID!): Event
    fridges: [Fridge]
    fridge(_id: ID!): Fridge
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    deleteUser(_id: ID!): User
    updateUser(_id: ID!, name: String, email: String, password: String): User
    addBulletin(title: String!, body: String!, user: String!, priority: Boolean): Bulletin
    editBulletin(_id: ID!, title: String, body: String, user: String, priority: Boolean): Bulletin
    removeBulletin(_id: ID!): Bulletin
    addEvent(start: String!, end: String!, title: String!, update: Boolean!, allday: Boolean!, time: String!): Event
    editEvent(_id: ID!, start: String, end: String, title: String, update: Boolean, allday: Boolean, time: String): Event
    removeEvent(_id: ID!): Event
    addFridge(user: ID!): Fridge
    removeFridge(_id: ID!): Fridge
  }
`;

module.exports = typeDefs;


