import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CyberSecurity.css';
import THMIcon from '../assets/Icons/THMIcon';
import axios from 'axios';

interface Certificate {
    name: string;
    category: string;
    level: string;
    date: string;
    description: string;
}

interface CertificateData {
    _id: string;
    name: string;
    title: string;
    description: string;
    achieved: string;
    url: string;
    imageUrl: string;
    certId: string;
}

const CyberSecurity: React.FC = () => {
    const { t } = useTranslation();
    const [badges, setBadges] = useState(0);
    const [completionPercentage, setCompletionPercentage] = useState(0);
    const [ranking, setRanking] = useState('');
    const [certificates, setCertificates] = useState<CertificateData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const profileResponse = await axios.get('/api');
                const profileData = profileResponse.data.data;
                const { topPercentage, username, level, rank, isInTopTenPercent, completedRoomsNumber, badgesNumber } = profileData;
                setBadges(badgesNumber);
                setCompletionPercentage(completedRoomsNumber);
                setRanking(topPercentage + '%' + ' (' + rank + ')');

                const certificatesResponse = await axios.get('/certificates');
                setCertificates(certificatesResponse.data.data.docs);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchData();
    }, []);

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Beginner': return 'var(--success-color)';
            case 'Intermediate': return 'var(--warning-color)';
            case 'Advanced': return 'var(--danger-color)';
            default: return 'var(--title1)';
        }
    };

    return (
        <div className="cybersecurity-container">
            <div className="cybersecurity-header">
                <h1 className="cybersecurity-title">{t('cybersecurity.title')}</h1>
                <p className="cybersecurity-subtitle">{t('cybersecurity.subtitle')}</p>
            </div>
            <div className="tryhackme-section">
                <div className="platform-info">
                    <div className="platform-logo">
                        <THMIcon />
                    </div>
                    <div className="platform-details">
                        <h2 className="platform-title">TryHackMe</h2>
                        <p className="platform-description">{t('cybersecurity.tryhackme.description')}</p>
                        <div className="platform-stats">
                            <div className="stat">
                                <span className="stat-value">{badges}</span>
                                <span className="stat-label">{t('cybersecurity.stats.badges')}</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">{completionPercentage}</span>
                                <span className="stat-label">{t('cybersecurity.stats.completion')}</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">{ranking}</span>
                                <span className="stat-label">{t('cybersecurity.stats.ranking')}</span>
                            </div>
                        </div>
                        <div className="profile-actions">
                            <a
                                href="https://tryhackme.com/p/GoGoGadg3t"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="profile-link"
                            >
                                <THMIcon />
                                {t('cybersecurity.profile.viewProfile')}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <section className="skills-section">
                <h2 className="section-title">{t('cybersecurity.skills.title')}</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3 className="skill-category-title">{t('cybersecurity.skills.categories.penetrationTesting')}</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Nmap</span>
                            <span className="skill-tag">Metasploit</span>
                            <span className="skill-tag">Burp Suite</span>
                            <span className="skill-tag">OWASP Top 10</span>
                            <span className="skill-tag">SQL Injection</span>
                            <span className="skill-tag">XSS</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="skill-category-title">{t('cybersecurity.skills.categories.networkSecurity')}</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Wireshark</span>
                            <span className="skill-tag">Firewall Configuration</span>
                            <span className="skill-tag">Network Protocols</span>
                            <span className="skill-tag">VPN</span>
                            <span className="skill-tag">IDS/IPS</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="skill-category-title">{t('cybersecurity.skills.categories.systemSecurity')}</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Linux Security</span>
                            <span className="skill-tag">Windows Security</span>
                            <span className="skill-tag">Privilege Escalation</span>
                            <span className="skill-tag">Incident Response</span>
                            <span className="skill-tag">Digital Forensics</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="certificates-section">
                <h2 className="section-title">{t('cybersecurity.certificates.title')}</h2>
                <div className="certificates-grid">
                    {certificates.map((certificate) => (
                        <div key={certificate._id} className="certificate-card">
                            <img src={certificate.imageUrl} alt={certificate.title} className="certificate-image" />
                            <h3 className="certificate-title">{certificate.title}</h3>
                            <p className="certificate-date">{new Date(certificate.achieved).toLocaleDateString()}</p>
                            <p className="certificate-description" dangerouslySetInnerHTML={{ __html: certificate.description }}></p>
                            <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="certificate-link">
                                {t('cybersecurity.certificates.viewCertificate')}
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CyberSecurity;
