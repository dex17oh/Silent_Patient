import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { 
  MessageSquare, 
  Heart, 
  LayoutDashboard, 
  Brain, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  PhoneCall, 
  Sparkles 
} from 'lucide-react';

export const OverviewPage: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const { 
    setActiveTab, 
    activePatient, 
    messages, 
    painAssessments, 
    dispatchEmergencyCall 
  } = useApp();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const modules = [
    {
      id: 'communication' as const,
      title: t.nav.communication,
      desc: language === 'ar'
        ? 'تمكين المرضى من التعبير عن احتياجاتهم الحيوية (ماء، طعام، حمام، راحة) والتحويل الفوري إلى نطق صوتي مسموع.'
        : 'Empower non-verbal patients to voice critical needs (water, food, assistance) with immediate voice readout.',
      icon: MessageSquare,
      color: 'from-sky-500 to-medical-600',
      badge: '12 Essential Options',
      badgeColor: 'bg-sky-100 text-sky-800',
      stat: `${messages.length} ${language === 'ar' ? 'رسائل مسجلة' : 'Requests Logged'}`,
    },
    {
      id: 'pain-assessment' as const,
      title: t.nav.painAssessment,
      desc: language === 'ar'
        ? 'خريطة جسدية تفاعلية ثنائية الأبعاد (أمامي وخلفي) ومقياس ألم رقمي من 0 إلى 10 وتحديد نوع الألم وتوقيت بدايته.'
        : 'Interactive 2D anatomical body mapping (front & back), 0-10 intensity scale, and pain taxonomy classifier.',
      icon: Heart,
      color: 'from-rose-500 to-rose-600',
      badge: 'Wong-Baker 0-10 Scale',
      badgeColor: 'bg-rose-100 text-rose-800',
      stat: `${painAssessments.length} ${language === 'ar' ? 'تقارير ألم' : 'Pain Logs'}`,
    },
    {
      id: 'doctor-dashboard' as const,
      title: t.nav.doctorDashboard,
      desc: language === 'ar'
        ? 'لوحة تحكم سريرية متقدمة تمنح الكادر الطبي رؤية شاملة لاستجابة المرضى، مؤشرات الألم، وحالة الغرف في الجناح.'
        : 'Clinical dashboard providing healthcare professionals with instant triage visibility and longitudinal telemetry.',
      icon: LayoutDashboard,
      color: 'from-teal-500 to-emerald-600',
      badge: 'Hospital Ward View',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      stat: language === 'ar' ? '12 سرير مراقب' : '12 Monitored Beds',
    },
    {
      id: 'neuro-analysis' as const,
      title: t.nav.neuroAnalysis,
      desc: language === 'ar'
        ? 'استكشاف تجريبي لمستقبل المراقبة الذكية عبر الرؤية الحاسوبية: تحليل تعبيرات الوجه، الحركات الحركية، ومؤشرات النبض.'
        : 'Experimental preview of computer-vision facial grimace analysis, motor restlessness, and contactless rPPG vitals.',
      icon: Brain,
      color: 'from-lavender-500 to-purple-600',
      badge: 'AI Experimental Beta',
      badgeColor: 'bg-purple-100 text-purple-800',
      stat: language === 'ar' ? 'محاكاة 468 نقطة' : '468 Landmark Mesh',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Hero Banner Section */}
      <div className="relative rounded-3xl bg-gradient-to-br from-medical-600 via-sky-600 to-medical-700 p-8 sm:p-10 text-white shadow-xl shadow-medical-200/50 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 end-0 -mt-10 -me-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 start-1/3 -mb-20 w-80 h-80 bg-turquoise-400/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-bold mb-4 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
            <span>{t.appMissionTitle}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t.appName}
          </h1>
          <p className="text-lg sm:text-2xl text-cyan-100 font-semibold mt-1">
            "{t.appSubtitle}"
          </p>

          <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed font-normal">
            {t.appMissionDesc}
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('communication')}
              className="flex items-center gap-2 px-6 py-3.5 bg-white text-medical-800 font-extrabold text-sm rounded-2xl shadow-lg hover:bg-cyan-50 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-medical-600" />
              <span>{language === 'ar' ? 'بدء التواصل السريع' : 'Launch Communication'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('pain-assessment')}
              className="flex items-center gap-2 px-6 py-3.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-sm rounded-2xl border border-white/30 active:scale-95 transition-all"
            >
              <Heart className="w-4 h-4 text-rose-300" />
              <span>{language === 'ar' ? 'تقييم الألم والخريطة' : 'Assess Pain'}</span>
            </button>

            <button
              onClick={dispatchEmergencyCall}
              className="flex items-center gap-2 px-5 py-3.5 bg-rose-600/90 hover:bg-rose-600 text-white font-bold text-sm rounded-2xl shadow-md border border-rose-400 active:scale-95 transition-all"
            >
              <PhoneCall className="w-4 h-4 animate-pulse" />
              <span>{t.emergencyCall}</span>
            </button>
          </div>
        </div>

        {/* Current Patient Quick Tag at bottom-right of hero */}
        <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between text-xs text-cyan-100 gap-2">
          <div className="flex items-center gap-2">
            <span>{t.patientNameLabel}</span>
            <strong className="text-white font-bold">
              {language === 'ar' ? activePatient.nameAr : activePatient.name}
            </strong>
            <span>({t.room} {activePatient.roomNumber} - {t.bed} {activePatient.bedNumber})</span>
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span>HR: {activePatient.heartRate} bpm</span>
            <span>SpO₂: {activePatient.oxygenSaturation}%</span>
            <span>BP: {activePatient.bloodPressure}</span>
          </div>
        </div>
      </div>

      {/* 4 Main Module Cards (Grid) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-extrabold text-slate-800">
              {language === 'ar' ? 'الوحدات الأساسية للمنصة' : 'Core Platform Modules'}
            </h2>
            <p className="text-xs text-slate-400">
              {language === 'ar' ? 'اختر الوحدة المناسبة للبدء في الاستخدام' : 'Select a clinical module to begin'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                className="group relative bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${mod.color} text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-105`}>
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${mod.badgeColor}`}>
                      {mod.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-medical-600 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-400 font-mono text-[11px]">{mod.stat}</span>
                  <span className="inline-flex items-center gap-1.5 text-medical-600 group-hover:translate-x-1 transition-transform">
                    <span>{language === 'ar' ? 'فتح الوحدة' : 'Open Module'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission & Patient Cohort Context Section */}
      <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-medical-50 text-medical-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base">
              {language === 'ar' ? 'رسالة المشروع والفئات المستهدفة' : 'Application Mission & Target Cohorts'}
            </h3>
            <p className="text-xs text-slate-400">
              {language === 'ar' ? 'صُمم خصيصاً للتغلب على عوائق التواصل في المنشآت الطبية' : 'Engineered specifically for clinical communication barriers'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
            <span className="w-2 h-2 rounded-full bg-medical-500 inline-block mb-2"></span>
            <h4 className="font-bold text-slate-800 text-sm mb-1">
              {language === 'ar' ? 'غير القادرين على النطق' : 'Non-Verbal Patients'}
            </h4>
            <p className="text-slate-500 leading-relaxed">
              {language === 'ar' ? 'مرضى التصلب الجانبي الضموري (ALS)، الشلل، أو الإعاقات الحركية النطقية.' : 'ALS, stroke, locked-in syndrome, and neuromuscular communication loss.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
            <span className="w-2 h-2 rounded-full bg-sky-500 inline-block mb-2"></span>
            <h4 className="font-bold text-slate-800 text-sm mb-1">
              {language === 'ar' ? 'العجز المؤقت عن الكلام' : 'Temporary Speech Loss'}
            </h4>
            <p className="text-slate-500 leading-relaxed">
              {language === 'ar' ? 'المرضى بعد جراحات الحنجرة، التنبيب الرغامي (Intubation)، أو فغر الرغامي.' : 'Post-extubation, tracheostomy, maxillofacial surgery, and ICU recovery.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
            <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block mb-2"></span>
            <h4 className="font-bold text-slate-800 text-sm mb-1">
              {language === 'ar' ? 'صعوبات التعبير والحبسة' : 'Aphasia & Dysarthria'}
            </h4>
            <p className="text-slate-500 leading-relaxed">
              {language === 'ar' ? 'مرضى الجلطات الدماغية الذين يعانون من حبسة تعبيرية وصعوبة تذكر الكلمات.' : 'Post-stroke expressive aphasia, cognitive word-finding difficulties.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
            <span className="w-2 h-2 rounded-full bg-lavender-500 inline-block mb-2"></span>
            <h4 className="font-bold text-slate-800 text-sm mb-1">
              {language === 'ar' ? 'الاعتماد على الكوادر الطبية' : 'Dependent Hospitalized'}
            </h4>
            <p className="text-slate-500 leading-relaxed">
              {language === 'ar' ? 'المرضى المقيدون بالفراش المحتاجون للتدخل التمريضي السريع دون إجهاد صوتي.' : 'Bedbound patients requiring frequent bedside nurse intervention with zero vocal strain.'}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
