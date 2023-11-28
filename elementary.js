const multiply = (a,b)=>{
    let result=0
    let c=0
    while(c<b){
        c++
        result=result+a
    }
    return result
}


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


 const modulo = (a,b)=>{
 return a- multiply(b,divide(a,b))
 }



