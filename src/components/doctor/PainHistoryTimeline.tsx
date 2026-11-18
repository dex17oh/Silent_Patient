import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { 
  Heart, 
  MapPin, 
  Activity, 
  Clock, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

export const PainHistoryTimeline: React.FC = () => {
  const { t, language } = useLanguage();
  const { painAssessments, markPainStatus } = useApp();

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col h-full">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
        <div>
          <h3 className="font-extrabold text-slate-800 text-base">
            {language === 'ar' ? 'سجل تقييمات الألم وتطور الحالة' : 'Pain Assessment Clinical Logs'}
          </h3>
          <p className="text-xs text-slate-400">
            {language === 'ar' ? 'التسجيلات المكانية ومستويات الشدة المسجلة للمريض' : 'Chronological pain evolution with localized anatomical coordinates'}
          </p>
        </div>

        <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
          {painAssessments.length} {t.doctor.stats.painReports}
        </span>
      </div>

      {painAssessments.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center py-8 text-center text-slate-400">
          <Heart className="w-8 h-8 text-slate-300 mb-2" />
          <p className="text-xs">
            {language === 'ar' ? 'لا توجد تقارير ألم مسجلة' : 'No pain reports recorded yet.'}
          </p>
        </div>
      ) : (
        <div className="space-y-3 overflow-y-auto max-h-[380px] pe-1">
          {painAssessments.map((record) => {
            const areaName = t.pain.areas[record.area] || record.area;
            const typeName = t.pain.types[record.type] || record.type;
            const onsetName = t.pain.onsetOptions[record.onset] || record.onset;

            const isSevere = record.intensity >= 7;

            return (
              <div
                key={record.id}
                className={`p-4 rounded-2xl border transition-all ${
                  isSevere 
                    ? 'bg-rose-50/60 border-rose-200 shadow-xs' 
                    : 'bg-slate-50/80 border-slate-200/60 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    {/* Score Box */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-base shadow-xs ${
                      record.intensity <= 3 ? 'bg-emerald-500 text-white' :
                      record.intensity <= 6 ? 'bg-amber-500 text-white' :
                      'bg-rose-600 text-white animate-pulse'
                    }`}>
                      {record.intensity}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-800 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-rose-500" />
                          <span>{areaName}</span>
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">
                          ({record.view === 'front' ? t.pain.frontView : t.pain.backView})
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <Activity className="w-3 h-3 text-medical-600" />
                        <span>{typeName}</span>
                        <span>•</span>
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{onsetName}</span>
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 font-mono">
                    {record.timestamp}
                  </span>
                </div>

                {record.notes && (
                  <p className="text-[11px] text-slate-600 bg-white/70 p-2 rounded-xl border border-slate-200/50 mt-2 mb-2 font-mono">
                    {record.notes}
                  </p>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-200/50 text-xs">
                  <span className="text-[11px] text-slate-500">
                    {t.patientNameLabel} <strong>{record.patientName}</strong> ({t.bed} {record.bedNumber})
                  </span>

                  <div className="flex items-center gap-2">
                    {record.status === 'active' && (
                      <button
                        onClick={() => markPainStatus(record.id, 'reviewed')}
                        className="px-2.5 py-1 text-[11px] bg-medical-50 hover:bg-medical-100 text-medical-700 font-bold rounded-lg border border-medical-200 transition-colors"
                      >
                        {language === 'ar' ? 'مراجعة الطبيب' : 'Mark Reviewed'}
                      </button>
                    )}
                    {record.status === 'reviewed' && (
                      <button
                        onClick={() => markPainStatus(record.id, 'resolved')}
                        className="px-2.5 py-1 text-[11px] bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded-lg border border-emerald-200 transition-colors"
                      >
                        {language === 'ar' ? 'تم التسكين' : 'Mark Relieved'}
                      </button>
                    )}
                    {record.status === 'resolved' && (
                      <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{language === 'ar' ? 'مستقر' : 'Relieved'}</span>
                      </span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
