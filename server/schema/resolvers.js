// const User = require('../models/User');
// const Bulletin = require('../models/Bulletin');
// const Fridge = require('../models/Fridge');
// const Event = require('../models/Calendar');
// const { signToken } = require('../middleware/auth');

// const resolvers = {
//     Query: {
//         users: async () => {
//             return await User.find({});
//         },
//         user: async (_, { _id }) => {
//             return await User.findById(_id);
//         },
//         bulletins: async () => {
//             return await Bulletin.find({});
//         },
//         bulletin: async (_, { _id }) => {
//             return await Bulletin.findById(_id);
//         },
//         events: async () => {
//             return await Event.find({});
//         },
//         event: async (_, { _id }) => {
//             return await Event.findById(_id);
//         },
//         fridges: async () => {
//             return await Fridge.find({}).populate('user bulletins calendar');
//         },
//         fridge: async (_, { _id }) => {
//             return await Fridge.findById(_id).populate('user bulletins calendar');
//         },
//     },

//     Mutation: {
//         addUser: async (_, { name, email, password, fridgeId }) => {
//             if (!fridgeId) {
//                 throw new Error('You need a fridge ID!');
//             }
//             return await User.create({ name, email, password, fridgeId })
//         },
//         deleteUser: async (_, { _id }) => {
//             return await User.findByIdAndDelete(_id);
//         },
//         updateUser: async (_, { _id, name, email, password }) => {
//             return await User.findByIdAndUpdate(_id, { name, email, password }, { new: true });
//         },

//         login: async (_, { email, password }) => {
//             const user = await User.findOne({ email });
//             if (!user) {
//                 throw new Error('Incorrect email or password');
//             }
//             const correctPw = await user.isValidPassword(password);
//             if (!correctPw) {
//                 throw new Error('Incorrect email or password');
//             }
//             const token = signToken(user);
//             return { token, user };
//         },

//         addBulletin: async (_, { title, body, user, priority }) => {
//             return await Bulletin.create({ title, body, user, priority });
//         },
//         editBulletin: async (_, { _id, title, body, user, priority }) => {
//             return await Bulletin.findByIdAndUpdate(_id, { title, body, user, priority }, { new: true });
//         },
//         removeBulletin: async (_, { _id }) => {
//             return await Bulletin.findByIdAndDelete(_id);
//         },

//         addEvent: async (_, { start, end, title, update, allday, time }) => {
//             return await Event.create({ start, end, title, update, allday, time });
//         },
//         editEvent: async (_, { _id, start, end, title, update, allday, time }) => {
//             return await Event.findByIdAndUpdate(_id, { start, end, title, update, allday, time }, { new: true });
//         },
//         removeEvent: async (_, { _id }) => {
//             return await Event.findByIdAndDelete(_id);
//         },

//         addFridge: async (_, { user }) => {
//             return await Fridge.create({ user });
//         },
//         removeFridge: async (_, { _id }) => {
//             return await Fridge.findByIdAndDelete(_id);
//         },
//         joinRoom: async (_, { joinCode }, context) => {
//             const userId = checkAuth(context); // Ensure user is authenticated
//             const room = await Room.findOne({ joinCode });
//             if (!room) {
//                 throw new Error('Room not found');
//             }
//             if (!room.users.includes(userId)) {
//                 room.users.push(userId);
//                 await room.save();
//             }
//             return room;
//         }
//     },
// };

// module.exports = resolvers;



//update with joinRoom
const User = require('../models/User');
const Bulletin = require('../models/Bulletin');
const Fridge = require('../models/Fridge');
const Event = require('../models/Calendar');
const Room = require('../models/Room'); // Make sure you've defined this model
const { signToken, checkAuth } = require('../middleware/auth'); // Ensure to define checkAuth function

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('bulletins');
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
        events: async () => {
            return await Event.find({});
        },
        event: async (_, { _id }) => {
            return await Event.findById(_id);
        },
        fridges: async () => {
            return await Fridge.find({}).populate('user bulletins calendar');
        },
        fridge: async (_, { _id }) => {
            return await Fridge.findById(_id).populate('user bulletins calendar');
        },
    },

    Mutation: {
        addUser: async (_, { name, email, password, fridgeId }) => {
            if (!fridgeId) {
                throw new Error('You need a fridge ID!');
            }
            return await User.create({ name, email, password, fridgeId })
        },
        deleteUser: async (_, { _id }) => {
            return await User.findByIdAndDelete(_id);
        },
        updateUser: async (_, { _id, name, email, password }) => {
            return await User.findByIdAndUpdate(_id, { name, email, password }, { new: true });
        },

        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('Incorrect email or password');
            }
            const correctPw = await user.isValidPassword(password);
            if (!correctPw) {
                throw new Error('Incorrect email or password');
            }
            const token = signToken(user);
            return { token, user };
        },

        addBulletin: async (_, { title, body, user }) => {
            const newBulletin = (await Bulletin.create({ title, body, user })).populate('user');

            const updatedUser = await User.findByIdAndUpdate(user, { $push: { bulletins: newBulletin._id } }, { new: true })
            ;
            return newBulletin;
        },

        editBulletin: async (_, { _id, title, body, user }) => {
            return await Bulletin.findByIdAndUpdate(_id, { title, body, user }, { new: true });
        },
        removeBulletin: async (_, { _id }) => {
            return await Bulletin.findByIdAndDelete(_id);
        },

        addEvent: async (_, { start, end, title, update, allday, time }) => {
            return await Event.create({ start, end, title, update, allday, time });
        },
        editEvent: async (_, { _id, start, end, title, update, allday, time }) => {
            return await Event.findByIdAndUpdate(_id, { start, end, title, update, allday, time }, { new: true });
        },
        removeEvent: async (_, { _id }) => {
            return await Event.findByIdAndDelete(_id);
        },

        addFridge: async (_, { user }) => {
            return await Fridge.create({ user });
        },
        removeFridge: async (_, { _id }) => {
            return await Fridge.findByIdAndDelete(_id);
        },
        
        joinRoom: async (_, { joinCode }, context) => {
            const userId = checkAuth(context); // Ensure user is authenticated
            const room = await Room.findOne({ joinCode });
            if (!room) {
                throw new Error('Room not found');
            }
            if (!room.users.includes(userId)) {
                room.users.push(userId);
                await room.save();
            }
            return room;
        },
        
        // this is new
        addNotes: async (_, { bulletin, urgent, calendar, body }, context) => {
            console.log(context.user, bulletin, body)
            if(bulletin){

            }
            if(urgent){

            }
            if(calendar){
                
            }
        }

    },
};

module.exports = resolvers;


