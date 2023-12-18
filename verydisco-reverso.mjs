import { readFile } from 'fs/promises';


const fileName = argv[2];

function reverseDiscoWord(word) {
  const length = Math.ceil(word.length / 2);
  const firstPart = word.slice(0, length);
  const secondPart = word.slice(length);
  return secondPart + firstPart;
}

(async () => {
  try {
    const fileContent = await readFile(fileName, 'utf-8');
    const words = fileContent.trim().split(' ');
    const reversedWords = words.map((word) => reverseDiscoWord(word));
    const reversedSentence = reversedWords.join(' ');
    console.log(reversedSentence);
  } catch (err) {
    console.error('Error reading file:', err);
  }
})();