export type FetchCacheOptions = { key: string; ttlMs?: number; forceRefresh?: boolean };

export async function fetchWithCache<T>(
  url: string,
  opts: FetchCacheOptions,
  fetchInit?: RequestInit
): Promise<T> {
  const { key, ttlMs = 1000 * 60 * 60, forceRefresh = false } = opts;

  // try to read cache first
  let cached: { ts: number; data: T } | null = null;
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw) as { ts: number; data: T };
      cached = parsed;
      if (!forceRefresh && Date.now() - parsed.ts < ttlMs) return parsed.data;
    }
  } catch (e) {
    // ignore localStorage/parse errors
    console.warn('fetchWithCache: cache read failed', e);
  }

  // perform fetch and update cache. On failure, return stale cache if available.
  try {
    const res = await fetch(url, fetchInit);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    const data = (await res.json()) as T;
    try {
      localStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }));
    } catch (e) {
      console.warn('fetchWithCache: cache write failed', e);
    }
    return data;
  } catch (e) {
    console.warn('fetchWithCache: fetch failed, returning stale cache if present', e);
    if (cached) return cached.data;
    throw e;
  }
}

export function clearCache(key: string) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.warn('clearCache failed', e);
  }
}
