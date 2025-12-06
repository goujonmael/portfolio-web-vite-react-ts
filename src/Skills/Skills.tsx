import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout/PageLayout';
import { skillsData, Skill } from '../data/skillsData';
import './Skills.css';
import { staggerContainer, staggerItem } from '../utils/animations';
import GitHubIcon from '../assets/Icons/GitHubIcon';

const CATEGORY_ORDER = ['security', 'devops', 'tools', 'backend', 'frontend'];

const Skills: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language.split('-')[0] as 'fr' | 'en';

  const skills = skillsData[currentLanguage] || skillsData.en;

  const { categories, skillsByCategory } = useMemo(() => {
    const grouped: Record<string, Skill[]> = {};

    skills.forEach((skill) => {
      if (!grouped[skill.category]) {
        grouped[skill.category] = [];
      }
      grouped[skill.category].push(skill);
    });

    const discovered = Object.keys(grouped);
    const ordered = [
      ...CATEGORY_ORDER.filter((key) => discovered.includes(key)),
      ...discovered.filter((key) => !CATEGORY_ORDER.includes(key)),
    ];

    return {
      categories: ordered,
      skillsByCategory: grouped,
    };
  }, [skills]);

  const firstCategory = categories[0] ?? '';
  const [activeCategory, setActiveCategory] = useState(firstCategory);

  useEffect(() => {
    setActiveCategory(firstCategory);
  }, [firstCategory]);

  const activeSkills = activeCategory ? skillsByCategory[activeCategory] ?? [] : [];

  const getCategoryLabel = (category: string) => {
    const key = `skills.category.${category}`;
    const translated = t(key);
    return translated === key ? category : translated;
  };

  const formatCategoryCount = (category: string) =>
    t('skills.preview.count', { count: skillsByCategory[category]?.length ?? 0 });

  return (
    <PageLayout
      title={t('skills.title')}
      subtitle={t('skills.subtitle')}
      seoTitle={t('seo.skills.title')}
      seoDescription={t('seo.skills.description')}
      seoKeywords={t('seo.skills.keywords')}
      seoUrl="/skills"
    >
      <div className="skills-layout">
        <header className="skills-preview">
          <div>
            <p className="skills-eyebrow">{t('skills.preview.title')}</p>
            <p className="skills-preview-subtitle">{t('skills.preview.subtitle')}</p>
          </div>
          <p className="skills-preview-hint">{t('skills.preview.hint')}</p>
        </header>

        <div className="skills-categories-grid">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                type="button"
                key={cat}
                className={`skills-category-preview${
                  isActive ? ' skills-category-preview--active' : ''
                }`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={isActive}
              >
                <div className="skills-category-preview-header">
                  <h3>{getCategoryLabel(cat)}</h3>
                  <span>{formatCategoryCount(cat)}</span>
                </div>
                <span className="skills-category-cta">{t('skills.preview.button')}</span>
              </button>
            );
          })}
        </div>

        <section className="skills-active-panel">
          <div className="skills-active-header">
            <div>
              <p className="skills-active-eyebrow">{t('skills.preview.active')}</p>
              <h3 className="skills-active-title">
                {activeCategory ? getCategoryLabel(activeCategory) : t('skills.title')}
              </h3>
            </div>
            <p className="skills-active-count">
              {t('skills.preview.count', { count: activeSkills.length })}
            </p>
          </div>

          {activeSkills.length === 0 ? (
            <p className="skills-empty">{t('skills.preview.empty')}</p>
          ) : (
            <motion.div
              key={activeCategory}
              className="skills-category-group"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {activeSkills.map((skill: Skill, index: number) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  variants={staggerItem}
                >
                  <div className="skill-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <h3 className="skill-name">{skill.name}</h3>
                      {skill.link && (
                        <a
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: 'flex', alignItems: 'center', transform: 'scale(0.8)' }}
                          title={t('skills.viewOnGitHub')}
                        >
                          <GitHubIcon />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="skill-origin">
                    {t(`skills.origin.${skill.origin}`)}
                  </div>
                  {skill.proficiency && (
                    <div className="skill-proficiency" title={`${skill.proficiency}%`}>
                      <motion.div
                        className="skill-proficiency-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>
      </div>
    </PageLayout>
  );
};

export default Skills;
