const map = (arr,fu)=>{for(let i=0; i<arr.length;i++){fu(arr)}}
const flatMap = (arr, fu)=>{for(let i=0; i<arr.length; i++){fu(...arr)}}