const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let DateSchema = new Schema({
  month: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  timeEntries: {
    type: [],
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
});

const DateModel = mongoose.model("Date", DateSchema);
module.exports = DateModel;
