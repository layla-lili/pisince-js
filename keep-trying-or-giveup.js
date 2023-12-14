function retry(count = 3, callback = async () => {}) {
    return async function (...args) {
      try {
        const res = await callback(...args);
        return res;
      } catch (error) {
        if (count > 0) {
          return retry(count - 1, callback)(...args);
        } else {
          throw error;
        }
      }
    };
  }
  
  function timeout(delay = 0, callback = async () => {}) {
    return async function (...args) {
      const timeoutPromise = new Promise((resolve) =>
        setTimeout(() => resolve(Error('timeout')), delay)
      );
      const functionCallPromise = new Promise((resolve) =>
        resolve(callback(...args))
      );
      const result = await Promise.race([timeoutPromise, functionCallPromise]);
      if (result instanceof Error) {
        throw result;
      }
      return result;
    };
  }