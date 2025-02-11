import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CardPersoProps {
  id: string;
  title: string;
  category: string;
  imageLink: string;
  github: string;
  pdf: string;
  isSelected: boolean;
}



const CardPerso: React.FC<CardPersoProps> = ({
  id,
  title,
  category,
  imageLink,
  isSelected,
}) => {
  return (
    <li className={`card`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={imageLink} alt="" />
          </motion.div>
          {isSelected && (
            <motion.div
              className="card-image-overlay"
              layoutId={`card-image-overlay-${id}`}
            >
              <p>En savoir plus</p>
            </motion.div>
          )}
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
};

interface ListPersoProps {
  selectedId: string;
  projets: Projet[];
}

interface Projet {
  id: string;
  name: string;
  category: string;
  imageLink: string;
  github: string;
  pdf: string;
}

export function ListPerso({ selectedId, projets }: ListPersoProps) {
  console.log(projets);
  return (
    <ul className="card-list">
      {projets.map((card) => (
        <CardPerso
          key={card.id}
          id={card.id}
          title={card.name}
          isSelected={card.id === selectedId}
        />
      ))}
    </ul>
  );
};
