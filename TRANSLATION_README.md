# Système de Traduction / Translation System

## Français

Ce projet inclut un système de traduction français/anglais avec les fonctionnalités suivantes :

### Fonctionnalités

- **Switch de langue** : Boutons avec drapeaux français et anglais dans le header
- **Persistance** : La langue sélectionnée est sauvegardée dans localStorage
- **Traduction complète** : Toutes les pages principales sont traduites
- **Drapeaux SVG** : Drapeaux personnalisés pour un meilleur contrôle du style

### Structure des fichiers

```
src/
├── i18n/
│   ├── i18n.ts                 # Configuration i18next
│   └── locales/
│       ├── fr.ts              # Traductions françaises
│       └── en.ts              # Traductions anglaises
├── components/
│   └── LanguageSwitch/
│       ├── LanguageSwitch.tsx  # Composant de switch de langue
│       └── LanguageSwitch.css  # Styles du switch
└── assets/
    └── Icons/
        ├── FrenchFlag.tsx      # Icône drapeau français
        └── BritishFlag.tsx     # Icône drapeau britannique
```

### Utilisation

1. **Dans un composant** :
```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return <h1>{t('header.home')}</h1>;
};
```

2. **Ajout de nouvelles traductions** :
- Ajouter les clés dans `src/i18n/locales/fr.ts`
- Ajouter les traductions correspondantes dans `src/i18n/locales/en.ts`

### Pages traduites

- ✅ Header et navigation
- ✅ Page d'accueil (Welcome, Me, Contacts)
- ✅ Page Projets (universitaires et personnels)
- ✅ Page Compétences
- ✅ Page Scolarité

---

## English

This project includes a French/English translation system with the following features:

### Features

- **Language switch**: Buttons with French and English flags in the header
- **Persistence**: Selected language is saved in localStorage
- **Complete translation**: All main pages are translated
- **SVG flags**: Custom flags for better style control

### File structure

```
src/
├── i18n/
│   ├── i18n.ts                 # i18next configuration
│   └── locales/
│       ├── fr.ts              # French translations
│       └── en.ts              # English translations
├── components/
│   └── LanguageSwitch/
│       ├── LanguageSwitch.tsx  # Language switch component
│       └── LanguageSwitch.css  # Switch styles
└── assets/
    └── Icons/
        ├── FrenchFlag.tsx      # French flag icon
        └── BritishFlag.tsx     # British flag icon
```

### Usage

1. **In a component**:
```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return <h1>{t('header.home')}</h1>;
};
```

2. **Adding new translations**:
- Add keys in `src/i18n/locales/fr.ts`
- Add corresponding translations in `src/i18n/locales/en.ts`

### Translated pages

- ✅ Header and navigation
- ✅ Home page (Welcome, Me, Contacts)
- ✅ Projects page (university and personal)
- ✅ Skills page
- ✅ Education page
