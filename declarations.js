const escapeStr="/`//\\\/\"\' "
const arr=[4,2]
const obj={
str: "Cute Js ^v^",
num: 123456,
bool: true,
undef: undefined
}
const nested={
arr: [4, undefined , '2'],
obj:{
str: "",
num:123,
bool: true
}
} 
console.log(nested.arr[1])
Object.freeze(obj,nested)