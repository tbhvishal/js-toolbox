import  assert  from  'node:assert/strict';
import  *  as  strings  from  '../src/strings.js';

assert.equal(strings.capitalize('hey'),  'Hey');
assert.equal(strings.kebabCase('HelloWorld'),  'hello-world');
assert.equal(strings.slugify('Café  Déjà  Vu'),  'cafe-deja-vu');
assert.equal(strings.truncate('hello',  3),  'hel…');
assert.equal(strings.pad('a',  3,  '.'),  'a..');
assert.equal(strings.reverse('abc'),  'cba');
assert.equal(strings.camelCase('hello-world'),  'helloWorld');
assert.equal(strings.snakeCase('HelloWorld'),  'hello_world');
assert.equal(strings.repeat('x',  3),  'xxx');
assert.equal(strings.escapeHtml('<div>'),  '&lt;div&gt;');

console.log('strings  tests  ok');



//  minor  update

//  minor  update
// minor update
