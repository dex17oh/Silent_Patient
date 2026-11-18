import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { PainAssessmentRecord } from '../../types';
import { 
  CheckCircle2, 
  MapPin, 
  Activity, 
  Clock, 
  Volume2, 
  X, 
  ShieldCheck, 
  Send 
} from 'lucide-react';

interface PainAssessmentSummaryModalProps {
  record: PainAssessmentRecord | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PainAssessmentSummaryModal: React.FC<PainAssessmentSummaryModalProps> = ({
  record,
  isOpen,
  onClose,
}) => {
  const { t, language } = useLanguage();
  const { speakSentence, setActiveTab } = useApp();

  if (!isOpen || !record) return null;

  const areaName = t.pain.areas[record.area] || record.area;
  const typeName = t.pain.types[record.type] || record.type;
  const onsetName = t.pain.onsetOptions[record.onset] || record.onset;

  const vocalSummary = language === 'ar'
    ? `تم تسجيل تقرير الألم: ${typeName} في منطقة ${areaName}، بمستوى شدة ${record.intensity} من عشرة، بدأ ${onsetName}. تم إخطار الطبيب المناوب.`
    : language === 'fr'
    ? `Bilan douleur enregistré : ${typeName} au niveau de : ${areaName}, intensité ${record.intensity} sur dix, apparue : ${onsetName}. Transmis au médecin de garde.`
    : `Pain assessment logged: ${typeName} at ${areaName}, severity score ${record.intensity} out of 10, onset ${onsetName}. Dispatched to attending medical staff.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-xs">
              <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                {t.pain.summaryTitle}
              </h3>
              <p className="text-xs text-slate-400">
                {record.timestamp} • {t.bed} {record.bedNumber}
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

        {/* Clinical Info Cards Grid */}
        <div className="my-5 space-y-3">
          
          {/* Intensity & Area Main Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-medical-50 via-turquoise-50/50 to-medical-50 border border-medical-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center font-extrabold text-xl text-medical-700">
                {record.intensity}
                <span className="text-[10px] text-slate-400 font-normal">/10</span>
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">{t.pain.selectedArea}</div>
                <div className="text-base font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>{areaName}</span>
                  <span className="text-xs text-slate-400 font-normal">
                    ({record.view === 'front' ? t.pain.frontView : t.pain.backView})
                  </span>
                </div>
              </div>
            </div>

            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              record.intensity <= 3 ? 'bg-emerald-100 text-emerald-700' :
              record.intensity <= 6 ? 'bg-amber-100 text-amber-700' :
              'bg-rose-100 text-rose-700'
            }`}>
              {record.intensity <= 3 ? 'Mild' : record.intensity <= 6 ? 'Moderate' : 'Severe'}
            </span>
          </div>

          {/* Details Row */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
              <span className="text-slate-400 block mb-1 text-[11px]">{t.pain.typeTitle}</span>
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-medical-600" />
                {typeName}
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
              <span className="text-slate-400 block mb-1 text-[11px]">{t.pain.onsetTitle}</span>
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-medical-600" />
                {onsetName}
              </span>
            </div>
          </div>

          {/* Electronic Chart Notification Note */}
          <div className="p-3 bg-emerald-50/70 border border-emerald-200/60 rounded-2xl flex items-center gap-2.5 text-xs text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <p className="leading-relaxed">
              {t.pain.summaryDesc}
            </p>
          </div>

        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
          <button
            onClick={() => speakSentence(vocalSummary)}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-bold text-xs transition-colors"
          >
            <Volume2 className="w-4 h-4 text-medical-600" />
            <span>{t.comm.generateVoice}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              setActiveTab('doctor-dashboard');
            }}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-medical-500 hover:bg-medical-600 active:scale-95 text-white rounded-2xl font-bold text-xs shadow-md shadow-medical-200 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>{language === 'ar' ? 'عرض في لوحة الطبيب' : 'View in Doctor Hub'}</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-4 text-slate-400 hover:text-slate-600 text-xs font-semibold"
          >
            {t.pain.closeSummary}
          </button>
        </div>

      </div>
    </div>
  );
};
