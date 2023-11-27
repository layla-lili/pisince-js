function sign(n){
    if (n>0) return 1
    if (n<0) return -1
    if (n===0) return 0
}
const sameSign=(x,y)=>sign(x)===sign(y)

console.log(sameSign(-1,-2))