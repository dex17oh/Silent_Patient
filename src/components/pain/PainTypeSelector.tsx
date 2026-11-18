import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PainType } from '../../types';
import { 
  Zap, 
  Flame, 
  Sword, 
  Activity, 
  Waves, 
  Timer 
} from 'lucide-react';

interface PainTypeSelectorProps {
  selectedType: PainType;
  onChange: (type: PainType) => void;
}

export const PainTypeSelector: React.FC<PainTypeSelectorProps> = ({ selectedType, onChange }) => {
  const { t } = useLanguage();

  const types: {
    id: PainType;
    label: string;
    desc: string;
    icon: React.ElementType;
    color: string;
  }[] = [
    {
      id: 'sharp',
      label: t.pain.types.sharpShort,
      desc: t.pain.types.sharp,
      icon: Zap,
      color: 'text-amber-500 bg-amber-50 border-amber-200',
    },
    {
      id: 'burning',
      label: t.pain.types.burningShort,
      desc: t.pain.types.burning,
      icon: Flame,
      color: 'text-rose-500 bg-rose-50 border-rose-200',
    },
    {
      id: 'stabbing',
      label: t.pain.types.stabbingShort,
      desc: t.pain.types.stabbing,
      icon: Sword,
      color: 'text-red-600 bg-red-50 border-red-200',
    },
    {
      id: 'dull',
      label: t.pain.types.dullShort,
      desc: t.pain.types.dull,
      icon: Waves,
      color: 'text-sky-500 bg-sky-50 border-sky-200',
    },
    {
      id: 'throbbing',
      label: t.pain.types.throbbingShort,
      desc: t.pain.types.throbbing,
      icon: Activity,
      color: 'text-purple-500 bg-purple-50 border-purple-200',
    },
    {
      id: 'continuous',
      label: t.pain.types.continuousShort,
      desc: t.pain.types.continuous,
      icon: Timer,
      color: 'text-teal-500 bg-teal-50 border-teal-200',
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm">
      <div className="pb-3 mb-3 border-b border-slate-100">
        <h4 className="font-bold text-slate-800 text-sm">
          {t.pain.typeTitle}
        </h4>
        <p className="text-[11px] text-slate-400">
          {t.pain.typeDesc}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {types.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedType === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={`p-3 rounded-2xl border text-start transition-all duration-200 flex flex-col justify-between min-h-[90px] ${
                isSelected
                  ? 'bg-medical-50/90 border-medical-500 ring-2 ring-medical-400/30 shadow-sm'
                  : 'bg-white border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${item.color}`}>
                  <Icon className="w-4 h-4 stroke-[2.2]" />
                </div>
                {isSelected && (
                  <span className="w-2.5 h-2.5 rounded-full bg-medical-500"></span>
                )}
              </div>
              <div className="mt-2">
                <div className="font-bold text-xs text-slate-800">{item.label}</div>
                <div className="text-[10px] text-slate-400 line-clamp-1">{item.desc}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
