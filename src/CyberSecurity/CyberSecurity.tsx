import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CyberSecurity.css';
import THMIcon from '../assets/Icons/THMIcon';

interface CertificateData {
    _id: string;
    name: string;
    userId: string;
    fullName: string;
    certId: string;
    url: string;
    imageUrl: string;
    achieved: string;
    title: string;
    description: string;
    isUserOwner: boolean;
}

const CyberSecurity: React.FC = () => {
    const { t } = useTranslation();
    const [badges, setBadges] = useState(0);
    const [completionPercentage, setCompletionPercentage] = useState(0);
    const [ranking, setRanking] = useState('');
    const [certificates, setCertificates] = useState<CertificateData[]>([]);
    const [isLoadingStats, setIsLoadingStats] = useState(true);
    const [isLoadingCertificates, setIsLoadingCertificates] = useState(true);

    const StatLoader = () => (
        <div className="stat-loader">
            <div className="stat-loader-pulse"></div>
        </div>
    );

    const CertificateLoader = () => (
        <div className="certificate-loader">
            <div className="certificate-loader-image"></div>
            <div className="certificate-loader-title"></div>
            <div className="certificate-loader-date"></div>
            <div className="certificate-loader-description"></div>
        </div>
    );

    const stripHtmlTags = (html) => {
        let strippedHtml = html.replace(/<p>(.*?)<\/p>/g, (match, content) => {
            if (content.trim() === '') {
                return '';
            }
            return '<h4>' + content + '</h4><br/><strong>Learnings:</strong>';
        });
        strippedHtml = strippedHtml.replace(/<br\s*\/?>(?![^<]*<\/li>)/gi, '\n');
        strippedHtml = strippedHtml.replace(/<ul[^>]*>/g, '\n');
        strippedHtml = strippedHtml.replace(/<li[^>]*>/g, '• ');
        strippedHtml = strippedHtml.replace(/<\/li>/g, '\n');
        strippedHtml = strippedHtml.replace(/<\/ul>/g, '');
        strippedHtml = strippedHtml.replace(/<(?!\/?(strong|h4|p)\b)[^>]+>/g, '');
        return strippedHtml;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
<<<<<<< HEAD
                const profileResponse = await axios.get('/api');
                const profileData = profileResponse.data?.data;
                
                if (profileData) {
                    const {
                        topPercentage = 0,
                        rank = 0,
                        completedRoomsNumber = 0,
                        badgesNumber = 0
                    } = profileData;
                    
                    setBadges(badgesNumber);
                    setCompletionPercentage(completedRoomsNumber);
                    setRanking(topPercentage + '%' + ' (' + rank + ')');
                } else {
                    console.warn('Profile data is undefined');
                }
                setIsLoadingStats(false);

                const certificatesResponse = await axios.get('/certificates');
                const certificatesData = certificatesResponse.data?.data?.docs;
                
                if (certificatesData && Array.isArray(certificatesData)) {
                    setCertificates(certificatesData);
                } else {
                    console.warn('Certificates data is undefined or not an array');
                    setCertificates([]);
                }
=======
                const profileData = {
                    _id: "5fe8edca26b8416e6267b047",
                    id: 295697,
                    avatar: "https://tryhackme-images.s3.amazonaws.com/user-avatars/5fe8edca26b8416e6267b047-1751310333638",
                    username: "GoGoGadg3t",
                    level: 11,
                    country: "fr",
                    about: "",
                    linkedInUsername: "",
                    githubUsername: "",
                    twitterUsername: "",
                    instagramUsername: "",
                    personalWebsite: "",
                    subscribed: 1,
                    badgesNumber: 22,
                    dateSignUp: "2020-12-27T20:25:46.139Z",
                    certificateType: null,
                    completedRoomsNumber: 156,
                    streak: 1,
                    rank: 36888,
                    topPercentage: 3,
                    isInTopTenPercent: true,
                    badgeImageURL: "https://tryhackme-badges.s3.amazonaws.com/GoGoGadg3t.png"
                };
                const { topPercentage, rank, completedRoomsNumber, badgesNumber } = profileData;
                setBadges(badgesNumber);
                setCompletionPercentage(completedRoomsNumber);
                setRanking(topPercentage + '%' + ' (' + rank + ')');
                setIsLoadingStats(false);

                const certificatesResponse = {
                    status: 'success',
                    data: {
                        docs: [
                            {
                                _id: '686feee92c640646ba4bfba6',
                                name: 'pathway-webapppentesting',
                                userId: '5fe8edca26b8416e6267b047',
                                fullName: 'Jean Mael du Boudin',
                                certId: 'THM-2QQCEH5TGI',
                                url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-2QQCEH5TGI.pdf',
                                imageUrl: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-2QQCEH5TGI.png',
                                achieved: '2025-07-10T16:48:41.472Z',
                                title: 'Web Application Pentesting',
                                description: '<p>Learn how to perform security assessments of web applications:</p><ul><li>Learn about common web vulnerabilities</li><li>Understand web authentication mechanisms</li><li>Perform server- and client-side exploits</li><li>Understand the remedies for web vulnerabilities</li></ul>',
                                isUserOwner: false
                            },
                            {
                                _id: '6866e507cf6fda78cda3f615',
                                name: 'pathway-web',
                                userId: '5fe8edca26b8416e6267b047',
                                fullName: 'Jean Mael du Boudin',
                                certId: 'THM-OLJ66AN3R2',
                                url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-OLJ66AN3R2.pdf',
                                imageUrl: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-OLJ66AN3R2.png',
                                achieved: '2025-07-03T20:16:07.029Z',
                                title: 'Web Fundamentals',
                                description: '<p>A pathway to web application security.</p><ul><li style="text-align: left;">Understand web fundamentals</li><li style="text-align: left;">Major vulnerabilities explained</li><li style="text-align: left;">Learn industry-used tools</li><li style="text-align: left;">Web application assessments</li></ul>',
                                isUserOwner: false
                            },
                            {
                                _id: '683adbb1e00ff62af06cfc3c',
                                name: 'pathway-jrpenetrationtester',
                                userId: '5fe8edca26b8416e6267b047',
                                fullName: 'Maël Goujon',
                                certId: 'THM-IJH2OEIV8A',
                                url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-IJH2OEIV8A.pdf',
                                imageUrl: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-IJH2OEIV8A.png',
                                achieved: '2025-05-31T10:36:33.106Z',
                                title: 'Jr Penetration Tester',
                                description: '<p>Learn the necessary skills to start a career as a penetration tester.</p><p></p><ul><li>Pentesting methodologies and tactics</li><li>Enumeration, exploitation and reporting</li><li>Realistic hands-on hacking exercises</li><li>Learn security tools used in the industry</li></ul>',
                                isUserOwner: false
                            },
                            {
                                _id: '680394df1f9e5ad5f12867af',
                                name: 'pathway-presecurity',
                                userId: '5fe8edca26b8416e6267b047',
                                fullName: 'Maël Goujon',
                                certId: 'THM-G7XHV9YCCH',
                                url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-G7XHV9YCCH.pdf',
                                imageUrl: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-G7XHV9YCCH.png',
                                achieved: '2025-04-19T12:19:43.384Z',
                                title: 'Pre Security',
                                description: '<p>Before hacking something, you first need to understand the basics.</p><ul><li style="text-align: left;">Cyber security basics</li><li style="text-align: left;">Networking basics and weaknesses<br></li><li style="text-align: left;">The web and common attacks</li><li style="text-align: left;">Learn to use the Linux operating system</li></ul>',
                                isUserOwner: false
                            },
                            {
                                _id: '68037b49de50975472c55674',
                                name: 'pathway-cybersecurity101',
                                userId: '5fe8edca26b8416e6267b047',
                                fullName: 'Maël Goujon',
                                certId: 'THM-MBNFS9EBOS',
                                url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-MBNFS9EBOS.pdf',
                                imageUrl: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-MBNFS9EBOS.png',
                                achieved: '2025-04-19T10:30:33.857Z',
                                title: 'Cyber Security 101',
                                description: '<p>Learn everything you need to embark on a career path in offensive or defensive cyber security.</p><ul><li>Explore computer networking and cryptography</li><li>Learn the basics of Linux, Windows, and AD</li><li>Explore the world of offensive cyber security</li><li>Discover the techniques of defensive security</li></ul>',
                                isUserOwner: false
                            },
                            {
                                _id: '67fd686b97fa7316a0555134',
                                name: 'pathway-beginner',
                                userId: '5fe8edca26b8416e6267b047',
                                fullName: 'Maël Goujon',
                                certId: 'THM-COY8XDAOZI',
                                url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-COY8XDAOZI.pdf',
                                imageUrl: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-COY8XDAOZI.png',
                                achieved: '2025-04-14T19:56:27.003Z',
                                title: 'Beginner',
                                description: '<p>Learn the basics of cyber security and how to get started.</p><ul><li>Introduction to cyber security concepts</li><li>Basic networking and system knowledge</li><li>Understanding of common vulnerabilities</li><li>Hands-on exercises to reinforce learning</li></ul>',
                                isUserOwner: false
                            }
                        ]
                    }
                };
                setCertificates(certificatesResponse.data.docs);
>>>>>>> iframe
                setIsLoadingCertificates(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoadingStats(false);
                setIsLoadingCertificates(false);
            }
        };

        fetchData();
    }, []);

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
                                {isLoadingStats ? (
                                    <StatLoader />
                                ) : (
                                    <>
                                        <span className="stat-value">{badges}</span>
                                        <span className="stat-label">{t('cybersecurity.stats.badges')}</span>
                                    </>
                                )}
                            </div>
                            <div className="stat">
                                {isLoadingStats ? (
                                    <StatLoader />
                                ) : (
                                    <>
                                        <span className="stat-value">{completionPercentage}</span>
                                        <span className="stat-label">{t('cybersecurity.stats.completion')}</span>
                                    </>
                                )}
                            </div>
                            <div className="stat">
                                {isLoadingStats ? (
                                    <StatLoader />
                                ) : (
                                    <>
                                        <span className="stat-value">Top {ranking}</span>
                                        <span className="stat-label">{t('cybersecurity.stats.ranking')}</span>
                                    </>
                                )}
                            </div>
                            <div style={{ width: '329px', height: '88px' }} className="thm-badge">
                                <iframe
                                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=295697"
                                    style={{ border: 'none', width: '100%', height: '100px', display: 'block' }}
                                    title="TryHackMe Badge"
                                ></iframe>
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
                <p className="data-refresh-date">Data refreshed on: 15 July 2025</p>
                <div className="certificates-grid">
                    {isLoadingCertificates ? (
                        Array.from({ length: 3 }, (_, index) => (
                            <CertificateLoader key={`loader-${index}`} />
                        ))
                    ) : (
                        certificates.map((certificate) => (
                            <div key={certificate._id} className="certificate-card">
                                <img src={certificate.imageUrl} alt={certificate.title} className="certificate-image" />
                                <h2 className="certificate-title">{certificate.title}</h2>
                                <p className="certificate-date">{new Date(certificate.achieved).toLocaleDateString()}</p>
                                <div
                                    className="certificate-description"
                                    dangerouslySetInnerHTML={{ __html: stripHtmlTags(certificate.description) }}
                                />
                                <div className="certificate-details">
                                    <p><strong>Certificate ID:</strong> {certificate.certId}</p>
                                    <p><strong>Issued By:</strong> TryHackMe</p>
                                    <p><strong>Issued To:</strong> {certificate.fullName}</p>
                                </div>
                                <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="certificate-link">
                                    {t('cybersecurity.certificates.viewCertificate')}
                                </a>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};

export default CyberSecurity;
