const throttle = (func, delay)=>{
    let timeoutId
    let isThrottled
    
    return function (...args) {
     !isThrottled?(func.apply(this, args), isThrottled = Date.now()) :
      clearTimeout(timeoutId)
     timeoutId = setTimeout(()=>{
      if(Date.now() - isThrottled >= delay){
        func.apply(this, args)
        isThrottled = Date.now()
      }
    }), delay - (Date.now()-isThrottled)
    
    };
}


function opThrottle(func, delay, trailing = true, leading = true) {
    let isThrottled = false;
    let lastArgs;
    let timeoutId;
  
    const executeFunction = () => {
      func.apply(this, lastArgs);
      timeoutId = null;
      lastArgs = null;
      isThrottled = false;
    };
  
    return function (...args) {
      if (!isThrottled) {
        if (leading) {
          executeFunction();
          isThrottled = true;
        } else if (trailing) {
          lastArgs = args;
          isThrottled = true;
          timeoutId = setTimeout(executeFunction, delay);
        }
      } else if (trailing) {
        lastArgs = args;
      }
    };
  }

  
//the leading is the default classic above implmentation traling when its true and leading is false will be excuted
// const opThrottle = (func, delay, option={trailing:true, leading:true})=>{
//     let timeoutId;
//     let isExecuting;

//     return function (...args) {
//         const {leading,trailing}=option;
//         //helper function for the trailing recursivvly start the timer
//         const waitfn = () =>{
//             if(trailing && isExecuting){
//                 func.apply(this, args)
//                 isExecuting = null
//                 timeoutId = setTimeout(waitfn, delay)
//             }else{
//                 timeoutId =null
//             }
//         }
       
//       if (!timeoutId && leading){
//         func.apply(this, args)
//       }else{
//         isExecuting=args
//       }
//       if(!timeoutId){
//         timeoutId=setTimeout(waitfn, delay)
//       }
        
//       };
// }