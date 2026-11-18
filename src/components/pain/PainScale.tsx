import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Smile, Meh, Frown, AlertCircle } from 'lucide-react';

interface PainScaleProps {
  intensity: number;
  onChange: (value: number) => void;
}

export const PainScale: React.FC<PainScaleProps> = ({ intensity, onChange }) => {
  const { t } = useLanguage();

  const getPainLevelInfo = (score: number) => {
    if (score === 0) {
      return {
        label: t.pain.intensity0,
        color: 'text-emerald-600',
        bg: 'bg-emerald-500',
        border: 'border-emerald-300',
        face: '😊',
        badge: 'bg-emerald-50 text-emerald-700 border-emerald-200'
      };
    }
    if (score <= 3) {
      return {
        label: t.pain.intensityLow,
        color: 'text-sky-600',
        bg: 'bg-sky-500',
        border: 'border-sky-300',
        face: '🙂',
        badge: 'bg-sky-50 text-sky-700 border-sky-200'
      };
    }
    if (score <= 6) {
      return {
        label: t.pain.intensityMed,
        color: 'text-amber-600',
        bg: 'bg-amber-500',
        border: 'border-amber-300',
        face: '😐',
        badge: 'bg-amber-50 text-amber-700 border-amber-200'
      };
    }
    if (score <= 8) {
      return {
        label: t.pain.intensityHigh,
        color: 'text-orange-600',
        bg: 'bg-orange-500',
        border: 'border-orange-300',
        face: '😣',
        badge: 'bg-orange-50 text-orange-700 border-orange-200'
      };
    }
    return {
      label: t.pain.intensity10,
      color: 'text-rose-600',
      bg: 'bg-rose-600',
      border: 'border-rose-400',
      face: '😭',
      badge: 'bg-rose-50 text-rose-700 border-rose-300'
    };
  };

  const levelInfo = getPainLevelInfo(intensity);

  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
        <div>
          <h4 className="font-bold text-slate-800 text-sm">
            {t.pain.intensityTitle}
          </h4>
          <p className="text-[11px] text-slate-400">
            {t.pain.intensityDesc}
          </p>
        </div>

        {/* Large Score Indicator Badge */}
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">{levelInfo.face}</span>
          <div className="flex items-baseline gap-1 bg-slate-900 text-white px-3.5 py-1.5 rounded-2xl shadow-sm">
            <span className="text-xl font-extrabold">{intensity}</span>
            <span className="text-xs text-slate-400">/ 10</span>
          </div>
        </div>
      </div>

      {/* 0 to 10 Numbers Pill Buttons */}
      <div className="grid grid-cols-11 gap-1 sm:gap-1.5 mb-4">
        {Array.from({ length: 11 }, (_, i) => i).map((num) => {
          const isSelected = intensity === num;
          let numColor = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
          
          if (isSelected) {
            if (num === 0) numColor = 'bg-emerald-500 text-white ring-2 ring-emerald-300 shadow-md';
            else if (num <= 3) numColor = 'bg-sky-500 text-white ring-2 ring-sky-300 shadow-md';
            else if (num <= 6) numColor = 'bg-amber-500 text-white ring-2 ring-amber-300 shadow-md';
            else if (num <= 8) numColor = 'bg-orange-500 text-white ring-2 ring-orange-300 shadow-md';
            else numColor = 'bg-rose-600 text-white ring-2 ring-rose-300 shadow-md';
          }

          return (
            <button
              key={num}
              type="button"
              onClick={() => onChange(num)}
              className={`h-11 sm:h-12 rounded-2xl flex flex-col items-center justify-center font-extrabold text-sm sm:text-base transition-all duration-150 active:scale-95 ${numColor}`}
            >
              <span>{num}</span>
              <span className="text-[9px] font-normal opacity-80">
                {num === 0 ? '😊' : num === 5 ? '😐' : num === 10 ? '😭' : ''}
              </span>
            </button>
          );
        })}
      </div>

      {/* Visual Slider Bar */}
      <div className="px-1 mb-3">
        <input
          type="range"
          min="0"
          max="10"
          value={intensity}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          className="w-full h-2.5 bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-500 rounded-lg appearance-none cursor-pointer accent-slate-900"
        />
        <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
          <span>0 ({t.pain.intensity0.split('-')[1]})</span>
          <span>5</span>
          <span>10 ({t.pain.intensity10.split('-')[1]})</span>
        </div>
      </div>

      {/* Dynamic Clinical Interpretation Card */}
      <div className={`p-3 rounded-2xl border text-xs flex items-center justify-between ${levelInfo.badge}`}>
        <div className="flex items-center gap-2">
          <span className="text-base">{levelInfo.face}</span>
          <span className="font-bold">{levelInfo.label}</span>
        </div>
        <span className="text-[10px] font-mono opacity-80">Wong-Baker Scale</span>
      </div>

    </div>
  );
};
