import  assert  from  'node:assert/strict';
import  *  as  arrays  from  '../src/arrays.js';

assert.deepEqual(arrays.unique([1,1,2,3]),  [1,2,3]);
assert.deepEqual(arrays.chunk([1,2,3,4],  2),  [[1,2],[3,4]]);
assert.equal([1,2,3].includes(arrays.sample([1,2,3])),  true);
assert.deepEqual(arrays.flatten([[1],[2,3]]),  [1,2,3]);
assert.deepEqual(arrays.compact([0,  1,  false,  2,  '',  3]),  [1,  2,  3]);
assert.equal(arrays.first([1,  2,  3]),  1);
assert.equal(arrays.last([1,  2,  3]),  3);
assert.deepEqual(arrays.take([1,  2,  3],  2),  [1,  2]);
assert.deepEqual(arrays.range(5),  [0,  1,  2,  3,  4]);
assert.deepEqual(arrays.partition([1,  2,  3,  4],  x  =>  x  %  2  ===  0),  [[2,  4],  [1,  3]]);

console.log('arrays  tests  ok');

//  minor  update
//  minor  update

// minor update
