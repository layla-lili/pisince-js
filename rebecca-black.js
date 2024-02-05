const isFriday = (date) => new Date(date).getDay() === 5;

const isWeekend = (date) => {
    var day = new Date(date).getDay();
   return day === 0 || day === 6
}


const isLeapYear = (date) => (new Date(date).getFullYear()%4 === 0 && new Date(date).getFullYear()%100 !== 0) || new Date(date).getFullYear()% 400 === 0;

const isLastDayOfMonth = (date) =>  {
    var d = new Date(date); 
   return  new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate() === d.getDate()
}