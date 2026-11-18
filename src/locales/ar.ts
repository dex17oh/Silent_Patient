export const ar = {
  // App Identity
  appName: "المريض الصامت",
  appSubtitle: "امنح الألم صوتًا",
  appMissionTitle: "منصة ذكية للتواصل وتقييم الألم",
  appMissionDesc: "مفهوم متطور للتواصل الطبي مصمم لمساعدة المرضى غير القادرين على النطق على التعبير عن احتياجاتهم وآلامهم بدقة، وتمكين الكوادر الطبية من فهم حالتهم الصحية والاستجابة الفورية لها.",
  
  // Navigation
  nav: {
    overview: "نظرة عامة",
    communication: "تواصل المريض",
    painAssessment: "تقييم الألم",
    doctorDashboard: "لوحة تحكم الطبيب",
    neuroAnalysis: "التحليل العصبي (تجريبي)",
    settings: "الإعدادات",
  },

  // General & Topbar
  room: "غرفة",
  bed: "سرير",
  status: "الحالة",
  live: "مباشر",
  emergencyCall: "نداء تمريض فوري",
  emergencySent: "تم إرسال نداء الطوارئ لطاقم التمريض فوراً!",
  patientNameLabel: "المريض:",
  language: "اللغة",
  notifications: "الإشعارات",
  voiceFeedbackActive: "الصوت التفاعلي مفعل",

  // Page 1: Communication
  comm: {
    welcome: "كيف تشعر اليوم؟",
    instruction: "اضغط على أي بطاقة للتعبير عما تحتاجه وسنقوم بإيصاله مباشرة للممرض أو قراءته بصوت مسموع.",
    generateVoice: "نطق العبارة",
    voiceSuccess: "تم نطق الرسالة بنجاح",
    messageSent: "تم إرسال رسالتك إلى الطاقم الطبي",
    recentHistory: "سجل الرسائل الأخيرة",
    noMessages: "لا توجد رسائل مسجلة بعد",
    quickPhrases: "استجابات سريعة",
    clearHistory: "مسح السجل",
    timesSpoken: "مرات النطق",
    urgencyLow: "عادي",
    urgencyNormal: "متوسط",
    urgencyHigh: "عاجل",
    
    // 12 Core Options required by user
    pain: "أشعر بالألم",
    painSentence: "أنا أشعر بألم شديد وأحتاج إلى تسكين أو فحص طبي.",
    
    water: "أحتاج إلى الماء",
    waterSentence: "أشعر بالعطش، أرجو تزويدي بكوب من الماء.",
    
    food: "أحتاج إلى الطعام",
    foodSentence: "أشعر بالجوع، أحتاج إلى وجبة خفيفة أو طعام مناسب لحالتي.",
    
    bathroom: "أحتاج إلى المرحاض",
    bathroomSentence: "أحتاج إلى الذهاب إلى المرحاض أو المساعدة لقضاء الحاجة.",
    
    cold: "أشعر بالبرد",
    coldSentence: "الجو بارد جداً، أحتاج إلى غطاء إضافي أو تعديل درجة الحرارة.",
    
    hot: "أشعر بالحرارة",
    hotSentence: "أشعر بحرارة وضيق، أرجو تخفيف الغطاء أو تشغيل التكييف.",
    
    nausea: "أشعر بالغثيان",
    nauseaSentence: "أشعر بغثيان وانزعاج شديد في معدتي، قد أتقيأ.",
    
    help: "أحتاج إلى المساعدة",
    helpSentence: "أحتاج إلى مساعدة عاجلة من طاقم التمريض بجانبي الآن.",
    
    position: "أريد تغيير وضعيتي",
    positionSentence: "جسدي متعب من هذه الوضعية، أرجو المساعدة في تعديل وضع استلقائي.",
    
    family: "أريد التواصل مع عائلتي",
    familySentence: "أشتاق إلى عائلتي، أرجو مساعدتي في الاتصال بهم هاتفياً أو عبر الفيديو.",
    
    doctor: "أريد رؤية الطبيب",
    doctorSentence: "لدي استفسار هام أو أعراض جديدة وأرغب في مقابلة الطبيب المعالج.",
    
    sleep: "أحتاج إلى النوم",
    sleepSentence: "أنا مرهق جداً وأحتاج للهدوء وإطفاء الأضواء للنوم والراحة.",

    // Quick affirmation buttons
    yes: "نعم",
    no: "لا",
    thankYou: "شكراً لكم",
    better: "أشعر بتحسن",
    worse: "أشعر بسوء أكبر",
    anxious: "أشعر بالخوف والقلق"
  },

  // Page 2: Pain Assessment
  pain: {
    title: "مقياس وتقييم الألم التفاعلي",
    subtitle: "حدد موضع الألم، شدته، وطبيعته بدقة لمساعدة الفريق الطبي في تقديم العلاج الأنسب.",
    locationTitle: "1. موضع الألم – خريطة الجسم",
    locationDesc: "انقر على الجزء المصاب في النموذج البشري (الأمامي أو الخلفي):",
    frontView: "الجهة الأمامية",
    backView: "الجهة الخلفية",
    selectedArea: "المنطقة المحددة:",
    
    areas: {
      head: "الرأس",
      neck: "الرقبة",
      chest: "الصدر",
      abdomen: "البطن",
      back: "الظهر",
      arms: "الذراعين",
      hands: "اليدين",
      legs: "الساقين",
      feet: "القدمين",
    },

    intensityTitle: "2. شدة الألم (مقياس 0 - 10)",
    intensityDesc: "حرك المؤشر أو اضغط على الرقم الذي يعبر عن مستوى ألمك الحالي:",
    intensity0: "0 - لا يوجد ألم إطلاقاً",
    intensityLow: "1-3 - ألم خفيف يمكن تحمله",
    intensityMed: "4-6 - ألم متوسط يعيق التركيز",
    intensityHigh: "7-9 - ألم شديد جداً يعطل القدرة على الحركة",
    intensity10: "10 - أشد ألم ممكن لا يطاق",

    typeTitle: "3. نوع وطبيعة الألم",
    typeDesc: "كيف تشعر بهذا الألم؟ اختر الوصف الأقرب:",
    types: {
      sharp: "ألم حاد (مثل سكين أو وخز)",
      sharpShort: "ألم حاد",
      burning: "ألم حارق (حرقة أو لهب)",
      burningShort: "ألم حارق",
      stabbing: "ألم طاعن (طعنات متكررة)",
      stabbingShort: "ألم طاعن",
      dull: "ألم خفيف مستمر (ثقل أو ضغط مبهم)",
      dullShort: "ألم خفيف / مبهم",
      throbbing: "ألم نابض (ينبض مع دقات القلب)",
      throbbingShort: "ألم نابض",
      continuous: "ألم مستمر وثابت لا ينقطع",
      continuousShort: "ألم مستمر",
    },

    onsetTitle: "4. متى بدأ هذا الألم؟",
    onsetOptions: {
      'just-now': "الآن للتو (منذ ثوانٍ)",
      'few-minutes': "منذ بضع دقائق",
      'few-hours': "منذ بضع ساعات",
      'several-days': "منذ عدة أيام",
    },

    submitBtn: "تسجيل وإرسال تقييم الألم",
    submitting: "جارٍ الإرسال إلى ملف المريض...",
    summaryTitle: "ملخص تقييم الألم المسجل",
    summaryDesc: "تم تسجيل هذا التقييم وإرساله فوراً إلى لوحة متابعة الطبيب وطاقم التمريض المناوب.",
    closeSummary: "إغلاق والتأكيد",
  },

  // Page 3: Doctor Dashboard
  doctor: {
    title: "لوحة تحكم الطبيب والكوادر الطبية",
    subtitle: "المراقبة اللحظية لتواصل المرضى، سجلات الألم، ومؤشرات الاستجابة في الجناح",
    wardName: "جناح التأهيل العصبي والعناية التلطيفية (جناح ب)",
    activeBeds: "12 سرير مراقب",
    stats: {
      totalMessages: "إجمالي رسائل المرضى",
      painReports: "بلاغات الألم المسجلة",
      unresolved: "طلبات بانتظار الإجراء",
      avgPain: "متوسط شدة الألم بالقسم",
      recentActivities: "أنشطة المرضى اليوم",
    },
    patientCard: {
      selectPatient: "اختيار المريض المعروض",
      profile: "الملف السريري للمريض",
      age: "العمر",
      admission: "تاريخ الدخول",
      condition: "التشخيص الأساسي",
      commBarrier: "سبب صعوبة النطق",
      vitals: "العلامات الحيوية اللحظية",
      viewFullDetails: "عرض التقرير السريري الكامل",
    },
    filters: {
      all: "جميع البلاغات",
      urgent: "العاجلة فقط",
      painOnly: "تقييمات الألم",
      pending: "قيد المتابعة",
    },
    table: {
      time: "الوقت",
      patient: "المريض / السرير",
      category: "النوع",
      content: "الرسالة أو البلاغ",
      intensity: "مستوى الألم",
      status: "حالة الإجراء",
      action: "الإجراء",
      markAttended: "تم الحضور",
      markResolved: "إنهاء المتابعة",
      attendTooltip: "تأكيد أن الممرض توجه للغرفة",
    },
    charts: {
      painTrend: "منحنى شدة الألم (خلال 24 ساعة الماضية)",
      requestDistribution: "توزيع احتياجات المرضى الأكثر تكراراً",
      painLocationMap: "خريطة أكثر مناطق الألم شيوعاً بالجناح",
    }
  },

  // Page 4: Neuro Analysis
  neuro: {
    title: "التحليل العصبي والسلوكي الذكي",
    subtitle: "استكشاف أولي لتقنيات الذكاء الاصطناعي متعددة النماذج لرصد تعبيرات الوجه، الحركات الحركية، والمؤشرات الفسيولوجية للمرضى غير القادرين على الحركة أو النطق.",
    experimentalBanner: "نموذج أولي تجريبي ومختبري – جاري العمل على ربطه بنماذج الذكاء الاصطناعي مستقبلاً",
    experimentalDisclaimer: "هذه الواجهة هي عرض تفاعلي لمفهوم التحليل المتعدد المستقبلي. لا يتم تقديم تشخيصات طبية أو علاجية تلقائية في هذا النموذج الأولي.",
    cameraSimulation: "محاكاة كاميرا الاستشعار السريري (Face & Motion Mesh)",
    scanningStatus: "الاستشعار اللحظي قيد التشغيل: تتبع شبكة معالم الوجه (468 نقطة)",
    simulateStress: "محاكاة ارتفاع تعبيرات الألم",
    simulateCalm: "محاكاة حالة الاسترخاء",
    
    facialCard: {
      title: "1. تحليل تعبيرات الوجه (Facial Grimace Scale)",
      desc: "تحليل ميكرو-حركات الوجه المرتبطة بالألم والانزعاج عند غياب القدرة على النطق.",
      browFurrow: "تقطيب الحاجبين (Brow Lowerer)",
      orbitTightening: "تضييق العينين (Orbit Tightening)",
      nasolabialTension: "شد الطية الأنفية الشفوية (Levator contraction)",
      microFACS: "وحدات العمل الحركي المرصودة (FACS AU4, AU6, AU9, AU12)",
    },

    motionCard: {
      title: "2. تحليل الحركة والنشاط الحركي (Motor Activity)",
      desc: "متابعة مؤشرات القلق الحركي، التململ، أو التشنج العضلي عبر مستشعرات الحركة.",
      restlessness: "مؤشر التململ الحركي (Restlessness Index)",
      tremorScore: "الارتجاف الحركي الدقيق (Fine Involuntary Tremor)",
      postureShifts: "معدل تبديل وضعية الجسد (Shifts/hr)",
      rigidity: "مقاومة التصلب العضلي (Rigidity Indicator)",
    },

    physioCard: {
      title: "3. المؤشرات الفسيولوجية اللاتلامسية (Contactless rPPG)",
      desc: "قياس النبض والتنفس عبر تغيرات امتصاص الضوء على سطح البشرة باستخدام الكاميرا.",
      heartRate: "معدل نبضات القلب المقدر (rPPG Heart Rate)",
      hrv: "تباين معدل ضربات القلب (HRV RMSSD)",
      respiration: "معدل التنفس الصدري (Breathing Rate)",
      autonomicStress: "مؤشر الإجهاد اللاإرادي (Sympathetic Tone)",
    },

    overviewCard: {
      title: "4. التقرير التجميعي ومؤشر احتمالية الألم المدمج",
      compositeScore: "مؤشر احتمالية الألم التراكمي (AI Fusion Score)",
      confidence: "نسبة ثقة النموذج التحليلي",
      riskLevel: "مستوى التحذير السريري",
      riskLow: "مستوى منخفض (مريض مستقر)",
      riskModerate: "مستوى متوسط (انزعاج ملحوظ يحتاج فحصاً)",
      riskHigh: "مستوى مرتفع (احتمال وجود ألم حاد يتطلب تدخلاً سريعاً)",
      telemetryLog: "سجل الرصد اللحظي للبيانات",
    }
  },

  // Settings
  settings: {
    title: "إعدادات المنصة وتخصيص الواجهة",
    subtitle: "تعديل تفضيلات الصوت، الخط، تباين الشاشة، ورقم الغرفة المعينة",
    voiceSettings: "إعدادات النطق الآلي (Text-to-Speech)",
    voiceRate: "سرعة نطق الصوت",
    voicePitch: "طبقة الصوت",
    testVoice: "اختبار نطق تجريبي",
    accessibility: "إمكانية الوصول والراحة البصرية",
    highContrast: "وضع التباين العالي (للغرف الطبية المعتمة)",
    largeButtons: "أزرار لمس فائقة الحجم للمرضى ذوي الحركة المحدودة",
    roomAssignment: "تعيين الغرفة والسرير",
    saveSuccess: "تم حفظ الإعدادات بنجاح!",
    resetDefault: "استعادة الإعدادات الافتراضية",
  }
};
