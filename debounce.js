function debounce(func, delay) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  function opDebounce(func, delay, leading = true) {
    let timeoutId;
  
    return function (...args) {
      if (leading && !timeoutId) {
        func.apply(this, args);
      }
  
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        if (!leading) {
          func.apply(this, args);
        }
      }, delay);
    };
  }
  