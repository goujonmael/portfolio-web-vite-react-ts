import React from 'react';

const BritishFlag: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="24"
    height="18"
    viewBox="0 0 24 18"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="24" height="18" fill="#012169" />
    <path d="M0 0L24 18M24 0L0 18" stroke="#FFFFFF" strokeWidth="3" />
    <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="2" />
    <path d="M12 0V18M0 9H24" stroke="#FFFFFF" strokeWidth="5" />
    <path d="M12 0V18M0 9H24" stroke="#C8102E" strokeWidth="3" />
  </svg>
);

export default BritishFlag;
