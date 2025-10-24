import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../index.css";
import { projetsUniv } from "./projetsUniv";
import GitHubIcon from "../assets/Icons/GitHubIcon";

interface ItemProps {
  id: string;
}

export function Item({ id }: ItemProps) {
  const [isMobile, setIsMobile] = useState(false);
  const {
    category,
    title,
    description,
    imageLink,
    customComponent,
    details,
    github,
    pdf,
    competences,
  } = projetsUniv.find((item) => item.id === id) || {};
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling on the body when the modal is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") {
        navigate("/projets-univ");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [history]);

  return (
    <div className="modal-container">
      {/*
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
      */}
      {/* close button */}
      <motion.button
        className="close-button"
        onClick={() => navigate("/projets-univ")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 30 30"
          fill="var(--title1)"
        >
          <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
        </svg>
      </motion.button>
      <motion.div
        onClick={() => navigate("/projets-univ")}
        className="overlay"
        initial={{
          opacity: 0,
          filter: "grayscale(100%)",
        }}
        animate={{
          opacity: 1,
          filter: "grayscale(0%)",
        }}
        transition={{
          opacity: { duration: 0.35, ease: "easeInOut" },
          filter: { delay: 0.35, duration: 0.5, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="card-content-container open"
        initial={{
          opacity: 1,
          backdropFilter: isMobile ? "none" : "blur(0px)",
        }}
        animate={{
          opacity: 1,
          backdropFilter: isMobile ? "none" : "blur(10px)",
        }}
        exit={{
          opacity: 0,
          backdropFilter: isMobile ? "none" : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={imageLink} alt="" loading="lazy" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>

          <motion.div className="content-container" animate>
            <div className="Links">
              {github && (
                <div className="github-link">
                  <Link to={github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                  </Link>
                </div>
              )}
              {pdf && (
                <div className="pdf-link">
                  <Link to={pdf} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/images/pdf.svg"
                      alt="pdf logo"
                      className="pdf-logo"
                    />
                  </Link>
                </div>
              )}
              {competences && (
                <div className="competences">
                  <span>Compétences : {competences}</span>
                </div>
              )}
            </div>
            <div>{description}</div>
            <div>{details}</div>
            <div>{customComponent}</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
