# Structure des données éducatives

## Ajout de nouvelles formations ou stages

Pour ajouter une nouvelle formation ou un nouveau stage, modifiez le fichier `src/data/educationData.ts`.

### Structure des objets

#### Formation
```typescript
{
  title: string;        // Titre de la formation (ex: "BUT Informatique")
  specialite: string;   // Spécialité (ex: "Développement web")
  etablissement: string; // Nom de l'établissement
  dateDebut: string;    // Date de début (format: "YYYY" ou "YYYY-MM")
  duree: string;        // Durée (ex: "2 ans", "En cours", "Ongoing")
}
```

#### Stage/Alternance
```typescript
{
  title: string;        // Type de stage (ex: "Stage", "Alternance")
  specialite: string;   // Domaine/compétences (ex: "Développement Java")
  etablissement: string; // Nom de l'entreprise
  dateDebut: string;    // Date de début (format: "YYYY-MM")
  duree: string;        // Durée (ex: "6 mois", "24 months", "10 semaines")
}
```

### Gestion des dates

La fonction `formatDate()` dans le composant gère automatiquement:
- Formations en cours : "En cours" ou "Ongoing" → "YYYY - Présent"
- Formations complètes : "2 ans" → "YYYY - YYYY+2"
- Stages avec dates précises : "6 mois" avec "2024-01" → "01/2024 - 07/2024"
- Stages en semaines : "12 semaines" avec "2024-04" → "04/2024 - 07/2024"

### Multilangue

Les données sont séparées par langue dans l'objet `educationData`:
- `educationData.fr` pour le français
- `educationData.en` pour l'anglais

Assurez-vous d'ajouter les données dans les deux langues pour maintenir la cohérence.
