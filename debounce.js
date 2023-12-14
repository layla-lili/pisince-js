function debounce(func, delay) {
    let timeoutId;
  
     (...args)=> {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  function opDebounce(func, delay, leading = false) {
    let timeoutId;
  
    (...args)=> {
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
  