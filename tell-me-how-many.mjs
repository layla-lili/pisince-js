import { readdir } from 'fs/promises';
import { argv } from 'process';
import { resolve } from 'path';

const directoryPath = argv[2] || './';

(async () => {
  try {
    const resolvedPath = resolve(directoryPath);
    const entries = await readdir(resolvedPath);
    const numberOfEntries = entries.length;
    console.log(`Number of entries in directory '${resolvedPath}': ${numberOfEntries}`);
  } catch (err) {
    console.error('Error reading directory:', err);
  }
})();