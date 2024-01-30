const isPositive =(num)=>num>0?true:false
console.log("🚀 ~ isPositive:", !isPositive(-787823))

const abs = (num)=> num===0?0:isPositive(num)?num:num=-num
console.log("🚀 ~ abs:", abs(132))


