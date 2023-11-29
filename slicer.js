const slice =(strArr,sIndex,eIndex)=>{
    var slicer
    typeof(strArr) === Array? slicer=[]: slicer=""
    
    var length = eIndex || strArr.length
    sIndex<0?sIndex=(length+sIndex):sIndex
    if(eIndex<0) length=-1*(length+eIndex)
    console.log("🚀 ~ file: slicer.js:8 ~ slice ~ length:", length)
    for (let i = sIndex; i < length; i++) {
        if (typeof(strArr) === Array){
        slicer.push(strArr[i]);
        }else{
            slicer+=strArr[i]
        }
    }
    
    return slicer;
}
console.log("🚀 ~ file: slicer.js:9 ~ slice ~ slice:", slice('abcdef', 0, -2))

