const isPositive =(num)=>num>=0?true:false

const abs = (num)=> isPositive(num)?num:num=-num
console.log("🚀 ~ abs:", abs(abs(3-5)))

