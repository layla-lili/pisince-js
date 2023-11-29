const slice =(strArr,sIndex,eIndex)=>{
    var slicer
    typeof(strArr) === Array? slicer=[]: slicer=""
   
    const length = eIndex || strArr.length
    for (let i = sIndex; i < length; i++) {
        if (typeof(strArr) === Array){
        slicer.push(strArr[i]);
        }else{
            slicer+=strArr[i]
        }
    }
    return slicer;
}
console.log("🚀 ~ file: slicer.js:9 ~ slice ~ slice:", slice('abcdef', 2))

