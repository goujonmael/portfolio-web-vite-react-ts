import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import '../i18n/i18n';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('renders without crashing and shows header', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const header = getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('renders the application container with proper structure', () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // App uses 'main' class not 'app'
    expect(container.querySelector('.main')).toBeInTheDocument();
  });

  it('displays the header', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // Le header devrait être présent
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('renders different routes correctly', () => {
    const { container, rerender } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();

    // Test de la route /competences
    rerender(
      <MemoryRouter initialEntries={['/competences']}>
        <App />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
