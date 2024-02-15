/**
-- debounce: Grouping a sudden burst of events (like keystrokes) into a single one.
-- throttle: Guaranteeing a constant flow of executions every X milliseconds. Like checking every 200ms your scroll position to trigger a CSS animation.
-- requestAnimationFrame: a throttle alternative. When your function recalculates and renders elements on screen and you want to guarantee smooth changes or animations. Note: no IE9 support.
 */

function throttle(fn, delay) {
    let lastExecuted = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastExecuted >= delay) {
        fn(args);
        lastExecuted = now;
      }
    };
  }

//the leading is the default classic above implmentation traling when its true and leading is false will be excuted
const opThrottle = (fn, delay, { leading = false, trailing = true } = {}) => {
        let lastExecuted = 0;
        let timeoutId = null;
        let leadingExecuted = false;
      
        return function(...args) {
          const now = Date.now();
          if (!lastExecuted && !leadingExecuted && leading) {
            fn(args);
            leadingExecuted = true;
          }
      
          if (now - lastExecuted >= delay) {
            if (timeoutId){
                clearTimeout(timeoutId)
                timeoutId = null
            }

            if(trailing){
                fn(arg)
                lastExecuted = now
            }else{
                timeoutId = setTimeout(() => {
                    fn(args)
                    lastExecuted = now
                }, delay );
            }
          }
        };
}


