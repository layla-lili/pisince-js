const interpolation = ({
    step = 0,
    start = 0,
    end = 0,
    callback = () => {},
    duration = 0,
  } = {}) => {
    const delta = (end - start) / step;
    let current = start;
    let i = 0;
  
    const timer = setInterval(() => {
      if (i < step) {
        const time = (duration / step) * (i + 1);
        callback([current, time]);
        current += delta;
        i++;
      } else {
        clearInterval(timer);
      }
    }, duration / step);
  };