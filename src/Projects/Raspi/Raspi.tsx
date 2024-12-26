import { Document, pdfjs, Page } from 'react-pdf';
import { useState } from 'react';

function PDF() {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    function handlePreviousPage(event: React.MouseEvent) {
        event.preventDefault();
        setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
    }

    function handleNextPage(event: React.MouseEvent) {
        event.preventDefault();
        setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Document file="/public/projects/Raspi/CR_Raspi.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page renderAnnotationLayer={false} renderTextLayer={false} pageNumber={pageNumber} />
                </Document>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div onClick={handlePreviousPage} style={{ cursor: "pointer" }}>
                    {"<"}
                </div>
                <p style={{ margin: "0 10px" }}>
                    Page {pageNumber} of {numPages}
                </p>
                <div onClick={handleNextPage} style={{ cursor: "pointer" }}>
                    {">"}
                </div>
            </div>
        </>
    );
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export function RaspiPDF() {
    const [showMyApp, setShowMyApp] = useState(false);

    return (
        <div>
            <button onClick={() => setShowMyApp(true)}>Afficher le PDF</button>
            {showMyApp && <PDF />}
        </div>
    );
}

export function RaspiDescription() {
    return (
        <div>
            <h1>
                Description :
            </h1>
            <p>
                Ce mini-projet avait pour objectif de transformer un Raspberry Pi 5 en une box Internet capable de gérer différents services réseau. L’idée était de reproduire les fonctionnalités qu’on retrouve dans une box commerciale, tout en apprenant à installer et configurer des outils essentiels sur un matériel limité.
            </p>
        </div>
    );
}

export function RaspiDetails() {
    return (
        <div>
            <h1>
                Services essentiels :
            </h1>
            <p>
                <h2>Configuration d’un point d’accès Wi-Fi (RaspAP)</h2>
                <h2>
                    Gestion des adresses IP avec DHCP</h2>
                <h2>
                    Translation de réseaux</h2>
            </p>
            <h1>
                Services secondaires :
            </h1>

            <h2>Partage de fichiers (Samba) :</h2>
            <p>
                - Installation et configuration de répertoires partagés.
                <br />
                - Gestion des permissions et des utilisateurs.
            </p>
            <h2>
                Serveur FTP :
            </h2>
            <p>
                - Mise en place de vsftpd avec accès restreint à chaque utilisateur.
            </p>
            <h2>
                VPN (WireGuard) :
            </h2>
            <p>
                - Installation via Docker pour un accès sécurisé au réseau local.
            </p>
            <h2>
                Seedbox :
            </h2>
            <p>
                - Installation et configuration de qBittorrent en mode sans interface graphique.
            </p>
            <h2>
                AdGuard Home (remplaçant Pi-hole) :
            </h2>
            <p>
                - Installation d’un serveur DNS avec blocage de publicités.
                <br />
                - Configuration sur le port 5300 pour éviter les conflits avec dnsmasq de RaspAP.
            </p>
            <h1>
                Fonctionnalités supplémentaires :
            </h1>

            <h2>Utilisation de la board GPIO</h2>
            <p>
                Les boutons GPIO permettent d’activer/désactiver le Wi-Fi.
                <br />
                Les LEDs indiquent l’état du hotspot :
                <br />
                - Une LED verte indique que le hotspot est actif.
                <br />
                - Une LED rouge indique qu’il est désactivé.
                <br />
                Les LEDs s’illuminent proportionnellement au nombre de clients connectés grâce à un script Python.
            </p>
        </div>
    );
}