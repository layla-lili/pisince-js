const slice = (strArr, sIndex, eIndex) => {
    var slicer
    if (eIndex === undefined) {
        eIndex = strArr.length;
    }

    if (typeof strArr === "object") {
        slicer = []; // Initialize slicer as an empty array
    } else {
        slicer = ""; // Initialize slicer as an empty string
    }
     
    if (sIndex < 0) sIndex = strArr.length + sIndex;

    if (eIndex < 0) eIndex = strArr.length + eIndex;
    
    for (let i = sIndex; i < eIndex; i++) {
        if (typeof strArr === "object") {
            
            slicer.push(strArr[i]);
        } else {
            slicer += strArr[i]
        }
    }

    return slicer;
}
console.log("🚀 ~ file: slicer.js:9 ~ slice ~ slice:", slice([1, 2, 3, 4, 5, 6], 2), [3, 4, 5, 6])

