const slice = (strArr, sIndex, eIndex) => {
    var slicer
    typeof (strArr) === Array ? slicer = [] : slicer = ""

    if (sIndex < 0) sIndex = strArr.length + sIndex;

    if (eIndex < 0) eIndex = strArr.length + eIndex;
  
    for (let i = sIndex; i < eIndex; i++) {
        if (typeof (strArr) === Array) {
            slicer.push(strArr[i]);
        } else {
            slicer += strArr[i]
        }
    }

    return slicer;
}
console.log("🚀 ~ file: slicer.js:9 ~ slice ~ slice:", slice('abcdef', -3, -1))

