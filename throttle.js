/**
-- debounce: Grouping a sudden burst of events (like keystrokes) into a single one.
-- throttle: Guaranteeing a constant flow of executions every X milliseconds. Like checking every 200ms your scroll position to trigger a CSS animation.
-- requestAnimationFrame: a throttle alternative. When your function recalculates and renders elements on screen and you want to guarantee smooth changes or animations. Note: no IE9 support.
 */

function throttle(cb, delay) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
  
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
  
      cb(...args)
      shouldWait = true
  
      setTimeout(timeoutFunc, delay)
    }
  }
  

//the leading is the default classic above implmentation traling when its true and leading is false will be excuted
const opThrottle = (cb, delay, { leading = false, trailing = true } = {}) => {
    let last = 0;
    let timer = null;
    
     ()=> {
        const now = + new Date();
        
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
            cb.apply(this, arguments);
            last = now;
        } 
        // If trailing is not false and there is no timer, set a timer to execute the function after the delay
        else if (!timer && trailing !== false) {
            timer = setTimeout(() => {
                cb.apply(this, arguments);
                last = +new Date();
                timer = null;
            }, delay);
        }
    };
};