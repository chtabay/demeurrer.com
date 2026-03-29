export const meta = {
  pageTitle: "Schéma fonctionnel — métiers × cycles × 5 pourquoi",
  lead:
    "Pour chaque métier et chaque cycle (bien, annonce, locataire), le parcours est découpé en phases. Chaque phase est une chaîne de cartes d'actions : une action, cinq « pourquoi » successifs (méthode des 5 pourquoi) pour remonter des symptômes aux causes systémiques et aux leviers de pilotage. Les cartes se lisent de gauche à droite ; à l'intérieur d'une carte, les pourquoi se lisent du haut vers le bas.",
  footnote:
    "Les cinq pourquoi sont des amorces d'analyse fonctionnelle, pas des vérités universelles : adaptez les formulations à votre organisation, à votre CRM et au cadre légal. Document de travail B2B.",
};

export const cycleKeys = ["bien", "annonce", "locataire"];

export const cycleLabels = {
  bien: {
    short: "Bien",
    title: "Cycle bien",
    hint: "Patrimoine mandaté : état, conformité, valorisation, sortie.",
  },
  annonce: {
    short: "Annonce",
    title: "Cycle annonce",
    hint: "Mise sur le marché : contenu, diffusion, conversion.",
  },
  locataire: {
    short: "Locataire",
    title: "Cycle locataire",
    hint: "Parcours occupant : sélection, entrée, relation, sortie.",
  },
};
