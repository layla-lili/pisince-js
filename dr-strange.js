function addWeek(dateString) {
    const epoch = new Date("0001-01-01"); // Epoch of the new 14-day week
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const date = new Date(dateString); // Create a Date object from the dateString
    const daysSinceEpoch = Math.floor((date - epoch) / millisecondsPerDay); // Number of days since the epoch
    const daysInWeek = 7; // Number of days in a normal week
  
    const weekdayIndex = (daysSinceEpoch % (2 * daysInWeek)); // Index of the weekday in the new week
    const weekdayNames = [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"
    ];
    const weekdayName = weekdayNames[weekdayIndex]; // Get the corresponding weekday name from the array
  
    return weekdayName;
  }

  const timeTravel=({ date, hour, minute, second }) =>{
    const modifiedDate = new Date(date); // Create a new Date object based on the provided date
    modifiedDate.setHours(hour); // Set the hours of the modified date
    modifiedDate.setMinutes(minute); // Set the minutes of the modified date
    modifiedDate.setSeconds(second); // Set the seconds of the modified date
  
    return modifiedDate;
  }

console.log(addWeek('0001-01-08'))
console.log(timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }).toString())
  