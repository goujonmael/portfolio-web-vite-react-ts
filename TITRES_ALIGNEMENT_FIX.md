# Correction de l'alignement vertical des titres

## Problème identifié
Les titres de pages n'étaient pas tous à la même position verticale par rapport au header à cause de paddings et marges incohérents entre les différents containers.

## Solution appliquée

### 1. Unification des paddings de containers

Tous les containers de pages ont maintenant le même padding :

```css
padding: 2rem;
padding-top: 2rem;
max-width: 1200px;
margin: 0 auto;
```

**Fichiers modifiés :**
- ✅ `src/Competences/Competences.css` - `.competences-container`
- ✅ `src/Scolarite/Scolarite.css` - `.scolarite-container`
- ✅ `src/CyberSecurity/CyberSecurity.css` - `.cybersecurity-container`
- ✅ `src/index.css` - `.competences-div` (pages projets)

### 2. Suppression des padding-top supplémentaires

Suppression des `padding-top: 1rem` dans les headers qui causaient des décalages :

**Avant :**
```css
.scolarite-header {
  padding-top: 1rem; /* ❌ Causait un décalage */
  ...
}

.cybersecurity-header {
  padding-top: 1rem; /* ❌ Causait un décalage */
  ...
}
```

**Après :**
```css
.scolarite-header {
  /* ✅ Pas de padding-top supplémentaire */
  ...
}

.cybersecurity-header {
  /* ✅ Pas de padding-top supplémentaire */
  ...
}
```

### 3. Unification des marges du composant PageTitle

**Avant :**
```css
.page-title {
  margin-bottom: 1rem; /* ❌ Incohérent */
  ...
}
```

**Après :**
```css
.page-title {
  margin-bottom: 2rem; /* ✅ Uniforme avec les autres headers */
  margin-top: 0;
  ...
}
```

### 4. Suppression du doublon dans CyberSecurity.css

Suppression d'une déclaration `.cybersecurity-header` en double qui avait des valeurs conflictuelles.

## Résultat

Maintenant, toutes les pages ont :
- ✅ Le même padding-top de `2rem` depuis le header
- ✅ Le même espacement vertical pour le titre
- ✅ Une position verticale cohérente du titre
- ✅ Une largeur maximale uniforme de `1200px`
- ✅ Un centrage horizontal automatique

## Pages concernées
1. `/competences` - Compétences
2. `/scolarite` - Scolarité
3. `/cybersecurity` - CyberSécurité
4. `/projets-univ` - Projets Universitaires
5. `/projets-perso` - Projets Personnels

## Vérification visuelle
Après ces modifications, tous les titres apparaissent exactement à la même hauteur lorsque vous naviguez entre les différentes pages.
