const {Schema, model } = require('mongoose');

const BulletinSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
        minLength: 1,
        maxlength: 280
    },
    user: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    priority: {
        type: Boolean,
        default: false
    }
});

const Bulletin = model('Bulletin', BulletinSchema);

module.exports = Bulletin;