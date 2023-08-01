const { Schema, model } = require('mongoose');

const roomSchema = new Schema({
  joinCode: {
    type: String,
    required: true,
    unique: true,
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
});

const Room = model('Room', roomSchema);

module.exports = Room;
