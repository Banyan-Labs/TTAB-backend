const Day = require("../models/Day");
const TimeEntry = require("../models/TimeEntry");

module.exports = {
  saveNewTimeEntry: async (req, res) => {
    const { userId, startTime, stopTime, description } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "userId can not be empty" });
    } else {
      try {
        const currentDate = new Date().toLocaleDateString();
        const existingDay = await Day.findOne({
          userId: userId,
          date: currentDate,
        });
        if (!existingDay) {
          const newDay = new Day({
            date: currentDate,
            userId,
            timeEntries: [],
          });
          const newTimeEntry = new TimeEntry({
            dayId: newDay._id,
            startTime,
            stopTime,
            description,
          });
          const timeEntriesArrCopy = newDay.timeEntries;
          timeEntriesArrCopy.push(newTimeEntry);
          newDay.timeEntries = timeEntriesArrCopy;
          await newDay.save();
          await newTimeEntry.save();
        } else {
          const newTimeEntry = new TimeEntry({
            dayId: existingDay._id,
            startTime,
            stopTime,
            description,
          });
          const timeEntriesArrCopy = existingDay.timeEntries;
          timeEntriesArrCopy.push(newTimeEntry);
          existingDay.timeEntries = timeEntriesArrCopy;
          await existingDay.save();
          await newTimeEntry.save();
        }
        return res.status(200).json({ message: 'saved' })
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    }
  },
  getAllDaysByUserId: async (req, res) => {
      const { userId } = req.params;
      try {
      const userTimeData = await Day.find({ userId });
      if(userTimeData.length) {
          return res.status(200).json({ timeData: userTimeData.reverse() })
      } else {
          return res.status(200).json({ timeData: [] })
      }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
  }
};
