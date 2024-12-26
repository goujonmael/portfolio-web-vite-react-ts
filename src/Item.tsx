import React from "react";
import { motion } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { projets } from "./projets";
import { useEffect, useState } from "react";

export function Item({ id }) {
  const [isMobile, setIsMobile] = useState(false);
  const { level, title, description, precedentLevels, precedentLevelsDescriptions, imageLink, customComponent } = projets.find((item) => item.id === id);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable scrolling on the body when the modal is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/projets" />
      </motion.div>
      <motion.div
        className="card-content-container open"
        initial={{ opacity: 1, backdropFilter: isMobile ? "none" : "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: isMobile ? "none" : "blur(10px)" }}
        exit={{ opacity: 0, backdropFilter: isMobile ? "none" : "blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
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
            <span className="category">{level}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            {customComponent}
            {description}
            {precedentLevels.map((level, index) => (
              <React.Fragment key={index}>
                <div>{level}</div>
                <div>{precedentLevelsDescriptions[index]}</div>
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}