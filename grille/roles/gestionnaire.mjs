import { action, PQ } from "../lib.mjs";

export const roles = [
  {
    id: "gestionnaire",
    title: "Gestionnaire locatif",
    emoji: "📋",
    oneLiner: "Opérationnel quotidien du mandat : relation bailleur, locataire, prestataires.",
    cycles: {
      bien: {
        essentiel: "Tenir le bien conforme, assurable et louable avec un historique traçable.",
        tools: ["Logiciel de gestion locative", "GED / preuves photos datées", "Planning prestataires"],
        iaMetier:
          "Tu es un gestionnaire locatif senior. Pour le cycle « bien », à partir des cartes et des 5 pourquoi, détaille livrables par étape et pièges sinistre/litige.",
        phasesDetailed: [
          {
            title: "État patrimonial & preuve",
            objectif: "Disposer d'une base factuelle et datée sur l'état du bien.",
            actions: [
              action(
                "Tenir EDL / inventaires et mises à jour après travaux avec photos horodatées",
                "Dossier GED indexé par pièce et par date, accessible au commercial et au juridique.",
                [
                  PQ("Pourquoi l'horodatage et l'indexation sont-ils non négociables ?", "Parce qu'en sinistre ou litige, la preuve se joue sur la continuité documentaire : des photos éparses sans lien au bail perdent leur force probante."),
                  PQ("Pourquoi la force probante influence-t-elle directement l'indemnisation ou la charge travaux ?", "Parce que l'assureur et les parties raisonnent sur des faits établis : sans preuve, la discussion devient subjective et coûteuse."),
                  PQ("Pourquoi éviter le subjectif est-il un enjeu de charge interne ?", "Parce que le temps passé à reconstituer la réalité après coup multiplie les allers-retours entre équipes et avec le bailleur."),
                  PQ("Pourquoi la visibilité inter-équipes (commercial, juridique) sur le dossier bien ?", "Parce que chaque métier prend des décisions sur la même réalité : une base unique évite des promesses contradictoires au locataire ou au bailleur."),
                  PQ("Pourquoi des promesses contradictoires augmentent-elles le risque juridique et la vacance ?", "Parce qu'elles retardent les travaux ou la remise en location et dégradent la confiance : la traçabilité est un levier de fluidité."),
                ]
              ),
              action(
                "Suivre les obligations réglementaires (diagnostics, équipements) avec échéancier et alertes",
                "Calendrier partagé avec statut, coûts et impacts sur la commercialisation.",
                [
                  PQ("Pourquoi un calendrier partagé plutôt qu'un suivi silo dans la boîte mail ?", "Parce que les échéances légales sont des contraintes dures : oubliées, elles bloquent la mise en location ou exposent à sanction et contestation."),
                  PQ("Pourquoi le blocage de commercialisation est-il un coût immédiat pour le bailleur ?", "Parce qu'il prolonge la vacance : le gestionnaire transforme une obligation technique en impact économique visible."),
                  PQ("Pourquoi rendre l'impact économique visible au bailleur ?", "Parce qu'il priorise les dépenses et accélère les validations : sans visibilité, les travaux attendent et le bien dort."),
                  PQ("Pourquoi l'accélération des validations est-elle un métier relationnel du gestionnaire ?", "Parce que le bailleur subit distance et complexité : clarifier l'enjeu réduit la friction décisionnelle."),
                  PQ("Pourquoi réduire la friction décisionnelle sur le bien protège-t-elle l'ensemble du cycle annonce ?", "Parce qu'une commercialisation ne peut promettre qu'un produit réellement disponible et conforme : le bien est le socle."),
                ]
              ),
            ],
          },
          {
            title: "Entretien & visites",
            objectif: "Prévenir la dégradation et détecter tôt les problèmes structurels ou locataires.",
            actions: [
              action(
                "Planifier visites périodiques selon risque (ancienneté, sinistres passés, type d'occupation)",
                "Grille de fréquence + compte rendu standardisé et archivé.",
                [
                  PQ("Pourquoi adapter la fréquence au risque plutôt qu'une visite unique annuelle ?", "Parce que le risque n'est pas uniforme : un bien avec antécédents d'infiltration nécessite une surveillance plus dense pour éviter un sinistre majeur."),
                  PQ("Pourquoi un sinistre majeur est-il un événement transversal (assurance, travaux, locataire) ?", "Parce qu'il mobilise toute la chaîne : sans détection précoce, le coût et le temps explosent."),
                  PQ("Pourquoi le temps perdu se traduit-il souvent en vacance ou en baisse de loyer ?", "Parce que le bien reste partiellement inutilisable ou contesté : le gestionnaire doit voir le coût d'opportunité."),
                  PQ("Pourquoi le compte rendu standardisé est-il une pièce de gestion et pas une formalité ?", "Parce qu'il crée une série temporelle : on compare l'état dans le temps et on justifie des travaux avant qu'il ne soit trop tard."),
                  PQ("Pourquoi la série temporelle aide-t-elle le bailleur à décider des investissements ?", "Parce qu'elle rend objective la vétusté vs entretien locataire : elle réduit les disputes et accélère les arbitrages."),
                ]
              ),
              action(
                "Tracer les demandes d'intervention et les décisions bailleur/locataire (qui paie, qui valide)",
                "Tickets avec statut, pièces jointes et lien vers devis/factures.",
                [
                  PQ("Pourquoi un ticket structuré plutôt qu'un fil d'e-mails ?", "Parce que le fil se casse et les pièces se perdent : en litige, l'agence doit prouver diligence et répartition des obligations."),
                  PQ("Pourquoi prouver la diligence est-il central pour l'agence mandataire ?", "Parce que le mandat impose un devoir de moyens : l'absence de trace transforme une incompréhension en faute reprochée."),
                  PQ("Pourquoi la faute reprochée affecte-t-elle la relation bailleur et la renégociation du mandat ?", "Parce que le bailleur cherche un responsable quand un coût surgit : la traçabilité protège en montrant les validations et refus."),
                  PQ("Pourquoi séparer clairement qui valide et qui paie ?", "Parce que la confusion retarde les devis et crée des impayés de charges ou travaux : c'est une source fréquente de friction locataire."),
                  PQ("Pourquoi réduire la friction locataire sur les travaux diminue-t-il le risque d'impayé ?", "Parce que le locataire paie plus volontiers quand le process est clair et équitable : le ticket rend ce process explicite."),
                ]
              ),
            ],
          },
          {
            title: "Travaux & réception",
            objectif: "Passer du devis à la réception sans zone grise.",
            actions: [
              action(
                "Comparer des devis sur un périmètre identique et exiger des clauses de délai et pénalités adaptées",
                "Tableau comparatif + devis retenu et motif.",
                [
                  PQ("Pourquoi exiger un périmètre identique entre devis ?", "Parce que sinon on compare des chantiers différents : le bailleur choisit le moins cher pour un service incomplet, puis conteste les avenants."),
                  PQ("Pourquoi les avenants en cascade sont-ils un risque pour délais et budget ?", "Parce qu'ils révèlent une mauvaise définition initiale : la vacance s'allonge et la confiance s'érode."),
                  PQ("Pourquoi la confiance s'érode-t-elle vite sur les chantiers mal cadrés ?", "Parce que le bailleur vit le bien comme un patrimoine : l'improvisation est perçue comme un manque de professionnalisme de l'agence."),
                  PQ("Pourquoi le professionnalisme perçu influence-t-il la coopération (acomptes, accès logement) ?", "Parce qu'un bailleur méfiant ralentit les validations : le gestionnaire paie en temps perdu."),
                  PQ("Pourquoi le temps perdu sur validations est-il un indicateur à remonter à la direction ?", "Parce qu'il peut signaler un problème de confiance systémique ou un process d'approbation trop lourd."),
                ]
              ),
              action(
                "Réceptionner avec critères mesurables et clôture documentaire (photos, attestations, garanties)",
                "Procès-verbal de réception signé et dossier complet dans la GED.",
                [
                  PQ("Pourquoi une réception « au feeling » est-elle dangereuse ?", "Parce que les malfaçons apparaissent après départ des artisans : sans critères, la responsabilité devient floue et le litige s'éternise."),
                  PQ("Pourquoi la clarté de responsabilité réduit-elle la durée d'indisponibilité locative ?", "Parce qu'elle permet d'ordonner les corrections sans débat : on remet le bien sur le marché plus vite."),
                  PQ("Pourquoi la rapidité de remise sur le marché est-elle un KPI pour le gestionnaire ?", "Parce qu'elle traduit l'efficacité bout-en-bout : devis → chantier → annonce, sans friction."),
                  PQ("Pourquoi le lien de bout-en-bout est-il souvent cassé entre gestion et commercial ?", "Parce que les équipes ne partagent pas la même date cible : la documentation de réception synchronise les acteurs."),
                  PQ("Pourquoi synchroniser les acteurs via la documentation est-elle une tâche de chef d'orchestre ?", "Parce que le gestionnaire porte la réalité du bien : sa clôture qualité conditionne toute la chaîne aval."),
                ]
              ),
            ],
          },
        ],
      },
      annonce: {
        essentiel: "Alimenter des fiches exactes et des relances sur les candidatures sans sur-promesse.",
        tools: ["Publipostage multi-diffuseurs", "Agenda visites", "Scoring dossiers (hors discrimination)"],
        iaMetier:
          "Tu es un gestionnaire locatif. Pour le cycle « annonce », à partir des cartes et des 5 pourquoi, produis checklists qualité fiche et compte rendu visite.",
        phasesDetailed: [
          {
            title: "Fiche & critères",
            objectif: "Aligner description, photos et critères d'accès au dossier.",
            actions: [
              action(
                "Vérifier chaque champ critique (surface, charges, équipements, disponibilité) contre le réel",
                "Liste de contrôle signée avec sources (visite, documents).",
                [
                  PQ("Pourquoi vérifier contre le réel avant publication ?", "Parce que l'erreur matérielle détruit la confiance en visite et expose à réclamation : le gestionnaire est souvent le détenteur du réel."),
                  PQ("Pourquoi la confiance en visite est-elle un actif concurrentiel ?", "Parce qu'un candidat préqualifié qui se sent trompé retire son dossier et diffuse une image négative du mandat."),
                  PQ("Pourquoi l'image négative d'un mandat affecte-t-elle aussi d'autres biens de l'agence ?", "Parce que les avis et le bouche-à-oreille se généralisent : la qualité de fiche est une question de marque."),
                  PQ("Pourquoi la marque est-elle un sujet opérationnel pour le gestionnaire, pas seulement marketing ?", "Parce que le gestionnaire alimente le contenu réel : marketing diffuse, gestion garantit la vérité."),
                  PQ("Pourquoi la vérité du contenu conditionne-t-elle le taux de transformation visite → dossier ?", "Parce que la visite confirme ou infirme : moins d'écart, plus de dossiers complets rapidement."),
                ]
              ),
              action(
                "Expliciter des critères d'accès au dossier objectifs et liés au risque locatif (garanties, revenus)",
                "Critères publiés en interne et communiqués de manière homogène aux candidats.",
                [
                  PQ("Pourquoi homogénéiser la communication des critères ?", "Parce que des messages différents selon interlocuteurs créent des accusations d'inégalité de traitement."),
                  PQ("Pourquoi l'inégalité perçue est-elle un risque même si l'intention est innocente ?", "Parce que la perception compte en audit interne et en réputation : la cohérence protège l'agence."),
                  PQ("Pourquoi la cohérence protège-t-elle aussi le commercial ?", "Parce qu'il applique une règle claire : moins de négociation ad hoc, plus de rapidité."),
                  PQ("Pourquoi la rapidité de collecte dossier est-elle critique en marché tendu ?", "Parce que le candidat a des alternatives : un process flou fait fuir vers un autre bien."),
                  PQ("Pourquoi la fuite de candidats qualifiés coûte-t-elle plus cher qu'un refus explicite ?", "Parce qu'elle allonge la vacance et oblige à relancer des leads moins bons : le gestionnaire en voit l'impact sur le planning."),
                ]
              ),
            ],
          },
          {
            title: "Visites",
            objectif: "Convertir l'intérêt en dossiers exploitables.",
            actions: [
              action(
                "Standardiser le compte rendu de visite : points sensibles, objections, niveau d'intérêt, prochaine étape",
                "Modèle de CR dans l'outil, visible bailleur si pertinent.",
                [
                  PQ("Pourquoi un CR standardisé plutôt qu'un commentaire libre ?", "Parce que le libre est inégal et non agrégable : la direction ne peut pas piloter sans structure."),
                  PQ("Pourquoi l'agrégation des objections aide-t-elle à ajuster prix ou annonce ?", "Parce qu'elle révèle des motifs récurrents (bruit, luminosité) que la fiche ne mentionne pas."),
                  PQ("Pourquoi ajuster la fiche après visites est-il moins coûteux que multiplier des visites inutiles ?", "Parce que chaque visite consomme du temps commercial et une opportunité candidat : la donnée qualitative doit nourrir le marketing."),
                  PQ("Pourquoi nourrir le marketing avec le terrain est-il une boucle rarement fermée ?", "Parce que les silos empêchent la remontée systématique : le CR structuré est un média de feedback."),
                  PQ("Pourquoi fermer la boucle améliore-t-elle le taux de dossiers complets ?", "Parce que l'annonce devient plus précise et attire des candidats mieux alignés."),
                ]
              ),
              action(
                "Garantir délais de relance et transmission dossier au bailleur selon SLA interne",
                "SLA affiché en interne + alertes de retard.",
                [
                  PQ("Pourquoi un SLA interne sur la transmission dossier ?", "Parce que le bailleur décide souvent sous contrainte de temps : un retard interne fait perdre le candidat sans que le marché attende."),
                  PQ("Pourquoi la perte de candidat est-elle un coût invisible pour l'agence ?", "Parce qu'elle se traduit par vacance prolongée et effort commercial supplémentaire : le gestionnaire en subit les relances."),
                  PQ("Pourquoi les relances répétées sur un même bien fatiguent-elles l'équipe ?", "Parce qu'elles signalent un dysfonctionnement système : SLA et alertes transforment la fatigue en amélioration."),
                  PQ("Pourquoi améliorer le système est-il préférable à presser les individus ?", "Parce que la pression sans outil augmente les erreurs et les oublis documentaires : l'inverse du besoin."),
                  PQ("Pourquoi la qualité documentaire au moment bailleur est-elle critique ?", "Parce que le bailleur arbitre sur des preuves : un dossier tardif incomplet brouille la décision."),
                ]
              ),
            ],
          },
          {
            title: "Montage dossier bailleur",
            objectif: "Faciliter une décision rapide et traçable.",
            actions: [
              action(
                "Assembler un dossier décisionnel : synthèse, pièces, points de vigilance, recommandation argumentée",
                "Dossier unique numéroté, versionnée.",
                [
                  PQ("Pourquoi une recommandation argumentée et pas seulement des pièces ?", "Parce que le bailleur souvent non expert veut une lecture décisionnelle : sans synthèse, il reporte ou décide au hasard."),
                  PQ("Pourquoi le report de décision allonge-t-il la vacance ?", "Parce que le candidat part : le gestionnaire transforme l'information en urgence compréhensible."),
                  PQ("Pourquoi l'urgence compréhensible est-elle un service vendu au bailleur ?", "Parce qu'elle réduit son temps cognitif et sécurise son choix : c'est une partie de la valeur de l'agence."),
                  PQ("Pourquoi la valeur perçue par le bailleur influence-t-elle la rétention du mandat ?", "Parce qu'il compare avec d'autres modes (location directe) : la rapidité et la clarté justifient les honoraires."),
                  PQ("Pourquoi la justification des honoraires passe-t-elle par la qualité du montage dossier ?", "Parce que c'est un moment où la transparence et la méthode sont visibles : c'est une preuve de professionnalisme."),
                ]
              ),
              action(
                "Tracer la décision bailleur et les conditions particulières acceptées (garanties, clauses)",
                "Journal de décision avec horodatage et version du bail préparée.",
                [
                  PQ("Pourquoi tracer la décision au-delà de l'accord oral ?", "Parce que la mémoire diverge après coup : la trace évite les renégociations et les erreurs de rédaction."),
                  PQ("Pourquoi les erreurs de rédaction sont-elles un risque juridique majeur ?", "Parce qu'elles figent des obligations mal comprises : le gestionnaire est souvent au centre des corrections."),
                  PQ("Pourquoi le gestionnaire est-il exposé si les clauses sont floues ?", "Parce qu'il exécute au quotidien : charges, travaux, relations locataire — la flouitude se transforme en conflit."),
                  PQ("Pourquoi réduire la flouitude au moment du bail améliore-t-il le cycle locataire entier ?", "Parce que le bail est la matrice des interactions : une base claire diminue tickets et incompréhensions."),
                  PQ("Pourquoi moins de tickets libère-t-il du temps pour la valeur ajoutée ?", "Parce que le gestionnaire peut se concentrer sur prévention et optimisation plutôt que sur des reprises de conflits évitables."),
                ]
              ),
            ],
          },
        ],
      },
      locataire: {
        essentiel: "Garantir une entrée propre et un suivi jusqu'à la sortie avec des preuves à chaque étape.",
        tools: ["Signature électronique", "Prélèvement & charges", "Modèles de courriers"],
        iaMetier:
          "Tu es un gestionnaire locatif. Cartographie le cycle locataire avec jalons, délais et documents ; identifie les ruptures de communication.",
        phasesDetailed: [
          {
            title: "Pré-bail",
            objectif: "Obtenir un dossier complet et une garantie adaptée au risque.",
            actions: [
              action(
                "Contrôler la complétude du dossier et la cohérence des pièces avec les critères annoncés",
                "Checklist validée + demandes de compléments traçables.",
                [
                  PQ("Pourquoi une checklist exhaustive plutôt qu'une validation au feeling ?", "Parce que l'oubli d'une pièce crée une faille en impayé ou litige : le gestionnaire est le dernier rempart avant signature."),
                  PQ("Pourquoi la complétude est-elle une protection pour le bailleur et l'agence ?", "Parce qu'elle documente la diligence : en cas de défaut de paiement, le dossier initial pèse dans la stratégie."),
                  PQ("Pourquoi la stratégie de recouvrement commence-t-elle avant le bail ?", "Parce que les garanties et informations locataire conditionnent les options (caution, GLI, relances) : c'est une continuité."),
                  PQ("Pourquoi la continuité dossier → exécution est-elle souvent brisée ?", "Parce que les outils séparent commercial et gestion : la checklist unifie le standard."),
                  PQ("Pourquoi un standard unifié réduit-il les écarts de traitement entre collaborateurs ?", "Parce qu'il diminue les zones grises où certains profils passent avec moins de contrôle."),
                ]
              ),
              action(
                "Expliciter au locataire le calendrier, les montants et les moyens de paiement avant signature",
                "Notice d'entrée + échéancier clair archivé avec accusé de lecture si possible.",
                [
                  PQ("Pourquoi un échéancier avant signature ?", "Parce que les malentendus sur date de prélèvement ou charges génèrent des impayés « de bonne foi » évitables."),
                  PQ("Pourquoi l'impayé de bonne foi n'est-il pas sans coût ?", "Parce qu'il consomme relances et temps : il pollue les indicateurs et fatigue le locataire."),
                  PQ("Pourquoi la fatigue du locataire au début du bail est-elle un risque relationnel ?", "Parce qu'elle rend les interactions suivantes plus conflictuelles : le gestionnaire paie en médiation."),
                  PQ("Pourquoi une entrée calibrée améliore-t-elle la coopération en sinistre ou travaux ?", "Parce que la confiance initiale facilite l'accès au logement et la réactivité : c'est un actif opérationnel."),
                  PQ("Pourquoi l'agence doit-elle voir la confiance comme un actif opérationnel ?", "Parce qu'elle réduit le coût marginal de gestion d'un dossier sur toute la durée du bail."),
                ]
              ),
            ],
          },
          {
            title: "Entrée",
            objectif: "Matérialiser l'état des lieux et l'état contractuel sans ambiguïté.",
            actions: [
              action(
                "Réaliser ou superviser l'EDL d'entrée avec relevés objectifs et photos systématiques",
                "EDL signé + stockage GED + lien dans le dossier locataire.",
                [
                  PQ("Pourquoi l'EDL d'entrée est-il une pièce maîtresse du cycle locataire ?", "Parce qu'il fixe la référence pour la sortie : toute ambiguïté devient litige sur retenues sur dépôt."),
                  PQ("Pourquoi le litige sur dépôt est-il fréquent et coûteux ?", "Parce qu'il mélange vétusté, entretien et subjectivité : la preuve d'entrée est le contre-poids."),
                  PQ("Pourquoi la preuve d'entrée protège-t-elle aussi le locataire ?", "Parce qu'elle évite des retenues abusives : l'équité renforce la confiance et le paiement."),
                  PQ("Pourquoi la confiance au paiement est-elle corrélée à la perception d'équité ?", "Parce qu'un locataire qui se sent traité équitablement coopère davantage sur charges et travaux."),
                  PQ("Pourquoi la coopération sur travaux réduit-elle le risque de sinistre aggravé ?", "Parce que les signalements précoces et l'accès facilité limitent les dommages : le gestionnaire transforme relation en prévention."),
                ]
              ),
              action(
                "Paramétrer prélèvement, quittancement et canaux de demande avec test de bon fonctionnement",
                "Fiche paramétrage + premier quittancement surveillé.",
                [
                  PQ("Pourquoi tester le premier prélèvement ?", "Parce qu'une erreur de RIB ou de date crée un défaut de confiance immédiat et un impayé technique."),
                  PQ("Pourquoi l'impayé technique est-il dangereux malgré la solvabilité ?", "Parce qu'il déclenche des relances automatiques et une escalade inutile : le locataire se sent accusé à tort."),
                  PQ("Pourquoi l'escalade inutile coûte-t-elle cher en temps et en image ?", "Parce qu'elle consomme du support et salit l'expérience : le gestionnaire doit corriger vite."),
                  PQ("Pourquoi corriger vite exige-t-il des process et pas seulement de la bonne volonté ?", "Parce que la bonne volonté ne scale pas : les outils et checklists réduisent la récurrence."),
                  PQ("Pourquoi réduire la récurrence d'erreurs de paramétrage est-elle un KPI interne ?", "Parce qu'elle mesure la qualité d'onboarding locataire, qui est le fondement du recouvrement."),
                ]
              ),
            ],
          },
          {
            title: "Vie du bail & sortie",
            objectif: "Clôturer proprement avec un solde de tout compte défendable.",
            actions: [
              action(
                "Traiter les demandes avec SLA interne et escalade sur urgences sécurité / légales",
                "Tickets priorisés + registre des urgences.",
                [
                  PQ("Pourquoi prioriser les urgences sécurité ?", "Parce que le non-traitement expose à dommages corporels et responsabilité : au-delà du coût financier, c'est un risque existentiel pour l'agence."),
                  PQ("Pourquoi le risque existentiel doit-il être une catégorie explicite dans le gestionnaire ?", "Parce qu'il impose des chemins décisionnels différents (coupure gaz, électricité) : le délai standard ne s'applique pas."),
                  PQ("Pourquoi des chemins décisionnels différents nécessitent-ils une formation continue ?", "Parce que l'erreur peut aggraver la situation : le gestionnaire doit savoir quand stopper et escalader."),
                  PQ("Pourquoi savoir escalader est-il une compétence, pas un échec ?", "Parce qu'il préserve le client et l'entreprise : la culture doit récompenser l'escalade précoce plutôt que le bricolage."),
                  PQ("Pourquoi le bricolage prolonge-t-il les contentieux ?", "Parce qu'il crée des traces floues et des engagements implicites : la sortie devient plus lourde."),
                ]
              ),
              action(
                "Préparer la sortie : préavis, EDL sortie, régularisation charges, restitution dépôt avec calcul documenté",
                "Pack de sortie avec checklist et délais légaux rappelés.",
                [
                  PQ("Pourquoi un pack de sortie standardisé ?", "Parce que la sortie concentre tensions : standardiser réduit les oublis de charges et les retenues contestées."),
                  PQ("Pourquoi les oublis de charges créent-ils des reliquats et plaintes post-sortie ?", "Parce que le locataire croit avoir tout payé : la régularisation tardive est vécue comme une agression."),
                  PQ("Pourquoi la perception d'agression augmente-t-elle le risque de réputation négative ?", "Parce que le locataire partage son expérience en ligne : la sortie est un moment mémorable."),
                  PQ("Pourquoi la direction doit-elle suivre les indicateurs de qualité de sortie ?", "Parce qu'ils prédisent avis et recommandations bailleur : la sortie est une fin de parcours marketing."),
                  PQ("Pourquoi une sortie propre est-elle un investissement sur le recrutement futur de mandats ?", "Parce que bailleurs et locataires parlent : une sortie nette renforce la rétention et les références."),
                ]
              ),
            ],
          },
        ],
      },
    },
  },
];
