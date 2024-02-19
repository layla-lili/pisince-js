const args = process.argv.slice(2)
let result=[]

const flip = (word)=>{
const length = word.length;
  
  // Check if the word has an odd number of characters
  const isOddLength = length % 2 !== 0;
  
  // Calculate the midpoint of the word
  const midpoint = Math.floor(length / 2);
  
  // Split the word into two parts
  const firstHalf = word.slice(0, midpoint + (isOddLength ? 1 : 0));
  console.log("🚀 ~ flip ~ firstHalf:", firstHalf)
  const secondHalf = word.slice(midpoint + (isOddLength ? 1 : 0));
  console.log("🚀 ~ flip ~ secondHalf:", secondHalf)
  
  // Flip the parts and concatenate them
  const flippedWord = secondHalf + firstHalf;
  console.log("🚀 ~ flip ~ flippedWord:", flippedWord)
  return flippedWord
}

for (let i=0; i<args.length; i++){
if (args.join(' ').includes(' ')){

}else{
    result.push(flip(args[i]))
}

}
console.log(result.join(' '))