# Collector's Library — Prototype

Prototype interactif d'une app de gestion de collection personnelle (Livres, BD, Films, Musique, Jeux Vidéo).

Le prototype s'ouvre **plein écran sur mobile** (sans frame iPhone) et **centré, encadré** sur desktop.

## Lancer le prototype

Ouvrez `index.html` dans un navigateur moderne. Tout est statique — aucun build, aucune dépendance.

### Héberger sur GitHub Pages

1. Créez un repo public
2. Poussez ces fichiers à la racine
3. Settings → Pages → branche `main` / dossier `/ (root)` → Save
4. Disponible sur `https://<user>.github.io/<repo>/`

### Ajouter à l'écran d'accueil (iOS / Android)

L'app est configurée pour s'ouvrir comme une web-app standalone. Une fois hébergée :

- iOS Safari → Partager → "Sur l'écran d'accueil"
- Android Chrome → menu → "Ajouter à l'écran d'accueil"

## Structure

```
index.html        Entrée HTML
app.jsx           Shell + navigation
data.jsx          Données + composant Cover
shell.jsx         Composants UI (top bar, bottom nav, FAB…)
screens.jsx       Collection / Détail / Ajouter
screens2.jsx     Wishlist / Stats / Sauvegarde / Membres
tweaks-panel.jsx  Panneau de réglages (optionnel)
```

## Écrans

- **Ma Collection** — grid, recherche, filtres par type
- **Détail** — hero, statut, notation, synopsis, bande-annonce (films)
- **Ajouter** — scanner code-barres simulé + recherche manuelle
- **Wishlist** — liste de souhaits avec prix
- **Statistiques** — total, donut de répartition, derniers ajouts
- **Sauvegarde Cloud** — connexion Google Drive (UI seule)
- **Membres & Partage** — collection collaborative

## ⚠️ Limites du prototype

- Pas de persistance (refresh = état initial)
- Couvertures stylisées en SVG (pas de vraies jaquettes)
- Scanner simulé (pas d'accès caméra réel)
- Sauvegarde Drive non connectée
- Pas de service worker (offline)

## Pour passer en vraie PWA

1. Backend de stockage (Firebase / Supabase / autre)
2. Lib code-barres (`@zxing/library`, `quagga2`)
3. OAuth Google Drive + sync
4. `manifest.json` + icônes + service worker
5. API ouverte pour recherche (OpenLibrary, TMDB, MusicBrainz, IGDB)

## Crédits

Couleurs : `#1A2B48` (navy) + `#F4F6FB` (fond cool) selon manifest fourni.
Typo : [Newsreader](https://fonts.google.com/specimen/Newsreader) (Google Fonts) + system-ui.
