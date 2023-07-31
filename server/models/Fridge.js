const {Schema, model} = require('mongoose');
const User = require('./User');
const Bulletin = require('./Bulletin');
const Calendar = require('./Calendar');

const FridgeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bulletins: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Bulletin'
        }
    ],
    calendar: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event' 
        }
    ]
});

const Fridge = model('Fridge', FridgeSchema);

module.exports = Fridge;
