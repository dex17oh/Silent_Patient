import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { Volume2 } from 'lucide-react';

interface CommunicationCardProps {
  id: string;
  label: string;
  sentence: string;
  icon: React.ElementType;
  colorScheme: 'red' | 'blue' | 'amber' | 'cyan' | 'indigo' | 'orange' | 'emerald' | 'purple' | 'teal' | 'rose';
  isSelected: boolean;
  onSelect: () => void;
  onVoice: (e: React.MouseEvent) => void;
}

const colorMap = {
  red: {
    bg: 'hover:bg-red-50/70',
    selectedBg: 'bg-red-50/90 border-red-400 ring-2 ring-red-400/40 shadow-red-100',
    iconBg: 'bg-red-100 text-red-600',
    badge: 'bg-red-100 text-red-700',
  },
  blue: {
    bg: 'hover:bg-sky-50/70',
    selectedBg: 'bg-sky-50/90 border-sky-400 ring-2 ring-sky-400/40 shadow-sky-100',
    iconBg: 'bg-sky-100 text-sky-600',
    badge: 'bg-sky-100 text-sky-700',
  },
  amber: {
    bg: 'hover:bg-amber-50/70',
    selectedBg: 'bg-amber-50/90 border-amber-400 ring-2 ring-amber-400/40 shadow-amber-100',
    iconBg: 'bg-amber-100 text-amber-600',
    badge: 'bg-amber-100 text-amber-700',
  },
  cyan: {
    bg: 'hover:bg-cyan-50/70',
    selectedBg: 'bg-cyan-50/90 border-cyan-400 ring-2 ring-cyan-400/40 shadow-cyan-100',
    iconBg: 'bg-cyan-100 text-cyan-600',
    badge: 'bg-cyan-100 text-cyan-700',
  },
  indigo: {
    bg: 'hover:bg-indigo-50/70',
    selectedBg: 'bg-indigo-50/90 border-indigo-400 ring-2 ring-indigo-400/40 shadow-indigo-100',
    iconBg: 'bg-indigo-100 text-indigo-600',
    badge: 'bg-indigo-100 text-indigo-700',
  },
  orange: {
    bg: 'hover:bg-orange-50/70',
    selectedBg: 'bg-orange-50/90 border-orange-400 ring-2 ring-orange-400/40 shadow-orange-100',
    iconBg: 'bg-orange-100 text-orange-600',
    badge: 'bg-orange-100 text-orange-700',
  },
  emerald: {
    bg: 'hover:bg-emerald-50/70',
    selectedBg: 'bg-emerald-50/90 border-emerald-400 ring-2 ring-emerald-400/40 shadow-emerald-100',
    iconBg: 'bg-emerald-100 text-emerald-600',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  purple: {
    bg: 'hover:bg-purple-50/70',
    selectedBg: 'bg-purple-50/90 border-purple-400 ring-2 ring-purple-400/40 shadow-purple-100',
    iconBg: 'bg-purple-100 text-purple-600',
    badge: 'bg-purple-100 text-purple-700',
  },
  teal: {
    bg: 'hover:bg-teal-50/70',
    selectedBg: 'bg-teal-50/90 border-teal-400 ring-2 ring-teal-400/40 shadow-teal-100',
    iconBg: 'bg-teal-100 text-teal-600',
    badge: 'bg-teal-100 text-teal-700',
  },
  rose: {
    bg: 'hover:bg-rose-50/70',
    selectedBg: 'bg-rose-50/90 border-rose-400 ring-2 ring-rose-400/40 shadow-rose-100',
    iconBg: 'bg-rose-100 text-rose-600',
    badge: 'bg-rose-100 text-rose-700',
  },
};

export const CommunicationCard: React.FC<CommunicationCardProps> = ({
  label,
  sentence,
  icon: Icon,
  colorScheme,
  isSelected,
  onSelect,
  onVoice,
}) => {
  const { t } = useLanguage();
  const { isSpeaking, largeButtons } = useApp();
  const theme = colorMap[colorScheme] || colorMap.blue;

  return (
    <div
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`group relative flex flex-col justify-between rounded-3xl border bg-white text-start transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${
        largeButtons ? 'p-6 min-h-[170px]' : 'p-5 min-h-[148px]'
      } ${
        isSelected
          ? `${theme.selectedBg} -translate-y-1`
          : `border-slate-200/80 ${theme.bg} hover:-translate-y-0.5`
      }`}
    >
      {/* Top Header with Icon and Voice trigger */}
      <div className="flex items-start justify-between gap-3">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm ${theme.iconBg}`}
        >
          <Icon className="w-6 h-6 stroke-[2.2]" />
        </div>

        {/* Quick Voice speak icon button */}
        <button
          onClick={onVoice}
          title={t.comm.generateVoice}
          className={`p-2 rounded-xl transition-all ${
            isSelected
              ? 'bg-white text-medical-600 shadow-sm hover:scale-105 active:scale-95'
              : 'text-slate-400 hover:text-medical-600 hover:bg-slate-100'
          }`}
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      {/* Main Label */}
      <div className="mt-4">
        <h3 className={`font-bold text-slate-800 leading-snug group-hover:text-medical-700 transition-colors ${
          largeButtons ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
        }`}>
          {label}
        </h3>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed opacity-90">
          {sentence}
        </p>
      </div>

      {/* Selected Indicator Bar */}
      {isSelected && (
        <div className="absolute inset-x-6 bottom-0 h-1 bg-medical-500 rounded-t-full"></div>
      )}
    </div>
  );
};
