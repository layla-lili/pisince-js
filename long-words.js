const longWords=(strarr)=>strarr.every((ar)=>typeof ar === "string" && ar.length >=5)

const oneLongWord=(strarr)=>strarr.some((ar)=>typeof ar === "string" && ar.length >=10)

const noLongWords=(strarr)=>!(strarr.some((ar)=>typeof ar === "string" && ar.length >=7))

