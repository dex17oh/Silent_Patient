import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PatientProfile } from '../../types';
import { 
  X, 
  User, 
  Heart, 
  Activity, 
  FileText, 
  Pill, 
  AlertCircle, 
  Calendar,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';

interface PatientDetailsModalProps {
  patient: PatientProfile;
  isOpen: boolean;
  onClose: () => void;
}

export const PatientDetailsModal: React.FC<PatientDetailsModalProps> = ({
  patient,
  isOpen,
  onClose,
}) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-medical-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                {language === 'ar' ? patient.nameAr : patient.name}
              </h3>
              <p className="text-xs text-slate-400">
                MRN-849204 • {t.room} {patient.roomNumber} • {t.bed} {patient.bedNumber}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="my-5 space-y-4">
          
          {/* Quick Demographics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
              <span className="text-slate-400 block text-[10px] font-semibold">{t.doctor.patientCard.age}</span>
              <span className="font-bold text-slate-800 text-sm">{patient.age} {language === 'ar' ? 'سنة' : 'yrs'}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
              <span className="text-slate-400 block text-[10px] font-semibold">Gender</span>
              <span className="font-bold text-slate-800 text-sm capitalize">{patient.gender}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
              <span className="text-slate-400 block text-[10px] font-semibold">{t.doctor.patientCard.admission}</span>
              <span className="font-bold text-slate-800 text-sm">{patient.admissionDate}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
              <span className="text-slate-400 block text-[10px] font-semibold">Fall Risk</span>
              <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-xs uppercase">{patient.fallRisk}</span>
            </div>
          </div>

          {/* Clinical Diagnostic Overview */}
          <div className="p-4 bg-medical-50/70 border border-medical-100 rounded-2xl text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-medical-900">
              <FileText className="w-4 h-4 text-medical-600" />
              <span>{t.doctor.patientCard.condition}</span>
            </div>
            <p className="text-slate-700 leading-relaxed font-medium">
              {patient.primaryCondition}
            </p>
            <div className="pt-2 border-t border-medical-200/60 text-slate-600">
              <span className="font-bold text-slate-800">{t.doctor.patientCard.commBarrier}: </span>
              {patient.communicationStatus}
            </div>
          </div>

          {/* Speech & Neurological Care Protocol */}
          <div className="p-4 bg-slate-50 border border-slate-200/70 rounded-2xl text-xs space-y-2">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <Activity className="w-4 h-4 text-turquoise-600" />
              <span>
                {language === 'ar' ? 'خطة التواصل وإعادة التأهيل النطقي' : 'Speech-Language Pathologist Care Plan'}
              </span>
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-600 leading-relaxed">
              <li>
                {language === 'ar' 
                  ? 'الاعتماد الكلي على المنظومة التفاعلية "المريض الصامت" لتقليل الإحباط التواصلي.'
                  : 'Full bedside utilization of The Silent Patient interactive interface to reduce communication frustration.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'مراجعة وتقييم الألم الدوري كل 4 ساعات باستخدام الخريطة الجسدية اللمسية.'
                  : '4-hour scheduled algic assessments using interactive anatomical touch mapping.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'تشجيع استخدام الاستجابات السريعة (نعم/لا) لتعزيز المشاركة الإدراكية.'
                  : 'Prompting positive/negative micro-affirmations to support cognitive rehabilitation.'}
              </li>
            </ul>
          </div>

          {/* Active Pharmacological Regimen (Mock) */}
          <div className="p-4 bg-slate-50 border border-slate-200/70 rounded-2xl text-xs space-y-2">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <Pill className="w-4 h-4 text-lavender-600" />
              <span>
                {language === 'ar' ? 'الأدوية ومسكنات الألم النشطة' : 'Active Medications & Analgesics'}
              </span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 font-mono text-[11px]">
              <div className="p-2 bg-white rounded-xl border border-slate-200/60 flex items-center justify-between">
                <span>Acetaminophen (IV)</span>
                <span className="text-slate-400">1000mg q6h PRN</span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-200/60 flex items-center justify-between">
                <span>Pregabalin</span>
                <span className="text-slate-400">75mg PO BID</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end pt-3 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors"
          >
            {language === 'ar' ? 'إغلاق الملف' : 'Dismiss Dossier'}
          </button>
        </div>

      </div>
    </div>
  );
};
