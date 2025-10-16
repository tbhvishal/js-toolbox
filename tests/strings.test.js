import assert from 'node:assert/strict';
import * as strings from '../src/strings.js';

assert.equal(strings.capitalize('hey'), 'Hey');
assert.equal(strings.kebabCase('HelloWorld'), 'hello-world');
assert.equal(strings.slugify('Café Déjà Vu'), 'cafe-deja-vu');
assert.equal(strings.truncate('hello', 3), 'hel…');
assert.equal(strings.pad('a', 3, '.'), 'a..');

console.log('strings tests ok');
