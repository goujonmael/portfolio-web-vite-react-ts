import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSwitch from '../components/LanguageSwitch/LanguageSwitch';
import '../i18n/i18n';

describe('LanguageSwitch', () => {
  it('renders two language buttons with correct ARIA attributes', () => {
    const { getByRole } = render(<LanguageSwitch />);
    const frBtn = getByRole('button', { name: /français/i });
    const enBtn = getByRole('button', { name: /english/i });

    expect(frBtn).toBeInTheDocument();
    expect(enBtn).toBeInTheDocument();
    expect(frBtn).toHaveAttribute('aria-pressed');
    expect(enBtn).toHaveAttribute('aria-pressed');
  });
});
