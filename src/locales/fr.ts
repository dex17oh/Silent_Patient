export const fr = {
  // App Identity
  appName: "LE PATIENT SILENCIEUX",
  appSubtitle: "Donner une Voix à la Douleur",
  appMissionTitle: "Plateforme Intelligente de Communication et d'Évaluation de la Douleur",
  appMissionDesc: "Un concept médical innovant conçu pour aider les patients non-verbaux ou ayant des difficultés d'élocution à exprimer leurs besoins et douleurs avec précision, offrant aux soignants une visibilité clinique immédiate.",
  
  // Navigation
  nav: {
    overview: "Vue d'ensemble",
    communication: "Communication Patient",
    painAssessment: "Évaluation Douleur",
    doctorDashboard: "Tableau de Bord Médecin",
    neuroAnalysis: "Analyse Neuro (Aperçu)",
    settings: "Paramètres",
  },

  // General & Topbar
  room: "Chambre",
  bed: "Lit",
  status: "État",
  live: "DIRECT",
  emergencyCall: "Appel Infirmier d'Urgence",
  emergencySent: "Appel d'urgence transmis à l'équipe soignante immédiatement !",
  patientNameLabel: "Patient :",
  language: "Langue",
  notifications: "Notifications",
  voiceFeedbackActive: "Voix Interactive Active",

  // Page 1: Communication
  comm: {
    welcome: "Comment vous sentez-vous aujourd'hui ?",
    instruction: "Touchez une carte ci-dessous pour exprimer votre besoin. Le message sera directement transmis aux soignants et lu à voix haute.",
    generateVoice: "Générer la Voix",
    voiceSuccess: "Message vocalisé avec succès",
    messageSent: "Votre demande a été transmise à l'équipe médicale",
    recentHistory: "Historique des Communications Récentes",
    noMessages: "Aucun message envoyé pour le moment",
    quickPhrases: "Réponses Rapides",
    clearHistory: "Effacer l'Historique",
    timesSpoken: "Énoncé",
    urgencyLow: "Normal",
    urgencyNormal: "Prioritaire",
    urgencyHigh: "Urgent",
    
    // 12 Core Options required by user
    pain: "J'ai mal / Je ressens de la douleur",
    painSentence: "Je ressens une vive douleur et j'ai besoin d'un antalgique ou d'un examen médical.",
    
    water: "J'ai besoin d'eau",
    waterSentence: "J'ai soif, pourriez-vous me donner un verre d'eau s'il vous plaît ?",
    
    food: "J'ai besoin de nourriture",
    foodSentence: "J'ai faim, j'ai besoin d'un repas ou d'une collation adaptée à mon état.",
    
    bathroom: "J'ai besoin des toilettes",
    bathroomSentence: "J'ai besoin d'aide pour aller aux toilettes ou pour le bassin.",
    
    cold: "J'ai froid",
    coldSentence: "J'ai très froid, merci de m'apporter une couverture ou d'augmenter le chauffage.",
    
    hot: "J'ai chaud",
    hotSentence: "J'ai trop chaud, merci de retirer une couverture ou d'aérer la chambre.",
    
    nausea: "J'ai la nausée",
    nauseaSentence: "J'ai de fortes nausées et des maux d'estomac, je risque de vomir.",
    
    help: "J'ai besoin d'aide",
    helpSentence: "J'ai besoin de l'aide urgente d'un soignant auprès de mon lit maintenant.",
    
    position: "Je veux changer de position",
    positionSentence: "Je suis inconfortablement installé, aidez-moi à changer de posture.",
    
    family: "Je veux contacter ma famille",
    familySentence: "Ma famille me manque, aidez-moi à les joindre par téléphone ou appel vidéo.",
    
    doctor: "Je veux voir le médecin",
    doctorSentence: "J'ai une question importante et je souhaite m'entretenir avec mon médecin.",
    
    sleep: "J'ai besoin de dormir",
    sleepSentence: "Je suis épuisé, j'ai besoin de calme et d'éteindre les lumières pour me reposer.",

    // Quick affirmation buttons
    yes: "Oui",
    no: "Non",
    thankYou: "Merci",
    better: "Je vais mieux",
    worse: "Je vais moins bien",
    anxious: "Je me sens angoissé"
  },

  // Page 2: Pain Assessment
  pain: {
    title: "Évaluation Interactive de la Douleur et Carte Corporelle",
    subtitle: "Précisez la localisation anatomique, l'intensité et le type de douleur pour orienter la prise en charge médicale.",
    locationTitle: "1. Localisation – Carte Corporelle Interactive",
    locationDesc: "Cliquez sur la zone douloureuse sur le schéma corporel (vue de face ou de dos) :",
    frontView: "Vue de Face",
    backView: "Vue de Dos",
    selectedArea: "Zone sélectionnée :",
    
    areas: {
      head: "Tête",
      neck: "Cou",
      chest: "Poitrine / Thorax",
      abdomen: "Abdomen / Ventre",
      back: "Dos",
      arms: "Bras",
      hands: "Mains",
      legs: "Jambes",
      feet: "Pieds",
    },

    intensityTitle: "2. Intensité de la Douleur (Échelle 0 - 10)",
    intensityDesc: "Ajustez le curseur ou cliquez sur le chiffre décrivant votre niveau actuel :",
    intensity0: "0 - Aucune douleur",
    intensityLow: "1-3 - Douleur légère supportable",
    intensityMed: "4-6 - Douleur modérée gênante",
    intensityHigh: "7-9 - Douleur sévère très invalidante",
    intensity10: "10 - Douleur maximale insupportable",

    typeTitle: "3. Type et Caractère de la Douleur",
    typeDesc: "Quelle est la sensation ressentie ? Choisissez la description la plus proche :",
    types: {
      sharp: "Douleur aiguë (vive, coupante)",
      sharpShort: "Aiguë",
      burning: "Douleur brûlante (chaleur cuisante)",
      burningShort: "Brûlure",
      stabbing: "Douleur lancinante (coups de poignard)",
      stabbingShort: "Lancinante",
      dull: "Douleur sourde (pesanteur diffuse)",
      dullShort: "Sourde / Diffuse",
      throbbing: "Douleur pulsatile (bat avec le pouls)",
      throbbingShort: "Pulsatile",
      continuous: "Douleur continue et constante",
      continuousShort: "Continue",
    },

    onsetTitle: "4. Depuis quand cette douleur a-t-elle commencé ?",
    onsetOptions: {
      'just-now': "À l'instant même",
      'few-minutes': "Depuis quelques minutes",
      'few-hours': "Depuis quelques heures",
      'several-days': "Depuis plusieurs jours",
    },

    submitBtn: "Valider l'Évaluation de la Douleur",
    submitting: "Transmission au dossier médical du patient...",
    summaryTitle: "Résumé de l'Évaluation Enregistrée",
    summaryDesc: "Cette fiche clinique a été transmise immédiatement au tableau de bord des médecins et des infirmiers.",
    closeSummary: "Fermer et Confirmer",
  },

  // Page 3: Doctor Dashboard
  doctor: {
    title: "Tableau de Bord Médical & Soignants",
    subtitle: "Surveillance continue des requêtes patients, bilans algiques et interventions de l'unité",
    wardName: "Service Neuro-Rééducation et Soins Palliatifs (Ail B)",
    activeBeds: "12 Lits Monitorés",
    stats: {
      totalMessages: "Total Requêtes Patients",
      painReports: "Signalements Douleur",
      unresolved: "Demandes en Attente",
      avgPain: "Moyenne Douleur du Service",
      recentActivities: "Activités Patients du Jour",
    },
    patientCard: {
      selectPatient: "Sélectionner le Patient",
      profile: "Dossier Clinique Patient",
      age: "Âge",
      admission: "Date d'admission",
      condition: "Diagnostic Principal",
      commBarrier: "Origine du Trouble d'Élocution",
      vitals: "Constantes Vitales en Temps Réel",
      viewFullDetails: "Consulter le Dossier Médical",
    },
    filters: {
      all: "Toutes les Alertes",
      urgent: "Urgences Uniquement",
      painOnly: "Rapports de Douleur",
      pending: "En Attente",
    },
    table: {
      time: "Heure",
      patient: "Patient / Lit",
      category: "Catégorie",
      content: "Message / Alerte Douleur",
      intensity: "Intensité",
      status: "Prise en charge",
      action: "Action",
      markAttended: "Pris en charge",
      markResolved: "Clôturer",
      attendTooltip: "Confirmer que le soignant est auprès du patient",
    },
    charts: {
      painTrend: "Évolution de la Douleur (Dernières 24h)",
      requestDistribution: "Besoins les Plus Fréquents",
      painLocationMap: "Zones de Douleur Prévalentes dans l'Unité",
    }
  },

  // Page 4: Neuro Analysis
  neuro: {
    title: "Analyse Neurologique et Comportementale IA",
    subtitle: "Aperçu de recherche sur l'analyse multi-modale par vision par ordinateur et signaux biométriques.",
    experimentalBanner: "Prototype Expérimental – Intégration IA Prochainement",
    experimentalDisclaimer: "Cette interface démontre le pipeline de recherche futur pour le monitoring des patients non-verbaux. Aucune allégation médicale n'est revendiquée ; il s'agit d'une simulation.",
    cameraSimulation: "Capteur Optique Clinique (Face & Motion Mesh)",
    scanningStatus: "Détection optique active : 468 points de repère faciaux cartographiés",
    simulateStress: "Simuler un Pic de Grimace Douleureuse",
    simulateCalm: "Simuler un État de Repos Détendu",
    
    facialCard: {
      title: "1. Analyse des Expressions Faciales (Échelle de Grimace)",
      desc: "Détection des micro-contractions faciales corrélées à l'inconfort chez les patients intubés ou aphasiques.",
      browFurrow: "Foncement des Sourcils (AU4)",
      orbitTightening: "Plissement des Paupières (AU6/7)",
      nasolabialTension: "Tension Nasogénienne (AU9/10)",
      microFACS: "Unités d'Action Faciales : FACS AU4, AU6, AU9, AU12",
    },

    motionCard: {
      title: "2. Activité Motrice & Mouvements Involontaires",
      desc: "Capteurs cinématiques mesurant l'agitation motrice, les tremblements et les postures d'évitement.",
      restlessness: "Indice d'Agitation Motrice",
      tremorScore: "Tremblements Fins Involontaires",
      postureShifts: "Fréquence des Changements de Posture (/h)",
      rigidity: "Indice de Rigidité Musculo-squelettique",
    },

    physioCard: {
      title: "3. Indicateurs Physiologiques Sans Contact (rPPG)",
      desc: "Mesure de la micro-circulation pulsatile faciale via caméra optique haute résolution.",
      heartRate: "Fréquence Cardiaque Estimée (rPPG)",
      hrv: "Variabilité Cardiaque (VRC RMSSD)",
      respiration: "Fréquence Respiratoire Estimée",
      autonomicStress: "Indice de Stress Végétatif (Sympathique)",
    },

    overviewCard: {
      title: "4. Synthèse Multi-modale & Indice Combiné de Douleur",
      compositeScore: "Indice Global d'Inconfort IA",
      confidence: "Degré de Confiance du Modèle",
      riskLevel: "Niveau de Triage Clinique",
      riskLow: "Inconfort Faible (Patient stable et calme)",
      riskModerate: "Inconfort Modéré (Nécessite une vérification soignante)",
      riskHigh: "Inconfort Sévère (Forte probabilité algique - intervention requise)",
      telemetryLog: "Flux Télémétrique en Temps Réel",
    }
  },

  // Settings
  settings: {
    title: "Configuration de la Plateforme & Affichage",
    subtitle: "Ajustez la synthèse vocale, l'accessibilité visuelle et l'assignation de chambre",
    voiceSettings: "Moteur de Synthèse Vocale (TTS)",
    voiceRate: "Vitesse d'Élocution",
    voicePitch: "Hauteur de la Voix",
    testVoice: "Tester la Voix Démo",
    accessibility: "Modes d'Accessibilité Visuelle",
    highContrast: "Mode Contraste Élevé (Chambre Médicale Sombre)",
    largeButtons: "Boutons Tactiles Grands Formats (Mobilité Réduite)",
    roomAssignment: "Assignation Chambre & Lit",
    saveSuccess: "Paramètres enregistrés avec succès !",
    resetDefault: "Rétablir les Paramètres par Défaut",
  }
};
