import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchWithCache, clearCache } from '../../src/utils/fetchWithCache';

describe('fetchWithCache', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('caches fetch results and returns cached value', async () => {
    const fake = { hello: 'world' };
    // mock fetch to return a Response-like object
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = vi.fn(async () => ({ ok: true, json: async () => fake } as any)) as unknown as typeof fetch;

    const data = await fetchWithCache('/api/test', { key: 'test-key', ttlMs: 1000 * 60 });
    expect(data).toEqual(fake);

    // second call should not call fetch again
    // replace fetch with a different result to ensure cache is used
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = vi.fn(async () => ({ ok: true, json: async () => ({ hello: 'other' }) } as any)) as unknown as typeof fetch;
    const data2 = await fetchWithCache('/api/test', { key: 'test-key', ttlMs: 1000 * 60 });
    expect(data2).toEqual(fake);

    clearCache('test-key');
  });

  it('refetches when cache has expired', async () => {
    const oldData = { status: 'old' };
    const newData = { status: 'new' };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = vi.fn(async () => ({ ok: true, json: async () => oldData } as any)) as unknown as typeof fetch;

    // First fetch with very short TTL
    const data1 = await fetchWithCache('/api/test', { key: 'expire-test', ttlMs: 10 });
    expect(data1).toEqual(oldData);

    // Wait for cache to expire
    await new Promise(resolve => setTimeout(resolve, 20));

    // Second fetch should get new data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = vi.fn(async () => ({ ok: true, json: async () => newData } as any)) as unknown as typeof fetch;
    const data2 = await fetchWithCache('/api/test', { key: 'expire-test', ttlMs: 10 });
    expect(data2).toEqual(newData);

    clearCache('expire-test');
  });

  it('forces refresh when forceRefresh is true', async () => {
    const oldData = { version: 1 };
    const newData = { version: 2 };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = vi.fn(async () => ({ ok: true, json: async () => oldData } as any)) as unknown as typeof fetch;
    await fetchWithCache('/api/test', { key: 'force-test', ttlMs: 10000 });

    // Force refresh should bypass cache
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = vi.fn(async () => ({ ok: true, json: async () => newData } as any)) as unknown as typeof fetch;
    const data = await fetchWithCache('/api/test', { key: 'force-test', ttlMs: 10000, forceRefresh: true });
    expect(data).toEqual(newData);

    clearCache('force-test');
  });

  it('returns stale cache on fetch error if available', async () => {
    const cachedData = { status: 'cached' };

    // First successful fetch
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = vi.fn(async () => ({ ok: true, json: async () => cachedData } as any)) as unknown as typeof fetch;
    await fetchWithCache('/api/test', { key: 'error-test', ttlMs: 10 });

    // Wait for cache to expire
    await new Promise(resolve => setTimeout(resolve, 20));

    // Second fetch fails, should return stale cache
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = vi.fn(async () => ({ ok: false, status: 500 } as any)) as unknown as typeof fetch;
    const data = await fetchWithCache('/api/test', { key: 'error-test', ttlMs: 10 });
    expect(data).toEqual(cachedData);

    clearCache('error-test');
  });

  it('throws error when fetch fails and no cache available', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = vi.fn(async () => ({ ok: false, status: 404 } as any)) as unknown as typeof fetch;

    await expect(fetchWithCache('/api/test', { key: 'no-cache-test', ttlMs: 1000 }))
      .rejects.toThrow('Fetch failed: 404');
  });

  it('handles localStorage write errors gracefully', async () => {
    const data = { test: 'data' };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = vi.fn(async () => ({ ok: true, json: async () => data } as any)) as unknown as typeof fetch;

    // Mock localStorage.setItem to throw
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = vi.fn(() => { throw new Error('QuotaExceededError'); });

    // Should still return data even if cache write fails
    const result = await fetchWithCache('/api/test', { key: 'storage-error', ttlMs: 1000 });
    expect(result).toEqual(data);

    // Restore
    localStorage.setItem = originalSetItem;
  });

  it('handles corrupted cache data', async () => {
    const newData = { fresh: 'data' };
    
    // Set corrupted cache
    localStorage.setItem('corrupt-test', 'invalid json');

    // Should fetch fresh data when cache is corrupted
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = vi.fn(async () => ({ ok: true, json: async () => newData } as any)) as unknown as typeof fetch;
    const data = await fetchWithCache('/api/test', { key: 'corrupt-test', ttlMs: 1000 });
    expect(data).toEqual(newData);

    clearCache('corrupt-test');
  });

  it('clearCache removes item from localStorage', () => {
    localStorage.setItem('clear-test', JSON.stringify({ ts: Date.now(), data: { test: 'data' } }));
    expect(localStorage.getItem('clear-test')).not.toBeNull();

    clearCache('clear-test');
    expect(localStorage.getItem('clear-test')).toBeNull();
  });

  it('clearCache handles errors gracefully', () => {
    const originalRemoveItem = localStorage.removeItem;
    localStorage.removeItem = vi.fn(() => { throw new Error('Storage error'); });

    // Should not throw
    expect(() => clearCache('error-key')).not.toThrow();

    // Restore
    localStorage.removeItem = originalRemoveItem;
  });
});
