const pick=(ob,...str)=>{
    const obj2 = {}
    let keysObj = Object.keys(ob)
    keysObj.forEach(key => {
        if (key == str) {
            obj2[key] = ob[key]
        }
    })
    return obj2
}


const omit=(ob,...str)=>{
    const obj2 = {}
    let keysObj = Object.keys(ob)
    keysObj.forEach(key => {
        if (key != str) {
            obj2[key] = ob[key]
        }
    })
    return obj2

}