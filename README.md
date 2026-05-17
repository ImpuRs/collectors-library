# Collector's Library — Prototype iPhone

Prototype interactif d'une app de gestion de collection personnelle (Livres, BD, Films, Musique, Jeux Vidéo).

## Lancer le prototype

Ouvrez `index.html` dans un navigateur moderne. Tout est statique — aucun build, aucune dépendance à installer.

Pour héberger sur GitHub Pages :

1. Créez un repo (public)
2. Poussez ces fichiers à la racine
3. Settings → Pages → branche `main` / dossier `/ (root)` → Save
4. Votre prototype sera dispo sur `https://<user>.github.io/<repo>/`

## Structure

```
index.html        Entrée HTML
app.jsx           Shell + navigation
data.jsx          Données (articles, wishlist, membres) + composant Cover
shell.jsx         Composants UI (top bar, bottom nav, FAB, badges, etc.)
screens.jsx       Écrans Collection / Détail / Ajouter
screens2.jsx     Écrans Wishlist / Stats / Sauvegarde / Membres
ios-frame.jsx     Frame iPhone (status bar, dynamic island)
tweaks-panel.jsx  Panneau de réglages (optionnel)
```

## Écrans

- **Ma Collection** : grid d'articles, recherche, filtres par type
- **Détail** : hero, statut, notation, synopsis, bande-annonce (films)
- **Ajouter** : scanner code-barres simulé + recherche manuelle
- **Wishlist** : liste de souhaits avec prix
- **Statistiques** : total + donut de répartition + derniers ajouts
- **Sauvegarde Cloud** : connexion Google Drive (UI seule)
- **Membres & Partage** : collection collaborative

## ⚠️ État du prototype

Il s'agit d'un **prototype visuel et interactif** :

- Pas de persistance (refresh = état perdu)
- Couvertures stylisées en SVG (pas de vraies jaquettes)
- Scanner de code-barres simulé (pas d'accès caméra réel)
- Sauvegarde Drive non connectée (UI uniquement)
- Pas de service worker / fonctionnement offline

Pour passer en vraie PWA, il faudra :

1. Backend de stockage (Firebase, Supabase, …)
2. Intégration code-barres (lib type `quagga2` ou ZXing)
3. OAuth Google Drive + sync
4. `manifest.json` PWA + icônes + service worker
5. Recherche dans une API ouverte (OpenLibrary, TMDB, MusicBrainz, IGDB)

## Crédits

Direction visuelle alignée sur les couleurs du manifest fourni (`#1A2B48` + `#F7F9FF`).
Typographie : [Newsreader](https://fonts.google.com/specimen/Newsreader) (Google Fonts) + system-ui.
