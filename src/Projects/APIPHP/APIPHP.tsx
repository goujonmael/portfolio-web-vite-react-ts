import React from "react";

export function APIPHPDescription() {
  return (
    <div>
      <h1>Description :</h1>
      <p>
        Amélioration du projet de gestion de cabinet médical en ajoutant une API
        en PHP.
      </p>
    </div>
  );
}

export function APIPHPDetails() {
  return (
    <div>
      <h1>Fonctionnalités implémentées:</h1>
      <h2>Docker</h2>
      <p>
        - Mise en place d'un environnement de développement avec Docker
        <br />
        <p
          style={{
            backgroundColor: "#f0f0f0",
            padding: "5px 10px",
            width: "fit-content",
            borderRadius: "5px",
          }}
        >
          docker-compose up --build -d
        </p>
      </p>

      <h2>Gestion des Patients</h2>
      <p>
        - Ajout, modification et suppression de patients.
        <br />- Consultation rapide des informations sur les patients.
      </p>
      <h2>Planification et suivi des rendez-vous médicaux</h2>
      <p>
        - Notification automatique des rendez-vous aux patients et aux
        professionnels de la santé.
        <br />
        - Calendrier interactif pour une visualisation facile des rendez-vous.
        <br />- Dossiers Médicaux Électroniques
      </p>
    </div>
  );
}
