import { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "../assets/Icons/LinkedInIcon";
import GitHubIcon from "../assets/Icons/GitHubIcon";
import CVIcon from "../assets/Icons/CVIcon";
import MailIcon from "../assets/Icons/MailIcon";
import LanguageSwitch from "../components/LanguageSwitch/LanguageSwitch";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="header-desktop">
        <div className="language-switch-container">
          <LanguageSwitch />
        </div>
        <nav className="nav-desktop">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")} end>
            {t('header.home')}
          </NavLink>
          <NavLink to="/scolarite" className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")}>
            {t('header.education')}
          </NavLink>
          <NavLink to="/cybersecurity" className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")}>
            {t('header.cybersecurity')}
          </NavLink>
          <NavLink to="/competences" className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")}>
            {t('header.skills')}
          </NavLink>
          <NavLink to="/projets-univ" className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")}>
            {t('header.universityProjects')}
          </NavLink>
          <NavLink to="/projets-perso" className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")}>
            {t('header.personalProjects')}
          </NavLink>
        </nav>
        <div className="nav-footer-desktop">
          <a
            href="https://www.linkedin.com/in/ma%C3%ABl-goujon-88635b227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            {t('home.contact.linkedin')}
          </a>
          <a
            href="https://github.com/maelgoujon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            Git Etudiant
          </a>
          <a
            href="https://github.com/goujonmael"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            Git Personnel
          </a>
          <a
            href="/files/CV_GOUJON_dev.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CVIcon />
            {t('home.contact.cv')}
          </a>
          <a href="mailto:goujonmael@gmail.com">
            <MailIcon />
            {t('home.contact.title')}
          </a>
        </div>
      </div>
      <div className="header-mobile">
        <div className="language-switch-container">
          <LanguageSwitch />
        </div>
        <button
          className={`burger-menu ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
      </div>
      <button
        type="button"
        aria-label="Close navigation"
        className={`nav-overlay ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
        onKeyDown={(e) => {
          if (e.key === 'Escape') closeMenu();
        }}
      />
      <div className={`nav-sidebar ${isOpen ? "open" : ""}`}>
        <div className="nav-header">
        </div>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")} end onClick={closeMenu}>
            {t('header.home')}
          </NavLink>
          <NavLink to="/scolarite" className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")} onClick={closeMenu}>
            {t('header.education')}
          </NavLink>
          <NavLink to="/cybersecurity" className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")} onClick={closeMenu}>
            {t('header.cybersecurity')}
          </NavLink>
          <NavLink to="/competences" className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")} onClick={closeMenu}>
            {t('header.skills')}
          </NavLink>
          <NavLink to="/projets-univ" className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")} onClick={closeMenu}>
            {t('header.universityProjects')}
          </NavLink>
          <NavLink to="/projets-perso" className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")} onClick={closeMenu}>
            {t('header.personalProjects')}
          </NavLink>
        </nav>
        <div className="nav-footer">
          <a
            href="https://www.linkedin.com/in/ma%C3%ABl-goujon-88635b227"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <LinkedInIcon />
            {t('home.contact.linkedin')}
          </a>
          <a
            href="https://github.com/maelgoujon"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <GitHubIcon />
            Git Etudiant
          </a>
          <a
            href="https://github.com/goujonmael"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <GitHubIcon />
            Git Personnel
          </a>
          <a
            href="/files/CV_GOUJON_dev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <CVIcon />
            {t('home.contact.cv')}
          </a>
          <a href="mailto:goujonmael@gmail.com" onClick={closeMenu}>
            <MailIcon />
            {t('home.contact.title')}
          </a>
        </div>
      </div>
    </header>
  );
}
