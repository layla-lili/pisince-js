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
const opThrottle = (fn, delay, { leading = false, trailing = true } = {}) => {
    let last = 0;
    let timer = null;
    
    return function () {
        const now = +new Date();
        
        // If leading is false and this is the first invocation, update the last timestamp
        if (!last && leading === false) {
            last = now;
        }
        
        // If the time since the last invocation exceeds the delay, execute the function
        if (now - last > delay) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            fn.apply(this, arguments);
            last = now;
        } 
        // If trailing is not false and there is no timer, set a timer to execute the function after the delay
        else if (!timer && trailing !== false) {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                last = +new Date();
                timer = null;
            }, delay);
        }
    };
};