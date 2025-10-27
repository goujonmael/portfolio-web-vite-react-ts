import "./Competences.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projetsUniv } from "../Projects/projetsUniv";
import { competences } from "./competences";
import LazyImage from "../components/LazyImage/LazyImage";
import PageLayout from "../components/PageLayout/PageLayout";

interface Competence {
  id: number;
  level: number;
  title: string;
  description: string;
}

export default function Competences() {
  const { t } = useTranslation();

  return (
    <PageLayout
      title={t('header.skills')}
      subtitle={t('seo.skills.description')}
      seoTitle={t('seo.skills.title')}
      seoDescription={undefined}
      seoKeywords={t('seo.skills.keywords')}
      seoUrl="/competences"
    >
      <div className="competences">
        {competences.map((competence: Competence) => (
          <div
            key={competence.id}
            className="competence"
          >
            <p className="level">{competence.level}/3</p>
            <h2>{competence.title}</h2>
            <p>{competence.description}</p>
            {/* check if there is a project that have the same competence */}
            <div className="projects">
              {projetsUniv.map((project) =>
                project.competences.includes(competence.title) ? (
                  <Link
                    key={project.id}
                    to={`/projets-univ/${project.id}`}
                    className="project"
                  >
                    <LazyImage
                      src={project.imageLink ?? ''}
                      alt={project.title ?? ''}
                      className="project-image"
                      style={{ backgroundColor: "var(--divider)" }}
                    />
                    <p className="project-p">{project.title}</p>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}