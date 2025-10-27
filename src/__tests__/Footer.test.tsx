import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer/Footer';
import '../i18n/i18n';

describe('Footer', () => {
  it('renders LinkedIn link and contentinfo', () => {
    const { getByRole } = render(<Footer />);
    // Vérifie la présence du lien LinkedIn
    const linkedin = getByRole('link', { name: /linkedin/i });
    expect(linkedin).toBeInTheDocument();
    // Vérifie la présence du footer
    expect(getByRole('contentinfo')).toBeInTheDocument();
  });
});
