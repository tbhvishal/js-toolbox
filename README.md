#  js-toolbox

A  small,  no-deps  JavaScript  toolbox  for  everyday  tasks  —  simple,  readable,  and  copy‑paste  friendly.

-  Works  on  Node  18+  (ESM).  Many  functions  also  work  in  the  browser  (copy  the  function).
-  Clear  examples  and  JSDoc  for  each  public  function.
-  Tiny  CLI  for  quick  one-off  tasks.

##  Quick  start

-  Use  directly  in  Node:

```js
import  {  strings,  numbers  }  from  './src/index.js';

console.log(strings.slugify('Hello  World!'));  //  "hello-world"
console.log(numbers.randInt(1,  6));  //  1..6
```

-  Or  via  CLI:

```bash
node  ./bin/js-toolbox.js  strings  slugify  "Hello  World!"
```

##  Modules
-  **numbers**:  clamp,  between,  randInt,  randFloat,  sum,  avg,  median,  toCurrency,  round,  percentage,  isEven,  isOdd
-  **strings**:  capitalize,  titleCase,  kebabCase,  slugify,  truncate,  pad,  stripAnsi,  reverse,  camelCase,  snakeCase,  repeat,  escapeHtml
-  **dates**:  formatDate,  fromNow,  addDays,  isSameDay,  parseISO,  startOfDay,  endOfDay,  daysBetween
-  **arrays**:  unique,  chunk,  sample,  shuffle,  groupBy,  flatten,  compact,  first,  last,  take,  range,  partition
-  **async**:  delay,  sleep,  withTimeout,  retry,  memoizeAsync,  simpleQueue,  debounce,  throttle
-  **fs-utils**:  readJSON,  writeJSON,  ensureDir,  listFiles  (Node  only)
-  **http**:  get/post  using  fetch  with  timeout  +  retries

See  examples  in  each  file  and  tests  in  `tests/`.

##  Contributing

Want  to  add  a  utility  or  fix  a  bug?  Great!  Just  keep  things  simple  and  add  a  test  +  example.  Check  out  `CONTRIBUTING.md`  for  the  full  guide.

##  License
MIT

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
