const pick = (obj, str)=>{
    let newObj={}
    Object.keys(obj).forEach(key => {
    if (Array.isArray(str)){
    str.forEach(st=>{
        if (key === st){
            newObj[key]=obj[key]
        }
    })
} else if (typeof str == "string"){
    Object.keys(obj).forEach(key => {
        str.split(',').forEach(st => {
          if (key === st.trim()) {
            newObj[key] = obj[key];
          }
        });
      });    
}
    })
    return newObj
}

const omit = (obj, str)=>{
    let omitted={}
for (let key in obj) {
    if (obj.hasOwnProperty(key) === false) continue;
    let regexp = new RegExp(`^${key}$`);
    if (typeof str === "string") {
        if (!str.match(regexp)) {
            omitted[key] = obj[key];
        }
    } else {
        if (!str.includes(key)) {
            omitted[key] = obj[key];
        }
    }
}
return omitted;
}

console.log("🚀 ~ omit ~ omit:", omit({name:"jjj", country:"chcha",age:123},['name' , 'age']))
