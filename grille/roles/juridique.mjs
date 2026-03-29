import { action, PQ } from "../lib.mjs";

export const roles = [
  {
    id: "juridique",
    title: "Juridique & conformité",
    emoji: "⚖️",
    oneLiner: "Baux, annexes, réglementaire, contentieux, relations avec huissiers.",
    cycles: {
      bien: {
        essentiel: "Anticiper les sujets qui bloquent la location ou exposent le bailleur et l'agence.",
        tools: ["Modèles de bail actualisés", "Veille législative", "Dossiers pré-contentieux structurés"],
        iaMetier:
          "Tu es juriste droit immobilier locatif (France). À partir des cartes et 5 pourquoi, liste vigilance documentaire sans analyse de dossier réel.",
        phasesDetailed: [
          {
            title: "Conformité & urbanisme",
            objectif: "S'assurer que le bien peut être loué légalement et sans surprise.",
            actions: [
              action(
                "Vérifier la compatibilité location / destination / règlements et les diagnostics obligatoires",
                "Liste de contrôle juridique avec statut et points bloquants.",
                [
                  PQ("Pourquoi une liste de contrôle avant commercialisation ?", "Parce qu'une location non conforme expose à sanctions, impossibilité d'exiger certaines obligations et litiges locataire."),
                  PQ("Pourquoi l'exposition de l'agence est-elle indirecte mais réelle ?", "Parce que le mandant s'appuie sur le professionnel : une négligence peut être qualifiée de faute de conseil."),
                  PQ("Pourquoi la faute de conseil est-elle un risque économique pour l'agence ?", "Parce qu'elle peut entraîner requalification, remboursements et atteinte réputationnelle."),
                  PQ("Pourquoi l'atteinte réputationnelle est-elle amplifiée en ligne ?", "Parce que les avis et forums fixent une narration durable : le juridique protège aussi la marque."),
                  PQ("Pourquoi protéger la marque est-il un objectif du conformité-check ?", "Parce qu'une annonce retirée ou un bail annulé sont des événements visibles bailleur et marché."),
                ]
              ),
              action(
                "Identifier les sujets sensibles (meublé, colocation, sous-location, meublé de tourisme) et adapter les clauses",
                "Fiche de qualification du schéma locatif + clauses types.",
                [
                  PQ("Pourquoi qualifier le schéma locatif en amont ?", "Parce que les obligations et modèles varient : une erreur de schéma rend certaines clauses inopposables ou illégales."),
                  PQ("Pourquoi l'inopposabilité est-elle pire qu'une négociation difficile ?", "Parce qu'elle survient après coup, souvent en conflit : le coût juridique explose."),
                  PQ("Pourquoi le coût juridique explose-t-il en cas de mauvais schéma ?", "Parce qu'il faut refondre le dossier, parfois reloger ou rembourser : c'est un changement de projet."),
                  PQ("Pourquoi un changement de projet affecte-t-il l'agence opérationnellement ?", "Parce qu'il mobilise commercial, gestion, compta : ce n'est plus un sujet « papier »."),
                  PQ("Pourquoi le juridique doit-il être en amont du commercial pour ces schémas ?", "Parce que le commercial vend un produit légal : la légalité est une composante du produit."),
                ]
              ),
            ],
          },
          {
            title: "Contrats & mandats",
            objectif: "Aligner mandat, honoraires et responsabilités.",
            actions: [
              action(
                "Structurer le mandat avec limites claires de responsabilité et de pouvoir (travaux, négociation)",
                "Mandat rédigé avec annexes et seuils.",
                [
                  PQ("Pourquoi des seuils explicites sur travaux et négociation ?", "Parce que sans seuils, le gestionnaire engage implicitement le bailleur ou dépasse le mandat : litige."),
                  PQ("Pourquoi le dépassement de mandat est-il un classique du contentieux ?", "Parce que le bailleur nie avoir autorisé : la preuve devient centrale."),
                  PQ("Pourquoi la preuve est-elle souvent partielle sans écrit ?", "Parce que les accords oraux se contestent après coup : la relation a basculé."),
                  PQ("Pourquoi la relation qui bascule coûte-t-elle cher même si l'agence a raison moralement ?", "Parce que le temps et l'image comptent : un mandat conflictuel consomme du senior."),
                  PQ("Pourquoi consommer du senior est-il un coût caché pour la direction ?", "Parce qu'il retarde d'autres dossiers stratégiques : opportunité perdue."),
                ]
              ),
              action(
                "Prévoir une gestion des avenants et de la versionning contractuelle",
                "Registre des versions + process de signature.",
                [
                  PQ("Pourquoi un registre de versions ?", "Parce que les parties appliquent souvent une version mentale différente : le litige naît de la divergence."),
                  PQ("Pourquoi la divergence de version est-elle fréquente en gestion ?", "Parce que le bail évolue (charges, travaux) : sans versioning, on ne sait plus quelle règle s'applique."),
                  PQ("Pourquoi ne pas savoir quelle règle s'applique paralyse-t-elle le recouvrement ?", "Parce que la compta et le gestionnaire hésitent : l'impayé s'étend."),
                  PQ("Pourquoi l'hésitation interne est-elle un risque pour le locataire aussi ?", "Parce qu'il ne sait pas ce qu'on attend de lui : la relation se dégrade."),
                  PQ("Pourquoi une relation dégradée alimente-t-elle le contentieux plus que le montant ?", "Parce que le contentieux est aussi émotionnel : le juridique doit stabiliser les règles tôt."),
                ]
              ),
            ],
          },
          {
            title: "Sinistres & assurances",
            objectif: "Cadrer preuves, délais et interfaces avec assureurs.",
            actions: [
              action(
                "Construire un dossier sinistre avec chronologie, preuves et obligations contractuelles d'information",
                "Dossier type + checklist délais.",
                [
                  PQ("Pourquoi une chronologie ?", "Parce que les assureurs raisonnent par causalité et délais : sans chronologie, la couverture se discute."),
                  PQ("Pourquoi la discussion de couverture retarde-t-elle les travaux ?", "Parce que le bien reste indisponible : vacance ou insalubrité possible."),
                  PQ("Pourquoi l'indisponibilité prolongée est-elle un risque pour le bailleur et le locataire ?", "Parce qu'elle peut ouvrir des droits et contestations : le juridique anticipe."),
                  PQ("Pourquoi anticiper les contestations réduit-il le coût global ?", "Parce qu'on évite l'escalade et les doubles travaux : moins de va-et-vient."),
                  PQ("Pourquoi moins de va-et-vient est-il un objectif du dossier sinistre bien formé ?", "Parce que chaque aller-retour est du temps non productif et du stress client."),
                ]
              ),
              action(
                "Séparer clairement obligations bailleur / locataire / tiers pour éviter les zones grises en réparation",
                "Matrice responsabilités + références bail.",
                [
                  PQ("Pourquoi une matrice responsabilités ?", "Parce que la zone grise produit des impasses : personne ne répare, le sinistre s'aggrave."),
                  PQ("Pourquoi l'aggravation du sinistre est-elle un multiplicateur de coût ?", "Parce qu'elle transforme une réparation simple en chantier : le litige sur qui paie explose."),
                  PQ("Pourquoi le litige sur qui paie devient-il central même si le montant initial était faible ?", "Parce que le principe compte : chaque partie veut un précédent."),
                  PQ("Pourquoi les précédents internes comptent-ils pour l'agence ?", "Parce qu'ils façonnent la politique future : incohérence crée injustice perçue."),
                  PQ("Pourquoi l'injustice perçue entre mandats similaires est-elle un risque ?", "Parce qu'elle mène à plaintes et départs de mandats : le juridique harmonise."),
                ]
              ),
            ],
          },
        ],
      },
      annonce: {
        essentiel: "Éviter annonces litigieuses : mentions, honoraires, état du bien.",
        tools: ["Checklist conformité pub", "Archivage versions annonces", "Coordination marketing"],
        iaMetier:
          "Tu es juriste immobilier. À partir des cartes et 5 pourquoi, produis principes de formulations sûres (cadre général).",
        phasesDetailed: [
          {
            title: "Relecture conformité",
            objectif: "Éliminer les promesses implicites et les omissions critiques.",
            actions: [
              action(
                "Contrôler les mentions obligatoires et l'exactitude des surfaces / loyers / charges",
                "Grille de relecture + validation.",
                [
                  PQ("Pourquoi une grille plutôt qu'une lecture humaine seule ?", "Parce que l'œil humain rate les champs obligatoires sous fatigue : l'erreur publique est irréversible."),
                  PQ("Pourquoi l'irréversibilité publique est-elle un facteur de risque spécifique ?", "Parce que la trace est indexée et partagée : la correction ne supprime pas l'impact."),
                  PQ("Pourquoi l'impact résiduel affecte-t-il la confiance même après correction ?", "Parce que le candidat se demande ce qui aurait pu lui échapper ailleurs."),
                  PQ("Pourquoi la confiance globale est-elle un actif concurrentiel ?", "Parce qu'elle réduit la friction du parcours et le coût d'acquisition : moins de questions."),
                  PQ("Pourquoi moins de questions au début réduit-il le risque juridique aval ?", "Parce que les attentes sont alignées : moins de réclamations sur description."),
                ]
              ),
              action(
                "Éviter les superlatifs non vérifiables et les promesses de performance (délais, rendement)",
                "Guide rédactionnel interne.",
                [
                  PQ("Pourquoi bannir les promesses de performance ?", "Parce qu'elles peuvent être tenues pour engagements contractuels implicites : exposition."),
                  PQ("Pourquoi l'implicite est-il dangereux en annonce ?", "Parce que le candidat raisonne comme consommateur : il retient le message fort."),
                  PQ("Pourquoi le raisonnement consommateur impose-t-il prudence ?", "Parce que les mécanismes de protection renforcent l'exigence de loyauté des informations."),
                  PQ("Pourquoi la loyauté des informations est-elle aussi une protection de l'agence ?", "Parce qu'elle réduit les litiges et les réputation hits : coût total plus bas."),
                  PQ("Pourquoi le coût total inclut-il le temps juridique et marketing ?", "Parce qu'une annonce « vendeuse » mais risquée externalise le coût sur d'autres équipes."),
                ]
              ),
            ],
          },
          {
            title: "Honoraires & transparence",
            objectif: "Rendre compréhensible qui paie quoi.",
            actions: [
              action(
                "Aligner les mentions d'honoraires avec le mandat et la réglementation applicable",
                "Double validation mandat + annonce.",
                [
                  PQ("Pourquoi double validation ?", "Parce que deux sources divergentes créent une faute évitable : le client choisit la version qui l'arrange."),
                  PQ("Pourquoi le client choisit-il la version favorable en cas de divergence ?", "Parce que c'est rationnel pour lui : le litige devient prévisible."),
                  PQ("Pourquoi le litige prévisible doit-il être éliminé par process ?", "Parce que la confiance se gagne sur la constance : la constance est une fonction organisationnelle."),
                  PQ("Pourquoi l'organisation prime sur le talent individuel en conformité ?", "Parce que le talent oublie sous pression : le process reste."),
                  PQ("Pourquoi « le process reste » est-il le critère de maturité d'une agence ?", "Parce qu'il permet d'auditer et d'améliorer : l'amélioration continue réduit le risque dans le temps."),
                ]
              ),
              action(
                "Prévoir une mention claire des conditions d'accès au logement (visites, contre-visites)",
                "Clause type visites + respect vie privée.",
                [
                  PQ("Pourquoi encadrer les visites dans l'annonce ou le process ?", "Parce que des visites mal cadrées peuvent empiéter sur l'occupant ou créer des conflits de créneaux."),
                  PQ("Pourquoi les conflits de créneaux explosent-ils en tension locataire sortant / candidats ?", "Parce que chacun optimise son temps : sans règle, la médiation interne explose."),
                  PQ("Pourquoi la médiation interne consomme-t-elle du juridique même sans tribunal ?", "Parce que chaque friction génère des courriers et menaces : temps pur."),
                  PQ("Pourquoi réduire le temps pur est-il un objectif business ?", "Parce que le juridique devient un goulet : les vrais dossiers risque attendent."),
                  PQ("Pourquoi prioriser les dossiers risque est-il impossible sans réduction du bruit ?", "Parce que le bruit masque les signaux : la clarté des règles filtre le bruit."),
                ]
              ),
            ],
          },
          {
            title: "Preuve & archivage",
            objectif: "Pouvoir démontrer ce qui était promis.",
            actions: [
              action(
                "Archiver chaque version d'annonce avec date et auteur pour chaîne de responsabilité",
                "Journal d'audit marketing.",
                [
                  PQ("Pourquoi une chaîne de responsabilité ?", "Parce qu'en cas de litige, l'agence doit savoir qui a validé quoi : diligence."),
                  PQ("Pourquoi la diligence est-elle un argument en médiation ?", "Parce qu'elle montre l'absence d'intention de tromper : pèse sur le sort."),
                  PQ("Pourquoi l'intention de tromper est-elle un facteur de gravité ?", "Parce qu'elle transforme un différend en recherche de sanction : réputation."),
                  PQ("Pourquoi la sanction réputationnelle dépasse-t-elle souvent le montant du litige ?", "Parce que les bailleurs fuient et les talents aussi : effet réseau."),
                  PQ("Pourquoi protéger la réputation est-il un design système et pas un communiqué ?", "Parce que les communiqués ne réparent pas des process défaillants : seule la répétition fiable compte."),
                ]
              ),
              action(
                "Conserver les éléments prouvant l'état du bien au moment de l'annonce (photos datées)",
                "Preuves rattachées au mandat.",
                [
                  PQ("Pourquoi lier photos au mandat ?", "Parce que sinon on ne peut pas prouver l'état à date : le litige devient oral."),
                  PQ("Pourquoi le oral est-il mauvais en litige immobilier ?", "Parce que chacun reconstruit : les preuves matérielles décident."),
                  PQ("Pourquoi les preuves matérielles protègent-elles aussi le locataire ?", "Parce qu'elles évitent des exigences déraisonnables en sortie : équité."),
                  PQ("Pourquoi l'équité perçue réduit-elle les contentieux longs ?", "Parce que les parties acceptent plus vite des compromis : closure."),
                  PQ("Pourquoi la closure rapide est-elle un indicateur de qualité juridique opérationnelle ?", "Parce qu'elle libère du temps pour prévention sur d'autres dossiers."),
                ]
              ),
            ],
          },
        ],
      },
      locataire: {
        essentiel: "Sécuriser le parcours locataire et gérer les ruptures avec procédure.",
        tools: ["Procédures internes", "Cabinets partenaires", "Suivi d'échéances procédurales"],
        iaMetier:
          "Tu es juriste bail d'habitation. Schématise obligations et contentieux (vue pédagogique, pas conseil cas par cas).",
        phasesDetailed: [
          {
            title: "Constitution du dossier & garanties",
            objectif: "Prouver la diligence sans collecter l'illégal.",
            actions: [
              action(
                "Définir les pièces autorisées et la conservation (durée, accès, base légale)",
                "Politique données personnelles + procédure.",
                [
                  PQ("Pourquoi une politique explicite ?", "Parce que le traitement de données est encadré : une collecte excessive expose l'agence au-delà du litige locatif."),
                  PQ("Pourquoi l'exposition RGPD est-elle un risque systémique ?", "Parce qu'elle peut déclencher contrôle et sanction indépendamment du bail : coût fixe élevé."),
                  PQ("Pourquoi le coût fixe RGPD incite-t-il à minimiser les données ?", "Parce que moins de données réduit aussi les fuites et erreurs : double bénéfice."),
                  PQ("Pourquoi moins d'erreurs sur données améliore-t-il la sélection ?", "Parce que des données fiables permettent des critères objectifs : moins de biais."),
                  PQ("Pourquoi des critères objectifs sont-ils le pont entre juridique et commercial ?", "Parce qu'ils rendent la sélection défendable : convergence des équipes."),
                ]
              ),
              action(
                "Valider les clauses particulières avec limites (garanties financières, cautions) selon typologie",
                "Revue juridique des clauses avant signature.",
                [
                  PQ("Pourquoi une revue avant signature systématique sur clauses sensibles ?", "Parce qu'une clause mal rédigée est opposable mais interprétée : le litige devient sémantique."),
                  PQ("Pourquoi le litige sémantique est-il coûteux ?", "Parce qu'il nécessite expertise et temps : peu de valeur ajoutée sociale."),
                  PQ("Pourquoi réduire ces litiges est-il un critère de qualité contractuelle ?", "Parce qu'ils consomment du senior juridique : opportunité perdue ailleurs."),
                  PQ("Pourquoi le senior juridique doit-il être protégé par des templates ?", "Parce que le template capte l'expertise répétitive : il libère du cas complexe."),
                  PQ("Pourquoi les cas complexes nécessitent-ils du temps senior ?", "Parce qu'ils sont uniques : le template ne suffit pas ; l'erreur est chère."),
                ]
              ),
            ],
          },
          {
            title: "Exécution & obligations",
            objectif: "Suivre les obligations réciproques avec preuve.",
            actions: [
              action(
                "Instrumenter les mises en demeure et suivis avec délais légaux respectés",
                "Modèles validés + calendrier.",
                [
                  PQ("Pourquoi des modèles validés ?", "Parce qu'une mise en demeure mal calibrée peut être inopérante ou provocatrice : elle empire le conflit."),
                  PQ("Pourquoi empirer le conflit au début est-il stratégiquement mauvais ?", "Parce qu'il réduit la marge de médiation : les positions se figent."),
                  PQ("Pourquoi la médiation précoce est-elle souvent moins coûteuse ?", "Parce qu'elle évite procédure : le coût humain et financier est moindre."),
                  PQ("Pourquoi le coût humain compte-t-il pour l'agence ?", "Parce que les équipes subissent l'agressivité des échanges : turnover et erreurs."),
                  PQ("Pourquoi réduire l'agressivité par calendrier clair est-il une fonction juridique ?", "Parce que la prévisibilité des étapes apaise et professionnalise."),
                ]
              ),
              action(
                "Tracer les échanges et preuves de réception (courriers, accusés, portails)",
                "Dossier probatoire structuré.",
                [
                  PQ("Pourquoi structurer le dossier probatoire dès le début ?", "Parce que reconstituer a posteriori est coûteux et incomplet : perte de pièces."),
                  PQ("Pourquoi la perte de pièces est-elle fréquente sans outillage ?", "Parce que les boîtes mail et drives personnels dispersent : l'entreprise ne possède pas son histoire."),
                  PQ("Pourquoi posséder son histoire est-elle une valeur en justice et en négociation ?", "Parce que la narration cohérente avec preuves fait pencher la balance."),
                  PQ("Pourquoi la balance pèse-t-elle sur le comportement des parties ?", "Parce qu'une partie avec dossier faible accepte plus vite une transaction."),
                  PQ("Pourquoi la transaction rapide est-elle souvent le meilleur résultat économique global ?", "Parce qu'elle évite incertitude et exécution : le coût complet est plus bas."),
                ]
              ),
            ],
          },
          {
            title: "Rupture & sortie",
            objectif: "Clôturer sans zone grise sur état et soldes.",
            actions: [
              action(
                "Préparer les résiliations et expulsions selon procédures applicables (cadre général, pas cas par cas)",
                "Playbook étapes + points de contrôle.",
                [
                  PQ("Pourquoi un playbook plutôt que l'improvisation ?", "Parce que les procédures sont strictes : une erreur de forme retarde tout et aggrave les coûts."),
                  PQ("Pourquoi une erreur de forme est-elle particulièrement coûteuse ici ?", "Parce qu'elle peut invalider une étape et recommencer le compte : temps perdu."),
                  PQ("Pourquoi le temps perdu est-il critique pour le bailleur ?", "Parce que la vacance ou l'impayé continue : pression sur l'agence."),
                  PQ("Pourquoi la pression sur l'agence peut-elle mener à des shortcuts risqués ?", "Parce que le commercial ou le gestionnaire veut « régler vite » : exposition."),
                  PQ("Pourquoi l'exposition finale revient-elle souvent au juridique ?", "Parce que seul un cadre procédural stable évite les shortcuts : gouvernance."),
                ]
              ),
              action(
                "Superviser la restitution du dépôt avec méthode de calcul et contestation encadrée",
                "Process dépôt + délais de réponse.",
                [
                  PQ("Pourquoi un process dépôt ?", "Parce que c'est un point hautement conflictuel : l'émotion domine sans méthode."),
                  PQ("Pourquoi l'émotion domine-t-elle ?", "Parce que l'argent symbolise la fin de relation : le juridique doit désémotionner par clarté."),
                  PQ("Pourquoi la clarté réduit-elle les escalades ?", "Parce qu'elle rend la négociation possible : chiffres et postes séparés."),
                  PQ("Pourquoi séparer les postes évite-t-il les blocages globaux ?", "Parce qu'on peut transiger sur un poste sans tout rejeter : progrès."),
                  PQ("Pourquoi le progrès transactionnel est-il un KPI du juridique gestion ?", "Parce qu'il mesure l'efficacité réelle : pas le volume de courriers."),
                ]
              ),
            ],
          },
        ],
      },
    },
  },
];
