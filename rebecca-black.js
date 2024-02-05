const isFriday = (date) => new Date(date).getDay() === 5;

const isWeekend = (date) => new Date(date).getDay() === 0 || new Date(date).getDay() === 5


const isLeapYear = (date) => (new Date(date).getFullYear()%4 === 0 && new Date(date).getFullYear()%100 !== 0) || new Date(date).getFullYear()% 400 === 0;

const isLastDayOfMonth = (date) =>  {
    var d = new Date(date); 
    new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate() === d.getDate()
}