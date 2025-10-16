import assert from 'node:assert/strict';
import * as a from '../src/async.js';

await a.delay(5);

const q = a.simpleQueue(1);
let ran = false;
await q(async () => { ran = true; });
assert.equal(ran, true);

console.log('async tests ok');
