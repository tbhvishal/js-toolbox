import  assert  from  'node:assert/strict';
import  *  as  numbers  from  '../src/numbers.js';

assert.equal(numbers.clamp(5,  1,  3),  3);
assert.equal(numbers.clamp(0,  1,  3),  1);
assert.equal(numbers.between(2,  1,  3),  true);
assert.equal(numbers.between(5,  1,  3),  false);
assert.equal(numbers.sum([1,2,3]),  6);
assert.equal(numbers.avg([2,4]),  3);
assert.equal(numbers.median([3,1,2]),  2);
assert.equal(numbers.round(3.14159,  2),  3.14);
assert.equal(numbers.percentage(25,  100),  25);
assert.equal(numbers.isEven(4),  true);
assert.equal(numbers.isOdd(5),  true);

console.log('numbers  tests  ok');

//  minor  update
//  minor  update

//  minor  update
//  minor  update
//  minor  update

//  minor  update

//  minor  update

//  minor  update
//  minor  update

//  minor  update
//  minor  update

//  minor  update
// minor update
// minor update


