const reverse = (arr) => {
    let arrr = []
    let temp = []
    temp = arr.split(" ");

    while (temp.length) {
        arrr.push(temp.pop())
    }

    if (typeof arr === "string") {
        arrr = arrr.toString().replaceAll(",", " ");
        return arrr

    } else {
        return arrr
    }
}

