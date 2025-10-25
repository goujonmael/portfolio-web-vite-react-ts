import { useEffect } from 'react';

// Read Vite env vars injected at build time. Defaults are provided for local dev.
// Use `import.meta.env` directly to avoid `any` casts (Vite provides the types via `vite/client`).
const { VITE_UMAMI_SCRIPT_URL, VITE_UMAMI_WEBSITE_ID } = import.meta.env as Record<string, string | undefined>;
const SCRIPT_SRC = VITE_UMAMI_SCRIPT_URL ?? 'https://stats.maelg.com/script.js';
const WEBSITE_ID = VITE_UMAMI_WEBSITE_ID ?? '';

function injectAnalytics() {
  if (!WEBSITE_ID) return; // nothing to do when no id is provided
  if (document.querySelector(`script[data-website-id="${WEBSITE_ID}"]`)) return;
  const s = document.createElement('script');
  s.src = SCRIPT_SRC;
  s.defer = true;
  s.setAttribute('data-website-id', WEBSITE_ID);
  document.head.appendChild(s);
}

export default function AnalyticsConsent() {
  useEffect(() => {
    // Inject analytics immediately for all users when a WEBSITE_ID is configured.
    // This intentionally does not prompt for consent.
    try {
      injectAnalytics();
    } catch (e) {
      // Fail silently — analytics should not break the app
      console.warn('Analytics injection failed', e);
    }
  }, []);

  return null;
}
