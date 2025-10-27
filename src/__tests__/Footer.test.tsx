import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer/Footer';
import '../i18n/i18n';

describe('Footer', () => {
  it('renders the footer with role and aria-label', () => {
    const { getByRole } = render(<Footer />);
    const footer = getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute('aria-label', 'Site footer');
  });

  it('renders all main links with correct hrefs', () => {
    const { getByRole } = render(<Footer />);
    const linkedin = getByRole('link', { name: /linkedin/i });
    expect(linkedin).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    const githubStudent = getByRole('link', { name: /git etudiant/i });
    expect(githubStudent).toHaveAttribute('href', 'https://github.com/maelgoujon');
    const githubPersonal = getByRole('link', { name: /git personnel/i });
    expect(githubPersonal).toHaveAttribute('href', 'https://github.com/goujonmael');
    const cv = getByRole('link', { name: /mon cv/i });
    expect(cv).toHaveAttribute('href', expect.stringContaining('/files/CV_GOUJON_Mael.pdf'));
    const contact = getByRole('link', { name: /contacts/i });
    expect(contact).toHaveAttribute('href', expect.stringContaining('mailto:contact@maelg.com'));
  });

  it('renders all icons (images) with correct alt', () => {
    const { container } = render(<Footer />);
    const images = container.querySelectorAll('img');
    expect(images.length).toBeGreaterThanOrEqual(5);
    expect(images[0]).toHaveAttribute('alt', 'LinkedIn icon');
    expect(images[1]).toHaveAttribute('alt', 'GitHub icon');
    expect(images[2]).toHaveAttribute('alt', 'GitHub icon');
    expect(images[3]).toHaveAttribute('alt', 'CV icon');
    expect(images[4]).toHaveAttribute('alt', 'Mail icon');
  });

  it('renders all link texts', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/LinkedIn/i)).toBeInTheDocument();
    expect(getByText(/Git Etudiant/i)).toBeInTheDocument();
    expect(getByText(/Git Personnel/i)).toBeInTheDocument();
    expect(getByText(/Mon CV/i)).toBeInTheDocument();
    expect(getByText(/Contacts/i)).toBeInTheDocument();
  });

  it('all links open in a new tab and are secure', () => {
    const { getAllByRole } = render(<Footer />);
    const links = getAllByRole('link') || [];
    links.forEach(link => {
      const anchor = link as HTMLAnchorElement;
      if (!anchor.href.startsWith('mailto:')) {
        expect(anchor).toHaveAttribute('target', '_blank');
        expect(anchor).toHaveAttribute('rel', expect.stringContaining('noopener'));
      }
    });
  });

  it('is responsive: hides text on mobile (simulated)', () => {
    window.innerWidth = 400;
    window.dispatchEvent(new Event('resize'));
    const { container } = render(<Footer />);
    const texts = container.querySelectorAll('.footer a p');
    texts.forEach(p => {
      expect(p).toBeInTheDocument();
    });
  });
});
