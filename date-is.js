const isValid = (date)=>  !(date instanceof Date) || isNaN(date.getTime())?false:true

const isAfter = (date1, date2)=> date1 > date2? true : false 

const isBefore =  (date1, date2)=> date1 < date2? true : false 
const isFuture = (date) => isValid(date) && Date.now() - date.getTime() < 0 ? true : false
const isPast = (date) => isValid(date) && Date.now() - date.getTime() >  0 ? true : false
    


