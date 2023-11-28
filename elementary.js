const multiply = (a,b)=>{
    let result=0
    let c=0
    while(c<b){
        c++
        result=result+a
    }
    return result
}
console.log("🚀 ~ file: elementary.js:9 ~ multiply ~ multiply:", multiply(2,3))

 const divide = (a,b)=>{
    let c=0
    let def=a
    while(def>=b){
        def-=b 
        c++
    }
    return c
 }
//  function divideWithoutDivisionSign(dividend, divisor) {
//     // Calculate the reciprocal of the divisor
//     const reciprocal = 1 / divisor;
  
//     // Multiply dividend by the reciprocal
//     const quotient = dividend * reciprocal;
  
//     return quotient;
//   }
 console.log("🚀 ~ file: elementary.js:21 ~ divide ~ divide:", divide(10,5))

 const modulo = (a,b)=>{
 return a- multiply(b,divide(a,b))
 }
 console.log("🚀 ~ file: elementary.js:33 ~ modulo ~ modulo = (a,b):", modulo(10,3))


