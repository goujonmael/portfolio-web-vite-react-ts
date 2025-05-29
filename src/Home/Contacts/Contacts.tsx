import "./Contacts.css";
import LinkedInIcon from "../../assets/Icons/LinkedInIcon";
import GitHubIcon from "../../assets/Icons/GitHubIcon";
import CVIcon from "../../assets/Icons/CVIcon";
import MailIcon from "../../assets/Icons/MailIcon";
import { useState, useRef, useEffect } from "react";

const Contacts = () => {
  const [isDropdownActive, setDropdownActive] = useState(false);
  const sendButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mailDropdownRef = useRef<HTMLDivElement>(null);
  const contactsTilesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contactsTilesRef.current && mailDropdownRef.current) {
      mailDropdownRef.current.style.width = `${contactsTilesRef.current.offsetWidth}px`;
    }
  }, [isDropdownActive]);

  const dropdownClicked = () => {
    setDropdownActive(!isDropdownActive);
  };

  useEffect(() => {
    if (isDropdownActive && dropdownRef.current) {
      setTimeout(() => {
        dropdownRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300); // Délai correspondant à la durée de l'animation CSS
    }
  }, [isDropdownActive]);

  const handleSendMail = () => {
    const subject = document.querySelector("input")?.value || "";
    const body = document.querySelector("textarea")?.value || "";
    window.open(
      `mailto:goujonmael@gmail.com` + `?subject=${subject}&body=${body}`
    );
  };

  return (
    <div>
      <h1 className="contacts-title">Contacts</h1>
      <div className="contacts">
        <div ref={contactsTilesRef} className="contacts-tiles">
          <a
            href="https://www.linkedin.com/in/ma%C3%ABl-goujon-88635b227"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <LinkedInIcon />
            <p className="text">LinkedIn</p>
          </a>
          <a
            href="https://github.com/maelgoujon"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <GitHubIcon />
            <p className="text">Git Etudiant</p>
          </a>
          <a
            href="https://github.com/goujonmael"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <GitHubIcon />
            <p className="text">Git Personnel</p>
          </a>
          <a
            /* télécharger le CV */
            href="/files/CV_GOUJON_Mael.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <CVIcon />
            <p className="text">Mon CV</p>
          </a>
          {/* prendre contact */}

          <a onClick={dropdownClicked} className="link">
            <MailIcon />
            <p className="text">Contacst</p>
            <i className={`arrow ${isDropdownActive ? "up" : "down"}`}></i>
          </a>
        </div>
        <div ref={mailDropdownRef} className={`mailDropdown ${isDropdownActive ? "active" : ""}`}>
          <div className="dropdown-content">
            {/* Email form */}
            <input type="text" placeholder="Sujet" className="subject" />
            <textarea placeholder="Contenu" className="body"></textarea>
            <button
              ref={sendButtonRef}
              onClick={handleSendMail}
              className="sendButton"
            >
              Envoyer
            </button>
          </div>
        </div>
      </div>
      <div ref={dropdownRef} />
    </div>
  );
};

export default Contacts;
