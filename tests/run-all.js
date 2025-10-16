// Tiny test runner to keep things simple and dependency-free.
// It loads every *.test.js in this folder and reports failures.
import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

let failed = 0;
for (const file of await fs.readdir(__dirname)) {
  if (!file.endsWith('.test.js')) continue;
  const p = path.join(__dirname, file);
  try {
    await import(url.pathToFileURL(p));
    console.log(`ok - ${file}`);
  } catch (e) {
    failed++;
    console.error(`fail - ${file}`);
    console.error(e);
  }
}

if (failed) {
  console.error(`\n${failed} test file(s) failed`);
  process.exit(1);
} else {
  console.log('\nAll tests passed');
}
