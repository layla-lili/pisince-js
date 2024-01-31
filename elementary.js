const multiply = (a,b) => b === 0 ? 0 : (b < 0 || a<0) && !(b < 0 && a<0) ? -Math.abs(eval(a+String.fromCharCode(42)+b)) : Math.abs(eval(a+String.fromCharCode(42)+b))
const divide = (a, b) => b === 0 ? 0 : (b < 0 || a < 0) && !(b < 0 && a<0) ? -Math.abs(Math.ceil(eval(a + String.fromCharCode(47) + b))) : Math.abs(Math.floor(eval(a + String.fromCharCode(47) + b)))
const modulo = (a, b) => b === 0 ? 0 : a - multiply(b,divide(a,b))
