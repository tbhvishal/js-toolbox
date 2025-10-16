export function unique(xs) {
  return [...new Set(xs)];
}

export function chunk(xs, size = 2) {
  const out = [];
  for (let i = 0; i < xs.length; i += size) out.push(xs.slice(i, i + size));
  return out;
}

export function sample(xs) {
  if (!xs.length) return undefined;
  const i = Math.floor(Math.random() * xs.length);
  return xs[i];
}

export function shuffle(xs) {
  const arr = [...xs];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function groupBy(xs, fn) {
  const out = {};
  for (const x of xs) {
    const k = String(fn(x));
    (out[k] ||= []).push(x);
  }
  return out;
}

export function flatten(xs) {
  return xs.flat ? xs.flat() : xs.reduce((acc, x) => acc.concat(x), []);
}

/** Remove falsy values from an array. */
export function compact(xs) {
  return xs.filter(Boolean);
}

/** Get the first element. */
export function first(xs) {
  return xs[0];
}

/** Get the last element. */
export function last(xs) {
  return xs[xs.length - 1];
}

/** Take the first n elements. */
export function take(xs, n = 1) {
  return xs.slice(0, Math.max(0, n));
}

/** Generate a range of numbers [start, end). */
export function range(start, end, step = 1) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  const out = [];
  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    out.push(i);
  }
  return out;
}

/** Partition array into two groups based on predicate. */
export function partition(xs, fn) {
  const pass = [], fail = [];
  for (const x of xs) {
    (fn(x) ? pass : fail).push(x);
  }
  return [pass, fail];
}
