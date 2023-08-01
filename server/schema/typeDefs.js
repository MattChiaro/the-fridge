// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type User {
//     _id: ID
//     name: String
//     email: String
//     password: String
//     bulletins: [Bulletin]
//   }

//   type Auth {
//     token: ID
//     user: User
//   }

//   type Bulletin {
//     _id: ID
//     title: String
//     body: String
//     user: String
//     createdAt: String
//     priority: Boolean
//   }

//   type Event {
//     _id: ID
//     start: String
//     end: String
//     title: String
//     update: Boolean
//     allday: Boolean
//     time: String
//   }

//   type Fridge {
//     _id: ID
//     user: [User]
//     bulletins: [Bulletin]
//     calendar: [Event]
//   }

//   type Query {
//     users: [User]
//     user(_id: ID!): User
//     bulletins: [Bulletin]
//     bulletin(_id: ID!): Bulletin
//     events: [Event]
//     event(_id: ID!): Event
//     fridges: [Fridge]
//     fridge(_id: ID!): Fridge
//   }

//   type Mutation {
//     addUser(name: String!, email: String!, password: String!): Auth
//     deleteUser(_id: ID!): User
//     updateUser(_id: ID!, name: String, email: String, password: String): User
//     login(email: String!, password: String!): Auth


//     addBulletin(title: String!, body: String!, user: String!, priority: Boolean): Bulletin
//     editBulletin(_id: ID!, title: String, body: String, user: String, priority: Boolean): Bulletin
//     removeBulletin(_id: ID!): Bulletin
//     addEvent(start: String!, end: String!, title: String!, update: Boolean!, allday: Boolean!, time: String!): Event
//     editEvent(_id: ID!, start: String, end: String, title: String, update: Boolean, allday: Boolean, time: String): Event
//     removeEvent(_id: ID!): Event
//     addFridge(user: ID!): Fridge
//     removeFridge(_id: ID!): Fridge
//   }
// `;

// module.exports = typeDefs;


// updated with Room Model
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    bulletins: [Bulletin]
  }

  type Auth {
    token: ID
    user: User
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

  type Room {
    _id: ID
    joinCode: String
    users: [User]
  }

  type Fridge {
    _id: ID
    user: [User]
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
    rooms: [Room]
    room(_id: ID!): Room
    fridges: [Fridge]
    fridge(_id: ID!): Fridge
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    deleteUser(_id: ID!): User
    updateUser(_id: ID!, name: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addRoom(joinCode: String!): Room
    joinRoom(_id: ID!, userId: ID!): Room
    removeRoom(_id: ID!): Room


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
