const mongoose = require('mongoose');

const CalendarSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  start: {
    type: String,
  },
  end: {
    type: String,
  },
  description:{
    type: String,
  },

});

const Calendar = mongoose.model('Event', CalendarSchema);

module.exports = Calendar;
