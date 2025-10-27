import { describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CyberSecurity from '../CyberSecurity/CyberSecurity';
import '../i18n/i18n';
import i18n from '../i18n/i18n';
import { HelmetProvider } from 'react-helmet-async';

// Helper to wrap components with necessary providers
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <HelmetProvider>
      {ui}
    </HelmetProvider>
  );
};

describe('CyberSecurity', () => {
  beforeEach(() => {
    i18n.changeLanguage('fr');
  });

  it('renders the cybersecurity page with title', () => {
    renderWithProviders(<CyberSecurity />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
  });

  it('displays the subtitle', () => {
    const { container } = renderWithProviders(<CyberSecurity />);
    const subtitle = container.querySelector('.page-layout-subtitle');
    expect(subtitle).toBeInTheDocument();
  });

  it('displays TryHackMe section', () => {
    const { container } = renderWithProviders(<CyberSecurity />);
    const thmTitle = container.querySelector('.platform-title');
    expect(thmTitle).toBeInTheDocument();
    expect(thmTitle?.textContent).toContain('TryHackMe');
  });

  it('loads stats without errors', () => {
    const { container } = renderWithProviders(<CyberSecurity />);
    // Stats load synchronously with static data, so loaders won't show
    const statsSection = container.querySelector('.platform-stats');
    expect(statsSection).toBeInTheDocument();
  });

  it('displays stats after loading', async () => {
    renderWithProviders(<CyberSecurity />);
    
    await waitFor(() => {
      const badges = screen.getByText(/22/);
      expect(badges).toBeInTheDocument();
    }, { timeout: 3000 });

    const completion = screen.getByText(/156/);
    expect(completion).toBeInTheDocument();
  });

  it('displays skills section', () => {
    renderWithProviders(<CyberSecurity />);
    const skillsHeading = screen.getAllByRole('heading')
      .find(h => h.textContent?.includes('Compétences') || h.textContent?.includes('Skills'));
    expect(skillsHeading).toBeInTheDocument();
  });

  it('displays skill categories', () => {
    const { container } = renderWithProviders(<CyberSecurity />);
    const categories = container.querySelectorAll('.skill-category');
    expect(categories.length).toBeGreaterThanOrEqual(3); // Penetration Testing, Network Security, System Security
  });

  it('displays skill tags', () => {
    const { container } = renderWithProviders(<CyberSecurity />);
    const skillTags = container.querySelectorAll('.skill-tag');
    expect(skillTags.length).toBeGreaterThan(0);
    
    // Check for specific skills
    expect(screen.getByText('Nmap')).toBeInTheDocument();
    expect(screen.getByText('Metasploit')).toBeInTheDocument();
    expect(screen.getByText('Burp Suite')).toBeInTheDocument();
  });

  it('displays certificates section', () => {
    renderWithProviders(<CyberSecurity />);
    const certificatesHeading = screen.getAllByRole('heading')
      .find(h => h.textContent?.includes('Certificat') || h.textContent?.includes('Certificate'));
    expect(certificatesHeading).toBeInTheDocument();
  });

  it('loads certificates without errors', () => {
    const { container} = renderWithProviders(<CyberSecurity />);
    // Certificates load synchronously with static data
    const certificatesSection = container.querySelector('.certificates-section');
    expect(certificatesSection).toBeInTheDocument();
  });

  it('displays certificates after loading', async () => {
    renderWithProviders(<CyberSecurity />);
    
    await waitFor(() => {
      const certificates = screen.getAllByText(/Web Application Pentesting|Jr Penetration Tester|Pre Security/i);
      expect(certificates.length).toBeGreaterThan(0);
    }, { timeout: 3000 });
  });

  it('displays TryHackMe profile link', async () => {
    renderWithProviders(<CyberSecurity />);
    
    await waitFor(() => {
      const profileLink = screen.getByRole('link', { name: /voir le profil|view profile/i });
      expect(profileLink).toBeInTheDocument();
      expect(profileLink).toHaveAttribute('href', expect.stringContaining('tryhackme.com'));
    });
  });

  it('profile link opens in new tab', async () => {
    renderWithProviders(<CyberSecurity />);
    
    await waitFor(() => {
      const profileLink = screen.getByRole('link', { name: /voir le profil|view profile/i });
      expect(profileLink).toHaveAttribute('target', '_blank');
      expect(profileLink).toHaveAttribute('rel', expect.stringContaining('noopener'));
    });
  });

  it('displays certificate images', async () => {
    const { container } = renderWithProviders(<CyberSecurity />);
    
    await waitFor(() => {
      const images = container.querySelectorAll('.certificate-image');
      expect(images.length).toBeGreaterThan(0);
    }, { timeout: 3000 });
  });

  it('displays certificate details', async () => {
    const { container } = renderWithProviders(<CyberSecurity />);
    
    await waitFor(() => {
      const certificateDetails = container.querySelectorAll('.certificate-details');
      expect(certificateDetails.length).toBeGreaterThan(0);
    }, { timeout: 3000 });
  });

  it('certificate links open in new tab', async () => {
    renderWithProviders(<CyberSecurity />);
    
    await waitFor(() => {
      const certificateLinks = screen.getAllByRole('link', { name: /voir le certificat|view certificate/i });
      certificateLinks.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
      });
    }, { timeout: 3000 });
  });

  it('displays data refresh date', () => {
    const { container } = renderWithProviders(<CyberSecurity />);
    const refreshDate = container.querySelector('.data-refresh-date');
    expect(refreshDate).toBeInTheDocument();
  });

  it('displays TryHackMe badge iframe', () => {
    const { container } = renderWithProviders(<CyberSecurity />);
    const iframe = container.querySelector('iframe[title="TryHackMe Badge"]');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', expect.stringContaining('tryhackme.com'));
  });

  it('changes language correctly', async () => {
    const { rerender } = renderWithProviders(<CyberSecurity />);
    
    // French version
    let title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    
    // Change to English
    i18n.changeLanguage('en');
    rerender(
      <HelmetProvider>
        <CyberSecurity />
      </HelmetProvider>
    );
    
    title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
  });

  it('displays all three stat categories', async () => {
    const { container } = renderWithProviders(<CyberSecurity />);
    
    await waitFor(() => {
      const stats = container.querySelectorAll('.stat');
      expect(stats.length).toBeGreaterThanOrEqual(3);
    }, { timeout: 3000 });
  });

  it('displays certificate titles', async () => {
    const { container } = renderWithProviders(<CyberSecurity />);
    
    await waitFor(() => {
      const certificateTitles = container.querySelectorAll('.certificate-title');
      expect(certificateTitles.length).toBeGreaterThan(0);
      certificateTitles.forEach(title => {
        expect(title.textContent).toBeTruthy();
      });
    }, { timeout: 3000 });
  });

  it('displays certificate dates', async () => {
    const { container } = renderWithProviders(<CyberSecurity />);
    
    await waitFor(() => {
      const certificateDates = container.querySelectorAll('.certificate-date');
      expect(certificateDates.length).toBeGreaterThan(0);
    }, { timeout: 3000 });
  });
});
