const escapeStr="/`//\\\/\"\' "
const arr=[4,'2']
const obj={
str: "Cute Js ^v^",
num: 123456,
bool: true,
undef: undefined
}
Object.freeze(obj,arr)
const nested={
arr: Object.freeze([4, undefined , '2']),
obj:Object.freeze({
str: "",
num:123,
bool: true
})
} 

