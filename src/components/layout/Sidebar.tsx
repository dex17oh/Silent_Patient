import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { NavigationTab } from '../../types';
import { 
  Home, 
  MessageSquare, 
  Heart, 
  LayoutDashboard, 
  Brain, 
  Settings, 
  Activity, 
  Sparkles,
  Volume2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface SidebarProps {
  collapsed?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = () => {
  const { t, language, isRTL } = useLanguage();
  const { activeTab, setActiveTab, speakSentence, isSpeaking } = useApp();

  const navItems: {
    id: NavigationTab;
    label: string;
    icon: React.ElementType;
    badge?: string;
    badgeColor?: string;
  }[] = [
    {
      id: 'overview',
      label: t.nav.overview,
      icon: Home,
    },
    {
      id: 'communication',
      label: t.nav.communication,
      icon: MessageSquare,
      badge: '12',
      badgeColor: 'bg-medical-100 text-medical-700',
    },
    {
      id: 'pain-assessment',
      label: t.nav.painAssessment,
      icon: Heart,
      badge: '0-10',
      badgeColor: 'bg-rose-100 text-rose-700',
    },
    {
      id: 'doctor-dashboard',
      label: t.nav.doctorDashboard,
      icon: LayoutDashboard,
      badge: 'Pro',
      badgeColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      id: 'neuro-analysis',
      label: t.nav.neuroAnalysis,
      icon: Brain,
      badge: 'AI Beta',
      badgeColor: 'bg-lavender-100 text-lavender-700',
    },
    {
      id: 'settings',
      label: t.nav.settings,
      icon: Settings,
    },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-72 bg-white border-e border-slate-200/80 h-screen sticky top-0 select-none z-20">
      
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-medical-600 via-turquoise-500 to-medical-400 flex items-center justify-center text-white shadow-lg shadow-medical-200">
            <Activity className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <h1 className="font-extrabold text-base tracking-tight text-slate-900 leading-tight">
              {t.appName}
            </h1>
            <p className="text-xs text-medical-600 font-semibold tracking-wide">
              {t.appSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        <div className="px-3 pb-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          {language === 'ar' ? 'الوحدات الرئيسية' : language === 'fr' ? 'Modules Principaux' : 'Main Modules'}
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 group ${
                isActive
                  ? 'bg-medical-500 text-white shadow-md shadow-medical-200 scale-[1.01]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-medical-600'
                  }`}
                >
                  <Icon className="w-4 h-4 stroke-[2.2]" />
                </div>
                <span className="text-start">{item.label}</span>
              </div>

              <div className="flex items-center gap-1.5">
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-all ${
                      isActive ? 'bg-white text-medical-700' : item.badgeColor || 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </nav>

      {/* Quick Voice Demo & Hospital Ward Safety Badge */}
      <div className="p-4 border-t border-slate-100 space-y-3 bg-slate-50/50">
        
        {/* Quick Voice Play Test */}
        <button
          onClick={() => {
            const demoText = language === 'ar' 
              ? 'مرحباً، نظام المريض الصامت جاهز لمساعدتك في التعبير عن ألمك واحتياجاتك'
              : language === 'fr'
              ? 'Bonjour, Le Patient Silencieux est prêt à vous assister pour exprimer vos besoins'
              : 'Hello, The Silent Patient is ready to help you express your pain and needs';
            speakSentence(demoText);
          }}
          disabled={isSpeaking}
          className="w-full flex items-center justify-between px-3.5 py-2.5 bg-white hover:bg-medical-50/80 border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-700 shadow-sm transition-all"
        >
          <div className="flex items-center gap-2">
            <Volume2 className={`w-4 h-4 text-medical-600 ${isSpeaking ? 'animate-bounce' : ''}`} />
            <span>{language === 'ar' ? 'اختبار الصوت الفوري' : language === 'fr' ? 'Tester la voix' : 'Test Speech Engine'}</span>
          </div>
          <span className="text-[10px] text-medical-600 font-bold bg-medical-50 px-2 py-0.5 rounded">TTS</span>
        </button>

        {/* Clinical Safety Card */}
        <div className="flex items-start gap-2.5 p-3 bg-gradient-to-br from-turquoise-50/80 to-medical-50/80 border border-turquoise-100 rounded-xl text-slate-600 text-xs">
          <ShieldCheck className="w-4 h-4 text-turquoise-600 shrink-0 mt-0.5" />
          <div className="text-[11px] leading-relaxed">
            <span className="font-bold text-slate-800">
              {language === 'ar' ? 'معايير الرعاية التلطيفية' : 'Clinical Safe Protocol'}
            </span>
            <p className="text-slate-500 mt-0.5">
              {language === 'ar' 
                ? 'مصمم للمرضى فاقدي النطق بعد السكتات الدماغية أو الأورام أو التنفس الاصطناعي.' 
                : 'Engineered for non-verbal ICU, post-stroke, and palliative cohorts.'}
            </p>
          </div>
        </div>

      </div>

    </aside>
  );
};
