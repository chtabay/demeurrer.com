import { action, PQ } from "../lib.mjs";

export const roles = [
  {
    id: "technique",
    title: "Technique, travaux & sinistres",
    emoji: "🔧",
    oneLiner: "Maintenance, urgences, coordination artisans, liaison assurance.",
    cycles: {
      bien: {
        essentiel: "Maintenir la performance technique du patrimoine mandaté avec historique et priorités.",
        tools: ["Gestionnaire de tickets", "Carnet d'entretien numérique", "Réseau artisans qualifiés"],
        iaMetier:
          "Tu es responsable technique en agence. À partir des cartes et 5 pourquoi, propose matrices urgence/planifiable et documentation attendue.",
        phasesDetailed: [
          {
            title: "Diagnostics & plan",
            objectif: "Savoir ce qui doit être fait et quand.",
            actions: [
              action(
                "Construire une vision technique du bien : équipements, âge, antécédents, contraintes d'accès",
                "Fiche technique vivante + historique interventions.",
                [
                  PQ("Pourquoi une fiche technique vivante ?", "Parce qu'un bien est un système : sans mémoire, on répare au hasard et on répète les mêmes pannes."),
                  PQ("Pourquoi répéter les mêmes pannes est-il coûteux ?", "Parce que chaque passage artisan est facturé et le locataire subit : satisfaction en baisse."),
                  PQ("Pourquoi la satisfaction locataire impacte-t-elle le bailleur ?", "Parce qu'il reçoit les plaintes et impute souvent l'agence : pression sur le mandat."),
                  PQ("Pourquoi la pression sur le mandat pousse-t-elle à des réparations rapides mais mauvaises ?", "Parce que le court terme prime : dette technique."),
                  PQ("Pourquoi la dette technique finit-elle par un gros sinistre ?", "Parce que les petits signaux ignorés s'accumulent : le correctif précoce est moins cher."),
                ]
              ),
              action(
                "Prioriser les travaux selon sécurité, légalité louable, puis performance énergétique et confort",
                "Matrice priorité + calendrier pluriannuel.",
                [
                  PQ("Pourquoi sécurité d'abord ?", "Parce qu'un risque de sécurité expose à dommages humains et responsabilité : c'est non négociable."),
                  PQ("Pourquoi la légalité « louable » vient juste après ?", "Parce qu'on ne peut pas commercialiser un bien non conforme : blocage économique direct."),
                  PQ("Pourquoi le blocage économique direct mobilise-t-il la direction ?", "Parce que la vacance est mesurable immédiatement : urgence business."),
                  PQ("Pourquoi performance énergétique est-elle ensuite ?", "Parce qu'elle est importante mais souvent planifiable : elle se joue sur le moyen terme."),
                  PQ("Pourquoi le moyen terme nécessite-t-il un calendrier pluriannuel ?", "Parce que le bailleur finance mieux quand il voit une trajectoire : évite le tout immédiat."),
                ]
              ),
            ],
          },
          {
            title: "Interventions",
            objectif: "Exécuter vite et bien avec traçabilité.",
            actions: [
              action(
                "Qualifier chaque demande : urgence, sécurité, responsabilité bailleur/locataire, impact sinistre",
                "Arbre de décision + ticket qualifié.",
                [
                  PQ("Pourquoi un arbre de décision ?", "Parce que sans qualification, l'équipe traite tout comme urgent : saturation et mauvaises priorités."),
                  PQ("Pourquoi la saturation technique ralentit-elle tout le portefeuille ?", "Parce que les ressources sont limitées : un faux urgent vole du temps à un vrai urgent."),
                  PQ("Pourquoi voler du temps à un vrai urgent est-il un risque majeur ?", "Parce que le dommage peut s'aggraver et engager la responsabilité : spirale."),
                  PQ("Pourquoi la spirale dommage/responsabilité est-elle chère pour l'agence ?", "Parce qu'elle mène à sinistres, litiges et perte de confiance bailleur."),
                  PQ("Pourquoi la confiance bailleur sur le technique est-elle un critère de rétention ?", "Parce que le bailleur ne voit pas tout : il voit les incidents et leur résolution."),
                ]
              ),
              action(
                "Exiger des comptes rendus d'intervention standardisés (cause, action, matériaux, photos)",
                "CR artisan + validation interne.",
                [
                  PQ("Pourquoi standardiser le CR ?", "Parce que sinon chaque artisan écrit différemment : incompréhension et reprises."),
                  PQ("Pourquoi les reprises sont-elles un multiplicateur de coût ?", "Parce qu'elles impliquent déplacements, coordination locataire, mécontentement."),
                  PQ("Pourquoi le mécontentement locataire remonte-t-il vite au bailleur ?", "Parce qu'il contacte le propriétaire quand l'agence est perçue comme lente."),
                  PQ("Pourquoi la lenteur perçue est-elle souvent un problème d'information ?", "Parce que le locataire ne voit pas la qualification et l'attente artisan : il faut communiquer l'état."),
                  PQ("Pourquoi communiquer l'état réduit-il les ressentis négatifs ?", "Parce que l'attente informée est plus acceptable qu'une attente opaque."),
                ]
              ),
            ],
          },
          {
            title: "Grands travaux",
            objectif: "Passer du devis à la réception sans dérive.",
            actions: [
              action(
                "Geler un périmètre et des critères de réception avant de comparer les devis",
                "Cahier des charges minimal + grille comparative.",
                [
                  PQ("Pourquoi geler le périmètre ?", "Parce que sinon les devis ne sont pas comparables : le bailleur choisit au hasard."),
                  PQ("Pourquoi un choix au hasard mène-t-il à des avenants ?", "Parce que l'offre retenue ne couvre pas le besoin réel : dérive budget/délai."),
                  PQ("Pourquoi la dérive budget/délai est-elle explosive en relation bailleur ?", "Parce que la confiance se brise : le technique devient politique."),
                  PQ("Pourquoi le technique devient-il politique ?", "Parce que l'argent et le temps sont des sujets de pouvoir : il faut gouvernance."),
                  PQ("Pourquoi la gouvernance impose-t-elle des critères de réception mesurables ?", "Parce qu'elle évite le « terminé » subjectif et les chantiers interminables."),
                ]
              ),
              action(
                "Coordonner accès logement, voisinage et sécurité chantier pour réduire les incidents",
                "Plan de coordination + points hebdo.",
                [
                  PQ("Pourquoi un plan de coordination ?", "Parce que les chantiers perturbent occupants et voisins : sans plan, plaintes et arrêts."),
                  PQ("Pourquoi les arrêts de chantier coûtent-ils cher ?", "Parce qu'ils prolongent la vacance ou l'insalubrité : effet domino."),
                  PQ("Pourquoi l'effet domino technique impacte-t-il commercial et juridique ?", "Parce que le bien indisponible ou dangereux bloque location et expose : transversal."),
                  PQ("Pourquoi le transversal impose-t-il des points réguliers ?", "Parce que chaque équipe doit ajuster : communication synchronisée."),
                  PQ("Pourquoi la communication synchronisée réduit-elle les erreurs de promesse au locataire ?", "Parce que tout le monde partage la même date et le même périmètre."),
                ]
              ),
            ],
          },
        ],
      },
      annonce: {
        essentiel: "Ne pas promettre un état technique que le bien ne peut pas tenir en visite.",
        tools: ["Fiches techniques synthétiques", "Photos post-intervention", "Synchronisation commercial"],
        iaMetier:
          "Tu es expert technique immobilier. À partir des cartes et 5 pourquoi, explique comment éviter décalage promesse/réalité.",
        phasesDetailed: [
          {
            title: "Alignement annonce / réalité",
            objectif: "Décrire ce qui est vrai aujourd'hui.",
            actions: [
              action(
                "Valider les mentions techniques de l'annonce (DPE, équipements, rénovations) avec sources",
                "Checklist technique + preuves.",
                [
                  PQ("Pourquoi des sources pour chaque mention ?", "Parce qu'une promesse sans preuve devient une arme du candidat en négociation ou après entrée."),
                  PQ("Pourquoi le candidat utilise-t-il ces écarts ?", "Parce qu'il se sent trompé : la négociation devient conflictuelle avant même le bail."),
                  PQ("Pourquoi un conflit pré-bail est-il toxique ?", "Parce qu'il programme une relation lourde : le gestionnaire hérite."),
                  PQ("Pourquoi le gestionnaire hérite-t-il du technique mal annoncé ?", "Parce que les demandes « réparation » deviennent des attentes implicites."),
                  PQ("Pourquoi les attentes implicites explosent-elles en tickets ?", "Parce qu'elles ne sont pas contractuelles mais émotionnelles : charge énorme."),
                ]
              ),
              action(
                "Mettre à jour l'annonce immédiatement après une intervention modifiant l'état (salle de bains, chauffage)",
                "Process de mise à jour annonce post-chantier.",
                [
                  PQ("Pourquoi immédiatement ?", "Parce que les visites peuvent avoir lieu le lendemain : décalage visuel évident."),
                  PQ("Pourquoi le décalage visuel est-il pire que le décalage papier ?", "Parce qu'il est émotionnel : le candidat doute de tout le reste."),
                  PQ("Pourquoi le doute global nuit-il à la conversion ?", "Parce qu'il pousse à demander plus de garanties et à négocier plus fort : friction."),
                  PQ("Pourquoi la friction augmente-t-elle le temps de closing ?", "Parce qu'elle multiplie les questions et validations : vacance."),
                  PQ("Pourquoi un process post-chantier relie-t-il technique et marketing ?", "Parce que le produit a changé : l'annonce est une photo du produit."),
                ]
              ),
            ],
          },
          {
            title: "Visites techniques",
            objectif: "Répondre avec vérité et pédagogie sans se substituer au commercial.",
            actions: [
              action(
                "Préparer le commercial avec FAQ technique (vétusté, bruits, réseaux) et limites de garantie",
                "Brief technique écrit.",
                [
                  PQ("Pourquoi un brief technique écrit ?", "Parce que l'oral se déforme entre équipes : le commercial doit répéter juste."),
                  PQ("Pourquoi la justesse technique protège-t-elle le commercial ?", "Parce qu'il évite de promettre une réparation gratuite : il renvoie au cadre bail."),
                  PQ("Pourquoi renvoyer au cadre bail est-il important ?", "Parce que les obligations sont légales et contractuelles : pas « au bon vouloir »."),
                  PQ("Pourquoi le bon vouloir est-il un piège ?", "Parce qu'il crée des attentes non tenables : le gestionnaire paie ensuite."),
                  PQ("Pourquoi payer ensuite est-il coûteux pour l'agence ?", "Parce que ça sort du périmètre honoraires : marge interne absorbée."),
                ]
              ),
              action(
                "Être disponible pour visite technique exceptionnelle sur biens sensibles (humidité, structure)",
                "Règle de mobilisation + escalade.",
                [
                  PQ("Pourquoi des règles de mobilisation ?", "Parce que sinon chaque visite devient technique et saturerait l'équipe : il faut filtrer."),
                  PQ("Pourquoi filtrer est-il acceptable ?", "Parce que toutes les questions ne nécessitent pas un expert : pédagogie d'abord."),
                  PQ("Pourquoi la pédagogie réduit-elle le besoin d'expert ?", "Parce qu'elle clarifie ce qui est observable vs ce qui nécessite diagnostic payant."),
                  PQ("Pourquoi le diagnostic payant doit-il être expliqué tôt ?", "Parce que sinon il est vécu comme une surprise : friction bailleur."),
                  PQ("Pourquoi la friction bailleur au bon moment tue-t-elle des mandats ?", "Parce qu'il compare avec des offres moins honnêtes : la vérité doit être vendue avec méthode."),
                ]
              ),
            ],
          },
          {
            title: "Après retours marché",
            objectif: "Convertir les objections en plan d'action ou ajustement réaliste.",
            actions: [
              action(
                "Traduire objections techniques en options chiffrées (mini vs complet) pour décision bailleur",
                "Deux scénarios avec délais et impact loyer.",
                [
                  PQ("Pourquoi deux scénarios ?", "Parce qu'un seul scénario force un oui/non : le bailleur reporte."),
                  PQ("Pourquoi le report bailleur retarde-t-il la vente locative ?", "Parce que la décision technique est le goulet : sans options, pas de décision."),
                  PQ("Pourquoi des options chiffrées accélèrent-elles ?", "Parce qu'elles rendent l'arbitrage concret : le bailleur choisit un niveau de risque."),
                  PQ("Pourquoi le niveau de risque est-il le bon langage ?", "Parce qu'il aligne technique et business : pas seulement « joli »."),
                  PQ("Pourquoi aligner technique et business est-il le rôle du responsable technique ?", "Parce qu'il doit éviter la perfection technique sans sens économique."),
                ]
              ),
              action(
                "Refuser poliment les promesses impossibles et documenter pourquoi (sécurité, normes)",
                "Note interne + communication bailleur.",
                [
                  PQ("Pourquoi documenter le refus ?", "Parce qu'un refus oral est perçu comme obstruction : l'explication technique crédibilise."),
                  PQ("Pourquoi la crédibilité technique protège-t-elle les relations ?", "Parce qu'elle montre que l'agence protège le bailleur d'un danger, pas qu'elle « bloque »."),
                  PQ("Pourquoi protéger le bailleur d'un danger est-il un service ?", "Parce qu'il évite sinistre et responsabilité : valeur réelle."),
                  PQ("Pourquoi la valeur réelle doit-elle être expliquée simplement ?", "Parce que le bailleur n'est pas expert : la clarté crée l'adhésion."),
                  PQ("Pourquoi l'adhésion évite-t-elle les contournements dangereux ?", "Parce que sinon le bailleur va « bricoler » hors agence : risque maximal."),
                ]
              ),
            ],
          },
        ],
      },
      locataire: {
        essentiel: "Qualifier demandes, interventions et paiements sans zone grise.",
        tools: ["Hotline / astreinte", "Assurance habitation — liaisons", "Photothèque avant/après"],
        iaMetier:
          "Tu es coordinateur travaux en gestion locative. Cartographie décisions/paiements/traces pour demandes d'intervention.",
        phasesDetailed: [
          {
            title: "Qualification demande",
            objectif: "Décider vite qui fait quoi et à quel délai.",
            actions: [
              action(
                "Classifier la demande : urgence sécurité, entretien locataire, charge bailleur, voisinage",
                "Classification + SLA par classe.",
                [
                  PQ("Pourquoi classifier avant d'appeler un artisan ?", "Parce qu'un mauvais dispatch envoie le mauvais métier : double déplacement."),
                  PQ("Pourquoi le double déplacement est-il un gaspillage ?", "Parce qu'il facture et retarde : locataire en colère."),
                  PQ("Pourquoi la colère locataire remonte-t-elle vite ?", "Parce qu'elle devient un ticket juridique ou un avis négatif : amplification."),
                  PQ("Pourquoi l'amplification négative est-elle coûteuse ?", "Parce qu'elle touche la marque au-delà du dossier : externalité."),
                  PQ("Pourquoi les externalités imposent-elles des SLA publics internes ?", "Parce qu'elles forcent la discipline : promesse tenue au sens large."),
                ]
              ),
              action(
                "Informer le locataire du process : délais, accès, documents nécessaires (photos, description)",
                "Message type + suivi.",
                [
                  PQ("Pourquoi un message type ?", "Parce que l'improvisation crée des promesses implicites de délai : attentes fausses."),
                  PQ("Pourquoi les attentes fausses sont-elles le pire début d'intervention ?", "Parce qu'elles programment la déception même si l'intervention est correcte."),
                  PQ("Pourquoi la déception correcte est-elle un paradoxe fréquent ?", "Parce que l'expérience dépend de l'attente : le process doit gérer l'attente."),
                  PQ("Pourquoi gérer l'attente est-il aussi important que l'exécution ?", "Parce que le locataire juge d'abord la communication : c'est la face visible."),
                  PQ("Pourquoi la face visible technique est-elle souvent le coordinateur ?", "Parce qu'il incarne l'agence dans l'incident : formation critique."),
                ]
              ),
            ],
          },
          {
            title: "Ordres de service & devis",
            objectif: "Tracer décisions et euros.",
            actions: [
              action(
                "Obtenir validation bailleur sur devis au-delà d'un seuil défini dans le mandat",
                "Parcours de validation + archivage.",
                [
                  PQ("Pourquoi un seuil dans le mandat ?", "Parce que sinon chaque devis attend une validation lente : vacance ou insalubrité."),
                  PQ("Pourquoi la lenteur de validation est-elle un coût caché ?", "Parce qu'elle retarde la fin des travaux et la vie normale du locataire : friction."),
                  PQ("Pourquoi la friction locataire devient-elle un problème bailleur ?", "Parce qu'il reçoit les plaintes : pression sur l'agence."),
                  PQ("Pourquoi la pression pousse-t-elle à des validations hâtives ?", "Parce qu'elles mènent à accepter des devis sous-optimal : dette technique."),
                  PQ("Pourquoi archiver les validations ?", "Parce qu'elles prouvent la diligence et évitent le « je n'ai jamais accepté »."),
                ]
              ),
              action(
                "Attribuer clairement la facturation (bailleur, locataire, assurance) avant intervention",
                "Décision écrite dans le ticket.",
                [
                  PQ("Pourquoi avant intervention ?", "Parce qu'après, la facture devient une surprise : contestation."),
                  PQ("Pourquoi la surprise de facture est-elle un déclencheur d'impayé ?", "Parce que le locataire bloque en contestation : le recouvrement s'en mêle."),
                  PQ("Pourquoi mélanger technique et recouvrement est-il coûteux ?", "Parce que ça mobilise deux expertises sans coordination : temps."),
                  PQ("Pourquoi le temps mobilisé doit-il être anticipé ?", "Parce que sinon les SLA ne sont pas tenus : dégradation en chaîne."),
                  PQ("Pourquoi une chaîne dégradée est-elle un signal direction ?", "Parce qu'elle indique un process défaillant, pas des individus mauvais."),
                ]
              ),
            ],
          },
          {
            title: "Suivi & clôture",
            objectif: "Prouver la résolution et apprendre.",
            actions: [
              action(
                "Clôturer le ticket avec photos après intervention et retour locataire",
                "Clôture qualité + enquête courte.",
                [
                  PQ("Pourquoi photos après ?", "Parce que la preuve de résolution évite les reprises infinies : closure."),
                  PQ("Pourquoi la closure est-elle importante pour l'équipe ?", "Parce que les tickets ouverts fatiguent mentalement : charge cognitive."),
                  PQ("Pourquoi la charge cognitive excessive génère-t-elle des erreurs ?", "Parce que l'attention est limitée : erreurs sur nouveaux tickets."),
                  PQ("Pourquoi les erreurs nouvelles créent-elles une spirale ?", "Parce que le backlog grossit : le service technique devient le goulet."),
                  PQ("Pourquoi clôturer vite et bien est-il un levier de capacité ?", "Parce qu'il libère de l'attention pour la qualité sur le suivant."),
                ]
              ),
              action(
                "Analyser les causes récurrentes pour proposer actions système (formation, fournisseur, info bailleur)",
                "Rex mensuel technique.",
                [
                  PQ("Pourquoi un Rex mensuel ?", "Parce que sinon les récurrences restent invisibles : on traite des symptômes."),
                  PQ("Pourquoi traiter des symptômes coûte-t-il plus cher ?", "Parce que chaque occurrence paie un ticket complet : économie d'échelle inverse."),
                  PQ("Pourquoi l'économie d'échelle inverse est-elle un signal d'investissement ?", "Parce qu'un petit investissement préventif peut supprimer une classe de tickets."),
                  PQ("Pourquoi la prévention est-elle parfois « vendre » au bailleur ?", "Parce qu'il paie parfois : il faut un business case."),
                  PQ("Pourquoi le business case préventif est-il un métier transversal ?", "Parce qu'il relie technique, finance et relation : la direction décide."),
                ]
              ),
            ],
          },
        ],
      },
    },
  },
];
