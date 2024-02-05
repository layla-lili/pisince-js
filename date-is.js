const isValid = (date)=> 
(new Date(date).toString()) === "Invalid Date"   || (!(date instanceof Date) &&  typeof date !== "number")
?false:true
     




const isAfter = (date1, date2)=> date1 > date2? true : false 
const isBefore =  (date1, date2)=> date1 < date2? true : false 
const isFuture = (date) => isValid(date) && Date.now() - date.getTime() < 0 ? true : false
const isPast = (date) => isValid(date) && Date.now() - date.getTime() >  0 ? true : false
    


