import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import './i18n/i18n';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import AnalyticsConsent from './components/AnalyticsConsent/AnalyticsConsent';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <AnalyticsConsent />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
