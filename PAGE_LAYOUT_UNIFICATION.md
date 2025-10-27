# Unification du Template de Pages - Documentation Complète

## Date
27 octobre 2025

## Objectif
Créer un template uniforme pour toutes les pages du portfolio avec une structure cohérente : titre, sous-titre optionnel, et contenu.

## Solution Implémentée

### 1. Composant PageLayout Créé

**Fichier** : `src/components/PageLayout/PageLayout.tsx`

Un composant réutilisable qui encapsule :
- ✅ SEO (title, description, keywords, url)
- ✅ Animations Framer Motion (pageVariants)
- ✅ Titre de page (via PageTitle)
- ✅ Sous-titre optionnel
- ✅ Container uniforme avec padding et largeur max

**Props** :
```typescript
interface PageLayoutProps {
  title: string;              // Titre principal de la page
  subtitle?: string;          // Sous-titre optionnel
  seoTitle: string;           // Titre SEO
  seoDescription: string;     // Description SEO
  seoKeywords: string;        // Mots-clés SEO
  seoUrl: string;             // URL de la page
  children: React.ReactNode;  // Contenu de la page
  className?: string;         // Classes CSS additionnelles
}
```

### 2. Structure HTML Unifiée

**Avant** (structure différente pour chaque page) :
```tsx
// Competences
<motion.main className="competences-container">
  <SEO />
  <div className="competences-header">
    <PageTitle>Titre</PageTitle>
  </div>
  <div className="content">...</div>
</motion.main>

// Scolarite
<motion.div className="scolarite-container">
  <SEO />
  <div className="scolarite-header">
    <PageTitle>Titre</PageTitle>
  </div>
  ...
</motion.div>

// CyberSecurity
<motion.div className="cybersecurity-container">
  <SEO />
  <motion.div className="cybersecurity-header">
    <PageTitle>Titre</PageTitle>
    <p className="cybersecurity-subtitle">Subtitle</p>
  </motion.div>
  ...
</motion.div>
```

**Après** (structure unifiée) :
```tsx
<PageLayout
  title="Titre"
  subtitle="Sous-titre optionnel"
  seoTitle="..."
  seoDescription="..."
  seoKeywords="..."
  seoUrl="/page"
>
  {/* Contenu de la page */}
</PageLayout>
```

### 3. Pages Modifiées

#### Competences (`src/Competences/Competences.tsx`)
- ✅ Migration vers PageLayout
- ✅ Suppression de motion/pageVariants/SEO/PageTitle
- ✅ Structure simplifiée
- ✅ Pas de subtitle

#### Scolarite (`src/Scolarite/Scolarite.tsx`)
- ✅ Migration vers PageLayout
- ✅ Suppression de motion/pageVariants/SEO/PageTitle
- ✅ Simplification des animations (motion.h2 → h2)
- ✅ Pas de subtitle

#### CyberSecurity (`src/CyberSecurity/CyberSecurity.tsx`)
- ✅ Migration vers PageLayout
- ✅ Suppression de fadeIn animation pour le header
- ✅ **Subtitle utilisé** : `t('cybersecurity.subtitle')`
- ✅ Conservation des animations motion pour les sections internes

#### Pages Projets (`src/routes.tsx`)
- ✅ Migration vers PageLayout pour Store component
- ✅ Suppression de competences-div wrapper
- ✅ Description intégrée dans le children
- ✅ Pas de subtitle

### 4. CSS Unifié

**Fichier** : `src/components/PageLayout/PageLayout.css`

```css
.page-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
}

.page-layout-header {
  text-align: center;
  margin-bottom: 2rem;
}

.page-layout-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-top: 1rem;
  font-family: var(--font-text);
  line-height: 1.6;
}

.page-layout-content {
  flex: 1;
}
```

**Media queries** : Responsive sur mobile (1.5rem → 1rem padding)

### 5. Styles Obsolètes Conservés

Les styles spécifiques aux pages ont été **conservés** car ils contiennent :
- Styles pour le contenu spécifique (`.competences`, `.banner`, `.formation-card`, etc.)
- Animations personnalisées
- Layouts internes

**À conserver** :
- `Competences.css` : styles pour .competences, .competence, .description
- `Scolarite.css` : styles pour .banner, .formation-card, .section-title
- `CyberSecurity.css` : styles pour .tryhackme-section, .platform-info, .certificates-grid

**Supprimés/inutilisés** :
- `.competences-container`, `.scolarite-container`, `.cybersecurity-container`
- `.competences-header`, `.scolarite-header`, `.cybersecurity-header` 
- `.competences-div` (remplacé par PageLayout dans routes.tsx)

### 6. Imports Simplifiés

**Avant** :
```tsx
import SEO from "../components/SEO/SEO";
import { motion } from "framer-motion";
import { pageVariants } from "../utils/animations";
import PageTitle from "../components/PageTitle/PageTitle";
```

**Après** :
```tsx
import PageLayout from "../components/PageLayout/PageLayout";
// motion conservé si nécessaire pour animations internes
```

## Avantages de cette Approche

### 1. Cohérence Visuelle
✅ Tous les titres au même niveau vertical  
✅ Même espacement et padding partout  
✅ Structure HTML identique  

### 2. Maintenabilité
✅ Un seul endroit pour modifier le layout des pages  
✅ Moins de code dupliqué  
✅ Imports simplifiés  

### 3. SEO Unifié
✅ SEO géré automatiquement par PageLayout  
✅ Structure cohérente pour tous les moteurs de recherche  

### 4. Accessibilité
✅ Structure sémantique correcte partout  
✅ Navigation cohérente  

### 5. Responsive
✅ Media queries centralisées dans PageLayout.css  
✅ Comportement uniforme sur mobile  

## Structure Finale des Pages

```
PageLayout
├── SEO (automatique)
├── page-layout-header
│   ├── PageTitle (automatique)
│   └── page-layout-subtitle (si fourni)
└── page-layout-content
    └── {children} (contenu spécifique de la page)
```

## Exemple d'Utilisation

```tsx
import PageLayout from '../components/PageLayout/PageLayout';

function MaPage() {
  const { t } = useTranslation();
  
  return (
    <PageLayout
      title={t('header.myPage')}
      subtitle={t('myPage.subtitle')} // optionnel
      seoTitle={t('seo.myPage.title')}
      seoDescription={t('seo.myPage.description')}
      seoKeywords={t('seo.myPage.keywords')}
      seoUrl="/ma-page"
    >
      <div className="my-custom-content">
        {/* Votre contenu ici */}
      </div>
    </PageLayout>
  );
}
```

## Pages Utilisant PageLayout

1. ✅ `/competences` - Compétences
2. ✅ `/scolarite` - Scolarité  
3. ✅ `/cybersecurity` - CyberSécurité (avec subtitle)
4. ✅ `/projets-univ` - Projets Universitaires
5. ✅ `/projets-perso` - Projets Personnels

## Tests Effectués

- ✅ Build réussi sans erreurs
- ✅ Aucune erreur TypeScript
- ✅ Structure HTML valide
- ✅ SEO correctement appliqué
- ✅ Animations préservées
- ✅ Responsive fonctionnel

## Note sur les Animations

Les animations ont été **partiellement conservées** :
- ✅ Animation de page (pageVariants) gérée par PageLayout
- ✅ Animations internes (scrollReveal, staggerContainer) conservées dans CyberSecurity
- ❌ Animation fadeIn du header supprimée (redondante avec pageVariants)
- ❌ Animations whileInView sur les h2 simplifiées (devenues h2 normaux dans Scolarite)

## Conclusion

Le template PageLayout assure maintenant une **cohérence totale** entre toutes les pages du portfolio, avec un code plus maintenable et une structure HTML uniforme, tout en conservant la flexibilité nécessaire pour le contenu spécifique de chaque page.
