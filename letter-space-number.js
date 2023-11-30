const letterSpaceNumber=(str)=>str.match(/\w \d(?!\w)/gi) || []

console.log("🚀 letterSpaceNumber:", letterSpaceNumber("I like 7up."))
