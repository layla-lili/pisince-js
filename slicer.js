const slice =(strArr,sIndex,eIndex)=>{
    const newarr=[]
    const length = Math.min(eIndex, strArr.length);
    for (let i = sIndex; i < length; i++) {
        newarr.push(strArr[i]);
    }
    return newarr;

}
console.log("🚀 ~ file: slicer.js:2 ~ slice:", slice([1,2,3,4,5],2,4))
