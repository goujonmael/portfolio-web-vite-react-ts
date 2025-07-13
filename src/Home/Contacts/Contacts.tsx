import "./Contacts.css";
import LinkedInIcon from "../../assets/Icons/LinkedInIcon";
import GitHubIcon from "../../assets/Icons/GitHubIcon";
import CVIcon from "../../assets/Icons/CVIcon";
import MailIcon from "../../assets/Icons/MailIcon";
import THMIcon from "../../assets/Icons/THMIcon";

const Contacts = () => {

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h1 className="contacts-title">Restons en contact</h1>
        <p className="contacts-subtitle">
          N'hésitez pas à me contacter pour discuter de vos projets ou opportunités
        </p>
      </div>

      <div className="contacts-grid">

        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-icon">
              <LinkedInIcon />
            </div>
            <div className="contact-card-info">
              <h3>LinkedIn</h3>
              <p>Connectons-nous professionnellement</p>
            </div>
          </div>
          <div className="contact-card-footer">
            <button
              onClick={() => window.open("https://www.linkedin.com/in/ma%C3%ABl-goujon-88635b227", "_blank", "noopener,noreferrer")}
              className="contact-button"
            >
              Voir le profil
            </button>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-icon">
              <CVIcon />
            </div>
            <div className="contact-card-info">
              <h3>Mon CV</h3>
              <p>Téléchargez mon curriculum vitae</p>
            </div>
          </div>
          <div className="contact-card-footer">
            <button
              onClick={() => window.open("/files/CV_GOUJON_Mael.pdf", "_blank", "noopener,noreferrer")}
              className="contact-button"
            >
              Télécharger PDF
            </button>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-icon">
              <MailIcon />
            </div>
            <div className="contact-card-info">
              <h3>Par courriel</h3>
              <p>Contactez-moi aussi par mail</p>
            </div>
          </div>
          <div className="contact-card-footer">
            <button
              onClick={() => window.open("mailto:goujonmael@gmail.com", "_blank", "noopener,noreferrer")}
              className="contact-button"
            >
              Envoyer un email
            </button>
          </div>
        </div>
      </div>

      <div className="contacts-header">
        <h1 className="contacts-title">Me retrouver</h1>
        <p className="contacts-subtitle">
          Vous pouvez aussi me retrouver sur les plateformes suivantes :
        </p>
      </div>
      <div className="contacts-grid">


        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-icon">
              <THMIcon />
            </div>
            <div className="contact-card-info">
              <h3>TryHackMe</h3>
              <p>Accédez à mes classements et exploits</p>
            </div>
          </div>
          <div className="contact-card-footer">
            <button
              onClick={() => window.open("https://tryhackme.com/p/GoGoGadg3t", "_blank", "noopener,noreferrer")}
              className="contact-button"
            >
              Voir le profil
            </button>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-icon">
              <GitHubIcon />
            </div>
            <div className="contact-card-info">
              <h3>GitHub Personnel</h3>
              <p>Explorez mes projets personnels</p>
            </div>
          </div>
          <div className="contact-card-footer">
            <button
              onClick={() => window.open("https://github.com/goujonmael", "_blank", "noopener,noreferrer")}
              className="contact-button"
            >
              Voir les projets
            </button>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-icon">
              <GitHubIcon />
            </div>
            <div className="contact-card-info">
              <h3>GitHub Étudiant</h3>
              <p>Découvrez mes projets académiques</p>
            </div>
          </div>
          <div className="contact-card-footer">
            <button
              onClick={() => window.open("https://github.com/maelgoujon", "_blank", "noopener,noreferrer")}
              className="contact-button"
            >
              Voir les projets
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Contacts;
