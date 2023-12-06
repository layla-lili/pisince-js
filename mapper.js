const map = (arr,fu)=>{let r=[]; for(let i=0; i<arr.length;i++){r.push(fu(arr[i],i,arr))} return r}

const flatMap = (arr, fu)=> arr.reduce((v1,v2,i,arrr)=>{let r = fu(v2,i,arrr);  Array.isArray(r)?v1.push(...r):v1.push(r); return v1},[])


// const numbers = [10, -10, 20, -95, 86, 102, 35, 89, 110]
//   const mixed = [[10], -10, 20, -95, 86, [102], [35, 89], 110]
//   const nested = [[5], [4], [-3], [20], [17], [-33], [-4], [18]]
//   const sentences = [
//     ['Colombia', 'Mexico', 'El Salvador', 'Spanish speaking countries'],
//     ['Perou', 'Brazil', 'Argentina', 'Venezuela', 'countries in South America'],
//     ['France', 'Portugal', 'Italy', 'members of the EU'],
//   ]
//   const add1 = (el) => el + 1
//   const sub3 = (el) => el - 3
//   const mult2 = (el) => el * 2
//   const doAll = (el) => sub3(mult2(add1(el)))
//   const posValsIndex = (el, i) => (el >= 0 ? `${i}: ${el}` : undefined)
//   const indexValsArray = (el, i, arr) =>
//     `${el} is at index: ${i} out of ${arr.length - 1}`
//   const arrayFormatSentence = (item, index, arr) => {
//     if (index === arr.length - 2) return `and ${arr[arr.length - 2]} `
//     if (index === arr.length - 1) {
//       return `are ${String(arr.length - 1)} ${item}.`
//     }
//     return `${item}, `
//   }
  
// console.log("🚀 ~ file: mapper.js:3 ~ flatMap:", flatMap(nested,add1))