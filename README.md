#  js-toolbox  ⚡

![Node Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Zero Dependencies](https://img.shields.io/badge/dependencies-0-success)
![GitHub Stars](https://img.shields.io/github/stars/tbhvishal/js-toolbox?style=social)
![GitHub Issues](https://img.shields.io/github/issues/tbhvishal/js-toolbox)
![Commits](https://img.shields.io/github/commit-activity/m/tbhvishal/js-toolbox)

>  A  small,  zero-dependency  JavaScript  toolbox  for  everyday  tasks  -  simple,  readable,  and  copy-paste  friendly.  ✨

##  ✨  Features

-  🚀  **Zero  dependencies**  -  lightweight  and  fast
-  📦  **40+  utilities**  -  covering  strings,  numbers,  arrays,  dates,  async,  and  more
-  🌐  **Works  everywhere**  -  Node  18+  (ESM)  and  browser-friendly
-  📝  **JSDoc  comments**  -  full  autocomplete  support
-  🔧  **Built-in  CLI**  -  use  utilities  from  the  command  line
-  ✅  **Well-tested**  -  comprehensive  test  suite  included

## 🤔  Why Another Utility Library?

Unlike bloated alternatives:
- **Lodash** = 72KB minified, 500+ functions you'll never use
- **js-toolbox** = <5KB total, only what you need

Perfect for:
- ✅ Quick scripts and prototypes
- ✅ Learning JavaScript patterns
- ✅ Projects that need to stay lean
- ✅ Copy-pasting one function without installing a library

##  📦  Installation

```bash
# Clone the repo
git  clone  https://github.com/tbhvishal/js-toolbox.git

# Or copy individual functions directly into your project
```

##  🚀  Quick  Start

-  **Use  in  Node.js:**

```js
import  {  strings,  numbers  }  from  './src/index.js';

console.log(strings.slugify('Hello  World!'));  //  →  "hello-world"
console.log(numbers.randInt(1,  6));            //  →  random  number  1-6
console.log(numbers.toCurrency(1234.56));       //  →  "$1,234.56"
```

-  **Use  via  CLI:**

```bash
node  ./bin/js-toolbox.js  strings  slugify  "Hello  World!"
#  Output:  hello-world
```

-  **Copy  &  Paste:**
  
  Just  grab  the  function  you  need  from  `src/`  and  paste  it  into  your  project.  No  installation  required!

##  📚  Modules

### 🔢  Numbers
`clamp`, `between`, `randInt`, `randFloat`, `sum`, `avg`, `median`, `toCurrency`, `round`, `percentage`, `isEven`, `isOdd`

<details>
<summary>Show examples</summary>

```js
import * as num from './src/numbers.js';

num.clamp(150, 0, 100);           // 100
num.randInt(1, 6);                // Random 1-6 (dice roll)
num.toCurrency(1234.56);          // "$1,234.56"
num.percentage(25, 200);          // 12.5
num.median([1, 2, 3, 4, 5]);      // 3
```
</details>

### 📝  Strings
`capitalize`, `titleCase`, `kebabCase`, `slugify`, `truncate`, `pad`, `stripAnsi`, `reverse`, `camelCase`, `snakeCase`, `repeat`, `escapeHtml`

<details>
<summary>Show examples</summary>

```js
import * as str from './src/strings.js';

str.slugify('Hello World!');           // "hello-world"
str.titleCase('hello world');          // "Hello World"
str.truncate('Long text here', 10);    // "Long te..."
str.camelCase('hello-world');          // "helloWorld"
str.escapeHtml('<script>alert("xss")</script>');  // Safe HTML
```
</details>

### 📅  Dates
`formatDate`, `fromNow`, `addDays`, `isSameDay`, `parseISO`, `startOfDay`, `endOfDay`, `daysBetween`

<details>
<summary>Show examples</summary>

```js
import * as dates from './src/dates.js';

dates.fromNow(new Date('2024-01-01'));    // "289d ago"
dates.addDays(new Date(), 7);             // Date 7 days from now
dates.formatDate(new Date());             // "10/16/2025"
dates.daysBetween('2024-01-01', '2024-12-31');  // 365
```
</details>

### 📊  Arrays
`unique`, `chunk`, `sample`, `shuffle`, `groupBy`, `flatten`, `compact`, `first`, `last`, `take`, `range`, `partition`

<details>
<summary>Show examples</summary>

```js
import * as arr from './src/arrays.js';

arr.unique([1, 2, 2, 3]);             // [1, 2, 3]
arr.chunk([1, 2, 3, 4], 2);           // [[1,2], [3,4]]
arr.range(5);                         // [0, 1, 2, 3, 4]
arr.shuffle([1, 2, 3]);               // Random order
arr.partition([1,2,3,4], x => x % 2); // [[1,3], [2,4]]
```
</details>

### ⏱️  Async
`delay`, `sleep`, `withTimeout`, `retry`, `memoizeAsync`, `simpleQueue`, `debounce`, `throttle`

<details>
<summary>Show examples</summary>

```js
import * as async from './src/async.js';

await async.delay(1000);              // Wait 1 second
await async.retry(() => fetchAPI(), { tries: 3 });
const debouncedSave = async.debounce(saveData, 500);
```
</details>

### 📁  File System (Node only)
`readJSON`, `writeJSON`, `ensureDir`, `listFiles`

### 🌐  HTTP
`get`, `post` - using fetch with timeout + retries

> 💡  **Tip:**  See  examples  in  each  file  and  comprehensive  tests  in  `tests/`.

##  🧪  Testing

Run  all  tests:

```bash
npm  test
```

All  utilities  are  tested  with  Node's  built-in  `assert`  module.

##  🤝  Contributing

Want  to  add  a  utility  or  fix  a  bug?  Awesome!  

-  Keep  it  simple  and  readable
-  Add  a  test  case  in  `tests/`
-  Update  the  README  with  an  example
-  Check  out  [`CONTRIBUTING.md`](./CONTRIBUTING.md)  for  full  guidelines

##  📄  License

MIT  ©  [tbhvishal](https://github.com/tbhvishal)

---

<div align="center">

**Made  with  ❤️ for  developers**

⭐  Star  this  repo  if  you  find  it  useful!  ⭐

</div>

































