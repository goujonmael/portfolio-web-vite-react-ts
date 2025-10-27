import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import '../i18n/i18n';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('renders without crashing and shows header', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const navs = getAllByRole('navigation');
    expect(navs.length).toBeGreaterThan(0);
  });
});
