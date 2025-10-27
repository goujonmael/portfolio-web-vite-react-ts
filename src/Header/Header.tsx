
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
        <motion.div 
          className="language-switch-container"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <LanguageSwitch />
        </motion.div>
        <div className="nav-desktop" ref={navRef} style={{ position: 'relative' }}>
          <motion.div 
            className="nav-highlight" 
            style={highlightStyle}
            layout
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")}
              end={link.end}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {link.label}
              </motion.span>
            </NavLink>
          ))}
        </div>
        <motion.div 
          className="nav-footer-desktop"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/ma%C3%ABl-goujon-88635b227"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedInIcon />
            {t('home.contact.linkedin')}
          </motion.a>
          <motion.a
            href="https://github.com/maelgoujon"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon />
            Git Etudiant
          </motion.a>
          <motion.a
            href="https://github.com/goujonmael"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon />
            Git Personnel
          </motion.a>
          <motion.a
            href="/files/CV_GOUJON_dev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CVIcon />
            {t('home.contact.cv')}
          </motion.a>
          <motion.a 
            href="mailto:contact@maelg.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MailIcon />
            {t('home.contact.title')}
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
}
