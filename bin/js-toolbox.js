#!/usr/bin/env node
/**
 * Small CLI dispatcher for js-toolbox.
 * Usage: node ./bin/js-toolbox.js <module> <fn> [args...]
 * Example: node ./bin/js-toolbox.js strings slugify "Hello World"
 */
import { strings, numbers, arrays, dates, async as asyncMod, fsUtils, http } from '../src/index.js';

const modules = { strings, numbers, arrays, dates, async: asyncMod, fs: fsUtils, http };

function printUsage() {
  console.log('Usage: node ./bin/js-toolbox.js <module> <fn> [args...]');
  console.log('Modules:', Object.keys(modules).join(', '));
}

function main() {
  const [, , modName, fnName, ...args] = process.argv;
  if (!modName || !fnName) {
    printUsage();
    process.exit(1);
  }
  const mod = modules[modName];
  if (!mod) {
    console.error(`Unknown module: ${modName}`);
    printUsage();
    process.exit(1);
  }
  const fn = mod[fnName];
  if (typeof fn !== 'function') {
    console.error(`Unknown function ${fnName} on module ${modName}`);
    process.exit(1);
  }
  // Try to parse JSON for convenience; otherwise use string args.
  const parsedArgs = args.map((a) => {
    try { return JSON.parse(a); } catch { return a; }
  });
  Promise.resolve(fn(...parsedArgs))
    .then((res) => {
      if (typeof res === 'object') {
        console.log(JSON.stringify(res, null, 2));
      } else {
        console.log(String(res));
      }
    })
    .catch((err) => {
      console.error(err.message || err);
      process.exit(1);
    });
}

main();
