import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs/promises';
import * as fsu from '../src/fs-utils.js';

const tmpDir = path.join(process.cwd(), '.tmp-tests');
await fsu.ensureDir(tmpDir);
const file = path.join(tmpDir, 't.json');
await fsu.writeJSON(file, { a: 1 });
const data = await fsu.readJSON(file);
assert.equal(data.a, 1);
const files = await fsu.listFiles(tmpDir);
assert.equal(files.some(f => f.endsWith('t.json')), true);

console.log('fs-utils tests ok');
