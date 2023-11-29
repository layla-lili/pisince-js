const slice =(strArr,sIndex,eIndex)=>{
    const newarr=[]
    const length = eIndex || strArr.length
    for (let i = sIndex; i < length; i++) {
        newarr.push(strArr[i]);
    }
    return newarr;
}

