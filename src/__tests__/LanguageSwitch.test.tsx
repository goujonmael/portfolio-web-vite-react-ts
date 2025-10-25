import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSwitch from '../../src/components/LanguageSwitch/LanguageSwitch';
import '../../src/i18n/i18n';

describe('LanguageSwitch', () => {
  it('renders two language buttons with correct ARIA attributes', () => {
    render(<LanguageSwitch />);
    const frBtn = screen.getByRole('button', { name: /français/i });
    const enBtn = screen.getByRole('button', { name: /english/i });

    expect(frBtn).toBeInTheDocument();
    expect(enBtn).toBeInTheDocument();
    expect(frBtn).toHaveAttribute('aria-pressed');
    expect(enBtn).toHaveAttribute('aria-pressed');
  });
});
