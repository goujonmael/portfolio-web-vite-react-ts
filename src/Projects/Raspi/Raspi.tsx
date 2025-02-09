import { Document, pdfjs, Page } from "react-pdf";
import { useState } from "react";
import "../Projects.css";

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
    setPageNumber((prevPageNumber) =>
      Math.min(prevPageNumber + 1, numPages ?? 1)
    );
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Document
          file="/public/projects/Raspi/CR_Raspi.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            renderAnnotationLayer={false}
            renderTextLayer={false}
            pageNumber={pageNumber}
          />
        </Document>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
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
      <h1>Description:</h1>
      <p>
        Ce mini-projet avait pour objectif de transformer un Raspberry Pi 5 en
        une box Internet capable de gérer différents services réseau.
      </p>
      <p>
        L’idée était de reproduire les fonctionnalités qu’on retrouve dans une
        box commerciale, tout en apprenant à installer et configurer des outils
        essentiels sur un matériel limité.
      </p>
    </div>
  );
}

export function RaspiDetails() {
  return (
    <div>
      <h1>Services essentiels:</h1>
      <h2>Configuration d’un point d’accès Wi-Fi</h2>
      <p>- RaspAP</p>
      <h2>Gestion des adresses IP</h2>
      <p>- DHCP et dnsmasq</p>
      <h2>Translation de réseaux</h2>
      <p>- NAT et iptables</p>
      <h1>Services secondaires:</h1>
      <h2>Partage de fichiers (Samba):</h2>
      <p>- Installation et configuration de répertoires partagés.</p>
      <p>- Gestion des permissions et des utilisateurs.</p>
      <h2>Serveur FTP:</h2>
      <p>
        - Mise en place de vsftpd avec accès restreint à chaque utilisateur.
      </p>
      <h2>VPN (WireGuard):</h2>
      <p>- Installation via Docker pour un accès sécurisé au réseau local.</p>
      <h2>Seedbox:</h2>
      <p>
        - Installation et configuration de qBittorrent en mode sans interface
        graphique.
      </p>
      <h2>AdGuard Home (remplaçant Pi-hole):</h2>
      <p>- Installation d’un serveur DNS avec blocage de publicités.</p>
      <p>
        - Configuration sur le port 5300 pour éviter les conflits avec dnsmasq
        de RaspAP.
      </p>
      <h1>Fonctionnalités supplémentaires:</h1>
      <h2>Utilisation de la board GPIO</h2>
      <p>Les boutons GPIO permettent d’activer/désactiver le Wi-Fi.</p>
      <p>Les LEDs indiquent l’état du hotspot:</p>
      <p>- Une LED verte indique que le hotspot est actif.</p>
      <p>- Une LED rouge indique qu’il est désactivé.</p>
      <p>
        Les LEDs s’illuminent proportionnellement au nombre de clients connectés
        grâce à un script Python.
      </p>
      <h1>Problèmes rencontrés:</h1>
      <h2>Carte SD corrompue:</h2>
      <p>
        L'utilisation d'une interface web complète pour l'administration de la
        box Internet, bien que pratique, s'est révélée gourmande en ressources.
      </p>
      <p>
        Cela a entraîné une surcharge des cycles d'écriture sur la carte SD,
        provoquant sa corruption.
      </p>
      <h3>Solution:</h3>
      <p>
        Nous avons résolu ce problème en flashant une image système réduite sur
        la carte SD, tout en configurant le Raspberry Pi pour démarrer sur un
        SSD externe branché en USB3.
      </p>
      <p>
        Cette solution a permis d'améliorer la fiabilité et de réduire la charge
        sur la carte SD.
      </p>
      <h2>Conflit entre AdGuard et RaspAP sur le DHCP:</h2>
      <p>
        L’installation conjointe d’AdGuard et de RaspAP a généré des conflits
        réseau.
      </p>
      <p>
        AdGuard a attribué des adresses IP fixes aux interfaces réseau, qui
        n’étaient pas sur le bon sous-réseau.
      </p>
      <p>
        Après un redémarrage, il était impossible d’accéder au Raspberry Pi via
        SSH.
      </p>
      <h3>Solution:</h3>
      <p>
        Pour corriger ce problème, nous avons utilisé un accès chroot sur la
        carte SD depuis un autre appareil.
      </p>
      <p>
        Cela nous a permis de modifier et régénérer les configurations réseau,
        rétablissant ainsi un fonctionnement normal du système.
      </p>
    </div>
  );
}
