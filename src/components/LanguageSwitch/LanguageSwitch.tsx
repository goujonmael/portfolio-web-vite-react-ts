import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FrenchFlag from '../../assets/Icons/FrenchFlag';
import BritishFlag from '../../assets/Icons/BritishFlag';
import './LanguageSwitch.css';

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const switchRef = useRef<HTMLDivElement>(null);
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const langs = [
    { code: 'fr', label: 'Français', Flag: FrenchFlag },
    { code: 'en', label: 'English', Flag: BritishFlag },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  useEffect(() => {
    if (!switchRef.current) return;
    const container = switchRef.current;
    let target: HTMLElement | null = null;
    if (hoveredIdx !== null) {
      target = container.querySelectorAll('.language-btn')[hoveredIdx] as HTMLElement;
    } else {
      target = container.querySelector('.language-btn.active') as HTMLElement;
    }
    if (target) {
      const contRect = container.getBoundingClientRect();
      const btnRect = target.getBoundingClientRect();
      setHighlightStyle({
        left: btnRect.left - contRect.left + container.scrollLeft,
        width: btnRect.width,
        top: btnRect.top - contRect.top + container.scrollTop,
        height: btnRect.height,
        opacity: 1,
      });
    } else {
      setHighlightStyle({ opacity: 0 });
    }
  }, [i18n.language, hoveredIdx]);

  return (
    <div className="language-switch" ref={switchRef} role="tablist" aria-label="Language switch" style={{ position: 'relative' }}>
      <div className="language-highlight" style={highlightStyle} />
      {langs.map((lang, idx) => (
        <button
          key={lang.code}
          className={`language-btn${i18n.language === lang.code ? ' active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          aria-label={lang.label}
          aria-pressed={i18n.language === lang.code}
          title={lang.label}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <lang.Flag />
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
