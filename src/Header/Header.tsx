import { useState } from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "../assets/Icons/LinkedInIcon";
import GitHubIcon from "../assets/Icons/GitHubIcon";
import CVIcon from "../assets/Icons/CVIcon";
import MailIcon from "../assets/Icons/MailIcon";
import LanguageSwitch from "../components/LanguageSwitch/LanguageSwitch";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname.slice(1);
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
          <a href="/" className={path === "" ? "nav-a-active" : "nav-a"}>
            {t('header.home')}
          </a>
          <a
            href="/scolarite"
            className={path === "scolarite" ? "nav-a-active" : "nav-a"}
          >
            {t('header.education')}
          </a>
          <a
            href="/cybersecurity"
            className={path === "cybersecurity" ? "nav-a-active" : "nav-a"}
          >
            {t('header.cybersecurity')}
          </a>
          <a
            href="/competences"
            className={path === "competences" ? "nav-a-active" : "nav-a"}
          >
            {t('header.skills')}
          </a>
          <a
            href="/projets-univ"
            className={path === "projets-univ" ? "nav-a-active" : "nav-a"}
          >
            {t('header.universityProjects')}
          </a>
          <a
            href="/projets-perso"
            className={path === "projets-perso" ? "nav-a-active" : "nav-a"}
          >
            {t('header.personalProjects')}
          </a>
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
            href="/files/CV_GOUJON_Mael.pdf"
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
      <div className={`nav-overlay ${isOpen ? "open" : ""}`} onClick={closeMenu}></div>
      <div className={`nav-sidebar ${isOpen ? "open" : ""}`}>
        <div className="nav-header">
        </div>
        <nav className="nav-links">
          <a href="/" className={path === "" ? "nav-a-active" : "nav-a"} onClick={closeMenu}>
            {t('header.home')}
          </a>
          <a
            href="/scolarite"
            className={path === "scolarite" ? "nav-a-active" : "nav-a"}
            onClick={closeMenu}
          >
            {t('header.education')}
          </a>
          <a
            href="/cybersecurity"
            className={path === "cybersecurity" ? "nav-a-active" : "nav-a"}
            onClick={closeMenu}
          >
            {t('header.cybersecurity')}
          </a>
          <a
            href="/competences"
            className={path === "competences" ? "nav-a-active" : "nav-a"}
            onClick={closeMenu}
          >
            {t('header.skills')}
          </a>
          <a
            href="/projets-univ"
            className={path === "projets-univ" ? "nav-a-active" : "nav-a"}
            onClick={closeMenu}
          >
            {t('header.universityProjects')}
          </a>
          <a
            href="/projets-perso"
            className={path === "projets-perso" ? "nav-a-active" : "nav-a"}
            onClick={closeMenu}
          >
            {t('header.personalProjects')}
          </a>
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
            href="/files/CV_GOUJON_Mael.pdf"
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
