import { action, PQ } from "../lib.mjs";

export const roles = [
  {
    id: "compta",
    title: "Comptabilité & recouvrement",
    emoji: "📊",
    oneLiner: "Quittancement, charges, relances, liaison avec le juridique.",
    cycles: {
      bien: {
        essentiel: "Rattacher chaque flux au bien et au mandat pour audit, sinistres et clôture.",
        tools: ["Compta locative intégrée", "Exports comptables", "Archivage factures travaux"],
        iaMetier:
          "Tu es comptable gestion locative. À partir des cartes et 5 pourquoi, relie pièces comptables et erreurs typiques charges.",
        phasesDetailed: [
          {
            title: "Paramétrage & indexation",
            objectif: "Garantir des échéances justes et traçables.",
            actions: [
              action(
                "Paramétrer loyers, dépôts, charges et indexation selon bail et annexes",
                "Fiche de paramétrage signée avec références légales d'indexation.",
                [
                  PQ("Pourquoi une fiche de paramétrage signée ?", "Parce que les erreurs de paramétrage se répètent chaque mois : le coût cumulé dépasse largement une correction ponctuelle."),
                  PQ("Pourquoi l'erreur répétée est-elle un risque juridique majeur ?", "Parce qu'elle devient systémique et visible : le locataire ou le bailleur peut réclamer des régularisations lourdes."),
                  PQ("Pourquoi les régularisations lourdes dégradent-elles la relation et la trésorerie ?", "Parce qu'elles créent des tensions de paiement et des charges de traitement : la compta devient le centre du conflit."),
                  PQ("Pourquoi éviter que la compta soit le centre du conflit est-il un objectif de conception ?", "Parce que le client associe l'agence à la friction : la confiance se joue sur la justesse des échéances."),
                  PQ("Pourquoi la justesse des échéances est-elle une promesse de service au même titre que le commercial ?", "Parce que c'est le contact mensuel avec le locataire : c'est la « voix » financière de l'agence."),
                ]
              ),
              action(
                "Réconcilier les comptes par bien (charges payées vs budget, travaux imputables)",
                "États mensuels avec alertes d'écart.",
                [
                  PQ("Pourquoi une réconciliation par bien et pas seulement agrégée ?", "Parce que l'agrégat masque les fuites : un bien peut subventionner un autre par erreur d'imputation."),
                  PQ("Pourquoi l'erreur d'imputation est-elle dangereuse en copropriété/gestion ?", "Parce qu'elle fausse la restitution au bailleur et la facturation charges locataire : double mécontentement."),
                  PQ("Pourquoi le double mécontentement est-il pire qu'un seul acteur mécontent ?", "Parce qu'il crée un conflit triangulaire où l'agence est au centre sans solution simple."),
                  PQ("Pourquoi un conflit triangulaire consomme-t-il plus de temps juridique ?", "Parce que chaque partie a une version comptable : sans réconciliation, la vérité est inaccessible."),
                  PQ("Pourquoi rendre la vérité comptable accessible est-il une fonction de gouvernance ?", "Parce que la direction doit arbitrer avec des chiffres fiables : sinon elle décide à l'aveugle."),
                ]
              ),
            ],
          },
          {
            title: "Régularisation charges",
            objectif: "Clôturer les périodes sans surprise.",
            actions: [
              action(
                "Préparer la régularisation avec pièces fournisseurs complètes et ventilation claire",
                "Dossier de régularisation archivé et explicable en 10 minutes.",
                [
                  PQ("Pourquoi viser une explication en 10 minutes ?", "Parce que si le locataire ne comprend pas, il conteste : la complexité non expliquée est perçue comme opacité."),
                  PQ("Pourquoi l'opacité des charges est-elle un déclencheur d'impayé de bonne foi ?", "Parce que le locataire bloque en attendant des clarifications : le retard se transforme en conflit."),
                  PQ("Pourquoi le conflit sur charges attire-t-il l'attention du bailleur ?", "Parce qu'il remet en cause la qualité de gestion : le bailleur peut imputer l'agence."),
                  PQ("Pourquoi la qualité de gestion perçue passe-t-elle par la lisibilité des charges ?", "Parce que c'est un livrable récurrent : la répétition forge la réputation."),
                  PQ("Pourquoi la réputation comptable conditionne-t-elle le renouvellement de mandats ?", "Parce que le bailleur veut dormir : une régularisation propre rassure sur le reste."),
                ]
              ),
              action(
                "Communiquer tôt sur les écarts importants et proposer des échéanciers si nécessaire",
                "Lettre type + suivi des accords.",
                [
                  PQ("Pourquoi communiquer tôt plutôt qu'à l'échéance ?", "Parce que la surprise brutale déclenche la contestation : l'anticipation permet l'acceptation."),
                  PQ("Pourquoi l'acceptation est-elle plus facile avec anticipation ?", "Parce que le locataire peut budgétiser : le paiement devient planifiable."),
                  PQ("Pourquoi le planifiable réduit-il le recouvrement coercitif ?", "Parce qu'il préserve la relation et diminue les dossiers juridiques : coût total plus bas."),
                  PQ("Pourquoi le coût total inclut-il le temps interne du juridique ?", "Parce que la compta ne voit pas toujours ces externalités : la direction doit les intégrer."),
                  PQ("Pourquoi intégrer les externalités améliore-t-il les décisions d'échéancier ?", "Parce qu'un échéancier trop long peut coûter plus cher en suivi qu'un paiement immédiat avec accompagnement."),
                ]
              ),
            ],
          },
          {
            title: "Clôture mandat",
            objectif: "Couper proprement les flux et les obligations.",
            actions: [
              action(
                "Établir un solde de tout compte avec ventilation par poste et pièces justificatives",
                "STDC signé ou contestation tracée avec délai de réponse.",
                [
                  PQ("Pourquoi une ventilation par poste ?", "Parce qu'un solde global sans détail est contesté systématiquement : le détail est la preuve de diligence."),
                  PQ("Pourquoi la contestation systématique augmente-t-elle les coûts ?", "Parce qu'elle multiplie les allers-retours et peut finir en médiation : le STDC mal préparé est un amplificateur."),
                  PQ("Pourquoi le STDC est-il un document de clôture de relation ?", "Parce qu'il fixe la mémoire finale : après, chaque partie s'appuie dessus en cas de litige."),
                  PQ("Pourquoi la mémoire finale doit-elle être exacte dès le premier jet ?", "Parce que les corrections tardives sont perçues comme des retournements : elles détruisent la confiance."),
                  PQ("Pourquoi la confiance à la sortie influence-t-elle les avis et recommandations ?", "Parce que c'est le dernier souvenir : un STDC propre est un actif de marque."),
                ]
              ),
              action(
                "Archiver les pièces selon durées légales et accès contrôlé pour audit",
                "Plan d'archivage + droits d'accès.",
                [
                  PQ("Pourquoi un plan d'archivage explicite ?", "Parce que sans plan, les suppressions accidentelles ou les accès trop larges créent des risques RGPD et litiges."),
                  PQ("Pourquoi le RGPD intersecte-t-il la compta locative ?", "Parce que les pièces contiennent des données personnelles : la conservation doit être justifiée et sécurisée."),
                  PQ("Pourquoi la sécurisation des accès est-elle une exigence bailleur aussi ?", "Parce que le bailleur veut savoir qui a vu quoi sur son patrimoine : traçabilité."),
                  PQ("Pourquoi la traçabilité d'accès est-elle une preuve de sérieux en audit ?", "Parce qu'elle démontre la maîtrise des process : elle protège l'agence en contrôle."),
                  PQ("Pourquoi la maîtrise des process comptables est-elle un critère de due diligence en rachat d'agence ?", "Parce qu'un acquéreur évalue la qualité des données : c'est une valeur d'entreprise."),
                ]
              ),
            ],
          },
        ],
      },
      annonce: {
        essentiel: "Cadrer prix, dépôt, honoraires pour cohérence mandat / annonce / facturation.",
        tools: ["Grilles tarifaires", "Facturation électronique", "Contrôle cohérence mandat"],
        iaMetier:
          "Tu es comptable en agence. À partir des cartes et 5 pourquoi, identifie incohérences annonce/facturation et contrôles internes.",
        phasesDetailed: [
          {
            title: "Grille tarifaire",
            objectif: "Éviter promesse et facturation divergentes.",
            actions: [
              action(
                "Valider que l'annonce mentionne honoraires charge locataire / bailleur conformément au mandat",
                "Contrôle croisé mandat / brouillon d'annonce avant mise en ligne.",
                [
                  PQ("Pourquoi un contrôle croisé avant mise en ligne ?", "Parce qu'une mention erronée publique engage la responsabilité et force des corrections négociées sous pression."),
                  PQ("Pourquoi les corrections sous pression sont-elles sources d'erreurs secondaires ?", "Parce qu'on modifie vite sans repasser par la chaîne complète : incohérences internes."),
                  PQ("Pourquoi les incohérences internes entre commercial et compta explosent-elles au moment du paiement ?", "Parce que le client voit deux vérités : il refuse de payer ou demande remboursement."),
                  PQ("Pourquoi le refus de payer au moment clé nuit-il au fonds de roulement de l'agence ?", "Parce qu'il crée des impayés internes et des relances : coût caché élevé."),
                  PQ("Pourquoi prévenir au mandat/annonce est-il moins cher que recouvrer après ?", "Parce que la prévention supprime le contentieux client : la compta devient facilitateur."),
                ]
              ),
              action(
                "Geler une version de référence des montants lors de la signature du mandat",
                "Versionnement + journal des avenants.",
                [
                  PQ("Pourquoi geler une référence avec avenants explicites ?", "Parce que les avenants oraux produisent des « vérités » multiples : la facturation devient arbitraire."),
                  PQ("Pourquoi l'arbitraire perçu sur facturation est-il toxique pour la marque ?", "Parce qu'il suggère une opacité volontaire : le client généralise à d'autres dossiers."),
                  PQ("Pourquoi la généralisation du soupçon affecte-t-elle le recrutement de mandats ?", "Parce que le bailleur se renseigne : les avis sur « frais » pèsent lourd."),
                  PQ("Pourquoi les frais sont-ils un sujet sensible spécifiquement ?", "Parce qu'ils sont comparés à la concurrence et ressentis comme « hors loyer » : le framing compte."),
                  PQ("Pourquoi le framing honnête dès le mandat réduit-il les disputes en fin de parcours ?", "Parce que l'attente est alignée : le client paie ce qu'il a compris."),
                ]
              ),
            ],
          },
          {
            title: "Facturation honoraires",
            objectif: "Aligner prestation, échéance et preuve.",
            actions: [
              action(
                "Facturer selon jalons contractuels traçables (mise en location, gestion mensuelle, etc.)",
                "Factures avec désignation alignée sur mandat.",
                [
                  PQ("Pourquoi aligner désignation facture et mandat ?", "Parce qu'une désignation floue empêche le recouvrement en cas de contestation : la facture doit raconter le contrat."),
                  PQ("Pourquoi raconter le contrat sur la facture est-il une discipline ?", "Parce que le client lit vite : la clarté réduit les tickets support comptable."),
                  PQ("Pourquoi réduire les tickets support est-il un KPI comptable ?", "Parce que chaque ticket est du temps non facturable : il érode la marge service."),
                  PQ("Pourquoi la marge service est-elle sensible aux volumes de micro-corrections ?", "Parce qu'elles explosent avec la croissance sans process : la facturation claire est une échelle."),
                  PQ("Pourquoi l'échelle impose-t-elle des templates et contrôles automatiques ?", "Parce que l'humain seul ne peut pas maintenir la cohérence sur des milliers de lignes."),
                ]
              ),
              action(
                "Réconcilier encaissements et mandats (pas de trou, pas de doublon)",
                "Rapprochement bancaire + alertes.",
                [
                  PQ("Pourquoi le rapprochement est-il une obligation de base mais souvent négligé ?", "Parce qu'il est répétitif : pourtant sans lui, les erreurs persistent des mois."),
                  PQ("Pourquoi des erreurs persistantes sont-elles pires que des erreurs ponctuelles ?", "Parce qu'elles deviennent des montants difficiles à expliquer : la régularisation est socialement coûteuse."),
                  PQ("Pourquoi la difficulté sociale de régulariser retarde-t-elle les corrections ?", "Parce que personne ne veut annoncer une erreur : la dette comptable s'accumule."),
                  PQ("Pourquoi une dette comptable cachée est-elle un risque direction ?", "Parce qu'elle peut éclater en fin d'exercice ou lors d'un audit : surprise de trésorerie."),
                  PQ("Pourquoi éviter les surprises de trésorerie est-il central pour une agence ?", "Parce que la trésorerie dicte la capacité d'investissement et la paie : c'est la survie."),
                ]
              ),
            ],
          },
          {
            title: "Cohérence annonce publiée",
            objectif: "Garantir que ce qui est promis est facturable et légal.",
            actions: [
              action(
                "Contrôler après chaque modification d'annonce que les mentions légales et prix restent cohérents",
                "Checklist post-update + versionnement.",
                [
                  PQ("Pourquoi contrôler après chaque update ?", "Parce que les modifications rapides pour le marché introduisent des erreurs de frappe sur montants critiques."),
                  PQ("Pourquoi une erreur de montant sur une annonce est-elle à haut risque ?", "Parce qu'elle est publique et archivable : elle devient preuve pour le client."),
                  PQ("Pourquoi le client utilise-t-il l'annonce comme référence contre la facture ?", "Parce que c'est le document le plus visible : la cohérence est une défense."),
                  PQ("Pourquoi la défense par cohérence réduit-elle le temps juridique ?", "Parce qu'elle clarifie si l'erreur est réelle ou mal comprise : moins de procédure."),
                  PQ("Pourquoi moins de procédure libère-t-elle la compta pour de la valeur ajoutée ?", "Parce que le temps gagné peut aller à l'analyse et au conseil bailleur."),
                ]
              ),
              action(
                "Archiver captures d'écran ou exports HTML pour preuve en cas de litige sur promesse",
                "Archives datées liées au mandat.",
                [
                  PQ("Pourquoi archiver des preuves d'annonce alors que le site historise ?", "Parce que les agrégateurs et sites tiers peuvent ne pas garder l'historique accessible facilement."),
                  PQ("Pourquoi l'accessibilité de l'historique est-elle un enjeu probatoire ?", "Parce qu'en litige, celui qui prouve gagne souvent l'initiative : la charge de preuve compte."),
                  PQ("Pourquoi l'initiative probatoire influence-t-elle le règlement à l'amiable ?", "Parce qu'une preuve solide pousse à négocier tôt : moins de coûts."),
                  PQ("Pourquoi négocier tôt est-il intéressant financièrement pour l'agence ?", "Parce que les honoraires d'avocat et le temps interne explosent sinon."),
                  PQ("Pourquoi la compta doit-elle penser « preuve » et pas seulement « écriture » ?", "Parce que l'argent suit souvent la narration : les preuves stabilisent la narration."),
                ]
              ),
            ],
          },
        ],
      },
      locataire: {
        essentiel: "Sécuriser encaissements et escalader sans brutalité inutile.",
        tools: ["Relances paramétrables", "Agrégateurs bancaires", "Liens avec huissier / avocat"],
        iaMetier:
          "Tu es responsable recouvrement. À partir des cartes et 5 pourquoi, décris jalons financiers et indicateurs sans conseil juridique personnalisé.",
        phasesDetailed: [
          {
            title: "Encaissement & relances",
            objectif: "Réduire les impayés techniques et les oublis.",
            actions: [
              action(
                "Configurer relances automatiques avec messages progressifs et cohérents avec le bail",
                "Matrice de relances validée juridiquement (cadre général).",
                [
                  PQ("Pourquoi une matrice validée plutôt que des mails improvisés ?", "Parce que l'improvisation produit des formulations risquées et des tonalités variables : le locataire se sent traité injustement."),
                  PQ("Pourquoi la tonalité variable est-elle un risque réputationnel ?", "Parce qu'elle suggère l'arbitraire : le recouvrement doit être perçu comme régulier."),
                  PQ("Pourquoi la régularité rassure-t-elle aussi les collaborateurs ?", "Parce qu'ils appliquent un script sans stress moral : la charge psychologique baisse."),
                  PQ("Pourquoi la charge psychologique du recouvrement est-elle un sujet RH ?", "Parce que le turnover dans ces rôles est élevé sans cadre : le cadre protège l'humain."),
                  PQ("Pourquoi protéger l'humain améliore-t-il la qualité des interactions avec le locataire ?", "Parce qu'un collaborateur moins stressé n'escalade pas agressivement par défaut."),
                ]
              ),
              action(
                "Diagnostiquer impayé technique (RIB, prélèvement) avant impayé de refus",
                "Playbook technique + escalade interne.",
                [
                  PQ("Pourquoi distinguer technique et refus ?", "Parce que traiter un refus avec des relances agressives détruit la relation pour un problème de banque."),
                  PQ("Pourquoi la relation détruite augmente-t-elle le coût de recouvrement ?", "Parce que le locataire conteste tout : chaque ligne devient un combat."),
                  PQ("Pourquoi le combat ligne à ligne est-il le pire scénario comptable ?", "Parce qu'il mobilise juridique et direction : le coût dépasse souvent le montant."),
                  PQ("Pourquoi le coût dépasse-t-il le montant sans stratégie ?", "Parce que la stratégie choisit quand arrêter et négocier : sans stratégie, on poursuit par principe."),
                  PQ("Pourquoi arrêter par principe est-il une erreur de pilotage ?", "Parce que la direction doit optimiser le résultat net, pas gagner chaque dossier."),
                ]
              ),
            ],
          },
          {
            title: "Échéancier impayé",
            objectif: "Appliquer une montée en puissance mesurable.",
            actions: [
              action(
                "Suivre l'ancienneté des impayés avec seuils d'escalade et coût interne estimé",
                "Tableau de bord avec DSO-like par dossier.",
                [
                  PQ("Pourquoi estimer le coût interne d'un dossier ?", "Parce que sans ce coût, on poursuit des petits montants avec de gros efforts : mauvais arbitrage."),
                  PQ("Pourquoi le mauvais arbitrage est-il fréquent ?", "Parce que la récupération « morale » masque l'économie : la direction doit rendre l'économie visible."),
                  PQ("Pourquoi rendre l'économie visible change-t-elle les politiques de tolérance ?", "Parce qu'elle permet de fixer des plafonds de négociation rationnels."),
                  PQ("Pourquoi des plafonds rationnels accélèrent-ils la médiation ?", "Parce qu'elles fixent vite une zone d'accord : moins de va-et-vient."),
                  PQ("Pourquoi moins de va-et-vient réduit-il la charge du juridique ?", "Parce qu'il se concentre sur les dossiers à fort enjeu ou risque systémique."),
                ]
              ),
              action(
                "Offrir des plans de paiement documentés lorsque pertinent, avec suivi strict",
                "Accord écrit + calendrier + conséquences de rupture.",
                [
                  PQ("Pourquoi un accord écrit pour un plan ?", "Parce que l'oral crée des malentendus sur montants et dates : la rupture devient litigieuse."),
                  PQ("Pourquoi la litige sur un plan est-elle fréquente sans écrit ?", "Parce que le locataire interprète la tolérance comme abandon partiel : il arrête de payer."),
                  PQ("Pourquoi documenter les conséquences de rupture ?", "Parce que ça clarifie la suite : moins de surprises et escalade plus rapide si nécessaire."),
                  PQ("Pourquoi l'escalade rapide après rupture de plan peut être plus humaine ?", "Parce qu'elle évite une traîne interminable où tout le monde souffre : clarté."),
                  PQ("Pourquoi la clarté est-elle aussi un respect du locataire ?", "Parce qu'il sait où il en est : même dans la fermeté, la prévisibilité réduit l'anxiété."),
                ]
              ),
            ],
          },
          {
            title: "Sortie locataire",
            objectif: "Clôturer les soldes sans reliquats toxiques.",
            actions: [
              action(
                "Préparer le solde avec régularisation charges et retenues documentées",
                "Décompte conforme aux règles du bail + pièces.",
                [
                  PQ("Pourquoi un décompte avec pièces dès le départ ?", "Parce que la sortie est un moment où le locataire est mobile et plus difficile à recouvrer après."),
                  PQ("Pourquoi la mobilité du locataire augmente-t-elle le risque de perte ?", "Parce que les relances post-sortie ont un taux de succès plus faible : il faut verrouiller tôt."),
                  PQ("Pourquoi verrouiller tôt impose-t-il une préparation avant les clés ?", "Parce que la remise des clés est un levier de négociation et de paiement : point de contrôle."),
                  PQ("Pourquoi le point de contrôle clés doit-il être coordonné avec le gestionnaire ?", "Parce que le risque est opérationnel et juridique : la compta ne peut pas le jouer seule."),
                  PQ("Pourquoi la coordination inter-équipes est-elle un process et pas un heroïsme individuel ?", "Parce que le heroïsme ne scale pas : la checklist scale."),
                ]
              ),
              action(
                "Clôturer les prélèvements et éviter les doubles prélèvements post-sortie",
                "Contrôle système + désactivation des mandats.",
                [
                  PQ("Pourquoi un contrôle système de désactivation ?", "Parce qu'un double prélèvement détruit la confiance et crée un incident support massif."),
                  PQ("Pourquoi l'incident massif est-il plus coûteux que le montant prélevé ?", "Parce qu'il mobilise plusieurs équipes et peut aller sur les réseaux sociaux : amplification."),
                  PQ("Pourquoi l'amplification sociale impose-t-elle une rigueur extrême sur prélèvement ?", "Parce que la confiance se perd vite et se regagne lentement : prévention."),
                  PQ("Pourquoi la prévention par process bat la réparation par communication ?", "Parce qu'une erreur d'argent est émotionnellement forte : les mots ne suffisent pas."),
                  PQ("Pourquoi la rigueur sur la sortie est-elle un investissement sur la marque ?", "Parce que la sortie est un moment de vérité : elle reste dans la mémoire du client."),
                ]
              ),
            ],
          },
        ],
      },
    },
  },
];
