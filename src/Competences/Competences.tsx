import React from "react";
import { competences } from "./competences";
import "./Competences.css";
import { Link } from "react-router-dom";
import { projetsUniv } from "../Projects/projetsUniv";

export default function Competences() {
  return (
    <div className="competences-container">
      <h1 className="title">
        <span className="title-first-letter">C</span>ompétences
      </h1>
      <div className="description">
        <p>
          Acquises lors de ma formation en informatique, spécialité{" "}
          <Link
            className="underline"
            to="https://www.univ-tlse3.fr/decouvrir-nos-diplomes/but-informatique-parcours-deploiement-dapplications-communicantes-et-securisees-toulouse"
            target="_blank"
          >
            réseau et sécurité
          </Link>
          .
        </p>
        <p>
          Niveau 1 acquis en première année, niveau 2 en deuxième année, etc.
        </p>
        <p>
          Les niveaux sont communs à toutes les spécialités (développement,
          bases de données, réseau et sécurité).
        </p>
        <p>
          Le niveau 3 n'est atteint que pour les compétences en réseau et
          sécurité.
        </p>
        <p>
          <Link
            className="underline"
            to="https://www.univ-tlse3.fr/decouvrir-nos-diplomes/but-informatique-parcours-deploiement-dapplications-communicantes-et-securisees-toulouse#programme"
            target="_blank"
          >
            Programme national de formation
          </Link>
        </p>
      </div>
      <div className="competences">
        {competences.map((competence) => (
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
                    <img
                      src={project.imageLink}
                      alt={project.title}
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
  );
}
