import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { Language } from '../types';
import { 
  Settings, 
  Volume2, 
  Eye, 
  Globe, 
  CheckCircle2, 
  RotateCcw
} from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { 
    voiceRate, 
    setVoiceRate, 
    voicePitch, 
    setVoicePitch, 
    speakSentence, 
    isSpeaking,
    highContrast,
    setHighContrast,
    largeButtons,
    setLargeButtons,
    addNotification
  } = useApp();

  const handleTestVoice = () => {
    const testPhrase = language === 'ar'
      ? 'نظام النطق الصوتي للمريض الصامت يعمل بشكل مثالي وبسرعة مناسبة.'
      : language === 'fr'
      ? 'Le système de synthèse vocale fonctionne parfaitement avec vos paramètres.'
      : 'The Silent Patient text to speech voice engine is configured and operating clearly.';
    speakSentence(testPhrase);
  };

  const handleReset = () => {
    setVoiceRate(0.95);
    setVoicePitch(1.0);
    setHighContrast(false);
    setLargeButtons(false);
    addNotification(
      language === 'ar' ? 'تمت استعادة الإعدادات' : 'Defaults Restored',
      language === 'ar' ? 'تمت إعادة ضبط كافة الخيارات للحالة المصنعية' : 'All preferences restored to default values',
      'info'
    );
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-300">
      
      {/* Title */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-medical-50 text-medical-600 flex items-center justify-center">
            <Settings className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              {t.settings.title}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {t.settings.subtitle}
            </p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-bold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.settings.resetDefault}</span>
        </button>
      </div>

      {/* Language Preferences Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
        <h3 className="font-extrabold text-slate-800 text-base mb-1 flex items-center gap-2">
          <Globe className="w-4 h-4 text-medical-600" />
          <span>{t.language} (Multilingual UI & RTL Support)</span>
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          {language === 'ar' ? 'تدعم المنصة العربية باتجاه كامل من اليمين لليسار، بالإضافة للإنجليزية والفرنسية.' : 'Full support for right-to-left Arabic, as well as English and French.'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { id: 'ar' as Language, title: 'العربية (RTL)', flag: '🇸🇦', desc: 'اللغة الافتراضية للمنصة' },
            { id: 'en' as Language, title: 'English (US)', flag: '🇺🇸', desc: 'Standard LTR hospital layout' },
            { id: 'fr' as Language, title: 'Français (FR)', flag: '🇫🇷', desc: 'Format médical francophone' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setLanguage(item.id)}
              className={`p-4 rounded-2xl border text-start transition-all ${
                language === item.id
                  ? 'bg-medical-50 border-medical-500 ring-2 ring-medical-400/30 text-medical-900 shadow-sm'
                  : 'bg-white border-slate-200/80 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{item.flag}</span>
                {language === item.id && (
                  <CheckCircle2 className="w-4 h-4 text-medical-600" />
                )}
              </div>
              <div className="font-bold text-sm">{item.title}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Voice Synthesis Engine Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
          <div>
            <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-medical-600" />
              <span>{t.settings.voiceSettings}</span>
            </h3>
            <p className="text-xs text-slate-400">
              {language === 'ar' ? 'تعديل وتيرة النطق الصوتي للتناسب مع سمع المريض والكوادر' : 'Tune pitch and cadence for optimal clinical clarity'}
            </p>
          </div>

          <button
            onClick={handleTestVoice}
            disabled={isSpeaking}
            className="flex items-center gap-2 px-4 py-2 bg-medical-500 hover:bg-medical-600 active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs transition-all"
          >
            <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-bounce' : ''}`} />
            <span>{t.settings.testVoice}</span>
          </button>
        </div>

        <div className="space-y-4">
          {/* Rate Slider */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
              <span>{t.settings.voiceRate}</span>
              <span className="font-mono text-medical-600">{voiceRate.toFixed(2)}x</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="1.5"
              step="0.05"
              value={voiceRate}
              onChange={(e) => setVoiceRate(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-medical-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>بطيء (0.5x)</span>
              <span>طبيعي (1.0x)</span>
              <span>سريع (1.5x)</span>
            </div>
          </div>

          {/* Pitch Slider */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
              <span>{t.settings.voicePitch}</span>
              <span className="font-mono text-medical-600">{voicePitch.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.6"
              max="1.4"
              step="0.05"
              value={voicePitch}
              onChange={(e) => setVoicePitch(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-medical-600"
            />
          </div>
        </div>
      </div>

      {/* Visual Accessibility Modes */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
        <h3 className="font-extrabold text-slate-800 text-base mb-1 flex items-center gap-2">
          <Eye className="w-4 h-4 text-medical-600" />
          <span>{t.settings.accessibility}</span>
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          {language === 'ar' ? 'تسهيل الاستخدام للمرضى طريحي الفراش وذوي المهارات الحركية الدقيقة المحدودة' : 'Accommodations for motor-impaired and vision-compromised bedside environments'}
        </p>

        <div className="space-y-3">
          {/* Large buttons toggle */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 flex items-center justify-between">
            <div>
              <div className="font-bold text-xs text-slate-800">{t.settings.largeButtons}</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {language === 'ar' ? 'تكبير مساحة اللمس لتقليل الأخطاء عند الارتجاف' : 'Expands touch target surface area for motor weakness'}
              </p>
            </div>
            <button
              onClick={() => setLargeButtons(!largeButtons)}
              className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                largeButtons ? 'bg-medical-500' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  largeButtons ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
