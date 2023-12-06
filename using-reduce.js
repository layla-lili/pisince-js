
const adder = (nums, value)=>nums.reduce((num1,num2)=>num1+num2,value === undefined ? 0 : value)
const sumOrMul = (nums, value)=>nums.reduce((num1,num2)=>num2%2===0?num1*num2:num1+num2,value === undefined ? 0 : value)
const funcExec= (numsfunc)=>numsfunc.reduce(numsfunc,value === undefined ? 0 : value)