import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { PatientOverviewCard } from '../components/doctor/PatientOverviewCard';
import { MessagesTable } from '../components/doctor/MessagesTable';
import { PainHistoryTimeline } from '../components/doctor/PainHistoryTimeline';
import { SimpleTrendsChart } from '../components/doctor/SimpleTrendsChart';
import { CommunicationMessage, PainAssessmentRecord } from '../types';
import { 
  MessageSquare, 
  Heart, 
  Clock, 
  Activity, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';

export const DoctorDashboardPage: React.FC = () => {
  const { t, language } = useLanguage();
  const { messages, painAssessments } = useApp();

  const unresolvedMessages = messages.filter((m: CommunicationMessage) => m.status === 'pending');

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Top Ward Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 font-bold text-xs rounded-full mb-2 border border-emerald-200/60">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.doctor.wardName}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {t.doctor.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
            {t.doctor.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200/60 text-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="font-bold text-slate-700">{t.doctor.activeBeds}</span>
          <span className="text-slate-400">|</span>
          <span className="text-medical-600 font-mono font-bold">Station: ICU-East</span>
        </div>
      </div>

      {/* 4 Key Performance Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Messages */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              {t.doctor.stats.totalMessages}
            </span>
            <div className="text-2xl font-black text-slate-900">{messages.length}</div>
            <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>{language === 'ar' ? 'مزامنة لحظية' : 'Live Syncing'}</span>
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
            <MessageSquare className="w-6 h-6 stroke-[2.2]" />
          </div>
        </div>

        {/* Pain Reports */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              {t.doctor.stats.painReports}
            </span>
            <div className="text-2xl font-black text-slate-900">{painAssessments.length}</div>
            <span className="text-[10px] text-rose-600 font-bold flex items-center gap-1 mt-1">
              <Heart className="w-3 h-3" />
              <span>{painAssessments.filter((p: PainAssessmentRecord) => p.intensity >= 7).length} {language === 'ar' ? 'حالات حرجة' : 'Acute'}</span>
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
            <Heart className="w-6 h-6 stroke-[2.2]" />
          </div>
        </div>

        {/* Unresolved Requests */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              {t.doctor.stats.unresolved}
            </span>
            <div className="text-2xl font-black text-amber-600">{unresolvedMessages.length}</div>
            <span className="text-[10px] text-amber-700 font-bold flex items-center gap-1 mt-1">
              <Clock className="w-3 h-3" />
              <span>{language === 'ar' ? 'تتطلب تدخل الممرض' : 'Awaiting Nurse'}</span>
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-6 h-6 stroke-[2.2]" />
          </div>
        </div>

        {/* Average Ward Pain */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              {t.doctor.stats.avgPain}
            </span>
            <div className="text-2xl font-black text-slate-900">
              4.8 <span className="text-xs text-slate-400 font-normal">/ 10</span>
            </div>
            <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
              <Activity className="w-3 h-3" />
              <span>{language === 'ar' ? 'ضمن النطاق التسكيني' : 'Controlled Range'}</span>
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Activity className="w-6 h-6 stroke-[2.2]" />
          </div>
        </div>

      </div>

      {/* Patient Clinical Overview Card with full dossier button */}
      <PatientOverviewCard />

      {/* Main Grid: Messages Table + Pain Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Messages Table (7 cols) */}
        <div className="lg:col-span-7">
          <MessagesTable />
        </div>

        {/* Right Column: Pain Timeline (5 cols) */}
        <div className="lg:col-span-5">
          <PainHistoryTimeline />
        </div>

      </div>

      {/* Clinical Charts Section */}
      <SimpleTrendsChart />

    </div>
  );
};
