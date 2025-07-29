import { Formation, Internship } from '../types/education';

// Configuration centralisée des formations et stages
export const educationData = {
  fr: {
    internships: [
      {
        title: "Alternance",
        specialite: "DevOps, Java, React, GitLab CI/CD",
        etablissement: "Airbus Defence and Space - Satellites",
        dateDebut: "2024-09",
        duree: "24 mois"
      },
      {
        title: "Stage",
        specialite: "System Administrator, Ansible, Linux servers", 
        etablissement: "Airbus OneWeb Satellites",
        dateDebut: "2024-04",
        duree: "11 semaines"
      }
    ] as Internship[],
    
    formations: [
      {
        title: "L3 Informatique Réseaux et Telecoms",
        specialite: "Telecommunications, Networks and CyberSecurity",
        etablissement: "Universite de Toulouse (Paul Sabatier)",
        dateDebut: "2025",
        duree: "En cours"
      },
      {
        title: "BUT Informatique",
        specialite: "Déploiement d'Applications Communicantes et Sécurisées",
        etablissement: "Universite de Toulouse (Paul Sabatier)",
        dateDebut: "2024",
        duree: "1 an"
      },
      {
        title: "DUT Informatique",
        specialite: "Déploiement d'Applications Communicantes et Sécurisées",
        etablissement: "Universite de Toulouse (Paul Sabatier)",
        dateDebut: "2022",
        duree: "2 ans"
      },
      {
        title: "Classe préparatoire",
        specialite: "Sciences de l'ingénieur",
        etablissement: "INSA Toulouse",
        dateDebut: "2021",
        duree: "1 an"
      }
    ] as Formation[]
  },

  en: {
    internships: [
      {
        title: "Apprenticeship",
        specialite: "DevOps, Java, React, GitLab CI/CD",
        etablissement: "Airbus Defence and Space - Satellites",
        dateDebut: "2024-09",
        duree: "24 months"
      },
      {
        title: "Internship",
        specialite: "System Administrator, Ansible, Linux servers",
        etablissement: "Airbus OneWeb Satellites", 
        dateDebut: "2024-04",
        duree: "11 weeks"
      }
    ] as Internship[],
    
    formations: [
      {
        title: "L3 Computer Networks and Telecommunications",
        specialite: "Telecommunications, Networks and CyberSecurity",
        etablissement: "University of Toulouse (Paul Sabatier)",
        dateDebut: "2025",
        duree: "Ongoing"
      },
      {
        title: "BUT Computer Science",
        specialite: "Deployment of Communicating and Secure Applications",
        etablissement: "University of Toulouse (Paul Sabatier)",
        dateDebut: "2024",
        duree: "1 year"
      },
      {
        title: "DUT Computer Science",
        specialite: "Deployment of Communicating and Secure Applications",
        etablissement: "University of Toulouse (Paul Sabatier)",
        dateDebut: "2022",
        duree: "2 years"
      },
      {
        title: "Preparatory Class",
        specialite: "Engineering Sciences",
        etablissement: "INSA Toulouse",
        dateDebut: "2021",
        duree: "1 year"
      }
    ] as Formation[]
  }
};
