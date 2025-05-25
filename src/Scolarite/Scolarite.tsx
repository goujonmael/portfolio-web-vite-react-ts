import React from 'react';
import './Scolarite.css';

const Scolarite: React.FC = () => {
    return (
        <div className="scolarite-container">
            <h1>Scolarité</h1>
            <section>
                <h2>Parcours Académique</h2>
                <ul className="styled-list">
                    <li className="styled-box">
                        <div className="formation-container">
                            <div className="formation-etablissement">
                                <div className="formation-title-container">
                                    <div className="formation-title">L3 Informatique Reseaux et Telecoms</div>
                                    <div className="date">2025 - Présent</div>
                                </div>
                                <div className="etablissement">Universite de Toulouse (Paul Sabatier)</div>
                            </div>
                        </div>
                    </li>
                    <li className="styled-box">
                        <div className="formation-container">
                            <div className="formation-etablissement">
                                <div className="formation-title-container">
                                    <div className="formation-title">BUT Informatique</div>
                                    <div className="date">2024 - 2025</div>
                                </div>
                                <div className="etablissement">Universite de Toulouse (Paul Sabatier)</div>
                            </div>
                        </div>
                    </li>
                    <li className="styled-box">
                        <div className="formation-container">
                            <div className="formation-etablissement">
                                <div className="formation-title-container">
                                    <div className="formation-title">DUT Informatique</div>
                                    <div className="date">2022 - 2024</div>
                                </div>
                                <div className="specialite">Déploiement d'Applications Communicantes et Sécurisées</div>
                                <div className="etablissement">Universite de Toulouse (Paul Sabatier)</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Alternance et stages</h2>
                <ul className="styled-list">
                    <li className="styled-box">
                        <div className="formation-container">
                            <div className="formation-etablissement">
                                <div className="formation-title-container">
                                    <div className="formation-title">Alternance</div>
                                    <div className="date">09/2024 - 08/2025</div>
                                </div>
                                <div className="etablissement">Airbus Constellations Satellites</div>
                            </div>
                        </div>
                    </li>
                    <li className="styled-box">
                        <div className="formation-container">
                            <div className="formation-etablissement">
                                <div className="formation-title-container">
                                    <div className="formation-title">Stage</div>
                                    <div className="date">04/2024 - 06/2024</div>
                                </div>
                                <div className="etablissement">Airbus OneWeb</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Scolarite;
