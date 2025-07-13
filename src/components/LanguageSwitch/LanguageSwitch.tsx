import React from 'react';
import { useTranslation } from 'react-i18next';
import FrenchFlag from '../../assets/Icons/FrenchFlag';
import BritishFlag from '../../assets/Icons/BritishFlag';
import './LanguageSwitch.css';

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="language-switch">
      <button
        className={`language-btn ${i18n.language === 'fr' ? 'active' : ''}`}
        onClick={() => changeLanguage('fr')}
        aria-label="Français"
      >
        <FrenchFlag />
      </button>
      <button
        className={`language-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label="English"
      >
        <BritishFlag />
      </button>
    </div>
  );
};

export default LanguageSwitch;
