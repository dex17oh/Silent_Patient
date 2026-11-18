import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  NavigationTab, 
  CommunicationMessage, 
  PainAssessmentRecord, 
  PatientProfile, 
  ToastNotification,
  NeuroMetrics,
  PainAreaId,
  PainType,
  PainOnset
} from '../types';
import { useLanguage } from './LanguageContext';

export interface AppContextType {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  patients: PatientProfile[];
  activePatient: PatientProfile;
  setActivePatientId: (id: string) => void;
  
  // Communication
  messages: CommunicationMessage[];
  sendCommunicationMessage: (textKey: string, category: CommunicationMessage['category'], urgency?: CommunicationMessage['urgency']) => void;
  markMessageStatus: (id: string, status: CommunicationMessage['status']) => void;
  clearMessages: () => void;
  
  // Pain Assessment
  painAssessments: PainAssessmentRecord[];
  submitPainAssessment: (data: {
    area: PainAreaId;
    view: 'front' | 'back';
    intensity: number;
    type: PainType;
    onset: PainOnset;
    notes?: string;
  }) => PainAssessmentRecord;
  markPainStatus: (id: string, status: PainAssessmentRecord['status']) => void;
  
  // Audio & Speech
  speakSentence: (text: string) => void;
  isSpeaking: boolean;
  voiceRate: number;
  setVoiceRate: (rate: number) => void;
  voicePitch: number;
  setVoicePitch: (pitch: number) => void;
  
  // Notifications
  notifications: ToastNotification[];
  addNotification: (title: string, message: string, type?: ToastNotification['type']) => void;
  removeNotification: (id: string) => void;
  
  // Accessibility
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  largeButtons: boolean;
  setLargeButtons: (val: boolean) => void;

  // Neuro Analysis Demo Simulation
  neuroMetrics: NeuroMetrics;
  simulateNeuroScenario: (scenario: 'pain-spike' | 'calm' | 'motor-restless') => void;
  
  // Emergency Nurse Call
  dispatchEmergencyCall: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_PATIENTS: PatientProfile[] = [
  {
    id: 'pat-1',
    name: 'Ahmed Mansour',
    nameAr: 'أحمد بن منصور',
    age: 58,
    gender: 'male',
    roomNumber: '304',
    bedNumber: 'B-02',
    admissionDate: '2026-11-12',
    primaryCondition: 'Post-Ischemic Stroke (Left MCA)',
    communicationStatus: 'Expressive Broca Aphasia / Motor Dysarthria',
    heartRate: 78,
    bloodPressure: '128/82',
    oxygenSaturation: 98,
    temperature: 36.9,
    fallRisk: 'medium'
  },
  {
    id: 'pat-2',
    name: 'Sarah Al-Qahtani',
    nameAr: 'سارة القحطاني',
    age: 34,
    gender: 'female',
    roomNumber: '302',
    bedNumber: 'A-01',
    admissionDate: '2026-11-15',
    primaryCondition: 'Post-Thyroidectomy Laryngeal Edema',
    communicationStatus: 'Temporary Vocal Cord Immobility',
    heartRate: 82,
    bloodPressure: '116/74',
    oxygenSaturation: 99,
    temperature: 37.1,
    fallRisk: 'low'
  },
  {
    id: 'pat-3',
    name: 'Karim Dridi',
    nameAr: 'كريم الدريدي',
    age: 65,
    gender: 'male',
    roomNumber: '305',
    bedNumber: 'C-03',
    admissionDate: '2026-11-09',
    primaryCondition: 'ALS Bulbar Onset Stage 2',
    communicationStatus: 'Progressive Non-Verbal Speech Impairment',
    heartRate: 71,
    bloodPressure: '134/86',
    oxygenSaturation: 96,
    temperature: 36.7,
    fallRisk: 'high'
  }
];

const INITIAL_MESSAGES: CommunicationMessage[] = [
  {
    id: 'msg-1',
    patientId: 'pat-1',
    patientName: 'أحمد بن منصور',
    bedNumber: 'B-02',
    timestamp: '14:20',
    textKey: 'water',
    category: 'essential',
    urgency: 'normal',
    spokenCount: 2,
    status: 'attended'
  },
  {
    id: 'msg-2',
    patientId: 'pat-1',
    patientName: 'أحمد بن منصور',
    bedNumber: 'B-02',
    timestamp: '15:45',
    textKey: 'pain',
    category: 'medical',
    urgency: 'urgent',
    spokenCount: 1,
    status: 'acknowledged'
  },
  {
    id: 'msg-3',
    patientId: 'pat-1',
    patientName: 'أحمد بن منصور',
    bedNumber: 'B-02',
    timestamp: '16:10',
    textKey: 'position',
    category: 'feeling',
    urgency: 'normal',
    spokenCount: 1,
    status: 'pending'
  }
];

const INITIAL_PAIN_ASSESSMENTS: PainAssessmentRecord[] = [
  {
    id: 'pain-1',
    patientId: 'pat-1',
    patientName: 'أحمد بن منصور',
    bedNumber: 'B-02',
    timestamp: '15:48',
    area: 'chest',
    view: 'front',
    intensity: 7,
    type: 'sharp',
    onset: 'few-minutes',
    notes: 'Sudden onset on anterior left thoracic quadrant',
    status: 'reviewed'
  },
  {
    id: 'pain-2',
    patientId: 'pat-1',
    patientName: 'أحمد بن منصور',
    bedNumber: 'B-02',
    timestamp: '11:15',
    area: 'back',
    view: 'back',
    intensity: 4,
    type: 'dull',
    onset: 'several-days',
    notes: 'Lumbar pressure due to prolonged immobilization',
    status: 'resolved'
  }
];

const INITIAL_NEURO: NeuroMetrics = {
  facialGrimaceScore: 38,
  microExpressionsDetected: ['AU4 Brow Lowerer', 'AU6 Cheek Raiser'],
  eyeBlinkRate: 24,
  browFurrowIntensity: 42,
  motorAgitationScore: 29,
  postureShiftRate: 3.2,
  muscleRigidityIndex: 35,
  heartRateEstimate: 78,
  hrvEstimated: 46,
  respiratoryRateEstimate: 16,
  aiCompositePainRisk: 41,
  aiConfidence: 89,
  lastUpdate: 'Just now'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<NavigationTab>('overview');
  const [patients] = useState<PatientProfile[]>(INITIAL_PATIENTS);
  const [activePatientId, setActivePatientId] = useState<string>('pat-1');
  
  // Messages State
  const [messages, setMessages] = useState<CommunicationMessage[]>(() => {
    try {
      const saved = localStorage.getItem('silent_patient_messages');
      return saved ? JSON.parse(saved) : INITIAL_MESSAGES;
    } catch {
      return INITIAL_MESSAGES;
    }
  });

  // Pain State
  const [painAssessments, setPainAssessments] = useState<PainAssessmentRecord[]>(() => {
    try {
      const saved = localStorage.getItem('silent_patient_pain_records');
      return saved ? JSON.parse(saved) : INITIAL_PAIN_ASSESSMENTS;
    } catch {
      return INITIAL_PAIN_ASSESSMENTS;
    }
  });

  // Text to Speech Voice Settings
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceRate, setVoiceRate] = useState(0.95);
  const [voicePitch, setVoicePitch] = useState(1.0);

  // Notifications
  const [notifications, setNotifications] = useState<ToastNotification[]>([]);

  // Accessibility
  const [highContrast, setHighContrast] = useState(false);
  const [largeButtons, setLargeButtons] = useState(false);

  // Neuro Simulation
  const [neuroMetrics, setNeuroMetrics] = useState<NeuroMetrics>(INITIAL_NEURO);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('silent_patient_messages', JSON.stringify(messages));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [messages]);

  useEffect(() => {
    try {
      localStorage.setItem('silent_patient_pain_records', JSON.stringify(painAssessments));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [painAssessments]);

  const activePatient = patients.find(p => p.id === activePatientId) || patients[0];

  const addNotification = useCallback((title: string, message: string, type: ToastNotification['type'] = 'info') => {
    const id = 'notif-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6);
    const newNotif: ToastNotification = {
      id,
      title,
      message,
      type,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setNotifications(prev => [newNotif, ...prev.slice(0, 4)]);

    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // Browser Text to Speech Handler
  const speakSentence = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) {
      addNotification('Speech Synthesis', 'Text-to-speech is not supported in this browser.', 'warning');
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = voiceRate;
      utterance.pitch = voicePitch;

      // Select voice based on current language
      const voices = window.speechSynthesis.getVoices();
      let targetLang = 'ar-SA';
      if (language === 'en') targetLang = 'en-US';
      if (language === 'fr') targetLang = 'fr-FR';

      const match = voices.find(v => v.lang.startsWith(targetLang.slice(0, 2)));
      if (match) {
        utterance.voice = match;
      }
      utterance.lang = targetLang;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error('Speech error:', err);
      setIsSpeaking(false);
    }
  }, [language, voiceRate, voicePitch, addNotification]);

  const sendCommunicationMessage = useCallback((
    textKey: string, 
    category: CommunicationMessage['category'], 
    urgency: CommunicationMessage['urgency'] = 'normal'
  ) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg: CommunicationMessage = {
      id: 'msg-' + Date.now(),
      patientId: activePatient.id,
      patientName: language === 'ar' ? activePatient.nameAr : activePatient.name,
      bedNumber: activePatient.bedNumber,
      timestamp: time,
      textKey,
      category,
      urgency,
      spokenCount: 1,
      status: 'pending'
    };

    setMessages(prev => [newMsg, ...prev]);
    addNotification(
      language === 'ar' ? 'تم إرسال الطلب' : language === 'fr' ? 'Demande envoyée' : 'Request Sent',
      language === 'ar' ? 'تم تسجيل رسالتك وإشعار طاقم التمريض' : language === 'fr' ? 'Transmis au poste infirmier' : 'Notified nurse station',
      urgency === 'urgent' ? 'urgent' : 'success'
    );
  }, [activePatient, language, addNotification]);

  const markMessageStatus = useCallback((id: string, status: CommunicationMessage['status']) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, status } : m));
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  const submitPainAssessment = useCallback((data: {
    area: PainAreaId;
    view: 'front' | 'back';
    intensity: number;
    type: PainType;
    onset: PainOnset;
    notes?: string;
  }) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newRecord: PainAssessmentRecord = {
      id: 'pain-' + Date.now(),
      patientId: activePatient.id,
      patientName: language === 'ar' ? activePatient.nameAr : activePatient.name,
      bedNumber: activePatient.bedNumber,
      timestamp: time,
      area: data.area,
      view: data.view,
      intensity: data.intensity,
      type: data.type,
      onset: data.onset,
      notes: data.notes || '',
      status: 'active'
    };

    setPainAssessments(prev => [newRecord, ...prev]);

    // Also link it into communication log if severe
    if (data.intensity >= 6) {
      sendCommunicationMessage('pain', 'medical', 'urgent');
    }

    addNotification(
      language === 'ar' ? 'تم تسجيل تقييم الألم' : language === 'fr' ? 'Bilan Douleur Enregistré' : 'Pain Assessment Logged',
      language === 'ar' ? `الشدة: ${data.intensity}/10 - تم تحديث ملف المريض` : `Score: ${data.intensity}/10 - Pushed to clinical charts`,
      data.intensity >= 7 ? 'urgent' : 'warning'
    );

    return newRecord;
  }, [activePatient, language, sendCommunicationMessage, addNotification]);

  const markPainStatus = useCallback((id: string, status: PainAssessmentRecord['status']) => {
    setPainAssessments(prev => prev.map(p => p.id === id ? { ...p, status } : p));
  }, []);

  const dispatchEmergencyCall = useCallback(() => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const emergencyMsg: CommunicationMessage = {
      id: 'msg-emerg-' + Date.now(),
      patientId: activePatient.id,
      patientName: language === 'ar' ? activePatient.nameAr : activePatient.name,
      bedNumber: activePatient.bedNumber,
      timestamp: time,
      textKey: 'help',
      category: 'medical',
      urgency: 'urgent',
      spokenCount: 3,
      status: 'pending'
    };
    setMessages(prev => [emergencyMsg, ...prev]);

    // Voice announcement
    const callText = language === 'ar' 
      ? 'نداء طوارئ، المريض في الغرفة ثلاثمائة وأربعة يطلب مساعدة عاجلة' 
      : language === 'fr'
      ? 'Alerte infirmière, le patient chambre 304 demande une assistance urgente'
      : 'Emergency alert, patient in room 304 requires immediate nursing assistance';
    speakSentence(callText);

    addNotification(
      language === 'ar' ? 'نداء تمريض عاجل!' : language === 'fr' ? 'Appel Infirmier Urgent !' : 'Emergency Nurse Alert!',
      language === 'ar' ? 'تم إرسال إشارة صوتية ومرئية لطاقم التمريض' : 'High priority audio-visual alarm dispatched',
      'urgent'
    );
  }, [activePatient, language, speakSentence, addNotification]);

  const simulateNeuroScenario = useCallback((scenario: 'pain-spike' | 'calm' | 'motor-restless') => {
    if (scenario === 'pain-spike') {
      setNeuroMetrics({
        facialGrimaceScore: 78,
        microExpressionsDetected: ['AU4 Brow Lowerer', 'AU6 Cheek Raiser', 'AU9 Nose Wrinkler', 'AU10 Upper Lip Raiser'],
        eyeBlinkRate: 38,
        browFurrowIntensity: 85,
        motorAgitationScore: 68,
        postureShiftRate: 8.5,
        muscleRigidityIndex: 72,
        heartRateEstimate: 98,
        hrvEstimated: 24,
        respiratoryRateEstimate: 24,
        aiCompositePainRisk: 82,
        aiConfidence: 94,
        lastUpdate: 'Just now (Simulated Acute Spike)'
      });
      addNotification(
        language === 'ar' ? 'محاكاة مؤشر الألم' : 'Simulated Pain Spike',
        language === 'ar' ? 'تمت محاكاة ارتفاع حاد في علامات تقطيب الوجه ومعدل النبض' : 'Triggered simulated high grimace & tachypnea indicators',
        'urgent'
      );
    } else if (scenario === 'calm') {
      setNeuroMetrics({
        facialGrimaceScore: 12,
        microExpressionsDetected: ['Neutral', 'Subtle AU12 smile angle'],
        eyeBlinkRate: 16,
        browFurrowIntensity: 8,
        motorAgitationScore: 10,
        postureShiftRate: 1.1,
        muscleRigidityIndex: 14,
        heartRateEstimate: 68,
        hrvEstimated: 62,
        respiratoryRateEstimate: 14,
        aiCompositePainRisk: 15,
        aiConfidence: 91,
        lastUpdate: 'Just now (Simulated Baseline)'
      });
      addNotification(
        language === 'ar' ? 'محاكاة حالة الاسترخاء' : 'Simulated Resting State',
        language === 'ar' ? 'مؤشرات الوجه والنبض مستقرة ضمن المعدل الطبيعي' : 'Relaxed facial tonus and balanced autonomic balance',
        'success'
      );
    } else {
      setNeuroMetrics({
        facialGrimaceScore: 48,
        microExpressionsDetected: ['AU4 Brow Lowerer', 'Restless gaze aversion'],
        eyeBlinkRate: 30,
        browFurrowIntensity: 45,
        motorAgitationScore: 75,
        postureShiftRate: 11.2,
        muscleRigidityIndex: 60,
        heartRateEstimate: 86,
        hrvEstimated: 35,
        respiratoryRateEstimate: 20,
        aiCompositePainRisk: 58,
        aiConfidence: 87,
        lastUpdate: 'Just now (Simulated Motor Agitation)'
      });
      addNotification(
        language === 'ar' ? 'محاكاة القلق الحركي' : 'Simulated Agitation',
        language === 'ar' ? 'رصد زيادة في معدل تغيير الوضعيات والتململ الحركي' : 'Elevated gross movement & frequent bed adjustments',
        'warning'
      );
    }
  }, [language, addNotification]);

  return (
    <AppContext.Provider value={{
      activeTab,
      setActiveTab,
      patients,
      activePatient,
      setActivePatientId,
      messages,
      sendCommunicationMessage,
      markMessageStatus,
      clearMessages,
      painAssessments,
      submitPainAssessment,
      markPainStatus,
      speakSentence,
      isSpeaking,
      voiceRate,
      setVoiceRate,
      voicePitch,
      setVoicePitch,
      notifications,
      addNotification,
      removeNotification,
      highContrast,
      setHighContrast,
      largeButtons,
      setLargeButtons,
      neuroMetrics,
      simulateNeuroScenario,
      dispatchEmergencyCall
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
