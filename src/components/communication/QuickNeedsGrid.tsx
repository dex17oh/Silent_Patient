import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { Check, X, ThumbsUp, ThumbsDown, HeartHandshake, AlertCircle } from 'lucide-react';

export const QuickNeedsGrid: React.FC = () => {
  const { t, language } = useLanguage();
  const { sendCommunicationMessage, speakSentence } = useApp();

  const quickItems = [
    {
      id: 'yes',
      label: t.comm.yes,
      spoken: language === 'ar' ? 'نعم، أوافق' : language === 'fr' ? 'Oui, tout à fait' : 'Yes, affirmative',
      icon: Check,
      bg: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-200',
    },
    {
      id: 'no',
      label: t.comm.no,
      spoken: language === 'ar' ? 'لا، لا أريد ذلك' : language === 'fr' ? 'Non, pas du tout' : 'No, negative',
      icon: X,
      bg: 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-200',
    },
    {
      id: 'thankYou',
      label: t.comm.thankYou,
      spoken: language === 'ar' ? 'شكراً جزيلاً لكم على المساعدة' : language === 'fr' ? 'Merci beaucoup pour votre aide' : 'Thank you very much for your care',
      icon: HeartHandshake,
      bg: 'bg-medical-500 hover:bg-medical-600 text-white shadow-medical-200',
    },
    {
      id: 'better',
      label: t.comm.better,
      spoken: language === 'ar' ? 'أشعر بتحسن نسبي والحمد لله' : language === 'fr' ? 'Je me sens un peu mieux' : 'I am feeling better now',
      icon: ThumbsUp,
      bg: 'bg-turquoise-500 hover:bg-turquoise-600 text-white shadow-turquoise-200',
    },
    {
      id: 'worse',
      label: t.comm.worse,
      spoken: language === 'ar' ? 'أشعر بتراجع وبأن حالتي تسوء' : language === 'fr' ? 'Mon état se dégrade, je me sens plus mal' : 'My condition is getting worse',
      icon: ThumbsDown,
      bg: 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-200',
    },
    {
      id: 'anxious',
      label: t.comm.anxious,
      spoken: language === 'ar' ? 'أشعر بالخوف والتوتر الشديد، أحتاج لطمأنة' : language === 'fr' ? 'Je me sens très angoissé, j\'ai besoin d\'être rassuré' : 'I am feeling anxious and afraid, please comfort me',
      icon: AlertCircle,
      bg: 'bg-lavender-500 hover:bg-lavender-600 text-white shadow-lavender-200',
    },
  ];

  const handleQuick = (item: typeof quickItems[0]) => {
    speakSentence(item.spoken);
    sendCommunicationMessage(item.id, 'social', 'normal');
  };

  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-800 text-sm sm:text-base">
          {t.comm.quickPhrases}
        </h3>
        <span className="text-[11px] text-slate-400 font-medium">
          {language === 'ar' ? 'نقرة واحدة للنطق الفوري' : 'One-tap vocal response'}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
        {quickItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleQuick(item)}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-2xl font-bold text-xs sm:text-sm shadow-sm transition-all duration-200 active:scale-95 ${item.bg}`}
            >
              <Icon className="w-4 h-4 stroke-[2.5]" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
