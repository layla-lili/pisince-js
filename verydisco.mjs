// const arg =process.argv[2]

// const first = arg.split('').slice(0,Math.ceil(arg.length/2))
// const second = arg.split('').slice(arg.length-(Math.ceil(
//     arg.length/2)))
// const reJoin = second.concat(first)
// const reJoinString =reJoin.join(' ')
//     console.log(reJoinString)
const input = process.argv[2];

function makeDiscoWord(word) {
  const length = Math.ceil(word.length / 2);
  const firstPart = word.slice(0, length);
  const secondPart = word.slice(length);
  return secondPart + firstPart;
}

function makeDiscoSentence(sentence) {
  const words = sentence.split(' ');
  const discoWords = words.map((word) => makeDiscoWord(word));
  return discoWords.join(' ');
}

let result;
if (input.includes(' ')) {
  result = makeDiscoSentence(input);
} else {
  result = makeDiscoWord(input);
}

console.log(result);
