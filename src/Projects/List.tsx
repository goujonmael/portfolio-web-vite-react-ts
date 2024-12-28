import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projetsUniv } from "./projetsUniv";

function Card({ id, title, category, theme, imageLink, github, pdf }) {
  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={imageLink} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>

            <div className="Links" style={{ zIndex: 0 }}>
              {github && (
                <div className="github-link">
                  <Link to={github} target="_blank" rel="noopener noreferrer">
                    <img src="/images/git.svg" alt="github logo" className="github-logo" />
                  </Link>
                </div>
              )}
              {pdf && (
                <div className="pdf-link">
                  <Link to={pdf} target="_blank" rel="noopener noreferrer">
                    <img src="/images/pdf.svg" alt="pdf logo" className="pdf-logo" />
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Link to={`/projets/${id}`} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <ul className="card-list">
      {projetsUniv.map((card) => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
