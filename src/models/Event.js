const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  title: String,
  allDay: Boolean,
  start: String,
  end: String
})

const Event = mongoose.model('Event', EventSchema)

module.exports = Event
