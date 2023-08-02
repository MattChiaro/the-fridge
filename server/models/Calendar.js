const mongoose = require('mongoose');

const CalendarSchema = new mongoose.Schema({
  // edited model to match calendar data requirements
  title: {
    type: String,
    // required: true
  },
  start: {
    type: String,
    // required: true
  },
  end: {
    type: String,
    // required: true
  },
  description:{
    type: String,
    // required: true
  },
  // update:{
  //   type: Boolean,
  //   required: true
  // },
  // allday:{
  //   type: Boolean,
  //   required: true
  // },
  // time:{
  //   type: String,
  //   required: true
  // },
  // other fields can go here as needed

});

const Calendar = mongoose.model('Event', CalendarSchema);

module.exports = Calendar;
