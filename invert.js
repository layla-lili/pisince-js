const invert = (obj)=>{
    let objj={}
    let keys = Object.keys(obj)
    keys.forEach(key=>{
    let val=obj[key]
    objj[val]=key
       
    })
return objj
}


console.log("🚀 ~ invert:", invert({ firstName: 'John', lastName: 'Doe', age: 32 }))
