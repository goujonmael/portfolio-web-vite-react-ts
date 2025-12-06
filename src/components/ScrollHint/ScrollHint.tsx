import { useCallback, useEffect, useMemo, useState } from 'react';
import './ScrollHint.css';

interface ScrollHintProps {
  label: string;
  targetId?: string;
  className?: string;
  stickToBottom?: boolean;
}

const ScrollHint: React.FC<ScrollHintProps> = ({
  label,
  targetId,
  className = '',
  stickToBottom = true
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      setIsVisible(window.scrollY < 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    setIsVisible(false);
  }, [targetId]);

  const wrapperClassName = useMemo(() => {
    const classes = ['scroll-hint-wrapper'];
    if (stickToBottom) classes.push('scroll-hint-wrapper--fixed');
    if (!isVisible) classes.push('scroll-hint-wrapper--hidden');
    return classes.join(' ');
  }, [isVisible, stickToBottom]);

  return (
    <div className={wrapperClassName} role="presentation" aria-hidden={!isVisible}>
      <button
        type="button"
        className={`scroll-hint ${className}`}
        onClick={handleClick}
        aria-label={label}
      >
        <span className="scroll-hint__text">{label}</span>
        <span className="scroll-hint__icon" aria-hidden="true">
          <span className="scroll-hint__chevron" />
        </span>
      </button>
    </div>
  );
};

export default ScrollHint;
