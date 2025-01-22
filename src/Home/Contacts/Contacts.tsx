import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import "./Contacts.css";
import Image from "react-image";
import { transform } from "typescript";
import LinkedInIcon from "../../assets/Icons/LinkedInIcon";
import GitHubIcon from "../../assets/Icons/GitHubIcon";
import CVIcon from "../../assets/Icons/CVIcon";
import MailIcon from "../../assets/Icons/MailIcon";

export default function Contacts() {
  const [isIutHovered, setIsIutHovered] = useState(false);
  const [isAirbusHovered, setIsAirbusHovered] = useState(false);
  const constraintsRef = useRef(null);
  return (
    <div>
      <h1 className="contacts-title">Contacts</h1>
      <div className="contacts">
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
        <a href="mailto:goujonmael@gmail.com" className="link">
          <MailIcon />
          <p className="text">Contact</p>
        </a>
      </div>
    </div>
  );
}
