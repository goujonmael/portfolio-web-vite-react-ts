import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header/Header';
import '../i18n/i18n';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('renders navigation links', () => {
    const { getByRole, getAllByRole } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  const navs = getAllByRole('navigation');
  expect(navs.length).toBeGreaterThan(0);
    // Vérifie la présence d\'au moins un lien interne (Home ou Projets)
    const links = getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});
