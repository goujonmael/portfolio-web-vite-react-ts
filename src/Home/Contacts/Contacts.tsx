import "./Contacts.css";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "../../assets/Icons/LinkedInIcon";
import GitHubIcon from "../../assets/Icons/GitHubIcon";
import CVIcon from "../../assets/Icons/CVIcon";
import MailIcon from "../../assets/Icons/MailIcon";
import THMIcon from "../../assets/Icons/THMIcon";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h1 className="contacts-title">{t('home.contact.stayInTouch')}</h1>
        <p className="contacts-subtitle">
          {t('home.contact.subtitle')}
        </p>
      </div>

      <div className="contacts-grid">

        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-icon">
              <LinkedInIcon />
            </div>
            <div className="contact-card-info">
              <h3>{t('home.contact.linkedin')}</h3>
              <p>{t('home.contact.linkedinDesc')}</p>
            </div>
          </div>
          <div className="contact-card-footer">
            <button
              onClick={() => window.open("https://www.linkedin.com/in/ma%C3%ABl-goujon-88635b227", "_blank", "noopener,noreferrer")}
              className="contact-button"
            >
              {t('home.contact.viewProfile')}
            </button>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-icon">
              <CVIcon />
            </div>
            <div className="contact-card-info">
              <h3>{t('home.contact.cv')}</h3>
              <p>{t('home.contact.cvDesc')}</p>
            </div>
          </div>
          <div className="contact-card-footer">
            <button
              onClick={() => window.open("/files/CV_GOUJON_dev.pdf", "_blank", "noopener,noreferrer")}
              className="contact-button"
            >
              {t('home.contact.downloadPDFdev')}
            </button>
            <button
              onClick={() => window.open("/files/CV_GOUJON_cyber.pdf", "_blank", "noopener,noreferrer")}
              className="contact-button"
            >
              {t('home.contact.downloadPDFcyber')}
            </button>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-icon">
              <MailIcon />
            </div>
            <div className="contact-card-info">
              <h3>{t('home.contact.byEmail')}</h3>
              <p>{t('home.contact.emailDesc')}</p>
            </div>
          </div>
          <div className="contact-card-footer">
            <button
              onClick={() => window.open("mailto:goujonmael@gmail.com", "_blank", "noopener,noreferrer")}
              className="contact-button"
            >
              {t('home.contact.emailAction')}
            </button>
          </div>
        </div>
      </div>

      <div className="contacts-header">
        <h1 className="contacts-title">{t('home.contact.findMe')}</h1>
        <p className="contacts-subtitle">
          {t('home.contact.platformsSubtitle')}
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
              <p>{t('home.contact.tryhackmeDesc')}</p>
            </div>
          </div>
          <div className="contact-card-footer">
            <button
              onClick={() => window.open("https://tryhackme.com/p/GoGoGadg3t", "_blank", "noopener,noreferrer")}
              className="contact-button"
            >
              {t('home.contact.viewProfile')}
            </button>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-icon">
              <GitHubIcon />
            </div>
            <div className="contact-card-info">
              <h3>{t('home.contact.githubPersonal')}</h3>
              <p>{t('home.contact.githubPersonalDesc')}</p>
            </div>
          </div>
          <div className="contact-card-footer">
            <button
              onClick={() => window.open("https://github.com/goujonmael", "_blank", "noopener,noreferrer")}
              className="contact-button"
            >
              {t('home.contact.viewProjects')}
            </button>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-icon">
              <GitHubIcon />
            </div>
            <div className="contact-card-info">
              <h3>{t('home.contact.githubStudent')}</h3>
              <p>{t('home.contact.githubStudentDesc')}</p>
            </div>
          </div>
          <div className="contact-card-footer">
            <button
              onClick={() => window.open("https://github.com/maelgoujon", "_blank", "noopener,noreferrer")}
              className="contact-button"
            >
              {t('home.contact.viewProjects')}
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Contacts;
