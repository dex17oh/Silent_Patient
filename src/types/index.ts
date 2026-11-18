export type Language = 'ar' | 'en' | 'fr';

export type NavigationTab = 
  | 'overview'
  | 'communication' 
  | 'pain-assessment' 
  | 'doctor-dashboard' 
  | 'neuro-analysis' 
  | 'settings';

export type PainAreaId = 
  | 'head'
  | 'neck'
  | 'chest'
  | 'abdomen'
  | 'back'
  | 'arms'
  | 'hands'
  | 'legs'
  | 'feet';

export type PainType = 
  | 'sharp'
  | 'burning'
  | 'stabbing'
  | 'dull'
  | 'throbbing'
  | 'continuous';

export type PainOnset = 
  | 'just-now'
  | 'few-minutes'
  | 'few-hours'
  | 'several-days';

export interface PainAssessmentRecord {
  id: string;
  patientId: string;
  patientName: string;
  bedNumber: string;
  timestamp: string;
  area: PainAreaId;
  view: 'front' | 'back';
  intensity: number; // 0 - 10
  type: PainType;
  onset: PainOnset;
  notes?: string;
  status: 'active' | 'reviewed' | 'resolved';
}

export interface CommunicationMessage {
  id: string;
  patientId: string;
  patientName: string;
  bedNumber: string;
  timestamp: string;
  textKey: string;
  category: 'essential' | 'feeling' | 'medical' | 'social';
  urgency: 'low' | 'normal' | 'urgent';
  spokenCount: number;
  status: 'pending' | 'acknowledged' | 'attended';
}

export interface PatientProfile {
  id: string;
  name: string;
  nameAr: string;
  age: number;
  gender: 'male' | 'female';
  roomNumber: string;
  bedNumber: string;
  admissionDate: string;
  primaryCondition: string;
  communicationStatus: string;
  heartRate: number;
  bloodPressure: string;
  oxygenSaturation: number;
  temperature: number;
  fallRisk: 'low' | 'medium' | 'high';
  avatarUrl?: string;
}

export interface ToastNotification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'urgent';
  timestamp: string;
}

export interface NeuroMetrics {
  facialGrimaceScore: number; // 0 - 100
  microExpressionsDetected: string[];
  eyeBlinkRate: number; // blinks/min
  browFurrowIntensity: number; // 0 - 100
  motorAgitationScore: number; // 0 - 100
  postureShiftRate: number; // shifts/hour
  muscleRigidityIndex: number; // 0 - 100
  heartRateEstimate: number; // bpm
  hrvEstimated: number; // ms
  respiratoryRateEstimate: number; // bpm
  aiCompositePainRisk: number; // 0 - 100
  aiConfidence: number; // 0 - 100
  lastUpdate: string;
}
