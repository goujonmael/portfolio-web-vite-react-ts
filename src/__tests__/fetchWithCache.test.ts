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
});
