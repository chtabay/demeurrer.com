import { action, PQ } from "../lib.mjs";

export const roles = [
  {
    id: "commercial",
    title: "Commercialisation (location)",
    emoji: "🔑",
    oneLiner: "Transformer le mandat en bail signé au bon prix et au bon profil.",
    cycles: {
      bien: {
        essentiel: "Mettre en avant les atouts réels du bien et préparer les objections sans sur-promesse.",
        tools: ["Home staging léger", "Shooting / visite virtuelle", "Historique des baisses de loyer"],
        iaMetier:
          "Tu es négociateur location. À partir des cartes et 5 pourquoi, relie argumentaire de visite à preuves et objections typiques.",
        phasesDetailed: [
          {
            title: "Brief mandat & prix",
            objectif: "Comprendre le mandat comme un produit à vendre avec contraintes.",
            actions: [
              action(
                "Collecter auprès du gestionnaire / bailleur les faits vérifiables (contraintes, travaux récents, charges)",
                "Fiche brief interne avec sources et zones à ne pas promettre.",
                [
                  PQ("Pourquoi une fiche brief avant toute visite ?", "Parce que le commercial est le porte-parole du marché : sans faits, il improvise et crée des attentes non tenables."),
                  PQ("Pourquoi les attentes non tenables nuisent-elles à la conversion ?", "Parce que la visite devient une déception systématique : le candidat qualifié fuit et la marque souffre."),
                  PQ("Pourquoi la fuite du candidat qualifié augmente-t-elle le coût d'acquisition ?", "Parce qu'il faut regénérer des leads et refaire des visites : la vacance s'allonge."),
                  PQ("Pourquoi la vacance s'allonge-t-elle quand le commercial n'est pas aligné avec le réel ?", "Parce que le pipeline se remplit de mauvais matches : le temps perdu est un coût caché majeur."),
                  PQ("Pourquoi le coût caché doit-il remonter via le brief standardisé ?", "Parce qu'il force l'organisation à partager l'information au bon moment : le produit « visite » est préparé."),
                ]
              ),
              action(
                "Positionner le prix avec une fourchette de marché et une stratégie de loyer (temps vs prix)",
                "Argumentaire prix avec comparables et scénario bailleur validé.",
                [
                  PQ("Pourquoi lier prix et scénario bailleur explicitement ?", "Parce que le bailleur vit souvent une tension émotionnelle sur le loyer : le commercial doit expliquer le trade-off délai/prix avec données."),
                  PQ("Pourquoi le trade-off délai/prix est-il une compétence de conseil ?", "Parce qu'il transforme la négociation en co-construction : le bailleur accepte mieux une baisse si le raisonnement est clair."),
                  PQ("Pourquoi une baisse acceptée avec raisonnement préserve-t-elle la relation ?", "Parce qu'elle est perçue comme professionnelle et non comme un échec : la confiance reste."),
                  PQ("Pourquoi la confiance bailleur influence-t-elle la collaboration sur les visites et retours ?", "Parce qu'un bailleur méfiant micro-manage : le commercial perd du temps et la conversion chute."),
                  PQ("Pourquoi la conversion est-elle le résultat d'une chaîne bailleur-agence-candidat ?", "Parce qu'un maillon faible casse tout : le prix est le point de friction le plus visible."),
                ]
              ),
            ],
          },
          {
            title: "Mise en scène & preuve",
            objectif: "Rendre le bien lisible et désirable sans tromper.",
            actions: [
              action(
                "Préparer visite : parcours, points forts/faibles, réponses aux objections fréquentes du segment",
                "Script de visite + FAQ interne.",
                [
                  PQ("Pourquoi un script de visite n'est pas de la déshumanisation ?", "Parce qu'il garantit que les sujets sensibles (bruit, charges) sont traités honnêtement et complètement pour chaque candidat."),
                  PQ("Pourquoi l'honnêteté sur les points faibles peut-elle augmenter la conversion ?", "Parce qu'elle crée une confiance qui permet d'aller au dossier : le candidat préfère un défaut connu à une surprise."),
                  PQ("Pourquoi la surprise en visite est-elle un tueur de dossiers ?", "Parce qu'elle déclenche méfiance et compare à d'autres biens : le candidat renonce."),
                  PQ("Pourquoi la comparaison avec d'autres biens est-elle le contexte naturel du candidat ?", "Parce qu'il visite plusieurs offres : le commercial doit anticiper la comparaison et la préparer."),
                  PQ("Pourquoi préparer la comparaison renforce-t-elle la position de l'agence ?", "Parce qu'elle montre une expertise marché : le candidat achète aussi la méthode."),
                ]
              ),
              action(
                "Utiliser photos et médias comme preuves alignées avec la réalité du jour",
                "Contrôle visuel avant visite si photos anciennes.",
                [
                  PQ("Pourquoi vérifier l'alignement photo/réalité avant chaque visite ?", "Parce qu'une dérive visible détruit instantanément la crédibilité et déclenche des plaintes bailleur."),
                  PQ("Pourquoi la crédibilité perdue est-elle difficile à regagner sur le même mandat ?", "Parce que le candidat partage son expérience et le bailleur questionne la qualité de service."),
                  PQ("Pourquoi le bailleur impute-t-il souvent la qualité marketing à l'agence ?", "Parce que l'agence est mandataire : le commercial incarne cette promesse."),
                  PQ("Pourquoi incarner la promesse impose une coordination avec le gestionnaire ?", "Parce que le réel change : le commercial doit être branché sur les mises à jour du bien."),
                  PQ("Pourquoi les mises à jour du bien doivent-elles alimenter automatiquement le discours commercial ?", "Parce que la friction manuelle augmente les oublis : l'organisation doit réduire la latence informationnelle."),
                ]
              ),
            ],
          },
          {
            title: "Retours marché",
            objectif: "Ajuster sans bricolage en utilisant les signaux des visites.",
            actions: [
              action(
                "Synthétiser les retours (objections, profils intéressés) et proposer ajustements ciblés",
                "Compte rendu structuré avec fréquence et recommandations.",
                [
                  PQ("Pourquoi structurer les retours plutôt que des impressions ?", "Parce que l'impression mène à des baisses de prix globales inutiles : il faut distinguer problème de prix vs problème de produit vs problème de canal."),
                  PQ("Pourquoi une baisse globale inutile réduit-elle la marge et la crédibilité bailleur ?", "Parce qu'elle suggère que l'agence ne savait pas pricer : le bailleur perd confiance dans la stratégie initiale."),
                  PQ("Pourquoi la confiance dans la stratégie initiale est-elle un actif ?", "Parce qu'elle évite des remises en question constantes et des cycles de churn décisionnel."),
                  PQ("Pourquoi le churn décisionnel ralentit-il la remise sur le marché ?", "Parce que chaque changement exige revalidation, nouvelles photos, parfois nouveaux diagnostics : le temps file."),
                  PQ("Pourquoi le temps perdu est-il le plus grand ennemi du mandat en location ?", "Parce que le marché bouge : une décision rapide et fondée bat une décision parfaite tardive."),
                ]
              ),
              action(
                "Coordonner avec le gestionnaire si des travaux légers ou une remise en état augmentent la conversion",
                "Demandes formalisées avec estimation bénéfice vs coût.",
                [
                  PQ("Pourquoi formaliser une demande travaux avec estimation bénéfice ?", "Parce que sinon le bailleur perçoit une dépense sans lien avec un retour : il refuse ou reporte."),
                  PQ("Pourquoi le report bailleur prolonge-t-il la vacance même si le prix est bon ?", "Parce que le produit n'est pas au niveau du segment cible : le commercial ne peut pas compenser indéfiniment."),
                  PQ("Pourquoi le segment cible impose-t-il un niveau de qualité minimum ?", "Parce que le candidat compare : un petit investissement peut débloquer un saut de segment."),
                  PQ("Pourquoi le saut de segment est-il stratégiquement important ?", "Parce qu'il peut changer le prix et la stabilité locative : le commercial doit le quantifier."),
                  PQ("Pourquoi quantifier est-il nécessaire pour convaincre un bailleur rationnel ?", "Parce qu'il transforme une intuition en décision d'investissement avec un horizon de retour."),
                ]
              ),
            ],
          },
        ],
      },
      annonce: {
        essentiel: "Optimiser visibilité, clics et qualité des leads avec une mesure honnête.",
        tools: ["Portails & réseaux", "CRM leads", "Chat / WhatsApp pro"],
        iaMetier:
          "Tu es responsable commercial location. Décris l'entonnoir et les leviers par étape à partir des cartes et 5 pourquoi.",
        phasesDetailed: [
          {
            title: "Rédaction & différenciation",
            objectif: "Produire un message clair, vérifiable et orienté conversion.",
            actions: [
              action(
                "Écrire un titre et un lead qui reflètent le différentiel réel (pas superlatifs vides)",
                "Version A/B possible avec validation conformité.",
                [
                  PQ("Pourquoi éviter les superlatifs vides ?", "Parce qu'ils attirent des clics non qualifiés et augmentent le décalage visite/réalité."),
                  PQ("Pourquoi les clics non qualifiés coûtent-ils plus cher qu'ils ne rapportent ?", "Parce qu'ils consomment temps de réponse et visites pour rien : le coût marginal est élevé."),
                  PQ("Pourquoi le temps de réponse est-il un facteur de conversion en lead ?", "Parce que le candidat envoie plusieurs demandes : le premier pertinent gagne souvent l'engagement."),
                  PQ("Pourquoi l'engagement précoce est-il un levier sur la qualité du dossier ?", "Parce qu'il permet d'orienter tôt vers les pièces demandées : moins de va-et-vient."),
                  PQ("Pourquoi moins de va-et-vient augmente-t-il la capacité du commercial à traiter plus de mandats ?", "Parce que c'est du throughput : la rédaction honnête est une optimisation de capacité."),
                ]
              ),
              action(
                "Structurer les informations critiques en haut : loyer, charges, surface, disponibilité, critères dossier",
                "Template de fiche avec ordre imposé.",
                [
                  PQ("Pourquoi un ordre imposé sur la fiche ?", "Parce que les candidats scannent : si l'essentiel est dispersé, ils se trompent et abandonnent."),
                  PQ("Pourquoi l'abandon par friction d'information est-il invisible dans les stats ?", "Parce qu'il ne crée pas de lead : on croit que l'annonce ne marche pas alors que c'est la lisibilité."),
                  PQ("Pourquoi la lisibilité est-elle une fonction de conversion au même titre que le prix ?", "Parce qu'un prix correct mal présenté sous-performe : le commercial doit traiter annonce comme produit UX."),
                  PQ("Pourquoi l'UX d'annonce est-elle une compétence croisée marketing/commercial ?", "Parce que le marketing diffuse et le commercial connaît les objections : les deux doivent converger."),
                  PQ("Pourquoi la convergence marketing/commercial réduit-elle les tickets d'erreur au gestionnaire ?", "Parce que moins de mauvaises questions en amont signifie moins de corrections et retards."),
                ]
              ),
            ],
          },
          {
            title: "Multicanal & budget",
            objectif: "Acheter la visibilité utile, pas le bruit.",
            actions: [
              action(
                "Choisir canaux selon segment cible et mesurer coût par lead qualifié (pas seulement CPC)",
                "Tableau de pilotage hebdomadaire avec définition de « qualifié ».",
                [
                  PQ("Pourquoi définir « lead qualifié » en amont ?", "Parce que sans définition, les équipes débattent sans fin et optimisent le mauvais indicateur."),
                  PQ("Pourquoi optimiser le mauvais indicateur mène-t-elle à des budgets média gonflés ?", "Parce qu'on achète du volume pour compenser un faible taux de conversion aval : c'est une fuite en avant."),
                  PQ("Pourquoi la fuite en avant est-elle dangereuse pour la marge mandat ?", "Parce que le coût média peut dépasser la valeur d'une location réussie si le mandat est long ou peu rémunéré."),
                  PQ("Pourquoi la valeur d'une location réussie doit-elle être comprise par le commercial ?", "Parce qu'il arbitre entre effort et dépense : sans économie du mandat, il sur-vend ou sous-investit."),
                  PQ("Pourquoi l'arbitrage effort/dépense doit-il être transparent avec la direction ?", "Parce que la direction aligne les priorités portefeuille : certains mandats méritent plus de push média."),
                ]
              ),
              action(
                "Synchroniser CRM et canaux pour éviter doubles réponses et délais de réponse",
                "Règles d'attribution et d'astreinte.",
                [
                  PQ("Pourquoi les doubles réponses nuisent-elles à la conversion ?", "Parce qu'elles créent confusion et impression d' désorganisation : le candidat choisit un autre interlocuteur."),
                  PQ("Pourquoi l' désorganisation perçue est-elle un risque de marque ?", "Parce qu'elle suggère que la gestion sera identique après bail : le candidat projete."),
                  PQ("Pourquoi le candidat projette-t-il l'expérience d'achat sur l'expérience de gestion ?", "Parce que l'achat est l'unique contact visible avant signature : c'est un signal."),
                  PQ("Pourquoi ce signal impose-t-il des règles d'astreinte claires ?", "Parce que les leads arrivent 24/7 : sans règle, les délais de réponse explosent le week-end."),
                  PQ("Pourquoi les délais week-end sont-ils critiques en marché tendu ?", "Parce que le candidat avance vite avec d'autres agences : la réactivité est un avantage compétitif."),
                ]
              ),
            ],
          },
          {
            title: "Relance & closing",
            objectif: "Transformer l'intérêt en dossier complet signé.",
            actions: [
              action(
                "Relancer avec scripts basés sur valeur (pas pression) et prochaine étape claire",
                "Bibliothèque de relances + traçabilité dans CRM.",
                [
                  PQ("Pourquoi une relance « valeur » plutôt que pression ?", "Parce que la pression augmente l'abandon et les réclamations : la valeur explique pourquoi maintenant."),
                  PQ("Pourquoi « pourquoi maintenant » doit-il être honnête ?", "Parce que les fausses urgences détruisent la confiance : le candidat sensible au marché comprend la rareté réelle."),
                  PQ("Pourquoi la rareté réelle (concurrence) est-elle un levier plus éthique ?", "Parce qu'elle s'appuie sur des faits vérifiables : le commercial protège la marque."),
                  PQ("Pourquoi protéger la marque en closing est-il stratégique ?", "Parce qu'un closing agressif gagne un bail mais perd des références futures."),
                  PQ("Pourquoi les références futures comptent-elles en immobilier ?", "Parce que le bouche-à-oreille candidat et bailleur alimente le pipeline : le closing est un acte de réputation."),
                ]
              ),
              action(
                "Contrôler la complétude dossier avant transmission bailleur et signature électronique",
                "Checklist finale + signature ordonnée.",
                [
                  PQ("Pourquoi une checklist finale distincte du brief initial ?", "Parce que des pièces peuvent manquer en fin de parcours : le closing est un contrôle qualité."),
                  PQ("Pourquoi le contrôle qualité au closing évite-t-il des signatures bancales ?", "Parce qu'une signature avec dossier incomplet crée des risques juridiques et des impayés."),
                  PQ("Pourquoi le risque juridique au closing affecte-t-il aussi le bailleur ?", "Parce qu'il peut vouloir annuler ou renégocier : la vacance revient."),
                  PQ("Pourquoi la vacance qui revient est-elle la plus coûteuse ?", "Parce qu'elle combine délai perdu et perte de confiance : le commercial doit refaire vendre le mandat."),
                  PQ("Pourquoi refaire vendre un mandat est-il plus dur que la première vente ?", "Parce que le bailleur est méfiant : le process doit être irréprochable dès le départ."),
                ]
              ),
            ],
          },
        ],
      },
      locataire: {
        essentiel: "Qualifier sans discrimination et sécuriser le bailleur avec des preuves objectives.",
        tools: ["Grille critères objectifs", "Vérification revenus (cadre légal)", "Signature"],
        iaMetier:
          "Tu es commercial immobilier en France. À partir des cartes et 5 pourquoi, rappelle garde-fous légaux et critères objectifs.",
        phasesDetailed: [
          {
            title: "Premier contact",
            objectif: "Qualifier sans exclure illégalement et sans perdre des leads.",
            actions: [
              action(
                "Poser des questions ouvertes sur le besoin et le calendrier avant tout critère sensible",
                "Script de premier contact validé conformité.",
                [
                  PQ("Pourquoi commencer par besoin/calendrier ?", "Parce que c'est légitime pour aider le candidat et évite d'ouvrir sur des critères discriminants par accident."),
                  PQ("Pourquoi l'accident discriminatoire est-il fréquent sans script ?", "Parce que le commercial veut aller vite et pose des questions « naturelles » mais illégales."),
                  PQ("Pourquoi la vitesse sans cadre augmente-t-elle le risque juridique ?", "Parce qu'une phrase peut suffire à créer une preuve : la conformité est une discipline."),
                  PQ("Pourquoi la discipline de script est-elle une protection pour le commercial ?", "Parce qu'elle retire la charge cognitive du bon vouloir : il applique une méthode."),
                  PQ("Pourquoi une méthode commune améliore-t-elle l'équité entre candidats ?", "Parce qu'elle réduit les variations personnelles et les biais implicites."),
                ]
              ),
              action(
                "Expliquer le process dossier et les délais de réponse attendus pour aligner les attentes",
                "Email modèle + FAQ.",
                [
                  PQ("Pourquoi aligner les attentes dès le premier contact ?", "Parce que le candidat compare des agences : la clarté du process est un critère de choix."),
                  PQ("Pourquoi le choix d'agence se joue-t-il aussi sur la transparence ?", "Parce qu'il préfigure la relation future : le candidat projette la gestion."),
                  PQ("Pourquoi la projection gestion influence-t-elle la qualité des dossiers reçus ?", "Parce qu'un candidat sérieux investit si le process est crédible et rapide."),
                  PQ("Pourquoi un process lent décourage-t-il les dossiers complets ?", "Parce que le candidat optimise son temps et envoie partiel : le commercial perd en fin de parcours."),
                  PQ("Pourquoi un dossier partiel fin de parcours coûte-t-il plus cher qu'un refus tôt ?", "Parce qu'il consomme visites et arbitrage bailleur pour une impasse évitable."),
                ]
              ),
            ],
          },
          {
            title: "Collecte dossier",
            objectif: "Obtenir des pièces valides et comparables entre candidats.",
            actions: [
              action(
                "Utiliser une liste de pièces identique pour tous les candidats du même bien",
                "Liste standard publiée et archivée par candidature.",
                [
                  PQ("Pourquoi une liste identique ?", "Parce qu'elle permet une comparaison équitable et une défense en cas de contestation de traitement."),
                  PQ("Pourquoi l'équité de traitement est-elle centrale légalement et commercialement ?", "Parce qu'elle protège l'agence et rassure le bailleur sur l'objectivité."),
                  PQ("Pourquoi le bailleur exige-t-il souvent une objectivité apparente ?", "Parce qu'il craint le conflit et le mauvais choix : il veut une méthode."),
                  PQ("Pourquoi montrer la méthode augmente-t-il la confiance et la vitesse de décision ?", "Parce que le bailleur peut comparer des dossiers sur une grille sans ambiguïté."),
                  PQ("Pourquoi la vitesse de décision bailleur est-elle un avantage compétitif du mandat ?", "Parce qu'elle réduit la vacance et sécurise le candidat choisi : moins de désistements."),
                ]
              ),
              action(
                "Vérifier la cohérence interne des pièces (périodes, montants) avant transmission",
                "Contrôle anti-incohérence avec demandes de compléments.",
                [
                  PQ("Pourquoi un contrôle anti-incohérence avant transmission ?", "Parce que transmettre un dossier incohérent fait perdre confiance au bailleur et retarde la décision."),
                  PQ("Pourquoi la perte de confiance au moment critique est-elle dangereuse ?", "Parce qu'elle généralise : le bailleur doute de tous les dossiers suivants de l'agence."),
                  PQ("Pourquoi un doute généralisé ralentit-il tout le portefeuille du commercial ?", "Parce que le bailleur multiplie les vérifications et les questions : friction."),
                  PQ("Pourquoi la friction au moment bailleur est-elle un coût pour l'agence ?", "Parce qu'elle nécessite reprises et relances : le commercial subit un backlog."),
                  PQ("Pourquoi réduire le backlog via qualité amont est-il un levier de productivité ?", "Parce qu'il libère du temps pour vendre d'autres mandats : la qualité est un multiplicateur."),
                ]
              ),
            ],
          },
          {
            title: "Arbitrage bailleur",
            objectif: "Faciliter une décision éclairée avec recommandation argumentée.",
            actions: [
              action(
                "Présenter les candidats sur une grille unique : critères objectifs, risques, points forts",
                "Grille comparative + synthèse 10 lignes max par candidat.",
                [
                  PQ("Pourquoi une grille unique plutôt qu'un dossier brut ?", "Parce que le bailleur n'a pas le temps d'expertiser : le commercial doit rendre la comparaison possible."),
                  PQ("Pourquoi le temps limité du bailleur influence-t-il la qualité de décision ?", "Parce qu'il choisira des shortcuts (sympathie) si l'agence ne structure pas : risque de biais."),
                  PQ("Pourquoi le biais de sympathie est-il un risque pour le bailleur et l'agence ?", "Parce qu'il peut sélectionner un profil risqué : l'agence sera imputée si ça se passe mal."),
                  PQ("Pourquoi l'agence est-elle imputée même si le bailleur décide ?", "Parce que le mandat confie le conseil : une recommandation argumentée protège en montrant la diligence."),
                  PQ("Pourquoi la diligence visible est-elle une valeur de service ?", "Parce qu'elle justifie les honoraires et renforce la confiance pour le renouvellement."),
                ]
              ),
              action(
                "Tracer la décision et les conditions particulières acceptées pour préparer la rédaction du bail",
                "Journal avec horodatage et version des engagements.",
                [
                  PQ("Pourquoi tracer la décision au moment où elle est prise ?", "Parce que la mémoire diverge après coup : la trace évite les erreurs contractuelles."),
                  PQ("Pourquoi les erreurs contractuelles au départ du bail sont-elles les plus coûteuses ?", "Parce qu'elles figent des obligations : corrections ultérieures sont lourdes et conflictuelles."),
                  PQ("Pourquoi les corrections ultérieures affectent-elles la relation locataire ?", "Parce qu'elles sont vécues comme des changements de règles : le climat se dégrade."),
                  PQ("Pourquoi le climat initial influence-t-il impayés et demandes ?", "Parce que la confiance facilite la coopération : le commercial doit protéger cette phase."),
                  PQ("Pourquoi protéger la phase décision bailleur est-elle une mission transverse ?", "Parce qu'elle conditionne la stabilité du cycle locataire sur des années."),
                ]
              ),
            ],
          },
        ],
      },
    },
  },
];
