const map = (arr,fu, val)=>{for(let i=0; i<arr.length;i++){fu(arr[i],i,arr)}}
const flatMap = (arr, fu, val)=>{for(let i=0; i<arr.length; i++){fu(...arr[i],i,arr)}}