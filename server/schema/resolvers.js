// const User = require('../models/User'); // User model may need to be updated
// const Bulletin = require('../models/Bulletin'); 
// const resolvers = {
//   Query : {
//     users: async () => {
//       return await User.find({});
//     },
//     user: async (_, { _id }) => {
//       return await User.findById(_id);
//     },
//   },

//   Query : {
//     bulletins: async () => {
//       return await Bulletin.find({});
//     },
//     bulletin: async (_, { _id }) => {
//       return await Bulletin.findById(_id);
//     },
//   },
  
//   Mutation: {
//     addUser: async (_, { name, email, password }) => {
//       return await User.create({ name, email, password });
//     },
//     deleteUser: async (_, { _id }) => {
//       return await User.findByIdAndDelete(_id);
//     },
//     updateUser: async (_, { _id, name, email, password }) => {
//       return await User.findByIdAndUpdate(_id, { name, email, password }, { new: true });
//     },
//   },
// };

// module.exports = resolvers;

// UPDATED CODE
const User = require('../models/User');
const Bulletin = require('../models/Bulletin');

const resolvers = {
  Query : {
    users: async () => {
      return await User.find({});
    },
    user: async (_, { _id }) => {
      return await User.findById(_id);
    },
    bulletins: async () => {
      return await Bulletin.find({});
    },
    bulletin: async (_, { _id }) => {
      return await Bulletin.findById(_id);
    },
  },

  Mutation: {
    addUser: async (_, { name, email, password }) => {
      return await User.create({ name, email, password });
    },
    deleteUser: async (_, { _id }) => {
      return await User.findByIdAndDelete(_id);
    },
    updateUser: async (_, { _id, name, email, password }) => {
      return await User.findByIdAndUpdate(_id, { name, email, password }, { new: true });
    },

    addBulletin: async (_, { title, body, user, priority }) => {
      return await Bulletin.create({ title, body, user, priority });
    },
    editBulletin: async (_, { _id, title, body, user, priority }) => {
      return await Bulletin.findByIdAndUpdate(_id, { title, body, user, priority }, { new: true });
    },
    removeBulletin: async (_, { _id }) => {
      return await Bulletin.findByIdAndDelete(_id);
    },
  },
};

module.exports = resolvers;
