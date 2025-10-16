import assert from 'node:assert/strict';
import * as http from '../src/http.js';

// Smoke test: ensure functions exist (avoid network in CI/locally by default)
assert.equal(typeof http.get, 'function');
assert.equal(typeof http.post, 'function');

console.log('http tests ok');
