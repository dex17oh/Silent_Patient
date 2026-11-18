import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { Clock, Volume2, CheckCircle2, Clock3, Trash2 } from 'lucide-react';

export const MessageHistoryFeed: React.FC = () => {
  const { t, language } = useLanguage();
  const { messages, speakSentence, clearMessages, activePatient } = useApp();

  const patientMessages = messages.filter(m => m.patientId === activePatient.id);

  const getLabelForTextKey = (key: string) => {
    // Check in comm
    const commObj = t.comm as Record<string, string>;
    if (commObj[key]) return commObj[key];
    if (commObj[key + 'Sentence']) return commObj[key + 'Sentence'];
    return key;
  };

  const getSentenceForTextKey = (key: string) => {
    const commObj = t.comm as Record<string, string>;
    const sentenceKey = key + 'Sentence';
    if (commObj[sentenceKey]) return commObj[sentenceKey];
    if (commObj[key]) return commObj[key];
    return key;
  };

  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex flex-col h-full">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
        <div>
          <h3 className="font-bold text-slate-800 text-sm sm:text-base">
            {t.comm.recentHistory}
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5">
            {language === 'ar' ? 'سجل تواصل الغرفة 304' : 'Bedside interaction audit trail'}
          </p>
        </div>

        {patientMessages.length > 0 && (
          <button
            onClick={clearMessages}
            title={t.comm.clearHistory}
            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-rose-600 transition-colors px-2 py-1 rounded-lg hover:bg-slate-100"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.comm.clearHistory}</span>
          </button>
        )}
      </div>

      {patientMessages.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center py-8 text-center text-slate-400">
          <Clock className="w-8 h-8 stroke-1 text-slate-300 mb-2" />
          <p className="text-xs">{t.comm.noMessages}</p>
        </div>
      ) : (
        <div className="space-y-2.5 overflow-y-auto max-h-[380px] pe-1">
          {patientMessages.map((msg) => {
            const label = getLabelForTextKey(msg.textKey);
            const sentence = getSentenceForTextKey(msg.textKey);

            let statusBadge = (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                <Clock3 className="w-2.5 h-2.5" />
                <span>{language === 'ar' ? 'قيد الانتظار' : 'Pending'}</span>
              </span>
            );

            if (msg.status === 'acknowledged') {
              statusBadge = (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-medical-700 bg-medical-50 px-2 py-0.5 rounded-full border border-medical-200/60">
                  <Clock3 className="w-2.5 h-2.5" />
                  <span>{language === 'ar' ? 'تمت الرؤية' : 'Acknowledged'}</span>
                </span>
              );
            } else if (msg.status === 'attended') {
              statusBadge = (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>{language === 'ar' ? 'تمت المباشرة' : 'Attended'}</span>
                </span>
              );
            }

            return (
              <div
                key={msg.id}
                className="p-3 bg-slate-50/70 hover:bg-slate-50 border border-slate-200/60 rounded-2xl flex items-center justify-between gap-3 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-xs text-slate-800 truncate">{label}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{msg.timestamp}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 truncate">{sentence}</p>
                  <div className="mt-1.5 flex items-center gap-2">
                    {statusBadge}
                    {msg.urgency === 'urgent' && (
                      <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                        {t.comm.urgencyHigh}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => speakSentence(sentence)}
                  title={t.comm.generateVoice}
                  className="p-2 text-slate-400 hover:text-medical-600 hover:bg-white rounded-xl shadow-xs transition-all shrink-0"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
