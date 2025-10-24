export type FetchCacheOptions = { key: string; ttlMs?: number };

export async function fetchWithCache<T>(
  url: string,
  opts: FetchCacheOptions,
  fetchInit?: RequestInit
): Promise<T> {
  const { key, ttlMs = 1000 * 60 * 60 } = opts;
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw) as { ts: number; data: T };
      if (Date.now() - parsed.ts < ttlMs) return parsed.data;
    }
  } catch (e) {
    // ignore localStorage/parse errors
    console.warn('fetchWithCache: cache read failed', e);
  }

  const res = await fetch(url, fetchInit);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  const data = (await res.json()) as T;
  try {
    localStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }));
  } catch (e) {
    // ignore storage errors (quota, private mode...)
    console.warn('fetchWithCache: cache write failed', e);
  }
  return data;
}
