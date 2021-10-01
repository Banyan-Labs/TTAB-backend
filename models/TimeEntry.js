const mongoose = require('mongoose')

const TimeEntry = new mongoose.Schema({
    dayId: {
        type: String,
        required: true,
    },
    startTime: {
        type: Number,
        required: true,
    },
    stopTime: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    }
})

const TimeEntryModel = mongoose.model('time_entry', TimeEntry);

module.exports = TimeEntryModel;