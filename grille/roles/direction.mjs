import { action, PQ } from "../lib.mjs";

export const roles = [
  {
    id: "direction",
    title: "Direction & pilotage",
    emoji: "🧭",
    oneLiner: "Arbitrage, risques, performance globale du portefeuille et de la marque.",
    cycles: {
      bien: {
        essentiel:
          "Prioriser les biens à risque (vacance, travaux, contentieux) et suivre la marge par mandat sans perdre la lisibilité du portefeuille.",
        tools: ["Tableaux de bord & KPI", "Cartographie risques / sinistres", "Comités trimestriels mandats"],
        iaMetier:
          "Tu es un directeur d'agence de gestion locative en France. Pour le cycle « bien » uniquement, à partir des cartes d'actions et des 5 pourquoi, synthétise les décisions trimestrielles, les indicateurs déclencheurs et les pièges (sous-traitance floue, travaux non cadrés).",
        phasesDetailed: [
          {
            title: "Vision portefeuille",
            objectif: "Voir où se concentrent risques, vacance et marge avant d'engager des moyens.",
            actions: [
              action(
                "Consolider la cartographie des mandats par segment, zone et typologie",
                "Tableau de bord unique avec filtres (T1/T2/T3, zone, ancien/neuf, état du bien).",
                [
                  PQ(
                    "Pourquoi consolider cette cartographie en premier lieu ?",
                    "Sans vision unifiée, la direction arbitre sur des anecdotes (un dossier bruyant) plutôt que sur la structure du risque : on déplace des moyens au mauvais endroit et on découvre trop tard les zones où la vacance ou les sinistres se cumulent."
                  ),
                  PQ(
                    "Pourquoi la structure du risque prime-t-elle sur le bruit des dossiers du jour ?",
                    "Parce que le bruit masque les tendances : un contentieux isolé peut occuper l'équipe alors que trois biens voisins en vacance prolongée représentent un risque de revenus plus grave pour l'agence et le bailleur."
                  ),
                  PQ(
                    "Pourquoi segmenter par typologie et zone est-il indispensable pour cette vision ?",
                    "Parce que le marché et le coût d'occupation ne sont pas homogènes : un T1 centre-ville et une maison périurbaine n'ont pas les mêmes délais de rotation ni les mêmes coûts de remise en état ; mélangés, les KPI deviennent trompeurs."
                  ),
                  PQ(
                    "Pourquoi des KPI trompeurs nuisent-ils à la marge du mandat ?",
                    "Parce qu'ils conduisent à des prix d'appel ou des politiques travaux inadaptées : on croit performer sur le « temps moyen » alors qu'un segment entier s'effondre en silence."
                  ),
                  PQ(
                    "Pourquoi la marge par mandat doit-elle être la boussole finale de cette phase ?",
                    "Parce que c'est le traducteur économique de tout le reste : vacance, travaux, contentieux et charge de structure. Sans elle, la vision reste « qualitative » et ne permet pas de trancher entre investir, relouer ou sortir d'un mandat."
                  ),
                ]
              ),
              action(
                "Identifier les mandats « rouges » : vacance longue, sinistres ouverts, travaux bloqués",
                "Liste priorisée avec date de bascule, propriétaire du sujet et prochain jalon décisionnel.",
                [
                  PQ(
                    "Pourquoi formaliser une liste rouge plutôt que de suivre les mails au fil de l'eau ?",
                    "Parce que les situations critiques se dispersent dans des fils de discussion : sans liste partagée, personne ne porte la vue d'ensemble et les délais légaux ou assurantiels peuvent être manqués."
                  ),
                  PQ(
                    "Pourquoi la date de bascule et le prochain jalon sont-ils aussi importants que le diagnostic ?",
                    "Parce que la direction ne doit pas « savoir » qu'il y a un problème, mais savoir quand décider : sans jalons, on réagit en retard (appel d'offres tardif, expertise assurée tardive, bailleur surpris)."
                  ),
                  PQ(
                    "Pourquoi assigner un propriétaire unique par dossier rouge ?",
                    "Pour éviter la dilution de responsabilité entre commercial, gestionnaire et technique : un référent évite les angles morts et permet de mesurer la charge réelle par équipe."
                  ),
                  PQ(
                    "Pourquoi les angles morts inter-équipes augmentent-ils le coût du risque ?",
                    "Parce qu'ils génèrent des reprises de dossier, des doubles interventions et des incompréhensions bailleur : le coût caché est en heures internes et en confiance."
                  ),
                  PQ(
                    "Pourquoi la confiance du bailleur est-elle un indicateur de pilotage pour la direction ?",
                    "Parce qu'un mandat qui se dégrade relationnellement finit en sortie ou en négociation tarifaire défavorable : la direction doit voir le risque réputationnel et financier avant qu'il ne cristallise."
                  ),
                ]
              ),
            ],
          },
          {
            title: "Décisions travaux & arbitrage mandat",
            objectif: "Trancher investissement, priorisation et cadrage des prestataires avant engagement de dépenses.",
            actions: [
              action(
                "Valider le périmètre travaux (louable / conforme / compétitif) et le plafond de dépense",
                "Note de cadrage signée : objectif locatif, normes minimales, fourchettes budget et critères de réception.",
                [
                  PQ(
                    "Pourquoi figer un périmètre et un plafond avant de lancer les devis ?",
                    "Parce que sans cadrage, les devis divergent sur des hypothèses incompatibles et le bailleur décide au coup par coup : les délais s'allongent et la vacance s'accumule."
                  ),
                  PQ(
                    "Pourquoi la vacance accumulée est-elle le premier coût invisible des travaux flous ?",
                    "Parce chaque mois sans loyer non compensé par une stratégie prix pèse sur le rendement global et sur la patience du bailleur, qui impute souvent l'agence."
                  ),
                  PQ(
                    "Pourquoi distinguer « conforme », « louable » et « compétitif » dans le cadrage ?",
                    "Parce que la conformité légale est une table d'orientation, le louable est le marché, et le compétitif est la stratégie : les confondre mène soit à sur-investir, soit à des annonces trompeuses."
                  ),
                  PQ(
                    "Pourquoi une annonce non alignée sur l'état réel post-travaux fragilise-t-elle tout le cycle annonce ?",
                    "Parce que les visites détruisent la crédibilité, le commercial perd du temps et le juridique hérite d'un litige sur la description : le coût se déplace en aval."
                  ),
                  PQ(
                    "Pourquoi la direction doit-elle exiger des critères de réception explicites ?",
                    "Parce que la réception est le point de bascule entre prestataire, gestion et annonce : sans critères mesurables, le « terminé » devient subjectif et les reprises s'éternisent."
                  ),
                ]
              ),
              action(
                "Choisir le mode d'intervention (réseau maîtrisé, appel d'offres, contrat cadre) selon urgence et complexité",
                "Décision documentée avec motif de choix et délai cible de réalisation.",
                [
                  PQ(
                    "Pourquoi le mode d'intervention dépend-il autant de l'urgence que du montant ?",
                    "Parce qu'une fuite urgente nécessite réactivité et un réseau connu, alors qu'un gros chantier exige comparabilité des offres et maîtrise des phases : le mauvais mode fait exploser délai ou coût."
                  ),
                  PQ(
                    "Pourquoi un délai mal choisi impacte-t-il directement la stratégie de loyer ?",
                    "Parce que le calendrier de remise sur le marché fixe la fenêtre de mise en ligne : retarder le chantier peut coïncider avec une baisse de tension locative locale, forçant un ajustement de prix."
                  ),
                  PQ(
                    "Pourquoi l'ajustement de prix est-il une décision de direction et pas seulement commerciale ?",
                    "Parce qu'il touche la promesse du mandat, la marge de l'agence et la relation bailleur : il doit être cohérent avec le portefeuille et la politique de marque."
                  ),
                  PQ(
                    "Pourquoi la politique de marque entre-t-elle dans un choix de prestataire ?",
                    "Parce que des chantiers bâclés ou des artisans non identifiés affectent les avis et le bouche-à-oreille bailleur ; la direction porte la réputation globale, pas seulement le dossier."
                  ),
                  PQ(
                    "Pourquoi documenter le motif de choix est-il une protection pour l'agence ?",
                    "Parce qu'en cas de contestation bailleur ou sinistre, la traçabilité des arbitrages (urgence vs coût vs qualité) prouve la diligence et oriente la médiation."
                  ),
                ]
              ),
            ],
          },
          {
            title: "Sortie ou renégociation de mandat",
            objectif: "Anticiper les fins de relation pour préserver revenus et image.",
            actions: [
              action(
                "Analyser la marge, la charge opérationnelle et la qualité relationnelle avant échéance de mandat",
                "Fiche décision avec scénarios : renouvellement, ajustement tarifaire, accompagnement à la vente, sortie.",
                [
                  PQ(
                    "Pourquoi analyser la marge seule ne suffit pas à décider d'un mandat ?",
                    "Parce qu'un mandat « rentable » peut saturer l'équipe ou générer des plaintes systémiques : la direction doit voir le coût complet, interne et externe."
                  ),
                  PQ(
                    "Pourquoi le coût interne (temps) est-il souvent sous-estimé dans les mandats difficiles ?",
                    "Parce qu'il n'apparaît pas dans la facturation bailleur : il se répercute sur d'autres dossiers en retard et sur le turnover des collaborateurs."
                  ),
                  PQ(
                    "Pourquoi le turnover des collaborateurs est-il un signal de pilotage pour la direction ?",
                    "Parce qu'il dégrade la continuité de gestion et la mémoire des dossiers, ce qui augmente les risques juridiques et la vacance par effet domino."
                  ),
                  PQ(
                    "Pourquoi la continuité de gestion influence-t-elle la qualité relationnelle bailleur ?",
                    "Parce que les bailleurs interprètent les changements de contact comme de l'instabilité ; la direction doit savoir quand un mandat consomme trop de ressource humaine rare."
                  ),
                  PQ(
                    "Pourquoi préparer des scénarios avant l'échéance évite-t-il les négociations sous pression ?",
                    "Parce que sous pression, on cède sur les honoraires ou on prolonge un mandat toxique : l'analyse préalable permet une sortie propre ou une renégociation alignée sur la valeur réelle."
                  ),
                ]
              ),
              action(
                "Formaliser la sortie : transfert de dossiers, archivage, clôture comptable et communication client",
                "Checklist de sortie avec dates, signatures et transferts d'accès outils.",
                [
                  PQ(
                    "Pourquoi un transfert de dossiers incomplet crée-t-il un risque juridique résiduel ?",
                    "Parce que les pièces manquantes (EDL, diagnostics, factures) réapparaissent en litige tardif : la sortie doit être « complète » ou explicitement limitée par écrit."
                  ),
                  PQ(
                    "Pourquoi l'écrit est-il central même quand la relation est « confiante » ?",
                    "Parce que la mémoire des parties et des outils diverge après quelques mois : l'écrit fixe la réalité opposable et la charge de preuve."
                  ),
                  PQ(
                    "Pourquoi la clôture comptable est-elle une étape de direction et pas seulement finance ?",
                    "Parce qu'un reliquat d'impayé ou de charges mal soldées peut rouvrir un contentieux et salir la sortie ; la direction valide la fin « nette » du mandat."
                  ),
                  PQ(
                    "Pourquoi la communication de sortie doit-elle être calibrée (bailleur, locataire éventuel) ?",
                    "Parce qu'une communication maladroite crée des rumeurs locales sur l'agence : la sortie est un acte de marque, surtout en cas de litige."
                  ),
                  PQ(
                    "Pourquoi la marque locale conditionne-t-elle le recrutement futur de mandats ?",
                    "Parce que les bailleurs se parlent entre eux et les syndics recommandent : une sortie propre est un investissement sur le pipeline de mandats futurs."
                  ),
                ]
              ),
            ],
          },
        ],
      },
      annonce: {
        essentiel:
          "Aligner offre locative, image de marque et taux de conversion sans casser le prix ni promettre l'impossible.",
        tools: ["Veille concurrentielle", "A/B tests annonces", "Scoring des canaux d'acquisition"],
        iaMetier:
          "Tu es un directeur d'agence immobilière spécialisé location. Pour le cycle « annonce », à partir des chaînes d'actions et des 5 pourquoi, décris où se perdent les leads et quels arbitrages prix / qualité de fiche la direction doit trancher.",
        phasesDetailed: [
          {
            title: "Positionnement prix & segment",
            objectif: "Fixer une stratégie de loyer et de cible cohérente avec le bien et le marché.",
            actions: [
              action(
                "Construire une fourchette de prix à partir de comparables, saison et état du bien",
                "Note de positionnement avec sources, hypothèses et sensibilité au délai de location.",
                [
                  PQ(
                    "Pourquoi partir d'une fourchette plutôt que d'un prix unique ?",
                    "Parce que le marché est une distribution : un prix unique fige une hypothèse fragile ; la fourchette force le dialogue sur le délai acceptable et le niveau de travaux acceptable."
                  ),
                  PQ(
                    "Pourquoi le délai de location est-il un critère de direction autant qu'un critère commercial ?",
                    "Parce qu'il traduit le coût d'opportunité du bailleur et la charge de suivi interne : prolonger pour gagner 50 € peut coûter plus cher en vacance cumulée."
                  ),
                  PQ(
                    "Pourquoi la vacance cumulée doit-elle être explicitée au bailleur dans la stratégie prix ?",
                    "Parce qu'elle rend l'arbitrage tangible : sans elle, le débat reste émotionnel (« je ne veux pas baisser ») au lieu d'être économique."
                  ),
                  PQ(
                    "Pourquoi l'arbitrage émotionnel est-il un risque pour l'image de l'agence ?",
                    "Parce que si l'agence exécute un prix irréaliste sans cadre, le bailleur impute l'échec à l'agence ; la direction doit donc cadrer la décision et la preuve du marché."
                  ),
                  PQ(
                    "Pourquoi la preuve du marché (comparables) est-elle la boussole de conformité de l'annonce ?",
                    "Parce qu'elle aligne marketing et réalité des visites : une annonce crédible protège la conversion et limite les réclamations sur la cohérence prix / produit."
                  ),
                ]
              ),
              action(
                "Valider le segment cible (étudiants, familles, colocation, courte durée) et les contraintes associées",
                "Segmentation documentée : critères objectifs, risques (turnover) et implications sur le bail.",
                [
                  PQ(
                    "Pourquoi segmenter avant d'écrire l'annonce ?",
                    "Parce que le segment dicte canaux, vocabulaire et critères de candidature : un texte « universel » attire souvent le mauvais trafic et fait chuter la qualité des leads."
                  ),
                  PQ(
                    "Pourquoi le mauvais trafic dégrade-t-il la conversion globale ?",
                    "Parce qu'il sature le commercial et le gestionnaire : le temps perdu sur des profils hors cible est un coût caché majeur."
                  ),
                  PQ(
                    "Pourquoi le coût caché du temps doit-il remonter à la direction ?",
                    "Parce qu'il influence l'effort réel par mandat et donc la marge : sans visibilité, on surdimensionne les équipes ou on sous-estime le prix du service."
                  ),
                  PQ(
                    "Pourquoi la dimensionnement d'équipe est-elle liée au positionnement segment ?",
                    "Parce que certains segments demandent plus de filtrage et d'accompagnement (garanties, dossiers lourds) : la direction doit anticiper la charge opérationnelle."
                  ),
                  PQ(
                    "Pourquoi anticiper la charge opérationnelle évite-t-elle les écarts entre promesse marketing et exécution ?",
                    "Parce que l'agence ne peut pas promettre une réactivité ou une sélection fine sans moyens : le segment choisi doit être soutenable."
                  ),
                ]
              ),
            ],
          },
          {
            title: "Supports & canaux",
            objectif: "Garantir cohérence, conformité et diffusion efficace.",
            actions: [
              action(
                "Valider le contenu (photos, mentions, honoraires) sur une grille conformité avant publication",
                "Grille cochée avec version archivée de l'annonce et des visuels.",
                [
                  PQ(
                    "Pourquoi une grille conformité en amont plutôt qu'une correction après plainte ?",
                    "Parce qu'une erreur publique se propage instantanément sur les agrégateurs : le coût de correction et la trace négative dépassent largement le coût du contrôle."
                  ),
                  PQ(
                    "Pourquoi l'erreur publique affecte-t-elle la confiance bailleur même si elle est corrigée ?",
                    "Parce que le bailleur voit un risque réputationnel sur son bien et questionne la rigueur de l'agence : la confiance se joue sur la prévention."
                  ),
                  PQ(
                    "Pourquoi archiver les versions d'annonce est-il une obligation de mémoire ?",
                    "Parce qu'en cas de litige sur la description ou le honoraires, la version publiée à date t fait foi : sans archive, l'agence perd la maîtrise du récit."
                  ),
                  PQ(
                    "Pourquoi la maîtrise du récit influence-t-elle les négociations avec le bailleur ?",
                    "Parce que les désaccords sur « ce qui était promis » explosent quand les preuves manquent : l'archive est un actif de gouvernance."
                  ),
                  PQ(
                    "Pourquoi la gouvernance des annonces est-elle un sujet de direction et pas seulement marketing ?",
                    "Parce qu'elle touche conformité légale, honoraires et risque réputationnel global : le marketing exécute, la direction cadre."
                  ),
                ]
              ),
              action(
                "Répartir le budget et le suivi par canal (portails, réseaux, partenaires) selon ROI mesurable",
                "Plan d'allocation avec objectifs de coût par lead qualifié et revue mensuelle.",
                [
                  PQ(
                    "Pourquoi le coût par lead qualifié prime-t-il sur le volume de clics ?",
                    "Parce que les clics peuvent être hors cible : la direction doit payer pour des leads traitables, pas pour une vanity metric."
                  ),
                  PQ(
                    "Pourquoi une vanity metric peut-elle tromper la performance commerciale ?",
                    "Parce qu'elle incite à augmenter le trafic sans améliorer la qualification : le pipeline se remplit mais le taux de signature ne bouge pas."
                  ),
                  PQ(
                    "Pourquoi le taux de signature est-il le lien entre annonce et cycle locataire ?",
                    "Parce qu'il révèle si l'annonce attire les bons profils et si le process aval tient : un écart signale une rupture dans la chaîne."
                  ),
                  PQ(
                    "Pourquoi la direction doit-elle relier annonce et process aval (CRM, réponse, visites) ?",
                    "Parce qu'investir dans un canal sans capacité de réponse dégrade l'expérience et la conversion : le goulet d'étranglement est souvent opérationnel."
                  ),
                  PQ(
                    "Pourquoi investir dans un canal sans capacité de réponse est-il une double peine financière ?",
                    "Parce qu'on paie l'acquisition et on subit la dégradation de marque par leads ignorés : le coût total est supérieur à l'abstention."
                  ),
                ]
              ),
            ],
          },
          {
            title: "Mesure & ajustement",
            objectif: "Fermer la boucle avec des décisions basées sur des données, pas sur des impressions.",
            actions: [
              action(
                "Suivre hebdomadairement : taux de contact, visites, candidatures, refus, délais de réponse",
                "Tableau de bord partagé avec seuils d'alerte et revue courte en équipe.",
                [
                  PQ(
                    "Pourquoi un rythme hebdomadaire plutôt que mensuel sur une annonce active ?",
                    "Parce que le marché locatif peut bouger vite : une dérive de visibilité ou de réponse se corrige en jours, pas en mois, sinon la vacance s'installe."
                  ),
                  PQ(
                    "Pourquoi la dérive de réponse est-elle souvent le premier levier sous-estimé ?",
                    "Parce qu'elle ne dépend pas du budget média mais de l'organisation : le meilleur lead meurt sans réponse rapide."
                  ),
                  PQ(
                    "Pourquoi l'organisation du service commercial/gestion est-elle un actif stratégique aussi important que l'annonce ?",
                    "Parce que l'annonce ne « convertit » que si le système aval convertit : la direction doit voir le process comme partie du produit."
                  ),
                  PQ(
                    "Pourquoi le process comme « produit » change-t-il la manière de piloter les équipes ?",
                    "Parce qu'il impose des standards, des files d'attente et des escalades : on mesure la performance de chaîne, pas celle d'individus isolés."
                  ),
                  PQ(
                    "Pourquoi mesurer la chaîne plutôt que les individus évite-t-il les conflits internes stériles ?",
                    "Parce qu'elle oriente les corrections vers le système (outils, règles, charge) plutôt que vers la faute personnelle, ce qui améliore durablement la conversion."
                  ),
                ]
              ),
              action(
                "Décider des ajustements (prix, texte, visuels, canaux) selon règles pré-écrites pour éviter les zigzags",
                "Règles du type : si X en jours sans visite alors Y ; si Z candidatures faibles alors W.",
                [
                  PQ(
                    "Pourquoi pré-écrire les règles d'ajustement avant la tension du bailleur ?",
                    "Parce que sous pression, on oscille entre prix et promesse : des règles stabilisent la décision et réduisent les conflits internes."
                  ),
                  PQ(
                    "Pourquoi les conflits internes sur le prix ralentissent-ils la réponse marché ?",
                    "Parce qu'ils multiplient les allers-retours et retardent la mise à jour de l'annonce : le concurrent ou le particulier gagne le créneau."
                  ),
                  PQ(
                    "Pourquoi la mise à jour tardive de l'annonce est-elle un risque concurrentiel direct ?",
                    "Parce que les candidats comparent en temps réel : une annonce non ajustée devient « non crédible » et fait fuir même après correction."
                  ),
                  PQ(
                    "Pourquoi la crédibilité de l'annonce est-elle un actif cumulatif sur le portefeuille ?",
                    "Parce que les utilisateurs perçoivent la marque comme cohérente ou floue : une incohérence répétée diminue la conversion sur d'autres biens."
                  ),
                  PQ(
                    "Pourquoi la direction doit-elle protéger la cohérence de marque sur l'ensemble du portefeuille ?",
                    "Parce que chaque annonce est une vitrine : une politique d'ajustement claire aligne tous les métiers sur une promesse client réaliste."
                  ),
                ]
              ),
            ],
          },
        ],
      },
      locataire: {
        essentiel:
          "Réduire l'impayé et le turnover tout en protégeant la réputation et la conformité (sélection, recours, médiation).",
        tools: ["NPS ou enquêtes courtes", "Politique recouvrement", "Jurisprudence synthétisée"],
        iaMetier:
          "Tu es un dirigeant d'agence. Pour le cycle « locataire », à partir des cartes et des 5 pourquoi, distingue process interne et obligations légales ; propose une grille de risque et des réponses types non juridiques.",
        phasesDetailed: [
          {
            title: "Politique de sélection",
            objectif: "Cadrer des critères objectifs, traçables et non discriminants.",
            actions: [
              action(
                "Publier en interne une grille de critères objectifs et la traçabilité attendue (sans traits sensibles)",
                "Document de politique + formation courte équipes + contrôle spot audit interne.",
                [
                  PQ(
                    "Pourquoi une grille interne publiée avant tout recrutement de candidat ?",
                    "Parce que l'improvisation au cas par cas crée des variations injustifiées et exposantes : la conformité commence par une règle du jeu claire."
                  ),
                  PQ(
                    "Pourquoi les variations non justifiées sont-elles un risque majeur pour l'agence ?",
                    "Parce qu'elles deviennent des preuves d'un traitement différentiel en cas de contestation : la traçabilité objective est un bouclier."
                  ),
                  PQ(
                    "Pourquoi la traçabilité objective prime-t-elle sur la « bonne intuition » du commercial ?",
                    "Parce que l'intuition n'est pas auditable et se déforme sous pression de performance : la direction doit exiger des critères vérifiables."
                  ),
                  PQ(
                    "Pourquoi la pression de performance peut-elle corrompre la sélection ?",
                    "Parce qu'elle pousse à raccourcir les vérifications ou à accepter des profils risqués : le gain court terme se paie en impayés et contentieux."
                  ),
                  PQ(
                    "Pourquoi impayés et contentieux sont-ils des indicateurs de pilotage pour la direction sur le cycle locataire ?",
                    "Parce qu'ils révèlent la qualité du processus amont : une politique de sélection solide se lit dans la sinistralité financière et juridique aval."
                  ),
                ]
              ),
              action(
                "Superviser les exceptions (dossiers fragiles, garanties) avec validation hiérarchique et journal d'audit",
                "Journal des exceptions avec motif, validateur et pièces jointes.",
                [
                  PQ(
                    "Pourquoi centraliser les exceptions plutôt que les décentraliser aux commerciaux ?",
                    "Parce que les exceptions sont le point de fuite des discriminations ou des erreurs de jugement : une validation hiérarchique homogénéise le risque."
                  ),
                  PQ(
                    "Pourquoi homogénéiser le risque est-il important pour la réputation de l'agence ?",
                    "Parce que deux bailleurs comparables doivent recevoir un traitement équivalent des candidats : sinon l'agence est perçue comme arbitraire."
                  ),
                  PQ(
                    "Pourquoi l'arbitraire perçu nuit-il à la rétention des bailleurs ?",
                    "Parce qu'il détruit la confiance dans la promesse de « gestion professionnelle » : la direction vend la méthode, pas l'individualisme."
                  ),
                  PQ(
                    "Pourquoi la méthode est-elle un actif commercial différenciant ?",
                    "Parce qu'elle permet de scaler, d'auditer et d'améliorer : sans méthode, chaque dossier est un prototype coûteux."
                  ),
                  PQ(
                    "Pourquoi un prototype coûteux par dossier empêche-t-il la direction de scaler le portefeuille ?",
                    "Parce que la marge par unité s'effondre quand le temps humain explose : le journal d'audit permet de mesurer et réduire la fréquence des exceptions."
                  ),
                ]
              ),
            ],
          },
          {
            title: "Satisfaction & rétention",
            objectif: "Détecter tôt les frictions qui mènent à impayé ou départ.",
            actions: [
              action(
                "Mettre en place des points de contact mesurés (entrée, sinistre, demande récurrente) avec indicateurs de friction",
                "Parcours client instrumenté : délais de réponse, taux de résolution, enquêtes ciblées.",
                [
                  PQ(
                    "Pourquoi instrumenter le parcours plutôt que compter sur les appels « au feeling » ?",
                    "Parce que le feeling masque les segments en souffrance : la friction se voit dans les délais et la répétition des demandes, pas dans le ton général."
                  ),
                  PQ(
                    "Pourquoi la répétition des demandes est-elle un signal précoce d'impayé ou de départ ?",
                    "Parce qu'elle indique souvent un problème non résolu (charges, chauffage, voisinage) qui dégrade la relation et la volonté de payer."
                  ),
                  PQ(
                    "Pourquoi la volonté de payer est-elle liée à la perception du service et pas seulement à la solvabilité ?",
                    "Parce que même un solvable peut retarder le paiement en contestation : la direction doit voir le service comme un levier de recouvrement préventif."
                  ),
                  PQ(
                    "Pourquoi le recouvrement préventif est-il moins coûteux que le contentieux ?",
                    "Parce qu'il évite frais d'huissier, temps juridique et dégradation de la relation bailleur : il s'agit d'anticiper la rupture de confiance."
                  ),
                  PQ(
                    "Pourquoi la confiance bailleur se joue-t-elle aussi sur la gestion locataire visible ?",
                    "Parce que le bailleur juge l'agence sur la résolution des problèmes : une friction locataire non gérée devient un argument en défaveur du renouvellement de mandat."
                  ),
                ]
              ),
              action(
                "Analyser les causes racines des motifs d'insatisfaction récurrents (charges, travaux, communication)",
                "Ateliers d'analyse avec données tickets et décisions correctives système.",
                [
                  PQ(
                    "Pourquoi des ateliers « causes racines » plutôt que des remises individuelles au cas par cas ?",
                    "Parce que le cas par cas corrige le symptôme sans toucher au process : la récurrence revient et la charge interne augmente."
                  ),
                  PQ(
                    "Pourquoi la charge interne croissante est-elle un signal de dette opérationnelle ?",
                    "Parce qu'elle révèle des systèmes (outils, rôles, procédures) qui ne portent plus la complexité du portefeuille : la direction doit investir dans le système."
                  ),
                  PQ(
                    "Pourquoi investir dans le système est-il préférable à recruter à l'infini ?",
                    "Parce que recruter sans système dilue la culture et la qualité : on ajoute du personnel pour compenser un chaos qui continue de croître."
                  ),
                  PQ(
                    "Pourquoi la culture et la qualité sont-elles des actifs de marque pour l'agence ?",
                    "Parce qu'en gestion locative, la promesse est la fiabilité : une culture floue se lit en incohérences visibles par bailleurs et locataires."
                  ),
                  PQ(
                    "Pourquoi l'incohérence visible est-elle plus dangereuse que l'erreur isolée ?",
                    "Parce qu'elle suggère un système non maîtrisé : la direction doit transformer les récurrences en standards pour restaurer la confiance."
                  ),
                ]
              ),
            ],
          },
          {
            title: "Contentieux & médiation",
            objectif: "Réduire l'escalade et protéger l'agence par des seuils et des playbooks.",
            actions: [
              action(
                "Définir des seuils d'escalade (jours d'impayé, montant, historique) alignés avec le juridique et le finance",
                "Matrice d'escalade avec actions, responsables et outils de communication.",
                [
                  PQ(
                    "Pourquoi une matrice d'escalade avant le premier gros impayé ?",
                    "Parce qu'en situation tendue, les décisions se prennent au coup par coup : des seuils pré-écrits réduisent l'arbitraire et accélèrent la réponse."
                  ),
                  PQ(
                    "Pourquoi l'arbitraire dans l'escalade est-il un risque juridique et réputationnel ?",
                    "Parce qu'il crée des traitements inégaux entre locataires comparables : la direction doit garantir l'équité pour protéger la marque."
                  ),
                  PQ(
                    "Pourquoi l'équité entre locataires est-elle aussi critique que celle entre bailleurs ?",
                    "Parce que les plaintes et les réseaux sociaux amplifient les perceptions d'injustice : une escalade perçue comme injuste nuit à l'employer brand."
                  ),
                  PQ(
                    "Pourquoi l'employer brand est-il un sujet de direction dans le recouvrement ?",
                    "Parce que les collaborateurs appliquent des procédures difficiles (relances) : ils doivent comprendre la légitimité des seuils pour rester cohérents."
                  ),
                  PQ(
                    "Pourquoi la cohérence des collaborateurs est-elle nécessaire à l'exécution du playbook ?",
                    "Parce qu'un playbook ignoré ou appliqué à moitié crée des zones grises où le litige se prolonge : la direction doit mesurer l'adhésion et former."
                  ),
                ]
              ),
              action(
                "Mesurer le coût total d'un dossier contentieux (heures, honoraires externes, impact bailleur) pour décider des politiques",
                "Tableau de bord contentieux : coût moyen, durée, taux de récupération.",
                [
                  PQ(
                    "Pourquoi mesurer le coût total plutôt que seulement le montant récupéré ?",
                    "Parce que le montant récupéré ignore le temps interne et les honoraires : une « victoire » peut être économiquement négative pour l'agence."
                  ),
                  PQ(
                    "Pourquoi une victoire économiquement négative influence-t-elle la stratégie de mandat ?",
                    "Parce qu'elle force à choisir où investir la fermeté : certains dossiers doivent être traités en médiation tôt pour préserver la marge globale."
                  ),
                  PQ(
                    "Pourquoi la médiation précoce peut-elle être un levier de marge ?",
                    "Parce qu'elle réduit la durée et les frais externes : elle transforme un conflit long en accord plus rapide, moins coûteux en ressources."
                  ),
                  PQ(
                    "Pourquoi la durée du conflit est-elle un indicateur clé pour la direction ?",
                    "Parce qu'elle consomme des ressources rares (juridique, direction) et dégrade l'expérience bailleur : un contentieux long est un signal d'échec de process amont."
                  ),
                  PQ(
                    "Pourquoi l'échec amont (sélection, état du bien, communication) doit-il alimenter la correction système ?",
                    "Parce que le contentieux est souvent un symptôme : la direction doit remonter aux causes pour réduire le flux futur de dossiers."
                  ),
                ]
              ),
            ],
          },
        ],
      },
    },
  },
];
