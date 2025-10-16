#  js-toolbox  ⚡

![Node Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Zero Dependencies](https://img.shields.io/badge/dependencies-0-success)
![Commits](https://img.shields.io/github/commit-activity/t/tbhvishal/js-toolbox)

>  A  small,  zero-dependency  JavaScript  toolbox  for  everyday  tasks  —  simple,  readable,  and  copy‑paste  friendly.  ✨

##  ✨  Features

-  🚀  **Zero  dependencies**  —  lightweight  and  fast
-  📦  **40+  utilities**  —  covering  strings,  numbers,  arrays,  dates,  async,  and  more
-  🌐  **Works  everywhere**  —  Node  18+  (ESM)  and  browser-friendly
-  📝  **JSDoc  comments**  —  full  autocomplete  support
-  🔧  **Built-in  CLI**  —  use  utilities  from  the  command  line
-  ✅  **Well-tested**  —  comprehensive  test  suite  included

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

### 📝  Strings
`capitalize`, `titleCase`, `kebabCase`, `slugify`, `truncate`, `pad`, `stripAnsi`, `reverse`, `camelCase`, `snakeCase`, `repeat`, `escapeHtml`

### 📅  Dates
`formatDate`, `fromNow`, `addDays`, `isSameDay`, `parseISO`, `startOfDay`, `endOfDay`, `daysBetween`

### 📊  Arrays
`unique`, `chunk`, `sample`, `shuffle`, `groupBy`, `flatten`, `compact`, `first`, `last`, `take`, `range`, `partition`

### ⏱️  Async
`delay`, `sleep`, `withTimeout`, `retry`, `memoizeAsync`, `simpleQueue`, `debounce`, `throttle`

### 📁  File System (Node only)
`readJSON`, `writeJSON`, `ensureDir`, `listFiles`

### 🌐  HTTP
`get`, `post` — using fetch with timeout + retries

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

































