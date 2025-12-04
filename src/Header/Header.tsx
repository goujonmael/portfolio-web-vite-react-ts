
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
      </div>

      {/* Mobile Header */}
      <div className="header-mobile">
        <motion.div
          className="language-switch-container"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <LanguageSwitch />
        </motion.div>
        <button
          className={`burger-menu ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay and Sidebar */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut"
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="nav-sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <nav className="nav-links" role="navigation">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => (isActive ? "nav-a-active" : "nav-a")}
                    end={link.end}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <div className="nav-footer">
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
                  href="/files/CV_GOUJON_cyber.pdf"
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
