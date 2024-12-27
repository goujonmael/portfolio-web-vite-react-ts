import { title } from "framer-motion/client";
import { JavaSpringBootDescription, JavaSpringBootDetails } from "./JavaSpringBoot/JavaSpringBoot";
import { RaspiDescription, RaspiDetails, RaspiPDF } from "./Raspi/Raspi";
import { ProxyFTPCDescription, ProxyFTPCDetails } from "./ProxyFTPC/ProxyFTPC";


export const projets = [
  {
    id: "raspi",
    imageLink: "/projects/Raspi/raspi.png",
    category: "Raspberry Pi",
    title: "Box internet",
    description: <RaspiDescription />,
    customComponent: <RaspiPDF />,
    details: <RaspiDetails />,
    github: "",
    pdf: "/projects/Raspi/CR_Raspi.pdf",
  },
  {
    id: "springboot",
    imageLink: "/projects/S3B01/springboot.png",
    category: "Java SpringBoot",
    title: "Suivi de formation",
    description: <JavaSpringBootDescription />,
    customComponent: <JavaSpringBootDetails />,
    details: "",
    github: "https://github.com/maelgoujon/Suivi-de-formation-Spring-Boot",
    pdf: "",
  },
  {
    id: "ftp",
    imageLink: "/projects/ProxyFTPC/proxy.jpg",
    category: "C",
    title: "Proxy FTP",
    description: <ProxyFTPCDescription />,
    customComponent: <ProxyFTPCDetails />,
    details: "",
    github: "https://github.com/maelgoujon/ProxyFTP_C",
    pdf: "",
  },
  {
    id: "g",
    level: "Niveau 2",
    title: "Gérer",
    description: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
    precedentLevels: ["Niveau 1"],
    precedentLevelsDescriptions: ["Concevoir et mettre en place une base de données à partir d’un cahier des charges client"],
    pointOfInterest: 200,
    backgroundColor: "#8F986D"
  },
  // Photo by Simone Hutsch on Unsplash
  {
    id: "d",
    level: "Niveau 2",
    title: "Conduire",
    description: "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
    precedentLevels: ["Niveau 1"],
    precedentLevelsDescriptions: ["Identifier les besoins métiers des clients et des utilisateurs"],
    pointOfInterest: 150,
    backgroundColor: "#FA6779"
  },
  // Photo by Siora Photography on Unsplash
  {
    id: "h",
    level: "Niveau 3",
    title: "Collaborer",
    description: "Manager une équipe informatique",
    precedentLevels: ["Niveau 2", "Niveau 1"],
    precedentLevelsDescriptions: ["Situer son rôle et ses missions au sein d’une équipe informatique", "Identifier ses aptitudes pour travailler dans une équipe"],
    pointOfInterest: 60,
    backgroundColor: "#282F49"
  },
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
