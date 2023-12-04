function sunnySunday(date) {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const epoch = new Date(1, 0, 1);  // Epoch is 01/01/0001
    const daysDiff = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
    const weekdayIndex = (daysDiff % 7 + 1) % 6;  // Modulo 6 to account for the eliminated Sunday
    return weekdays[weekdayIndex];
  }