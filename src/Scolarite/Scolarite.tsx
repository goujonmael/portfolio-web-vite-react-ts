import React from 'react';
import { useTranslation } from 'react-i18next';
import './Scolarite.css';
import LinkedInIcon from '../assets/Icons/LinkedInIcon';
import MailIcon from '../assets/Icons/MailIcon';
import { Formation, Internship } from '../types/education';
import { educationData } from '../data/educationData';
import PageLayout from '../components/PageLayout/PageLayout';

const Scolarite: React.FC = () => {
    const { t, i18n } = useTranslation();

    // Récupération des données selon la langue courante
    const currentLang = i18n.language as 'fr' | 'en';
    const internships: Internship[] = educationData[currentLang]?.internships || educationData.fr.internships;
    const formations: Formation[] = educationData[currentLang]?.formations || educationData.fr.formations;

    const formatDate = (dateDebut: string, duree: string): string => {
        const startYear = dateDebut.split('-')[0];
        const currentYear = new Date().getFullYear();
        
        if (duree === "En cours" || duree === "Ongoing") {
            return `${startYear} - Présent`;
        }
        
        // Pour les stages/alternances avec des dates précises
        if (dateDebut.includes('-')) {
            const [year, month] = dateDebut.split('-');
            const startDate = new Date(parseInt(year), parseInt(month) - 1);
            
            if (duree.includes('mois') || duree.includes('months')) {
                const months = parseInt(duree);
                const endDate = new Date(startDate);
                endDate.setMonth(endDate.getMonth() + months);
                return `${String(startDate.getMonth() + 1).padStart(2, '0')}/${year} - ${String(endDate.getMonth() + 1).padStart(2, '0')}/${endDate.getFullYear()}`;
            } else if (duree.includes('semaines') || duree.includes('weeks')) {
                const weeks = parseInt(duree);
                const endDate = new Date(startDate);
                endDate.setDate(endDate.getDate() + (weeks * 7));
                return `${String(startDate.getMonth() + 1).padStart(2, '0')}/${year} - ${String(endDate.getMonth() + 1).padStart(2, '0')}/${endDate.getFullYear()}`;
            }
        }
        
        // Pour les formations avec juste l'année
        if (duree.includes('an')) {
            const years = parseInt(duree);
            return `${startYear} - ${parseInt(startYear) + years}`;
        }
        
        return `${startYear} - ${currentYear}`;
    };

    return (
        <PageLayout
            title={t('header.education')}
            subtitle={undefined}
            seoTitle={t('seo.education.title')}
            seoDescription={t('seo.education.description')}
            seoKeywords={t('seo.education.keywords')}
            seoUrl="/scolarite"
        >
            <div className="banner">
                <div className="banner-content">
                    <div>{t('education.lookingfor')}</div>
                    <div>{t('education.lookingforduration')}</div>
                    <div>{t('education.lookingforstartmonth')}</div>
                </div>
                <div className="banner-icons">
                    <a href="https://www.linkedin.com/in/maël-goujon-88635b227" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                    <a href="mailto:contact@maelg.com" target="_blank" rel="noopener noreferrer">
                        <MailIcon />
                    </a>
                </div>
            </div>
            <section>
                <h2 className="section-title">
                    {t('education.internshipsTitle')}
                </h2>
                <div className="formation-list">
                    {internships.map((internship, index) => (
                        <div 
                            key={index} 
                            className="formation-card"
                        >
                            <div className="formation-header">
                                <div className="formation-info">
                                    <h3 className="formation-title">{internship.title}</h3>
                                    <p className="formation-specialite">{internship.specialite}</p>
                                    <p className="formation-etablissement">{internship.etablissement}</p>
                                </div>
                                <div className="formation-date">{formatDate(internship.dateDebut, internship.duree)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2 className="section-title">
                    {t('education.educationTitle')}
                </h2>
                <div className="formation-list">
                    {formations.map((formation, index) => (
                        <div 
                            key={index} 
                            className="formation-card"
                        >
                            <div className="formation-header">
                                <div className="formation-info">
                                    <h3 className="formation-title">{formation.title}</h3>
                                    <p className="formation-specialite">{formation.specialite}</p>
                                    <p className="formation-etablissement">{formation.etablissement}</p>
                                </div>
                                <div className="formation-date">{formatDate(formation.dateDebut, formation.duree)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </PageLayout>
    );
};

export default Scolarite;
