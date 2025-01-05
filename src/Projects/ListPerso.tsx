import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projetsPerso } from "./projetsPerso";

function CardPerso({ id, title, category, theme, imageLink, github, pdf }) {
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
          </motion.div>
        </motion.div>
      </div>
      <Link to={`/projets-perso/${id}`} className={`card-open-link`} />
    </li>
  );
}

export function ListPerso({ selectedId }) {
  return (
    <ul className="card-list">
      {projetsPerso.map((card) => (
        <CardPerso key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
