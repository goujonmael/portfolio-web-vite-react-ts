import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <h1 className="headerTitle">Portfolio</h1>
      <div className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="/competences" className="nav-a">Compétences</a>
        <a href="/projets-univ" className="nav-a">Projets universitaires</a>
        <a href="/projets-perso" className="nav-a">Projets personnels</a>
      </div>
      <button className="burger-menu" onClick={toggleMenu}>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
    </header>
  );
}