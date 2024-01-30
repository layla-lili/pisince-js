const sign = num => num===0?0: num>0?1:-1
const sameSign = (n1, n2) => sign(n1)===sign(n2)?true:false