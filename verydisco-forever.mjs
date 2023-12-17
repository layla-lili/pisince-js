import {writeFile} from 'fs/promises'
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



(async () => {
    try {
      await writeFile('./verydisco-forever.txt', result);
      console.log('File written successfully.');
    } catch (err) {
      console.error('Error writing to file:', err);
    }
  })();
  
  