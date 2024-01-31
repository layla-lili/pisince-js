const indexOf = (arr, arg, start) => {
    for (let i = start || 0 ; i < arr.length; i++) {
        if (String(arr[i]) === String(arg)) {
            return i
        }
    }
    return -1
}

const lastIndexOf = (arr, arg, start) => {
    var s
    var index
    start ? s = start : s = 0

    for (let i = start || arr.length-1; i >=0; i--) {
        let element = arr[i];
        if (String(element) === String(arg)) {
            return i
        }
    }
    return -1
}

const includes = (arr, arg) => indexOf(arr, arg) != -1 ? true : false

