const {Schema, model } = require('mongoose');
const moment = require('moment');

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
