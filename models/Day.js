const mongoose = require('mongoose')
const TimeEntry = require('./TimeEntry')

const Day = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    timeEntries: {
        type: Array
    }
})

const DayModel = mongoose.model('day', Day);

module.exports = DayModel;