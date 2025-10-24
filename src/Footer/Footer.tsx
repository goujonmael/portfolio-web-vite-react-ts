import './Footer.css';


export default function Footer() {
    return (
        <footer className="footer" role="contentinfo" aria-label="Site footer">
            <a
                href="https://www.linkedin.com/in/ma%C3%ABl-goujon-88635b227"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    color="white"
                    aria-hidden
                    src="/images/linkedin.svg"
                    alt="LinkedIn icon"
                    width={30}
                    height={30}
                    loading="lazy"
                />
                <p className="text">
                    LinkedIn
                </p>
            </a>
            <a
                href="https://github.com/maelgoujon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    aria-hidden
                    src="/images/git.svg"
                    alt="GitHub icon"
                    width={30}
                    height={30}
                    loading="lazy"
                />
                <p className="text">Git Etudiant</p>
            </a>
            <a
                href="https://github.com/goujonmael"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    aria-hidden
                    src="/images/git.svg"
                    alt="GitHub icon"
                    width={30}
                    height={30}
                    loading="lazy"
                />
                <p className="text">
                    Git Personnel
                </p>
            </a>
            <a
                /* télécharger le CV */
                href="/files/CV_GOUJON_Mael.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    aria-hidden
                    src="/images/cv.svg"
                    alt="CV icon"
                    width={30}
                    height={30}
                    loading="lazy"
                />
                <p className="text">
                    Mon CV
                </p>
            </a>
            {/* prendre contact */}
            <a href="mailto:contact@maelg.com">
                <img
                    aria-hidden
                    src="/images/mail.svg"
                    alt="Mail icon"
                    width={30}
                    height={30}
                    loading="lazy"
                />
                <p className="text">
                    Contacts
                </p>
            </a>

        </footer>
    )
}

