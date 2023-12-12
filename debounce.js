function debounce(func, delay) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
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