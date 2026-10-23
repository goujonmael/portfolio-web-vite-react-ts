import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import './i18n/i18n';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import AnalyticsConsent from './components/AnalyticsConsent/AnalyticsConsent';

// hydrateRoot (et non createRoot) : le HTML est pré-rendu au build (vite-plugin-
// prerender), donc on ADOpte le DOM existant au lieu de le remplacer. Ainsi
// l'image LCP, déjà présente et peinte dans le HTML statique, conserve son
// nœud DOM (createRoot l'aurait effacée puis re-rendue au montage React,
// décalant la LCP du montage de main.js).
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <ErrorBoundary>
      <AnalyticsConsent />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
