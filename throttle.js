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
//the leading is the default classic above implmentation traling when its true and leading is false will be excuted
const opThrottle = (func, delay, options = { trailing: true, leading: true }) => {
    let timeoutId;
    let isExecuting = false;
    let isExecutedInLeading = false;
  
    return function (...args) {
      const { leading, trailing } = options;
  
      const executeFunction = () => {
        func.apply(this, args);
        isExecuting = false;
        timeoutId = null;
        isExecutedInLeading = false;
      };
  
      if (!timeoutId) {
        if (leading) {
          executeFunction();
          isExecutedInLeading = true;
        }
        if (trailing) {
          isExecuting = true;
          timeoutId = setTimeout(() => {
            if (trailing && isExecuting && !isExecutedInLeading) {
              executeFunction();
            }
          }, delay);
        }
      } else {
        isExecuting = true;
      }
    };
  };