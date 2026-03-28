# 2+2.com

## Le concept

Un site qui pose une question mathématique et oriente l'utilisateur vers le "bon" ou le "mauvais" site web selon sa réponse. Pas de titre, pas d'explication, pas de mode d'emploi.

## L'esprit

Le comique repose sur trois couches :

- **L'absurdité du filtre binaire** : l'idée qu'une formule mathématique puisse trier le bon du mauvais dans n'importe quel domaine. Google EST mieux que Bing. C'est une vérité, pas une opinion.
- **L'aplomb de la certitude** : le site ne nuance jamais, ne s'excuse jamais, ne se justifie jamais. Il énonce.
- **La pub grossièrement planquée** : Seventee.com au milieu de Google, Netflix et Spotify, avec exactement le même traitement. Le camouflage est tellement fin qu'il en devient transparent.

Le sarcasme est structurel, jamais verbalisé. Le site est explicitement ironique.

## Architecture

### Page A — Les évidences (`index.html`)

Grille compacte des **100 thèmes** (données `categories.json`) : mêmes règles que l’explorateur (formule KaTeX, easter eggs, `dumb` fixe ou aléatoire), plus la carte **Politique**. Pastille discrète sur les cartes qui ont au moins un easter egg.

La carte Politique demande "Pour qui voter ?" et répond toujours "Faux." — quel que soit le choix.

### Page B — Explorer (`explore.html`)

Des dizaines de thèmes (extensible à des milliers) accessibles via une barre de recherche. Pas de grille au chargement — le champ est l'unique porte d'entrée. Un bouton "au hasard" (🎲) pour la découverte.

Les formules varient selon la difficulté du thème :
- **Évidences** (difficulté 1) : `2+2`, `8-4`, `√16`
- **Intermédiaires** (difficulté 2) : `√144 - 8`, `7!/1260`, `log₁₀(10000)`
- **Complexes** (difficulté 3) : intégrales, déterminants, fonctions Gamma

Les formules sont rendues via KaTeX.

### Navigation

Une icône loupe (Page A → Page B) et une icône grille (Page B → Page A) dans le coin supérieur droit, à côté du toggle DA.

## Données (`categories.json`)

Chaque thème est défini par :
- `slug`, `name`, `emoji`, `difficulty` (1-3)
- `formula` (LaTeX), `correctAnswer` (nombre)
- `smart` : le site "correct" (nom + URL)
- `dumb` : le site "incorrect", soit fixe (`type: "fixed"`) soit aléatoire parmi un pool (`type: "random"`)
- `easterEggs` : réponses alternatives qui débloquent des liens cachés
- `tags` : mots-clés pour la recherche

### Thèmes "touchy"

Religion, politique, cuisine, langue, pays... La formule est volontairement complexe, la réponse correcte est volontairement provocatrice, et les mauvaises réponses piochent aléatoirement dans un pool de pages Wikipedia.

### Easter eggs

- **5 → 1984** : sur une **partie** des thèmes dont la formule est `2+2` (information, communication, archives — liste dans `CATALOGUE.md`), répondre 5 mène à la page Wikipedia de 1984 (George Orwell). Les autres cartes en `2+2` n’ont pas cet egg.
- **0 → Nihilisme** : sur le thème Religion, répondre 0 mène à la page Wikipedia du Nihilisme.
- **42 → La Grande Question** : sur certains thèmes, répondre 42 mène à la page Wikipedia de la réponse ultime (Guide du voyageur galactique).

Sur la page d’accueil, une petite pastille (couleur secondaire) marque les thèmes qui ont au moins un easter egg ; sur Explorer, pas d’indicateur.

## Directions artistiques

Menu latéral : plusieurs DA (classiques + atelier + pixel, voxel, etc.). C'est un outil de mise au point : les DA actuelles sont des points de départ pour itérer. Le toggle permet d'empiler et tester de nouvelles DA. Le thème choisi est partagé entre les deux pages via `localStorage`.

## Stack technique

- `index.html` : page des évidences (charge `categories.json`, KaTeX via CDN, `themes.css`)
- `explore.html` : page d'exploration (idem + recherche)
- `categories.json` : catalogue des thèmes
- Fonts : Google Fonts (Space Grotesk, Syne, DM Serif Display, Space Mono)
- Formules : KaTeX (CDN)
- Hébergement cible : GitHub Pages

## Déploiement

1. Créer un repo GitHub
2. Pousser tous les fichiers à la racine
3. Activer GitHub Pages (Settings > Pages > Source: main)
4. Lier un domaine personnalisé si besoin
