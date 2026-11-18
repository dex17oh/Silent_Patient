import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  UserCheck, 
  Filter,
  Volume2
} from 'lucide-react';

export const MessagesTable: React.FC = () => {
  const { t, language } = useLanguage();
  const { messages, markMessageStatus, speakSentence } = useApp();
  const [filter, setFilter] = useState<'all' | 'urgent' | 'pending'>('all');

  const filteredMessages = messages.filter((m) => {
    if (filter === 'urgent') return m.urgency === 'urgent';
    if (filter === 'pending') return m.status === 'pending';
    return true;
  });

  const getLabelForTextKey = (key: string) => {
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
    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
      
      {/* Table Header & Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
        <div>
          <h3 className="font-extrabold text-slate-800 text-base">
            {language === 'ar' ? 'سجل طلبات وتواصل المرضى اللحظي' : 'Live Patient Request Stream'}
          </h3>
          <p className="text-xs text-slate-400">
            {language === 'ar' ? 'تحديث فوري من أجهزة المرضى بجانب السرير' : 'Direct bedside patient interface transmissions'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200/60 text-xs font-semibold">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              filter === 'all' ? 'bg-white text-medical-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {t.doctor.filters.all} ({messages.length})
          </button>
          <button
            onClick={() => setFilter('urgent')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              filter === 'urgent' ? 'bg-rose-500 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {t.doctor.filters.urgent}
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              filter === 'pending' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {t.doctor.filters.pending}
          </button>
        </div>
      </div>

      {/* Messages List / Table */}
      {filteredMessages.length === 0 ? (
        <div className="py-12 text-center text-slate-400">
          <CheckCircle2 className="w-10 h-10 text-emerald-300 mx-auto mb-2" />
          <p className="text-xs font-medium">
            {language === 'ar' ? 'لا توجد طلبات معلقة تطابق هذا التصفية' : 'All clear! No pending requests matching this filter.'}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                <th className="pb-3 text-start">{t.doctor.table.time}</th>
                <th className="pb-3 text-start">{t.doctor.table.patient}</th>
                <th className="pb-3 text-start">{t.doctor.table.content}</th>
                <th className="pb-3 text-start">{t.doctor.table.status}</th>
                <th className="pb-3 text-end">{t.doctor.table.action}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredMessages.map((msg) => {
                const label = getLabelForTextKey(msg.textKey);
                const sentence = getSentenceForTextKey(msg.textKey);

                return (
                  <tr key={msg.id} className="hover:bg-slate-50/80 transition-colors group">
                    
                    {/* Time */}
                    <td className="py-3.5 text-slate-500 font-mono text-[11px] whitespace-nowrap">
                      {msg.timestamp}
                    </td>

                    {/* Patient & Bed */}
                    <td className="py-3.5 whitespace-nowrap">
                      <div className="font-bold text-slate-800">{msg.patientName}</div>
                      <span className="text-[10px] text-medical-600 font-semibold">{t.bed} {msg.bedNumber}</span>
                    </td>

                    {/* Content */}
                    <td className="py-3.5 pe-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{label}</span>
                        {msg.urgency === 'urgent' && (
                          <span className="text-[10px] font-extrabold text-rose-600 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded-full animate-pulse">
                            {t.comm.urgencyHigh}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{sentence}</p>
                    </td>

                    {/* Status */}
                    <td className="py-3.5 whitespace-nowrap">
                      {msg.status === 'pending' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                          <Clock className="w-3 h-3" />
                          <span>{language === 'ar' ? 'بانتظار الحضور' : 'Pending Nurse'}</span>
                        </span>
                      )}
                      {msg.status === 'acknowledged' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-medical-50 text-medical-700 border border-medical-200">
                          <UserCheck className="w-3 h-3" />
                          <span>{language === 'ar' ? 'تم التبليغ' : 'Acknowledged'}</span>
                        </span>
                      )}
                      {msg.status === 'attended' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{language === 'ar' ? 'تمت المباشرة' : 'Attended'}</span>
                        </span>
                      )}
                    </td>

                    {/* Action Buttons */}
                    <td className="py-3.5 text-end whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => speakSentence(sentence)}
                          title={t.comm.generateVoice}
                          className="p-1.5 text-slate-400 hover:text-medical-600 rounded-lg hover:bg-slate-100 transition-colors"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>

                        {msg.status === 'pending' && (
                          <button
                            onClick={() => markMessageStatus(msg.id, 'acknowledged')}
                            className="px-2.5 py-1 bg-medical-50 hover:bg-medical-100 text-medical-700 font-bold rounded-lg border border-medical-200 transition-colors"
                          >
                            {t.doctor.table.markAttended}
                          </button>
                        )}

                        {msg.status !== 'attended' && (
                          <button
                            onClick={() => markMessageStatus(msg.id, 'attended')}
                            className="px-2.5 py-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg shadow-xs transition-colors"
                          >
                            {t.doctor.table.markResolved}
                          </button>
                        )}
                      </div>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};
