import { describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSwitch from '../components/LanguageSwitch/LanguageSwitch';
import '../i18n/i18n';
import i18n from '../i18n/i18n';

describe('LanguageSwitch', () => {
  beforeEach(() => {
    // Reset language to French before each test
    i18n.changeLanguage('fr');
    localStorage.clear();
  });

  it('renders two language buttons with correct ARIA attributes', () => {
    const { getByRole } = render(<LanguageSwitch />);
    const frBtn = getByRole('button', { name: /français/i });
    const enBtn = getByRole('button', { name: /english/i });

    expect(frBtn).toBeInTheDocument();
    expect(enBtn).toBeInTheDocument();
    expect(frBtn).toHaveAttribute('aria-pressed');
    expect(enBtn).toHaveAttribute('aria-pressed');
  });

  it('displays flag icons for both languages', () => {
    const { container } = render(<LanguageSwitch />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(2); // French and British flags
  });

  it('changes language when clicking on language button', () => {
    render(<LanguageSwitch />);
    const enBtn = screen.getByRole('button', { name: /english/i });
    
    fireEvent.click(enBtn);
    expect(i18n.language).toBe('en');
  });

  it('persists language choice in localStorage', () => {
    render(<LanguageSwitch />);
    const enBtn = screen.getByRole('button', { name: /english/i });
    
    fireEvent.click(enBtn);
    expect(localStorage.getItem('language')).toBe('en');
  });

  it('marks the active language button as pressed', () => {
    render(<LanguageSwitch />);
    const frBtn = screen.getByRole('button', { name: /français/i });
    const enBtn = screen.getByRole('button', { name: /english/i });

    // Initially French should be active
    expect(frBtn).toHaveAttribute('aria-pressed', 'true');
    expect(enBtn).toHaveAttribute('aria-pressed', 'false');

    // After clicking English
    fireEvent.click(enBtn);
    expect(enBtn).toHaveAttribute('aria-pressed', 'true');
    expect(frBtn).toHaveAttribute('aria-pressed', 'false');
  });
});
