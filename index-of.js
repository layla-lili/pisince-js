const indexOf = (arr, arg, start) => {
 

    for (let i = start || 0 ; i < arr.length; i++) {
        const element = arr[i];
        if (String(element) === String(arg)) {
            return i
        }
    }
    return -1
}

const lastIndexOf = (arr, arg, start) => {
    var s
    var index
    start ? s = start : s = 0

    for (let i = start || arr.length-1; i > 0; i--) {
        const element = arr[i];
        if (String(element) === String(arg)) {
            return i
        }
    }
    return -1
}


const includes = (arr, arg) => indexOf(arr, arg) != -1 ? true : false
// const bigArray = [...Array(999).keys(), ...Array(999).keys()]
// let array=[1, 'r', 3, 4, 't', 4, 't', 2, 1]
// console.log("🚀 ~ file: index-of.js:25 ~ lastIndexOf ~ lastIndexOf:", lastIndexOf(bigArray, ctx.rn))


