
let arr1 = ['fill', 'carbon', 'chart', 'glare', 'express']
let arr2 = ['double', 'afford', 'coalition', 'reaction', 'persist']
let arr3 = ['leak', 'talk', 'bite', 'slip', 'free']
let arr4 = ['fixture', 'opponent', 'coincide', 'residential', 'relaxation']

const longWords=(strarr)=>strarr.every((ar)=>typeof ar === "string" && ar.length >=5)
console.log("🚀 ~ file: long-words.js:8 ~ longWords:", longWords(arr2))

const oneLongWord=(strarr)=>strarr.some((ar)=>typeof ar === "string" && ar.length >=10)
console.log("🚀 ~ file: long-words.js:11 ~ oneLongWord:", oneLongWord(arr4))

const noLongWords=(strarr)=>!(strarr.every((ar)=>typeof ar === "string" && ar.length >=5))
console.log("🚀 ~ file: long-words.js:14 ~ noLongWords:", noLongWords(arr3))
