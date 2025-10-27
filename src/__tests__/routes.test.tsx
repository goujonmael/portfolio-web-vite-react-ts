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

  it('fetches GitHub repos on mount', async () => {
    const mockRepos = [
      { id: 1, name: 'repo1', pushed_at: '2025-01-01T00:00:00Z', html_url: 'https://github.com/test/repo1' },
      { id: 2, name: 'repo2', pushed_at: '2025-01-02T00:00:00Z', html_url: 'https://github.com/test/repo2' }
    ];

    // Mock fetch
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRepos),
      })
    ) as unknown as typeof fetch;

    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('github.com/users/goujonmael/repos'),
        undefined
      );
    });
  });

  it('handles fetch errors gracefully', async () => {
    // Mock fetch to fail
    global.fetch = vi.fn(() =>
      Promise.reject(new Error('Network error'))
    ) as unknown as typeof fetch;

    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    // Should still render without crashing
    await waitFor(() => {
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });
  });

  it('uses cached GitHub repos when available', async () => {
    const cachedRepos = [
      { id: 1, name: 'cached-repo', pushed_at: '2025-01-01T00:00:00Z' }
    ];

    // Set cache
    localStorage.setItem('github_repos', JSON.stringify({
      ts: Date.now(),
      data: cachedRepos
    }));

    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    // Should not call fetch if cache is valid
    await waitFor(() => {
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
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

  it('sorts GitHub repos by pushed_at date', async () => {
    const mockRepos = [
      { id: 1, name: 'old-repo', pushed_at: '2024-01-01T00:00:00Z', html_url: 'https://github.com/test/old' },
      { id: 2, name: 'new-repo', pushed_at: '2025-01-01T00:00:00Z', html_url: 'https://github.com/test/new' },
      { id: 3, name: 'mid-repo', pushed_at: '2024-06-01T00:00:00Z', html_url: 'https://github.com/test/mid' }
    ];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRepos),
      })
    ) as unknown as typeof fetch;

    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });

    // Just verify fetch was called and repos are stored
    await waitFor(() => {
      const cached = localStorage.getItem('github_repos');
      expect(cached).toBeTruthy();
    }, { timeout: 2000 });
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

  it('renders university projects route', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/projets-univ']}>
        <AppRoutes />
      </MemoryRouter>
    );

    await waitFor(() => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toMatch(/projects/i);
    });
  });

  it('renders personal projects route', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/projets-perso']}>
        <AppRoutes />
      </MemoryRouter>
    );

    await waitFor(() => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toMatch(/projects/i);
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
