# Contributing to js-toolbox

Thanks for checking this out! If you've got a useful utility or a bug fix, feel free to open a PR.

## What we're looking for

- Small, focused functions that solve common problems.
- Clear code that's easy to understand and copy.
- No dependencies—keep it lightweight.

## How to add a function

1. Add your function to the right module in `src/` (or create a new one if needed).
2. Write a quick JSDoc comment so editors can autocomplete.
3. Drop an example or two in the README under the module section.
4. Add a simple test in `tests/` using Node's built-in `assert`.
5. Run `node tests/run-tests.js` to make sure everything passes.
6. Open a PR with a short note about what you added.

## Code style

- Use camelCase for functions and variables.
- Keep it readable—straightforward is better than clever.
- Comments are fine when they add context, but the code should mostly speak for itself.
- Guard clauses and early returns make things easier to follow.

## Testing

Before you push:

```bash
node tests/run-tests.js
```

Make sure all tests pass. If you're adding a new function, add at least one test case.

## Need help?

Open an issue or leave a comment on your PR. We're friendly!
