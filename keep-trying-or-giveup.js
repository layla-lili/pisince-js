const retry = (count=3, callback)=> {
    return async function (...args) {
      let attempt = 0;
      while (attempt <= count) {
        try {
          return await callback(...args);
        } catch (error) {
          attempt++;
          if (attempt > count) {
            throw new Error('Exceeded maximum number of retries');
          }
        }
      }
    };
  }
  
  const timeout = (delay, callback)=> {
    return function (...args) {
      return Promise.race([
        callback(...args),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout')), delay)
        ),
      ]);
    };
  }