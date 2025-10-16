import assert from 'node:assert/strict';
import * as dates from '../src/dates.js';

const d = new Date('2020-01-01T00:00:00Z');
assert.equal(dates.isSameDay(d, new Date('2020-01-01T12:00:00Z')), true);
assert.equal(dates.isSameDay(d, new Date('2020-01-02T00:00:00Z')), false);
assert.equal(dates.parseISO('not a date'), null);

console.log('dates tests ok');
