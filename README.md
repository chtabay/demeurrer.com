# 2+2.com

## Le concept

**2+2.com** est un site humoristique à vocation virale. Le principe est simple : on pose une question dont tout le monde connaît la réponse — *combien font 2+2 ?* — et on oriente l'utilisateur vers un service web en fonction de sa réponse.

- **Bonne réponse (4)** → on l'envoie vers le meilleur site de la catégorie.
- **Mauvaise réponse** → on l'envoie vers l'alternative… disons, *plus accessible*.

Le sarcasme ne s'affiche jamais en gros. Il est **implicite**, porté par le contraste entre les deux résultats. L'utilisateur comprend tout seul.

## L'esprit

Le site ne se prend pas au sérieux. C'est un gag en une interaction, pensé pour :

- **Faire sourire** — le décalage entre la simplicité de la question et le jugement du résultat est le ressort comique.
- **Être partagé** — le format est court, visuel, mobile-friendly. Idéal pour un lien balancé dans une conversation ou sur les réseaux.
- **Promouvoir Seventee.com** — la catégorie "Location immobilière" oriente vers [www.seventee.com](https://www.seventee.com) pour la bonne réponse, et vers LeBonCoin sinon. Le placement est naturel, noyé dans 19 autres catégories crédibles.

## Les 20 catégories

Chaque catégorie oppose un leader reconnu à une alternative perçue comme inférieure :

| Catégorie | Bonne réponse | Mauvaise réponse |
|---|---|---|
| Moteur de recherche | Google | Bing |
| Location immobilière | **Seventee** | LeBonCoin |
| Plateforme vidéo | YouTube | Dailymotion |
| Streaming musical | Spotify | Deezer |
| Messagerie | WhatsApp | Skype |
| Réseau social | Instagram | Facebook |
| Shopping en ligne | Amazon | Wish |
| GPS & Navigation | Waze | Mappy |
| Boîte mail | Gmail | Yahoo Mail |
| Livraison de repas | Uber Eats | Just Eat |
| VTC | Uber | Bolt |
| Films & Séries | Netflix | Pluto TV |
| Réservation hôtel | Booking.com | Trivago |
| Réserver un vol | Google Flights | Lastminute |
| Hébergement de code | GitHub | SourceForge |
| Design graphique | Figma | Canva |
| Intelligence artificielle | ChatGPT | Copilot |
| Actualités | Google News | Yahoo Actu |
| Paiement en ligne | PayPal | Paylib |
| Jeux vidéo | Steam | Epic Games |

## Directions artistiques

Le site propose 4 thèmes visuels sélectionnables via un toggle en haut à droite :

- **Neon** — sombre, gradients violet/rose, ambiance tech/gaming (thème par défaut)
- **Minimal** — fond clair, noir & blanc, typographie épurée, sans fioritures
- **Vintage** — tons chauds, brun/or, typographie serif, ambiance rétro
- **Brutalist** — fond cru, bordures franches, police monospace, ombres dures, pas de radius

Le choix est persisté via `localStorage`.

## Stack technique

- **Un seul fichier** : `index.html` (HTML + CSS + JS inline)
- **Aucune dépendance** : pas de framework, pas de build, pas de node_modules
- **Fonts** : Google Fonts (Space Grotesk, Syne, DM Serif Display, Space Mono)
- **Hébergement** : GitHub Pages (branche principale, fichier à la racine)

## Déploiement

1. Créer un repo GitHub (ex: `2plus2`)
2. Pousser `index.html` à la racine
3. Activer GitHub Pages dans Settings > Pages > Source: main branch
4. (Optionnel) Lier un domaine personnalisé dans Settings > Pages > Custom domain
