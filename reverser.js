const reverse = (arr) => {
    let arrr = []
    let temp = []
    temp = arr.split(" ");
    console.log("🚀 ~ reverse ~ temp:", temp)

    while (temp.length) {
        arrr.push(temp.pop())
    }

    if (typeof arr === "string") {
        arrr = arrr.toString().replaceAll(",", " ");
        console.log("🚀 ~ reverse ~ arrr:", arrr)
        return arrr
       
    } else {
        console.log("🚀 ~ reverse ~ arrr:", arrr)
        return arrr
    }
}
console.log(reverse("salut c'est cool"))
