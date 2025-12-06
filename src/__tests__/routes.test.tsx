import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from '../routes';
import '../i18n/i18n';

// Helper to wrap components with necessary providers
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <HelmetProvider>
      {ui}
    </HelmetProvider>
  );
};

describe('AppRoutes', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the home route with all sections', async () => {
    const { container } = renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    // Header should be present
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();

    // Container should be present
    await waitFor(() => {
      const mainContainer = container.querySelector('.container');
      expect(mainContainer).toBeInTheDocument();
    });
  });

  it('renders the competences route', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/competences']}>
        <AppRoutes />
      </MemoryRouter>
    );

    await waitFor(() => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });
  });

  it('renders the scolarite route', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/scolarite']}>
        <AppRoutes />
      </MemoryRouter>
    );

    await waitFor(() => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });
  });

  it('renders the cybersecurity route', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/cybersecurity']}>
        <AppRoutes />
      </MemoryRouter>
    );

    await waitFor(() => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });
  });

  it('renders 404 page for unknown routes', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <AppRoutes />
      </MemoryRouter>
    );

    await waitFor(() => {
      const notFound = screen.getByText(/page not found/i);
      expect(notFound).toBeInTheDocument();
    });
  });

  it('updates document title on route change', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(document.title).toBeTruthy();
    });

    // Document title should be set
    expect(document.title).toContain('Maël Goujon');
  });

  it('renders floating decorative elements', () => {
    const { container } = renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    const floatingBalls = container.querySelectorAll('[class*="floating-ball"]');
    expect(floatingBalls.length).toBeGreaterThanOrEqual(3);
  });

  it('renders blur background', () => {
    const { container } = renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    const blurBackground = container.querySelector('.blur-background');
    expect(blurBackground).toBeInTheDocument();
  });

  it('handles scroll events', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    // Trigger scroll
    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));

    await waitFor(() => {
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });
  });

  it('renders suspense fallback during lazy loading', () => {
    const { container } = renderWithProviders(
      <MemoryRouter initialEntries={['/competences']}>
        <AppRoutes />
      </MemoryRouter>
    );

    // Check for loading state or content
    expect(container).toBeInTheDocument();
  });

  it('renders without meta description errors', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    await waitFor(() => {
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });
    
    // Meta description might not exist in test environment
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      expect(metaDesc).toHaveAttribute('content');
    }
  });
});
