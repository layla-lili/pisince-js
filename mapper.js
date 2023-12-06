const map = (arr,fu)=>{let r=[]; for(let i=0; i<arr.length;i++){r.push(fu(arr[i],i,arr))} return r}
const flatMap = (arr, fu)=> arr.reduce((v1,v2)=>{let r = fu(v2); return v1.concat(r)},[])
