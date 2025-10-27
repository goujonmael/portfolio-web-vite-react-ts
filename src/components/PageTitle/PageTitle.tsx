import React from 'react';
import './PageTitle.css';

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ children, className = '' }) => {
  return (
    <h1 className={`page-title ${className}`}>
      {children}
    </h1>
  );
};

export default PageTitle;
