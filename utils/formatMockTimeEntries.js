const { v4: uuid } = require("uuid");

const formatData = (data) => {
  const parsedData = data.map((entry) => {
    const { date, timeIn, timeOut } = entry;

    const toTimeArr = (timeStr) => timeStr.replace(/:/g, " ").split(" ");
    const convertHour = (arr) =>
      arr[0] >= 1 && arr[0] >= 11 && arr[2] === "PM"
        ? +arr[0] + 12
        : +arr[0] === 12 && arr[2] === "AM"
        ? arr[0] - 12
        : +arr[0];

    const startTimeArr = toTimeArr(timeIn);
    const stopTimeArr = toTimeArr(timeOut);

    const startTime = new Date(date);
    const stopTime = new Date(date);
   

    startTime.setHours(convertHour(startTimeArr));
    startTime.setMinutes(+startTimeArr[1]);

    stopTime.setHours(convertHour(stopTimeArr));
    stopTime.setMinutes(+stopTimeArr[1]);

    return {
      _id: uuid(),
      date: {
          year: new Date(date).getFullYear(),
          month: new Date(date).getMonth(),
          date: new Date(date).getDate(),
          start: startTime.getTime(),
          stop: stopTime.getTime()
      },
      startTime: startTime,
      stopTime: stopTime,
    };
  });

  return parsedData;
};

module.exports = formatData;
