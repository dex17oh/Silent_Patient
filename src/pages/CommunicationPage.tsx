import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { CommunicationCard } from '../components/communication/CommunicationCard';
import { QuickNeedsGrid } from '../components/communication/QuickNeedsGrid';
import { MessageHistoryFeed } from '../components/communication/MessageHistoryFeed';
import { 
  Heart, 
  Droplet, 
  Utensils, 
  Bath, 
  ThermometerSnowflake, 
  Flame, 
  AlertOctagon, 
  HelpCircle, 
  RefreshCw, 
  Users, 
  Stethoscope, 
  Moon,
  Volume2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const CommunicationPage: React.FC = () => {
  const { t, language } = useLanguage();
  const { sendCommunicationMessage, speakSentence, isSpeaking } = useApp();

  const [selectedCardId, setSelectedCardId] = useState<string>('water');
  const [filterCategory, setFilterCategory] = useState<'all' | 'essential' | 'feeling' | 'medical' | 'social'>('all');

  const communicationItems = [
    {
      id: 'pain',
      label: t.comm.pain,
      sentence: t.comm.painSentence,
      icon: Heart,
      colorScheme: 'red' as const,
      category: 'medical' as const,
      urgency: 'urgent' as const,
    },
    {
      id: 'water',
      label: t.comm.water,
      sentence: t.comm.waterSentence,
      icon: Droplet,
      colorScheme: 'cyan' as const,
      category: 'essential' as const,
      urgency: 'normal' as const,
    },
    {
      id: 'food',
      label: t.comm.food,
      sentence: t.comm.foodSentence,
      icon: Utensils,
      colorScheme: 'amber' as const,
      category: 'essential' as const,
      urgency: 'normal' as const,
    },
    {
      id: 'bathroom',
      label: t.comm.bathroom,
      sentence: t.comm.bathroomSentence,
      icon: Bath,
      colorScheme: 'indigo' as const,
      category: 'essential' as const,
      urgency: 'urgent' as const,
    },
    {
      id: 'cold',
      label: t.comm.cold,
      sentence: t.comm.coldSentence,
      icon: ThermometerSnowflake,
      colorScheme: 'blue' as const,
      category: 'feeling' as const,
      urgency: 'normal' as const,
    },
    {
      id: 'hot',
      label: t.comm.hot,
      sentence: t.comm.hotSentence,
      icon: Flame,
      colorScheme: 'orange' as const,
      category: 'feeling' as const,
      urgency: 'normal' as const,
    },
    {
      id: 'nausea',
      label: t.comm.nausea,
      sentence: t.comm.nauseaSentence,
      icon: AlertOctagon,
      colorScheme: 'rose' as const,
      category: 'feeling' as const,
      urgency: 'urgent' as const,
    },
    {
      id: 'help',
      label: t.comm.help,
      sentence: t.comm.helpSentence,
      icon: HelpCircle,
      colorScheme: 'red' as const,
      category: 'medical' as const,
      urgency: 'urgent' as const,
    },
    {
      id: 'position',
      label: t.comm.position,
      sentence: t.comm.positionSentence,
      icon: RefreshCw,
      colorScheme: 'purple' as const,
      category: 'feeling' as const,
      urgency: 'normal' as const,
    },
    {
      id: 'family',
      label: t.comm.family,
      sentence: t.comm.familySentence,
      icon: Users,
      colorScheme: 'teal' as const,
      category: 'social' as const,
      urgency: 'normal' as const,
    },
    {
      id: 'doctor',
      label: t.comm.doctor,
      sentence: t.comm.doctorSentence,
      icon: Stethoscope,
      colorScheme: 'emerald' as const,
      category: 'medical' as const,
      urgency: 'normal' as const,
    },
    {
      id: 'sleep',
      label: t.comm.sleep,
      sentence: t.comm.sleepSentence,
      icon: Moon,
      colorScheme: 'indigo' as const,
      category: 'essential' as const,
      urgency: 'normal' as const,
    },
  ];

  const filteredItems = communicationItems.filter(item => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  const activeSelectedItem = communicationItems.find(i => i.id === selectedCardId) || communicationItems[1];

  const handleSelectCard = (item: typeof communicationItems[0]) => {
    setSelectedCardId(item.id);
    sendCommunicationMessage(item.id, item.category, item.urgency);
  };

  const handleVoicePlay = (sentence: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    speakSentence(sentence);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Top Welcome & Instruction Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-medical-50 text-medical-700 font-bold text-xs rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'واجهة التعبير المرئي التفاعلية' : 'Visual Assistive Communication'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {t.comm.welcome}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
            {t.comm.instruction}
          </p>
        </div>

        {/* Selected Active Sentence Spotlight Banner */}
        <div className="w-full md:w-auto md:min-w-[320px] p-4 bg-gradient-to-r from-medical-50 to-turquoise-50/50 border border-medical-200/80 rounded-2xl">
          <div className="text-[11px] font-bold text-medical-700 mb-1 flex items-center justify-between">
            <span>{language === 'ar' ? 'الرسالة المختارة الحالية:' : 'Selected Message:'}</span>
            <span className="text-[10px] text-slate-400 font-normal">Ready to Speak</span>
          </div>
          <div className="font-extrabold text-sm text-slate-800 line-clamp-1 mb-2">
            {activeSelectedItem.label}
          </div>
          <button
            onClick={() => handleVoicePlay(activeSelectedItem.sentence)}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-medical-500 hover:bg-medical-600 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md shadow-medical-200 transition-all"
          >
            <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-bounce' : ''}`} />
            <span>{t.comm.generateVoice}</span>
          </button>
        </div>
      </div>

      {/* Quick Affirmations (Yes/No/Thank You/Better/Worse) */}
      <QuickNeedsGrid />

      {/* Main Communication Grid & Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left 2 Columns: 12 Interactive Cards */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-semibold">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                filterCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {language === 'ar' ? 'الكل (12)' : 'All Cards (12)'}
            </button>
            <button
              onClick={() => setFilterCategory('essential')}
              className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                filterCategory === 'essential'
                  ? 'bg-medical-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {language === 'ar' ? 'الاحتياجات الحيوية' : 'Essential Needs'}
            </button>
            <button
              onClick={() => setFilterCategory('medical')}
              className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                filterCategory === 'medical'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {language === 'ar' ? 'الطبي والتمريض' : 'Medical & Pain'}
            </button>
            <button
              onClick={() => setFilterCategory('feeling')}
              className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                filterCategory === 'feeling'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {language === 'ar' ? 'الحالة الجسدية' : 'Physical State'}
            </button>
            <button
              onClick={() => setFilterCategory('social')}
              className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                filterCategory === 'social'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {language === 'ar' ? 'التواصل العائلي' : 'Social & Family'}
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {filteredItems.map((item) => (
              <CommunicationCard
                key={item.id}
                id={item.id}
                label={item.label}
                sentence={item.sentence}
                icon={item.icon}
                colorScheme={item.colorScheme}
                isSelected={selectedCardId === item.id}
                onSelect={() => handleSelectCard(item)}
                onVoice={(e: React.MouseEvent) => handleVoicePlay(item.sentence, e)}
              />
            ))}
          </div>

          {/* Confirmation Notice Card */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200/80 flex items-center justify-between text-xs text-slate-600 shadow-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>
                {language === 'ar' 
                  ? 'تصل كل رسالة مباشرة إلى شاشة التمريض وتُحفظ في السجل الطبي اللحظي.' 
                  : 'Every tap immediately triggers nurse notification and logs to bedside record.'}
              </span>
            </div>
            <span className="font-bold text-medical-600 hidden sm:inline font-mono">
              Auto-Sync: Active
            </span>
          </div>

        </div>

        {/* Right Column: Message History Feed */}
        <div className="lg:col-span-1">
          <MessageHistoryFeed />
        </div>

      </div>

    </div>
  );
};
