import { title } from "framer-motion/client";
import {
  JavaSpringBootDescription,
  JavaSpringBootDetails,
} from "./JavaSpringBoot/JavaSpringBoot";
import { RaspiDescription, RaspiDetails, RaspiPDF } from "./Raspi/Raspi";
import { ProxyFTPCDescription, ProxyFTPCDetails } from "./ProxyFTPC/ProxyFTPC";
import { TakuzuDescription, TakuzuDetails } from "./Takuzu/Takuzu";
import {
  CabinetPHPDescription,
  CabinetPHPDetails,
} from "./CabinetPHP/CabinetPHP";
import { APIPHPDescription, APIPHPDetails } from "./APIPHP/APIPHP";

export const projetsUniv = [
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
    id: "cabinet",
    imageLink: "/projects/CabinetPHP/home.png",
    category: "PHP",
    title: "Gestion de cabinet médical",
    description: <CabinetPHPDescription />,
    customComponent: <CabinetPHPDetails />,
    details: "",
    github: "https://github.com/maelgoujon/Cabinet-Medical-PHP",
    pdf: "",
  },
  {
    id: "apiphp",
    imageLink: "/projects/APIPHP/home.jpeg",
    category: "API PHP",
    title: "API pour le cabinet médical",
    description: <APIPHPDescription />,
    customComponent: <APIPHPDetails />,
    details: "",
    github: "https://github.com/maelgoujon/Cabinet-Medical-API",
    pdf: "",
  },
  {
    id: "takuzu",
    imageLink: "/projects/Takuzu/takuzu.jpg",
    category: "Ada",
    title: "Résolution de Takuzu",
    description: <TakuzuDescription />,
    customComponent: <TakuzuDetails />,
    details: "",
    github: "https://github.com/maelgoujon/Takuzu-Solver-ADA",
    pdf: "",
  },
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
