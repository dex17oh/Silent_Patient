import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { Language } from '../../types';
import { 
  Bell, 
  Globe, 
  PhoneCall, 
  Volume2, 
  VolumeX, 
  User, 
  Clock,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { 
    activePatient, 
    patients, 
    setActivePatientId, 
    notifications, 
    dispatchEmergencyCall,
    isSpeaking
  } = useApp();

  const [currentTime, setCurrentTime] = useState('');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showPatientMenu, setShowPatientMenu] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const languageLabels: Record<Language, { label: string; flag: string }> = {
    ar: { label: 'العربية (RTL)', flag: '🇸🇦' },
    en: { label: 'English (US)', flag: '🇺🇸' },
    fr: { label: 'Français (FR)', flag: '🇫🇷' },
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 lg:px-8 py-3 transition-colors">
      <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
        
        {/* Left Section (or Right in RTL): Active Patient Info & Live Clock */}
        <div className="flex items-center gap-3">
          {/* Patient Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowPatientMenu(!showPatientMenu);
                setShowLangMenu(false);
                setShowNotifMenu(false);
              }}
              className="flex items-center gap-2.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200/80 text-slate-700 rounded-xl text-sm font-medium transition-all border border-slate-200/60"
            >
              <div className="w-7 h-7 rounded-lg bg-medical-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                <User className="w-4 h-4" />
              </div>
              <div className="text-start leading-tight">
                <div className="font-semibold text-slate-900 text-xs sm:text-sm">
                  {language === 'ar' ? activePatient.nameAr : activePatient.name}
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <span className="text-medical-600 font-bold">{t.room} {activePatient.roomNumber}</span>
                  <span>•</span>
                  <span>{t.bed} {activePatient.bedNumber}</span>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 ms-1" />
            </button>

            {showPatientMenu && (
              <div className="absolute top-full mt-1.5 start-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95">
                <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {t.doctor.patientCard.selectPatient}
                </div>
                {patients.map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActivePatientId(p.id);
                      setShowPatientMenu(false);
                    }}
                    className={`w-full text-start px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${
                      p.id === activePatient.id ? 'bg-medical-50/80 text-medical-700 font-bold' : 'text-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-medium">{language === 'ar' ? p.nameAr : p.name}</div>
                      <div className="text-[10px] text-slate-400">{t.room} {p.roomNumber} - {p.primaryCondition}</div>
                    </div>
                    {p.id === activePatient.id && (
                      <span className="w-2 h-2 rounded-full bg-medical-500"></span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Vitals Live Pill */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200/60 rounded-xl text-emerald-800 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold">{t.live}</span>
            <span className="text-slate-400">|</span>
            <span>SpO₂ <strong className="text-emerald-700">{activePatient.oxygenSaturation}%</strong></span>
            <span>•</span>
            <span>HR <strong className="text-emerald-700">{activePatient.heartRate} bpm</strong></span>
          </div>
        </div>

        {/* Right Section: Time, Voice Feedback, Emergency Call, Language, Notifications */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Audio Feedback Indicator */}
          {isSpeaking && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-medical-100 text-medical-800 rounded-lg text-xs font-medium animate-pulse">
              <Volume2 className="w-4 h-4 text-medical-600 animate-bounce" />
              <span>{t.voiceFeedbackActive}</span>
            </div>
          )}

          {/* Emergency Nurse Button */}
          <button
            onClick={dispatchEmergencyCall}
            title={t.emergencyCall}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-rose-200 transition-all ring-pulse-medical"
          >
            <PhoneCall className="w-4 h-4 animate-pulse" />
            <span className="hidden sm:inline">{t.emergencyCall}</span>
            <span className="sm:hidden font-extrabold">SOS</span>
          </button>

          {/* Clock */}
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-500 font-mono px-2.5 py-1 bg-slate-100 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{currentTime}</span>
          </div>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowLangMenu(!showLangMenu);
                setShowPatientMenu(false);
                setShowNotifMenu(false);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-200/80 rounded-xl text-xs sm:text-sm font-medium text-slate-700 shadow-sm transition-all"
              aria-label={t.language}
            >
              <Globe className="w-4 h-4 text-medical-600" />
              <span className="hidden sm:inline">{languageLabels[language].label}</span>
              <span className="sm:hidden">{languageLabels[language].flag}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {showLangMenu && (
              <div className="absolute top-full mt-1.5 end-0 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 py-1.5 z-50 animate-in fade-in zoom-in-95">
                {(['ar', 'en', 'fr'] as Language[]).map(langKey => (
                  <button
                    key={langKey}
                    onClick={() => {
                      setLanguage(langKey);
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-start px-3.5 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${
                      language === langKey ? 'bg-medical-50 text-medical-700 font-bold' : 'text-slate-700'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{languageLabels[langKey].flag}</span>
                      <span>{languageLabels[langKey].label}</span>
                    </span>
                    {language === langKey && (
                      <span className="w-2 h-2 rounded-full bg-medical-500"></span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifMenu(!showNotifMenu);
                setShowLangMenu(false);
                setShowPatientMenu(false);
              }}
              className="relative p-2 bg-white hover:bg-slate-100 border border-slate-200/80 rounded-xl text-slate-600 shadow-sm transition-all"
              aria-label={t.notifications}
            >
              <Bell className="w-4 h-4" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -end-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {notifications.length}
                </span>
              )}
            </button>

            {showNotifMenu && (
              <div className="absolute top-full mt-1.5 end-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-800">{t.notifications}</span>
                  <span className="text-[10px] bg-medical-50 text-medical-700 px-2 py-0.5 rounded-full font-semibold">
                    {notifications.length} {t.status}
                  </span>
                </div>
                {notifications.length === 0 ? (
                  <div className="py-4 text-center text-xs text-slate-400">
                    لا توجد إشعارات جديدة حالياً
                  </div>
                ) : (
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {notifications.map(n => (
                      <div 
                        key={n.id}
                        className={`p-2.5 rounded-xl text-xs border ${
                          n.type === 'urgent' 
                            ? 'bg-rose-50 border-rose-200 text-rose-800' 
                            : n.type === 'warning'
                            ? 'bg-amber-50 border-amber-200 text-amber-800'
                            : 'bg-medical-50/70 border-medical-100 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between font-bold mb-1">
                          <span>{n.title}</span>
                          <span className="text-[10px] font-normal opacity-70">{n.timestamp}</span>
                        </div>
                        <p className="text-[11px] leading-tight opacity-90">{n.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
};
