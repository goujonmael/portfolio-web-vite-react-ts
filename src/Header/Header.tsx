import React, { useState } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname.slice(1);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="/" className={path === '' ? 'nav-a-active' : 'nav-a'}>Accueil</a>
        <a href="/competences" className={path === 'competences' ? 'nav-a-active' : 'nav-a'}>Compétences</a>
        <a href="/projets-univ" className={path === 'projets-univ' ? 'nav-a-active' : 'nav-a'}>Projets universitaires</a>
        <a href="/projets-perso" className={path === 'projets-perso' ? 'nav-a-active' : 'nav-a'}>Projets personnels</a>
        <div className="nav-footer">
          <a
            href="https://www.linkedin.com/in/ma%C3%ABl-goujon-88635b227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              color="white"
              aria-hidden
              src="/images/linkedin.svg"
              alt="LinkedIn icon"
              width={30}
              height={30}
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/maelgoujon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              aria-hidden
              src="/images/git.svg"
              alt="GitHub icon"
              width={30}
              height={30}
            />
            Git Etudiant
          </a>
          <a
            href="https://github.com/goujonmael"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              aria-hidden
              src="/images/git.svg"
              alt="GitHub icon"
              width={30}
              height={30}
            />
            Git Personnel
          </a>
          <a
            /* télécharger le CV */
            href="/files/CV_GOUJON_Mael.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              aria-hidden
              src="/images/cv.svg"
              alt="CV icon"
              width={30}
              height={30}
            />
            Mon CV
          </a>
          {/* prendre contact */}
          <a href="mailto:goujonmael@gmail.com">
            <img
              aria-hidden
              src="/images/mail.svg"
              alt="Mail icon"
              width={30}
              height={30}
            />
            Contact
          </a>
        </div>
      </div>
      <button className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
    </header>
  );
}