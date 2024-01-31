const reverse = (arr) => {
    let arrr = []
    let temp = []
    if (typeof arr === "string") {
        if (arr.includes(" ")){
    temp = arr.split(" ");
        }else{
            temp = arr.split("");
        }
    }else{
        temp=arr
    }
    while (temp.length) {
        arrr.push(temp.pop())
    }

    if (typeof arr === "string") {
        if (arr.includes(" ")){
        arrr = arrr.toString().replaceAll(",", " ");
        }else{
            arrr = arrr.toString().replaceAll(",", "");
        }
        return arrr

    } else {
        return arrr
    }
}
console.log("🚀 ~ reverse ~ reverse:", reverse([1,2,3]))

