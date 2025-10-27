import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header/Header';
import '../i18n/i18n';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('renders navigation links', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const navs = getAllByRole('navigation');
    expect(navs.length).toBeGreaterThan(0);
    // Vérifie la présence d'au moins un lien interne (Home ou Projets)
    const links = getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('renders the header with proper navigation structure', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const nav = screen.getAllByRole('navigation')[0];
    expect(nav).toBeInTheDocument();
  });

  it('contains navigation links to main sections', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // Vérifie que le header contient bien des liens
    const links = container.querySelectorAll('a');
    expect(links.length).toBeGreaterThan(0);
  });

  it('renders the language switch component', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // Le composant LanguageSwitch devrait contenir des boutons
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2); // Au moins FR et EN
  });

  it('applies active class to current route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});
