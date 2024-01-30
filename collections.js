const arrToSet = (arr)=> new Set(arr)
const arrToStr = (arr)=> arr.toString().replaceAll(",", "");
const setToArr = (set)=>[...set]
const setToStr = (set)=>arrToStr([...set])
const strToArr = (str)=> str.split('')
const strToSet = (str)=>new Set(strToArr(str))
const mapToObj = (map)=>Object.fromEntries(map)
const objToArr = (obj)=>Object.values(obj)
const objToMap = (obj)=>new map(objToArr(obj))
const arrToObj = (arr)=>Object.assign({}, arr)
const strToObj = (str)=> Object.assign({}, str.split(""))


const superTypeOf= (value)=> {
    if (Array.isArray(value)) {
        return "Array";
    } else if (value instanceof Set) {
        return "Set";
    } else if (value instanceof Map) {
        return "Map";
    } else if (value === null) {
        return "null";
    } else if (typeof value === "object") {
        return "Object";
    } else if (typeof value === "string") {
        return "String";
    } else if (typeof value === "number") {
        return "Number";
    } else if (typeof value === "boolean") {
        return "Boolean";
    } else if (typeof value === "undefined") {
        return "undefined";
    } else if (typeof value === "function") {
        return "Function";
    }
}


