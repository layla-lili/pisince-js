const reverse = (arr) => {
    let arrr = []
    let temp = []
    if (typeof arr === "string") {
    temp = arr.split(" ");
    }else{
        temp=arr
    }
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
console.log("🚀 ~ reverse ~ reverse:", reverse([1,2,3]))

