const multiply = (a,b) => b === 0 ? 0 : (b < 0 || a<0) && !(b < 0 && a<0) ? -Math.abs(eval(a+String.fromCharCode(42)+b)) : Math.abs(eval(a+String.fromCharCode(42)+b))
const divide = (a, b) => b === 0 ? 0 : (b < 0 || a < 0) && !(b < 0 && a<0) ? -Math.abs(Math.ceil(eval(a + String.fromCharCode(47) + b))) : Math.abs(Math.floor(eval(a + String.fromCharCode(47) + b)))
const modulo = (a, b) => b === 0 ? 0 : a - multiply(b,divide(a,b))



//{
    // let result=0
    // let c=0
    // while(c<b){
    //     c++
    //     result=result+a
    // }
    // return result
//}




//  {
//     let c=0
//     let def=a
//     while(def>=b){
//         def-=b 
//         c++
//     }
//     return c
//  }
//  function divideWithoutDivisionSign(dividend, divisor) {
//     // Calculate the reciprocal of the divisor
//     const reciprocal = 1 / divisor;
  
//     // Multiply dividend by the reciprocal
//     const quotient = dividend * reciprocal;
  
//     return quotient;
//   }



//  {
//  return a - multiply(b,divide(a,b))
//  }



