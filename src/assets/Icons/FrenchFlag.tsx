import React from 'react';

const FrenchFlag: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="24"
    height="18"
    viewBox="0 0 24 18"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="8" height="18" fill="#0052CC" />
    <rect x="8" width="8" height="18" fill="#FFFFFF" />
    <rect x="16" width="8" height="18" fill="#FF3333" />
  </svg>
);

export default FrenchFlag;
