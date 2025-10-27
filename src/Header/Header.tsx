
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "../assets/Icons/LinkedInIcon";
import GitHubIcon from "../assets/Icons/GitHubIcon";
import CVIcon from "../assets/Icons/CVIcon";
import MailIcon from "../assets/Icons/MailIcon";
import LanguageSwitch from "../components/LanguageSwitch/LanguageSwitch";


export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Liste des liens pour mapping et gestion hover
  const navLinks = [
    { to: '/', label: t('header.home'), end: true },
    { to: '/scolarite', label: t('header.education') },
    { to: '/cybersecurity', label: t('header.cybersecurity') },
    { to: '/competences', label: t('header.skills') },
    { to: '/projets-univ', label: t('header.universityProjects') },
    { to: '/projets-perso', label: t('header.personalProjects') },
  ];

  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;
    let target: HTMLElement | null = null;
    if (hoveredIndex !== null) {
      // Prend le lien survolé
      const links = nav.querySelectorAll('.nav-a, .nav-a-active');
      target = links[hoveredIndex] as HTMLElement;
    } else {
      // Prend le lien actif
      target = nav.querySelector('.nav-a-active') as HTMLElement;
    }
    if (target) {
      const navRect = nav.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      setHighlightStyle({
        left: targetRect.left - navRect.left + nav.scrollLeft,
        width: targetRect.width,
        top: targetRect.top - navRect.top + nav.scrollTop,
        height: targetRect.height,
        opacity: 1,
      });
    } else {
      setHighlightStyle({ opacity: 0 });
    }
  }, [location, t, hoveredIndex]);

  return (
    <header className="header" role="banner" aria-label="Main header">
      <div className="header-desktop">
        <div className="language-switch-container">
          <LanguageSwitch />
        </div>
        <div className="nav-desktop" ref={navRef} style={{ position: 'relative' }}>
          <div className="nav-highlight" style={highlightStyle} />
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")}
              end={link.end}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
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
          <a href="mailto:contact@maelg.com">
            <MailIcon />
            {t('home.contact.title')}
          </a>
        </div>
      </div>
    </header>
  );
}
