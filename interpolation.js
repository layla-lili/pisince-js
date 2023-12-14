const interpolation = ({step, start, end, callback ,duration})=>{
  const distance = end - start;
  const interval = duration / step;
  let currentStep = 0;

  const intervalId = setInterval(() => {
    if (currentStep >= step) {
      clearInterval(intervalId);
      return;
    }

    const x = distance * (currentStep / step);
    const y = start + x;

    callback([x, y]);

    currentStep++;
  }, interval);

  


}