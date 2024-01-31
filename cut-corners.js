function round(num) {
    const decimalPart = num - Math.floor(num);
    if (decimalPart >= 0.5) {
      return Math.ceil(num);
    } else {
      return Math.floor(num);
    }
  }
  
  function ceil(num) {
    if (num % 1 === 0) {
      return num;
    } else if (num > 0) {
      return Math.floor(num) + 1;
    } else {
      return Math.floor(num);
    }
  }
  
  function floor(num) {
    if (num % 1 === 0) {
      return num;
    } else if (num > 0) {
      return Math.floor(num);
    } else {
      return Math.ceil(num) - 1;
    }
  }
  
  function trunc(num) {
    if (num >= 0) {
      return Math.floor(num);
    } else {
      return Math.ceil(num);
    }
  }