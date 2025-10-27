import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animations';
import SEO from '../SEO/SEO';
import PageTitle from '../PageTitle/PageTitle';
import './PageLayout.css';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  seoUrl: string;
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  seoTitle,
  seoDescription,
  seoKeywords,
  seoUrl,
  children,
  className = ''
}) => {
  return (
    <motion.main 
      className={`page-layout ${className}`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      role="main"
    >
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        url={seoUrl}
      />
      <div className="page-layout-header">
        <PageTitle>{title}</PageTitle>
        {subtitle && <p className="page-layout-subtitle">{subtitle}</p>}
      </div>
      <div className="page-layout-content">
        {children}
      </div>
    </motion.main>
  );
};

export default PageLayout;
