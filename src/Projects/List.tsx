import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projetsUniv } from "./projetsUniv";
import LazyImage from "../components/LazyImage/LazyImage";

interface CardProps {
  id: string;
  title: string;
  category: string;
  imageLink: string;
  github: string;
  pdf: string;
  isSelected: boolean;
}

function Card({ id, title, category, imageLink }: CardProps) {
  return (
    <li className={`card`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <LazyImage className="card-image" src={imageLink ?? ''} alt={title ?? ''} />
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
      <Link to={`/projets-univ/${id}`} className={`card-open-link`} />
    </li>
  );
}

interface ListProps {
  selectedId: string;
}

export function List({ selectedId }: ListProps) {
  return (
    <ul className="card-list">
      {projetsUniv.map((card) => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
