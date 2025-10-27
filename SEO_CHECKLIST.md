# ✅ Checklist de Vérification SEO

## Avant le Déploiement

### 1. Meta Tags
- [ ] Ouvrir http://localhost:5174/ dans le navigateur
- [ ] Ouvrir les DevTools (F12) → Onglet Elements
- [ ] Inspecter le `<head>` et vérifier la présence de:
  - [ ] `<title>` unique
  - [ ] `<meta name="description">`
  - [ ] `<meta name="keywords">`
  - [ ] `<meta property="og:*">` (Open Graph)
  - [ ] `<meta name="twitter:*">` (Twitter Cards)
  - [ ] `<link rel="canonical">`
  - [ ] `<html lang="fr">` ou `<html lang="en">`

### 2. Test de Navigation
- [ ] Aller sur chaque page et vérifier que le titre change:
  - [ ] `/` → "Accueil | Maël Goujon..."
  - [ ] `/scolarite` → "Scolarité & Formation | Maël Goujon..."
  - [ ] `/cybersecurity` → "Cyber-Sécurité & Certifications | Maël Goujon..."
  - [ ] `/competences` → "Compétences Techniques | Maël Goujon..."
  - [ ] `/projets-univ` → "Projets Universitaires | Maël Goujon..."
  - [ ] `/projets-perso` → "Projets Personnels | Maël Goujon..."

### 3. Test Multilingue
- [ ] Changer la langue (FR ↔ EN)
- [ ] Vérifier que `<html lang>` change
- [ ] Vérifier que les meta descriptions changent
- [ ] Vérifier que les titres changent

### 4. Fichiers de Configuration
- [ ] Vérifier que `/robots.txt` est accessible
- [ ] Vérifier que `/sitemap.xml` est accessible
- [ ] Valider le sitemap sur https://www.xml-sitemaps.com/validate-xml-sitemap.html

## Après le Déploiement sur Netlify

### 1. Google Search Console
- [ ] Aller sur https://search.google.com/search-console
- [ ] Ajouter la propriété maelg.com (si pas déjà fait)
- [ ] Soumettre le sitemap: https://maelg.com/sitemap.xml
- [ ] Demander l'indexation des pages principales

### 2. Test Open Graph (Facebook/LinkedIn)
- [ ] Aller sur https://developers.facebook.com/tools/debug/
- [ ] Tester: https://maelg.com
- [ ] Vérifier l'aperçu de partage
- [ ] Tester chaque page importante
- [ ] Si problème: cliquer "Scrape Again"

### 3. Test Twitter Cards
- [ ] Aller sur https://cards-dev.twitter.com/validator
- [ ] Tester: https://maelg.com
- [ ] Vérifier l'aperçu de la carte
- [ ] Tester les pages principales

### 4. Audit Lighthouse
- [ ] Ouvrir Chrome DevTools → Onglet Lighthouse
- [ ] Lancer un audit SEO
- [ ] Vérifier le score SEO (objectif: >90/100)
- [ ] Corriger les problèmes signalés si besoin

### 5. Test Mobile
- [ ] Ouvrir https://search.google.com/test/mobile-friendly
- [ ] Tester: https://maelg.com
- [ ] Vérifier que le site est mobile-friendly

## Monitoring Continu

### Hebdomadaire
- [ ] Vérifier Google Search Console pour erreurs d'exploration
- [ ] Vérifier les impressions et clics
- [ ] Noter les mots-clés qui génèrent du trafic

### Mensuel
- [ ] Analyser les pages les plus visitées
- [ ] Optimiser les meta descriptions des pages populaires
- [ ] Vérifier les backlinks (liens entrants)

### Trimestriel
- [ ] Audit SEO complet avec Lighthouse
- [ ] Mise à jour des mots-clés stratégiques
- [ ] Révision du sitemap
- [ ] Analyse de la concurrence

## Outils Recommandés

### Validation
- **Sitemap**: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- **Robots.txt**: https://support.google.com/webmasters/answer/6062598
- **Rich Results**: https://search.google.com/test/rich-results

### Monitoring
- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com
- **Bing Webmaster Tools**: https://www.bing.com/webmasters

### Testing
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

## Commandes Utiles

\`\`\`bash
# Build de production
yarn build

# Prévisualiser le build
yarn preview

# Vérifier les erreurs
yarn lint

# Tests
yarn test
\`\`\`

## Troubleshooting

### Les meta tags ne changent pas
1. Vérifier que `HelmetProvider` entoure l'app dans `App.tsx`
2. Vérifier l'import du composant SEO
3. Hard refresh (Ctrl+Shift+R)

### Le sitemap n'est pas accessible
1. Vérifier que le fichier est dans `public/sitemap.xml`
2. Rebuild et redeploy
3. Vérifier la configuration Netlify

### Open Graph ne fonctionne pas
1. Utiliser le debugger Facebook pour forcer le scraping
2. Vérifier l'URL de l'image (absolue, pas relative)
3. Attendre 24h après déploiement

### Score SEO Lighthouse faible
1. Vérifier les balises meta manquantes
2. Optimiser les images
3. Vérifier l'accessibilité (ARIA labels)
4. S'assurer que robots.txt permet l'indexation

## ✅ Status Final

Une fois tous les tests réussis:
- ✅ SEO optimisé pour Google
- ✅ Partage social configuré
- ✅ Monitoring en place
- ✅ Documentation complète

**Votre portfolio est maintenant prêt à être découvert par le monde entier ! 🚀**

---

**Questions ou problèmes?**
- Consulter `SEO_README.md` pour la documentation détaillée
- Consulter `AMELIORATIONS_SEO.md` pour le résumé des changements
