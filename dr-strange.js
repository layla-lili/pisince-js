function addWeek(date) {
    const secondWeek = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday",
        7: "secondMonday",
        8: "secondTuesday",
        9: "secondWednesday",
        10: "secondThursday",
        11: "secondFriday",
        12: "secondSaturday",
        13: "secondSunday",
    };
    let zTime = date.getTime() + 62135596800000;
    //WeekDay(t) = (Day(t) + 4) modulo 7
    return secondWeek[(zTime / 86400000) % 14]; //86400000 is a whole day in miliscond in ECMAScript in UTC time and leap second are ignored
}

function timeTravel(date) {
    return new Date(date.date.setHours(date.hour, date.minute, date.second));
}