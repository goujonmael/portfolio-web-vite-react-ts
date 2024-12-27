import { JavaSpringBootDescription, JavaSpringBootDetails } from "./JavaSpringBoot/JavaSpringBoot";
import { RaspiDescription, RaspiDetails, RaspiPDF } from "./Raspi/Raspi";


export const projets = [
  // Photo by ivan Torres on Unsplash
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
  // Photo by Dennis Brendel on Unsplash
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
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "a",
    level: "Niveau 3",
    title: "Administrer",
    description: "Faire évoluer et maintenir un système informatique communicant en conditions opérationnelles",
    precedentLevels: ["Niveau 2", "Niveau 1"],
    precedentLevelsDescriptions: ["Déployer des services dans une architecture réseau", "Installer et configurer un poste de travail"],
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2"
  },
  // Photo by Taneli Lahtinen on Unsplash
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
