const indexOf = (arr, arg, start) => {
    var s
    start ? s = start : s = 0

    for (let i = s; i < arr.length; i++) {
        const element = arr[i];
        if (element === arg) {
            return i
        }
    }
    return -1
}

const lastIndexOf = (arr, arg, start) => {
    var s
    var index
    start ? s = start : s = 0

    for (let i = s; i < arr.length; i++) {
        const element = arr[i];
        index = arg === element ? i : -1
    }
    return index
}
const includes = (arr, arg) => indexOf(arr, arg) != -1 ? true : false
