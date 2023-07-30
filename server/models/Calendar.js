const mongoose = require('mongoose');

const CalendarSchema = new mongoose.Schema({
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  update:{
    type: Boolean,
    required: true
  },
  allday:{
    type: Boolean,
    required: true
  },
  time:{
    type: String,
    required: true
  },
  // other fields can go here as needed

});

const Calendar = mongoose.model('Event', CalendarSchema);

module.exports = Calendar;
