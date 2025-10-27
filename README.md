 # Portfolio Web Vite React TS

 Ce projet est un portfolio personnel développé avec Vite, React et TypeScript. Il présente des projets universitaires et personnels, des compétences, un parcours scolaire, ainsi qu'une section cybersécurité.

 ## Fonctionnalités principales
 - **Single Page Application (SPA)** avec React Router
 - **Internationalisation (i18n)** : français et anglais (i18next)
 - **Données dynamiques** : projets GitHub, parcours scolaire, certificats TryHackMe
 - **Design responsive** et moderne (CSS par composant)
 - **Déploiement Netlify** (support du routage SPA)
 - **Analytics** via Umami

 ## Structure du projet
 - `index.html` : point d'entrée
 - `src/` : code source principal
   - `App.tsx`, `main.tsx`, `routes.tsx` : structure de l'application et routage
   - `Home/`, `Projects/`, `Competences/`, `Scolarite/`, `CyberSecurity/` : pages principales
   - `i18n/` : configuration et fichiers de traduction
   - `data/educationData.ts` : source de vérité pour le parcours scolaire (bilingue)
   - `assets/Icons/` : icônes SVG React
   - `components/` : composants réutilisables (Footer, Header, LanguageSwitch, etc.)
   - `utils/fetchWithCache.ts` : utilitaire de fetch avec cache localStorage
 - `public/` : assets statiques (images, PDF, etc.)
 - `netlify/` : fonctions serverless pour TryHackMe (contournement CORS)
 - `vite.config.ts`, `netlify.toml` : configuration Vite et Netlify

 ## Installation & développement
 1. **Prérequis** : Node.js, Yarn (classic)
 2. **Installation des dépendances** :
    ```sh
    yarn install
    ```
 3. **Démarrer le serveur de dev** (avec proxy TryHackMe) :
    ```sh
    yarn dev
    ```
 4. **Build de production** :
    ```sh
    yarn build
    ```
 5. **Prévisualisation du build** :
    ```sh
    yarn preview
    ```
 6. **Lint** :
    ```sh
    yarn lint
    ```

 ## Déploiement
 - **Netlify** : configuration SPA via `netlify.toml` et `public/_redirects`.
 - **Commandes** :
   - Build : `yarn build` (sortie dans `dist/`)
   - Déploiement automatique via Netlify (push sur `main`)

 ## Internationalisation
 - Ajout de traductions :
   1. Ajouter les clés dans `src/i18n/locales/en.ts` et `fr.ts`
   2. Utiliser `const { t } = useTranslation();` dans les composants

 ## Données dynamiques
 - **Projets GitHub** : fetch + cache dans `localStorage.github_repos`
 - **TryHackMe** : proxy `/api` et `/certificates` (dev) ou fonction Netlify (prod)
 - **Parcours scolaire** : éditer `src/data/educationData.ts` (voir `src/data/README.md`)

 ## Bonnes pratiques
 - Utiliser `NavLink` pour la navigation interne
 - Persistance des préférences utilisateur (langue) via `localStorage`
 - Types TypeScript stricts (`src/types/`)
 - CSS par composant (pas de CSS Modules)

 ## Tests
 - Tests unitaires dans `src/__tests__/` (Vitest)

 ## Auteurs
 - [Maël Goujon](https://github.com/goujonmael)

 ---

 Pour plus de détails, voir les fichiers de documentation dans le projet (`TRANSLATION_README.md`, `src/data/README.md`).
