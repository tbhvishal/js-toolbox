import assert from 'node:assert/strict';
import * as arrays from '../src/arrays.js';

assert.deepEqual(arrays.unique([1,1,2,3]), [1,2,3]);
assert.deepEqual(arrays.chunk([1,2,3,4], 2), [[1,2],[3,4]]);
assert.equal([1,2,3].includes(arrays.sample([1,2,3])), true);
assert.deepEqual(arrays.flatten([[1],[2,3]]), [1,2,3]);

console.log('arrays tests ok');
