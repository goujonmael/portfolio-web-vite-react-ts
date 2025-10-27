import "./Competences.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO/SEO";
import { projetsUniv } from "../Projects/projetsUniv";
import { competences } from "./competences";
import LazyImage from "../components/LazyImage/LazyImage";

interface Competence {
  id: number;
  level: number;
  title: string;
  description: string;
}

export default function Competences() {
  const { t } = useTranslation();

  return (
    <main className="competences-container">
      <SEO
        title={t('seo.skills.title')}
        description={t('seo.skills.description')}
        keywords={t('seo.skills.keywords')}
        url="/competences"
      />
      <h1 className="title">
        <span className="title-first-letter">C</span>ompétences
      </h1>
      <div className="content">
        <div className="description">
          <p>
            {t('skills.intro')} {" "}
            <Link
              className="underline"
              to="https://www.univ-tlse3.fr/decouvrir-nos-diplomes/but-informatique-parcours-deploiement-dapplications-communicantes-et-securisees-toulouse"
              target="_blank"
            >
              {t('skills.networkSecurity')}
            </Link>
            .
          </p>
          <p>
            {t('skills.levelsExplanation')}
          </p>
          <p>
            {t('skills.commonLevels')}
          </p>
          <p>
            {t('skills.networkSecurityLevel')}
          </p>
          <p>
            <Link
              className="underline"
              to="https://www.univ-tlse3.fr/decouvrir-nos-diplomes/but-informatique-parcours-deploiement-dapplications-communicantes-et-securisees-toulouse#programme"
              target="_blank"
            >
              {t('skills.nationalTrainingProgram')}
            </Link>
          </p>
        </div>
        <div className="competences">
          {competences.map((competence: Competence) => (
            <div key={competence.id} className="competence">
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
      </div>
    </main>
  );
}