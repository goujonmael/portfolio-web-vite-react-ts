# PageLayout Component

## Description
Composant de layout unifié pour toutes les pages du portfolio. Il encapsule la structure commune : SEO, titre, sous-titre optionnel, et animations.

## Utilisation

```tsx
import PageLayout from '../components/PageLayout/PageLayout';
import { useTranslation } from 'react-i18next';

function MyPage() {
  const { t } = useTranslation();
  
  return (
    <PageLayout
      title={t('header.myPage')}
      subtitle={t('myPage.subtitle')} // optionnel
      seoTitle={t('seo.myPage.title')}
      seoDescription={t('seo.myPage.description')}
      seoKeywords={t('seo.myPage.keywords')}
      seoUrl="/my-page"
      className="custom-class" // optionnel
    >
      {/* Votre contenu ici */}
      <div className="my-content">
        <p>Contenu de la page</p>
      </div>
    </PageLayout>
  );
}
```

## Props

| Prop | Type | Requis | Description |
|------|------|--------|-------------|
| `title` | `string` | ✅ | Titre principal de la page (affiché via PageTitle) |
| `subtitle` | `string` | ❌ | Sous-titre optionnel affiché sous le titre |
| `seoTitle` | `string` | ✅ | Titre pour le SEO (balise `<title>`) |
| `seoDescription` | `string` | ✅ | Description meta pour le SEO |
| `seoKeywords` | `string` | ✅ | Mots-clés meta pour le SEO |
| `seoUrl` | `string` | ✅ | URL canonique de la page |
| `children` | `React.ReactNode` | ✅ | Contenu de la page |
| `className` | `string` | ❌ | Classes CSS additionnelles pour le container |

## Structure HTML Générée

```html
<motion.div className="page-layout [className]">
  <!-- SEO component (invisible) -->
  <SEO title="..." description="..." keywords="..." url="..." />
  
  <!-- Header avec titre et subtitle -->
  <div className="page-layout-header">
    <h1 className="page-title">Titre</h1>
    <p className="page-layout-subtitle">Subtitle (si fourni)</p>
  </div>
  
  <!-- Contenu -->
  <div className="page-layout-content">
    {children}
  </div>
</motion.div>
```

## Styles CSS

### Container Principal
```css
.page-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
}
```

### Header
```css
.page-layout-header {
  text-align: center;
  margin-bottom: 2rem;
}
```

### Subtitle
```css
.page-layout-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-top: 1rem;
  font-family: var(--font-text);
  line-height: 1.6;
}
```

## Animations

Le composant utilise automatiquement les animations Framer Motion :
- **Entrée** : `pageVariants.initial`
- **Animation** : `pageVariants.animate`
- **Sortie** : `pageVariants.exit`

Ces animations sont définies dans `src/utils/animations.ts`.

## Responsive Design

Le composant est entièrement responsive :

| Breakpoint | Padding | Subtitle Font |
|------------|---------|---------------|
| Desktop (>768px) | 2rem | 1.2rem |
| Tablet (≤768px) | 1.5rem | 1rem |
| Mobile (≤480px) | 1rem | 0.9rem |

## Exemples Réels

### Page Simple (sans subtitle)
```tsx
<PageLayout
  title={t('header.skills')}
  subtitle={undefined}
  seoTitle={t('seo.skills.title')}
  seoDescription={t('seo.skills.description')}
  seoKeywords={t('seo.skills.keywords')}
  seoUrl="/competences"
>
  <div className="description">
    <p>{t('skills.intro')}</p>
  </div>
  <div className="competences">
    {/* Liste des compétences */}
  </div>
</PageLayout>
```

### Page avec Subtitle
```tsx
<PageLayout
  title={t('header.cybersecurity')}
  subtitle={t('cybersecurity.subtitle')}
  seoTitle={t('seo.cybersecurity.title')}
  seoDescription={t('seo.cybersecurity.description')}
  seoKeywords={t('seo.cybersecurity.keywords')}
  seoUrl="/cybersecurity"
>
  <div className="tryhackme-section">
    {/* Contenu TryHackMe */}
  </div>
</PageLayout>
```

### Page avec Classe Custom
```tsx
<PageLayout
  title={`${t('projects.title')} ${t('projects.university.type')}`}
  subtitle={undefined}
  seoTitle={t('seo.projectsUniv.title')}
  seoDescription={t('seo.projectsUniv.description')}
  seoKeywords={t('seo.projectsUniv.keywords')}
  seoUrl="/projets-univ"
  className="projects-page"
>
  <div className="description">
    <p>{t('projects.university.description')}</p>
  </div>
  <List selectedId={id} />
</PageLayout>
```

## Pages Utilisant ce Composant

1. **Compétences** (`/competences`) - Sans subtitle
2. **Scolarité** (`/scolarite`) - Sans subtitle
3. **CyberSécurité** (`/cybersecurity`) - **Avec subtitle**
4. **Projets Universitaires** (`/projets-univ`) - Sans subtitle
5. **Projets Personnels** (`/projets-perso`) - Sans subtitle

## Dépendances

- `framer-motion` : Animations
- `react-i18next` : Pas directement, mais utilisé par les pages parentes
- `SEO` component : `../SEO/SEO`
- `PageTitle` component : `../PageTitle/PageTitle`
- `pageVariants` : `../../utils/animations`

## Avantages

✅ **DRY** : Ne répétez pas le code SEO/animations/structure  
✅ **Cohérence** : Tous les titres au même niveau  
✅ **Maintenabilité** : Un seul endroit pour modifier le layout  
✅ **Accessibilité** : Structure sémantique correcte  
✅ **SEO** : Gestion automatique des meta tags  
✅ **Responsive** : Adapté automatiquement  

## Notes

- Le `subtitle` est **optionnel**. Passez `undefined` si vous n'en avez pas besoin.
- Le composant gère automatiquement le `motion.div` avec `pageVariants`.
- Les styles spécifiques au contenu doivent être dans le CSS de la page, pas dans PageLayout.
- PageLayout ne gère que la structure commune, le contenu reste flexible.
