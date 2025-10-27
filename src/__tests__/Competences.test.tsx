import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Competences from '../Competences/Competences';
import '../i18n/i18n';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

describe('Competences', () => {
  it('renders competences section', () => {
    const { getByRole } = render(
      <HelmetProvider>
        <MemoryRouter>
          <Competences />
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(getByRole('main')).toBeInTheDocument();
    // Vérifie la présence d'un titre de section (h1 ou h2)
    let heading;
    try {
      heading = getByRole('heading', { level: 1 });
    } catch {
      heading = getByRole('heading', { level: 2 });
    }
    expect(heading).toBeInTheDocument();
  });
});
