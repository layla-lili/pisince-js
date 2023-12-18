import { readdir } from 'node:fs/promises';
import { argv } from 'node:process';
var dirName= argv[2]
var c=0
try {
  const files = await readdir('./'+dirName);
  for (const file of files)
   c++
} catch (err) {
  console.error(err);
}
console.log(c);