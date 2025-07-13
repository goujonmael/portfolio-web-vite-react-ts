import React from 'react';
import { useTranslation } from 'react-i18next';
import './Scolarite.css';

const Scolarite: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div className="scolarite-container">
            <div className="scolarite-header">
                <h1 className="scolarite-title">{t('education.title')}</h1>
            </div>

            <section>
                <h2 className="section-title">{t('education.internshipsTitle')}</h2>
                <div className="formation-list">
                    <div className="formation-card">
                        <div className="formation-header">
                            <div className="formation-info">
                                <h3 className="formation-title">{t('education.internship')} - 24 {t('education.months')}</h3>
                                <p className="formation-etablissement">{t('education.airbusSatellites')}</p>
                            </div>
                            <div className="formation-date">09/2024 - 08/2026</div>
                        </div>
                    </div>
                    <div className="formation-card">
                        <div className="formation-header">
                            <div className="formation-info">
                                <h3 className="formation-title">{t('education.internshipShort')} - 11 {t('education.weeks')}</h3>
                                <p className="formation-etablissement">{t('education.airbusOneWeb')}</p>
                            </div>
                            <div className="formation-date">04/2024 - 06/2024</div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="section-title">{t('education.educationTitle')}</h2>
                <div className="formation-list">
                    <div className="formation-card">
                        <div className="formation-header">
                            <div className="formation-info">
                                <h3 className="formation-title">L3 Informatique Réseaux et Telecoms</h3>
                                <p className="formation-etablissement">Universite de Toulouse (Paul Sabatier)</p>
                            </div>
                            <div className="formation-date">2025 - Présent</div>
                        </div>
                    </div>
                    <div className="formation-card">
                        <div className="formation-header">
                            <div className="formation-info">
                                <h3 className="formation-title">BUT Informatique</h3>
                                <p className="formation-specialite">Déploiement d'Applications Communicantes et Sécurisées</p>
                                <p className="formation-etablissement">Universite de Toulouse (Paul Sabatier)</p>
                            </div>
                            <div className="formation-date">2024 - 2025</div>
                        </div>
                    </div>
                    <div className="formation-card">
                        <div className="formation-header">
                            <div className="formation-info">
                                <h3 className="formation-title">DUT Informatique</h3>
                                <p className="formation-specialite">Déploiement d'Applications Communicantes et Sécurisées</p>
                                <p className="formation-etablissement">Universite de Toulouse (Paul Sabatier)</p>
                            </div>
                            <div className="formation-date">2022 - 2024</div>
                        </div>
                    </div>
                    <div className="formation-card">
                        <div className="formation-header">
                            <div className="formation-info">
                                <h3 className="formation-title">Classe préparatoire</h3>
                                <p className="formation-specialite">Sciences de l'ingénieur</p>
                                <p className="formation-etablissement">INSA Toulouse</p>
                            </div>
                            <div className="formation-date">2021 - 2022</div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Scolarite;
