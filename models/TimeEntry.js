const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TimeEntrySchema = new Schema({
  startTime: {
    type: Number,
    required: true,
  },
  stopTime: {
    type: Number,
    required: true,
  },
  dateId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const TimeEntryModel = mongoose.model("TimeEntry", TimeEntrySchema);
module.exports = TimeEntryModel;
