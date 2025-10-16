/** fs-utils: safe helpers for Node environments. */
import fs from 'node:fs/promises';
import path from 'node:path';

export async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
  return dir;
}

export async function readJSON(file) {
  const txt = await fs.readFile(file, 'utf8');
  return JSON.parse(txt);
}

export async function writeJSON(file, data) {
  await ensureDir(path.dirname(file));
  await fs.writeFile(file, JSON.stringify(data, null, 2));
  return file;
}

export async function listFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries.filter((e) => e.isFile()).map((e) => path.join(dir, e.name));
}
