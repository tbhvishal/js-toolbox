/** http: thin wrappers around fetch with timeouts and retries. */

async function withAbort(fetchPromise, ms) {
  if (!ms) return fetchPromise;
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), ms);
  try {
    return await fetchPromise(controller);
  } finally {
    clearTimeout(t);
  }
}

export async function get(url, { timeoutMs = 8000, retries = 0, headers = {} } = {}) {
  let lastErr;
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await withAbort((controller) => fetch(url, { method: 'GET', headers, signal: controller.signal }), timeoutMs);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

export async function post(url, body, { timeoutMs = 8000, retries = 0, headers = {} } = {}) {
  let lastErr;
  const finalHeaders = { 'content-type': 'application/json', ...headers };
  const payload = typeof body === 'string' ? body : JSON.stringify(body);
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await withAbort((controller) => fetch(url, { method: 'POST', headers: finalHeaders, body: payload, signal: controller.signal }), timeoutMs);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}
