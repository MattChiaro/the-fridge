const {Schema, model } = require('mongoose');
const moment = require('moment');

// const BulletinSchema = new Schema({
//     title: {
//         type: String,
//         // required: true
//     },
//     body: {
//         type: String,
//         required: true,
//         minLength: 1,
//         maxlength: 280
//     },
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//         get: (timestamp) => moment(timestamp).format('YYYY-MM-DD HH:mm:ss'),
//     },
//     priority: {
//         type: Boolean,
//         default: false
//     }
// });

// const Bulletin = model('Bulletin', BulletinSchema);

// module.exports = Bulletin;

const bulletinSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    priority: {   
        type: String,   
        required: false,  
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Bulletin = model('Bulletin', bulletinSchema);

module.exports = Bulletin;
