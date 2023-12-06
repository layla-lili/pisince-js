
const adder = (nums, value)=>nums.reduce((num1,num2)=>num1+num2,value === undefined ? 0 : value)
const sumOrMul = (nums, value)=>nums.reduce((num1,num2)=>num2%2===0?num1*num2:num1+num2,value === undefined ? 0 : value)
const funcExec= (numsfunc,value)=>numsfunc.reduce((elem,fu)=>typeof fu==="function"?fu(elem,value):elem ,value === undefined ? 0 : value)