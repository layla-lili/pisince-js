const pick = (str, obj)=>{
    let newObj={}
    Object.keys(obj).forEach(key => {
    str.forEach(st=>{
        if (key === st){
       
            newObj[key]=obj[key]
        }
    })
    });
    return newObj
}
