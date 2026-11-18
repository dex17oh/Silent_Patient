export const en = {
  // App Identity
  appName: "THE SILENT PATIENT",
  appSubtitle: "Give Pain a Voice",
  appMissionTitle: "AI-Powered Patient Communication & Pain Assessment Platform",
  appMissionDesc: "An intelligent healthcare communication concept designed to empower non-verbal patients to express their needs, physical discomfort, and pain with precision, while providing medical staff with real-time actionable clinical clarity.",
  
  // Navigation
  nav: {
    overview: "Overview",
    communication: "Patient Communication",
    painAssessment: "Pain Assessment",
    doctorDashboard: "Doctor Dashboard",
    neuroAnalysis: "Neuro Analysis (Preview)",
    settings: "Settings",
  },

  // General & Topbar
  room: "Room",
  bed: "Bed",
  status: "Status",
  live: "LIVE",
  emergencyCall: "Emergency Nurse Call",
  emergencySent: "Emergency call dispatched to on-duty nurse staff immediately!",
  patientNameLabel: "Patient:",
  language: "Language",
  notifications: "Notifications",
  voiceFeedbackActive: "Interactive Voice Active",

  // Page 1: Communication
  comm: {
    welcome: "How are you feeling today?",
    instruction: "Tap any card below to voice your needs. The message will be forwarded directly to your medical staff and spoken aloud.",
    generateVoice: "Generate Voice",
    voiceSuccess: "Message read aloud successfully",
    messageSent: "Your request has been dispatched to medical staff",
    recentHistory: "Recent Communication History",
    noMessages: "No messages sent yet",
    quickPhrases: "Quick Responses",
    clearHistory: "Clear Feed",
    timesSpoken: "Spoken",
    urgencyLow: "Routine",
    urgencyNormal: "Priority",
    urgencyHigh: "Urgent",
    
    // 12 Core Options required by user
    pain: "I feel pain",
    painSentence: "I am feeling severe pain and need pain relief or medical examination.",
    
    water: "I need water",
    waterSentence: "I am thirsty, please provide me with a glass of water.",
    
    food: "I need food",
    foodSentence: "I am feeling hungry, I need a meal or light food suitable for my diet.",
    
    bathroom: "I need the bathroom",
    bathroomSentence: "I need assistance to visit the restroom or bedpan immediately.",
    
    cold: "I feel cold",
    coldSentence: "I feel very cold, please bring an extra blanket or adjust the temperature.",
    
    hot: "I feel hot",
    hotSentence: "I feel overheated, please loosen my blankets or adjust the cooling.",
    
    nausea: "I feel nauseous",
    nauseaSentence: "I feel very nauseous and sick to my stomach, I may vomit.",
    
    help: "I need help",
    helpSentence: "I need immediate nursing assistance beside my bed right now.",
    
    position: "I want to change my position",
    positionSentence: "My body feels strained in this posture, please help me adjust my position.",
    
    family: "I want to contact my family",
    familySentence: "I miss my family, please help me place a phone or video call to them.",
    
    doctor: "I want to see the doctor",
    doctorSentence: "I have questions about my treatment and would like to speak with my physician.",
    
    sleep: "I need to sleep",
    sleepSentence: "I am exhausted and need quietness, dim lights, and rest.",

    // Quick affirmation buttons
    yes: "Yes",
    no: "No",
    thankYou: "Thank you",
    better: "Feeling better",
    worse: "Feeling worse",
    anxious: "Feeling anxious"
  },

  // Page 2: Pain Assessment
  pain: {
    title: "Interactive Pain Assessment & Body Map",
    subtitle: "Identify the precise location, severity, and nature of your pain to guide clinical interventions.",
    locationTitle: "1. Pain Location – Interactive Body Map",
    locationDesc: "Click the affected area on the anatomical body diagram (Front or Back view):",
    frontView: "Front View",
    backView: "Back View",
    selectedArea: "Selected Area:",
    
    areas: {
      head: "Head",
      neck: "Neck",
      chest: "Chest",
      abdomen: "Abdomen",
      back: "Back",
      arms: "Arms",
      hands: "Hands",
      legs: "Legs",
      feet: "Feet",
    },

    intensityTitle: "2. Pain Intensity (Scale 0 - 10)",
    intensityDesc: "Slide the scale or click a number representing your current pain score:",
    intensity0: "0 - No pain at all",
    intensityLow: "1-3 - Mild pain (manageable)",
    intensityMed: "4-6 - Moderate pain (interferes with focus)",
    intensityHigh: "7-9 - Severe pain (disabling discomfort)",
    intensity10: "10 - Worst possible unbearable pain",

    typeTitle: "3. Pain Type & Character",
    typeDesc: "How does this pain feel? Select the closest description:",
    types: {
      sharp: "Sharp pain (knife-like, acute)",
      sharpShort: "Sharp",
      burning: "Burning pain (fiery sensation)",
      burningShort: "Burning",
      stabbing: "Stabbing pain (repeated pierce)",
      stabbingShort: "Stabbing",
      dull: "Dull pain (deep aching pressure)",
      dullShort: "Dull / Aching",
      throbbing: "Throbbing pain (pulsing with heartbeat)",
      throbbingShort: "Throbbing",
      continuous: "Continuous pain (constant, unwavering)",
      continuousShort: "Continuous",
    },

    onsetTitle: "4. When did the pain start?",
    onsetOptions: {
      'just-now': "Just now (moments ago)",
      'few-minutes': "A few minutes ago",
      'few-hours': "A few hours ago",
      'several-days': "Several days ago",
    },

    submitBtn: "Submit Pain Assessment",
    submitting: "Transmitting to patient electronic chart...",
    summaryTitle: "Recorded Pain Assessment Summary",
    summaryDesc: "This clinical entry has been logged and instantly pushed to the Doctor Dashboard and nurse station.",
    closeSummary: "Close & Confirm",
  },

  // Page 3: Doctor Dashboard
  doctor: {
    title: "Clinical Medical Staff Dashboard",
    subtitle: "Real-time surveillance of patient requests, acute pain logs, and ward communication metrics",
    wardName: "Neuro-Rehabilitation & Palliative Care Unit (Ward B)",
    activeBeds: "12 Monitored Beds",
    stats: {
      totalMessages: "Total Patient Requests",
      painReports: "Logged Pain Reports",
      unresolved: "Unresolved Requests",
      avgPain: "Ward Mean Pain Level",
      recentActivities: "Patient Activities Today",
    },
    patientCard: {
      selectPatient: "Select Monitored Patient",
      profile: "Patient Clinical Overview",
      age: "Age",
      admission: "Admitted",
      condition: "Primary Diagnosis",
      commBarrier: "Speech Barrier Cause",
      vitals: "Current Vital Signs",
      viewFullDetails: "Inspect Patient Dossier",
    },
    filters: {
      all: "All Alerts",
      urgent: "Urgent Only",
      painOnly: "Pain Reports",
      pending: "Pending Action",
    },
    table: {
      time: "Time",
      patient: "Patient / Bed",
      category: "Category",
      content: "Message / Pain Alert",
      intensity: "Intensity",
      status: "Care Status",
      action: "Action",
      markAttended: "Attend Room",
      markResolved: "Resolve",
      attendTooltip: "Confirm nursing staff dispatched to room",
    },
    charts: {
      painTrend: "24-Hour Pain Trend Trajectory",
      requestDistribution: "Most Requested Patient Needs",
      painLocationMap: "Prevalent Ward Pain Hotspots",
    }
  },

  // Page 4: Neuro Analysis
  neuro: {
    title: "Neuro & Behavioral AI Analysis",
    subtitle: "Research preview of multimodal computer-vision and signal analysis for non-verbal patients.",
    experimentalBanner: "Experimental Prototype – AI Integration Coming Soon",
    experimentalDisclaimer: "This interface demonstrates the future AI research pipeline for multi-modal non-verbal patient monitoring. No clinical claims are made; this is a simulation prototype.",
    cameraSimulation: "Clinical Optical Sensor Feed (Face & Motion Mesh)",
    scanningStatus: "Active Mesh Optical Tracking: 468 facial landmark coordinates mapped",
    simulateStress: "Simulate Pain Micro-expression Spike",
    simulateCalm: "Simulate Baseline Relaxed State",
    
    facialCard: {
      title: "1. Facial Expression Analysis (Grimace Scale)",
      desc: "Micro-expression detection correlated with involuntary pain markers in non-verbal cohorts.",
      browFurrow: "Brow Furrow (AU4 Brow Lowerer)",
      orbitTightening: "Eye Orbit Tightening (AU6/AU7)",
      nasolabialTension: "Nasolabial Fold Tension (AU9/AU10)",
      microFACS: "Active Action Units: FACS AU4, AU6, AU9, AU12",
    },

    motionCard: {
      title: "2. Motor Activity & Involuntary Movement",
      desc: "Continuous motion sensors evaluating agitation, restlessness, and involuntary posturing.",
      restlessness: "Restlessness Index (Gross Movement)",
      tremorScore: "Fine Motor Involuntary Tremor",
      postureShifts: "Postural Shift Rate (Shifts/hr)",
      rigidity: "Musculoskeletal Rigidity Index",
    },

    physioCard: {
      title: "3. Contactless Physiological Markers (rPPG)",
      desc: "Sub-dermal micro-hemodynamic fluctuations captured via optical RGB camera sensors.",
      heartRate: "Estimated Heart Rate (rPPG)",
      hrv: "Heart Rate Variability (RMSSD)",
      respiration: "Respiratory Rate (Thoracic Excursion)",
      autonomicStress: "Autonomic Stress Index (LF/HF ratio)",
    },

    overviewCard: {
      title: "4. Multimodal Fusion & Composite Distress Score",
      compositeScore: "Composite Distress / Pain Index",
      confidence: "Sensor Fusion Model Confidence",
      riskLevel: "Clinical Triage Tier",
      riskLow: "Low Distress (Patient Stable & Resting)",
      riskModerate: "Moderate Distress (Discomfort flagged for review)",
      riskHigh: "Severe Distress (High pain probability - urgent evaluation)",
      telemetryLog: "Real-time Telemetry Stream",
    }
  },

  // Settings
  settings: {
    title: "Platform Configuration & Display",
    subtitle: "Adjust voice synthesis speech rate, bed parameters, and visual accessibility settings",
    voiceSettings: "Speech Synthesis Engine (TTS)",
    voiceRate: "Speech Rate Speed",
    voicePitch: "Voice Pitch",
    testVoice: "Play Demo Test Voice",
    accessibility: "Visual & Accessibility Modes",
    highContrast: "High Contrast Theme (Clinical Low-light)",
    largeButtons: "Oversized Touch Targets for Motor Limitation",
    roomAssignment: "Bed & Room Assignment",
    saveSuccess: "Preferences updated and saved to local state!",
    resetDefault: "Restore Defaults",
  }
};
