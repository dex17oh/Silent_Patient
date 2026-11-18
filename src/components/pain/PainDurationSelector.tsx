import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PainOnset } from '../../types';
import { Clock, History, Calendar, Sparkles } from 'lucide-react';

interface PainDurationSelectorProps {
  selectedOnset: PainOnset;
  onChange: (onset: PainOnset) => void;
}

export const PainDurationSelector: React.FC<PainDurationSelectorProps> = ({ selectedOnset, onChange }) => {
  const { t } = useLanguage();

  const options: { id: PainOnset; label: string; icon: React.ElementType }[] = [
    { id: 'just-now', label: t.pain.onsetOptions['just-now'], icon: Sparkles },
    { id: 'few-minutes', label: t.pain.onsetOptions['few-minutes'], icon: Clock },
    { id: 'few-hours', label: t.pain.onsetOptions['few-hours'], icon: History },
    { id: 'several-days', label: t.pain.onsetOptions['several-days'], icon: Calendar },
  ];

  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm">
      <div className="pb-3 mb-3 border-b border-slate-100">
        <h4 className="font-bold text-slate-800 text-sm">
          {t.pain.onsetTitle}
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = selectedOnset === opt.id;

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={`p-3 rounded-2xl border text-start flex items-center gap-3 transition-all ${
                isSelected
                  ? 'bg-medical-50/90 border-medical-500 ring-2 ring-medical-400/30 text-medical-900 font-bold shadow-xs'
                  : 'bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className={`p-2 rounded-xl ${isSelected ? 'bg-medical-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
