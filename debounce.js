function debounce(func, delay) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  function opDebounce(func, delay, leading = false) {
    let timeoutId;
    let isExecuting = false;
  
    return function (...args) {
      const executeFunction = () => {
        isExecuting = true;
        func.apply(this, args);
        isExecuting = false;
      };
  
      if (leading && !timeoutId && !isExecuting) {
        executeFunction();
      }
  
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        if (!leading || (leading && !isExecuting)) {
          executeFunction();
        }
      }, delay);
    };
  }