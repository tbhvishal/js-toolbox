/** strings: practical transformations with clear intent.
 * Human note: prefer readable regexes and explicit steps; avoid magic.
 */

export function capitalize(s = '') {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function titleCase(s = '') {
  return String(s)
    .toLowerCase()
    .split(/\s+/)
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

export function kebabCase(s = '') {
  return String(s)
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

export function slugify(s = '') {
  return kebabCase(s)
    .normalize('NFKD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
}

export function truncate(s = '', max = 100, suffix = '…') {
  const str = String(s);
  if (str.length <= max) return str;
  return str.slice(0, Math.max(0, max - suffix.length)) + suffix;
}

export function pad(s = '', length = 2, ch = ' ') {
  s = String(s);
  if (s.length >= length) return s;
  return s + ch.repeat(length - s.length);
}

export function stripAnsi(s = '') {
  // standard-ish ANSI escape code regex
  return String(s).replace(/\u001B\[[0-9;]*[A-Za-z]/g, '');
}

/** Reverse a string. */
export function reverse(s = '') {
  return String(s).split('').reverse().join('');
}
