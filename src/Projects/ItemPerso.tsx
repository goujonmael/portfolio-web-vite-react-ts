import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../index.css";
import Markdown from 'react-markdown'

//import { projetsPerso } from "./projetsPerso";
import GitHubIcon from "../assets/Icons/GitHubIcon";

interface ItemPersoProps {
  id: string;
}

export function ItemPerso({ projetsPerso, id }) {
  console.log("id", id);
  const [isMobile, setIsMobile] = useState(false);
  const {
    category,
    title,
    description,
    imageLink,
    customComponent,
    github,
    pdf,
  } = projetsPerso.find((item) => item.id == id) || {};

  const name = projetsPerso.find((item) => item.id == id).name;
  console.log("item", projetsPerso.find((item) => item.id == id));
  // if github is not defined then set it to google.fr
  const githubUrl = github || projetsPerso.find((item) => item.id == id).html_url;


  // getting the readme.md from https://raw.githubusercontent.com/goujonmael/{name}/master/README.md
  const [details, setDetails] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/goujonmael/${name}/master/README.md`)
      .then((response) => response.text())
      .then((text) => {
        setDetails(text);
        setLoading(false);
      });
  }, []);



  // created_at
  // html_url
  // language
  // pushed_at
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
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        navigate("/projets-perso");
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
        onClick={() => navigate("/projets-perso")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 30 30"
          fill="var(--yellow)"
        >
          <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
        </svg>
      </motion.button>
      <div className="overlay" onClick={() => navigate("/projets-perso")} />
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
        exit={{ opacity: 0, backdropFilter: isMobile ? "none" : "blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={imageLink} alt="" style={{ backgroundColor: "white" }} />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title ? title : name}</h2>
          </motion.div>

          <motion.div className="content-container" animate>
            <div className="Links">
              {githubUrl && (
                <div className="github-link">
                  <Link to={githubUrl} target="_blank" rel="noopener noreferrer">
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
            </div>
            <div>{description}</div>
            <Markdown>{details}</Markdown>
            <div>{customComponent}</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
