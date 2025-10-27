# PageTitle Component

## Description
Composant réutilisable pour afficher les titres de pages avec un style uniforme à travers toute l'application.

## Utilisation

```tsx
import PageTitle from '../components/PageTitle/PageTitle';

function MyPage() {
  return (
    <div>
      <PageTitle>Mon Titre de Page</PageTitle>
      {/* reste du contenu */}
    </div>
  );
}
```

## Props

- `children` (React.ReactNode) : Le texte du titre à afficher
- `className` (string, optionnel) : Classes CSS additionnelles

## Style
Le composant applique un style uniforme avec :
- Taille de police responsive (2.5rem sur desktop, 2rem sur tablette, 1.8rem sur mobile)
- Police variable : `var(--font-title)`
- Couleur : `var(--title1)`
- Underline gradient animé avec `::after` pseudo-élément
- Centrage automatique

## Pages utilisant ce composant
- Compétences (`/competences`)
- Scolarité (`/scolarite`)
- CyberSécurité (`/cybersecurity`)
- Projets Universitaires (`/projets-univ`)
- Projets Personnels (`/projets-perso`)
