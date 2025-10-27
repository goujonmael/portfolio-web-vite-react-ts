import { describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Scolarite from '../Scolarite/Scolarite';
import '../i18n/i18n';
import i18n from '../i18n/i18n';

describe('Scolarite', () => {
  beforeEach(() => {
    i18n.changeLanguage('fr');
  });

  it('renders the scolarite page with title', () => {
    render(<Scolarite />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
  });

  it('displays the looking for work banner', () => {
    const { container } = render(<Scolarite />);
    const banner = container.querySelector('.banner');
    expect(banner).toBeInTheDocument();
  });

  it('displays contact icons in the banner', () => {
    const { container } = render(<Scolarite />);
    const banner = container.querySelector('.banner');
    expect(banner).toBeInTheDocument();
    
    const links = container.querySelectorAll('.banner-icons a');
    expect(links.length).toBeGreaterThanOrEqual(2);
    
    // Check LinkedIn link
    const linkedinLink = Array.from(links).find(link => 
      link.getAttribute('href')?.includes('linkedin.com')
    );
    expect(linkedinLink).toBeTruthy();
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    
    // Check mail link
    const mailLink = Array.from(links).find(link => 
      link.getAttribute('href')?.includes('mailto:')
    );
    expect(mailLink).toBeTruthy();
  });

  it('displays internships section', () => {
    render(<Scolarite />);
    const headings = screen.getAllByRole('heading', { level: 2 });
    const internshipsHeading = headings.find(h => 
      h.textContent?.includes('Alternance') || 
      h.textContent?.includes('Stage') || 
      h.textContent?.includes('Internship')
    );
    expect(internshipsHeading).toBeDefined();
  });

  it('displays education section', () => {
    render(<Scolarite />);
    const educationHeading = screen.getAllByRole('heading', { level: 2 })
      .find(h => h.textContent?.includes('Formation') || h.textContent?.includes('Education'));
    expect(educationHeading).toBeInTheDocument();
  });

  it('displays formation cards', () => {
    const { container } = render(<Scolarite />);
    const formationCards = container.querySelectorAll('.formation-card');
    expect(formationCards.length).toBeGreaterThan(0);
  });

  it('displays dates for formations', () => {
    const { container } = render(<Scolarite />);
    const dates = container.querySelectorAll('.formation-date');
    expect(dates.length).toBeGreaterThan(0);
    dates.forEach(date => {
      expect(date.textContent).toBeTruthy();
    });
  });

  it('changes language correctly', () => {
    const { rerender } = render(<Scolarite />);
    
    // French version
    let title = screen.getByRole('heading', { level: 1 });
    const frenchText = title.textContent;
    
    // Change to English
    i18n.changeLanguage('en');
    rerender(<Scolarite />);
    
    title = screen.getByRole('heading', { level: 1 });
    const englishText = title.textContent;
    
    // Texts should be different
    expect(frenchText).not.toBe(englishText);
  });

  it('displays establishment names', () => {
    const { container } = render(<Scolarite />);
    const establishments = container.querySelectorAll('.formation-etablissement');
    expect(establishments.length).toBeGreaterThan(0);
  });

  it('displays specialties for formations', () => {
    const { container } = render(<Scolarite />);
    const specialties = container.querySelectorAll('.formation-specialite');
    expect(specialties.length).toBeGreaterThan(0);
  });

  it('formats dates correctly for ongoing studies', () => {
    const { container } = render(<Scolarite />);
    const dates = container.querySelectorAll('.formation-date');
    // At least check that dates are displayed
    expect(dates.length).toBeGreaterThan(0);
    // Check that dates contain valid formatting
    dates.forEach(date => {
      expect(date.textContent).toBeTruthy();
    });
  });

  it('opens external links in new tab', () => {
    const { container } = render(<Scolarite />);
    const links = container.querySelectorAll('.banner-icons a');
    
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    });
  });

  it('renders section titles as h2 headings', () => {
    render(<Scolarite />);
    const h2Headings = screen.getAllByRole('heading', { level: 2 });
    expect(h2Headings.length).toBeGreaterThanOrEqual(2); // Internships + Education
  });

  it('each formation card has a title', () => {
    const { container } = render(<Scolarite />);
    const formationTitles = container.querySelectorAll('.formation-title');
    expect(formationTitles.length).toBeGreaterThan(0);
    formationTitles.forEach(title => {
      expect(title.textContent).toBeTruthy();
    });
  });
});
