import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PainAreaId } from '../../types';
import { RotateCw, CheckCircle, MapPin } from 'lucide-react';

interface InteractiveBodyMapProps {
  selectedArea: PainAreaId;
  selectedView: 'front' | 'back';
  onSelectArea: (area: PainAreaId, view: 'front' | 'back') => void;
  intensity: number;
}

export const InteractiveBodyMap: React.FC<InteractiveBodyMapProps> = ({
  selectedArea,
  selectedView,
  onSelectArea,
  intensity,
}) => {
  const { t } = useLanguage();
  const [view, setView] = useState<'front' | 'back'>(selectedView);

  const handleToggleView = (newView: 'front' | 'back') => {
    setView(newView);
    onSelectArea(selectedArea, newView);
  };

  // Intensity color for pin/highlight
  const getIntensityColor = () => {
    if (intensity === 0) return '#10b981'; // emerald
    if (intensity <= 3) return '#0ea5e9'; // sky
    if (intensity <= 6) return '#f59e0b'; // amber
    if (intensity <= 8) return '#f97316'; // orange
    return '#ef4444'; // red
  };

  const activeColor = getIntensityColor();

  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex flex-col items-center">
      {/* Header & View Switcher */}
      <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div>
          <h4 className="font-bold text-slate-800 text-sm">
            {t.pain.locationTitle}
          </h4>
          <p className="text-[11px] text-slate-400">
            {t.pain.locationDesc}
          </p>
        </div>

        {/* Front / Back Toggle Buttons */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200/60">
          <button
            type="button"
            onClick={() => handleToggleView('front')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              view === 'front'
                ? 'bg-white text-medical-700 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {t.pain.frontView}
          </button>
          <button
            type="button"
            onClick={() => handleToggleView('back')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              view === 'back'
                ? 'bg-white text-medical-700 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {t.pain.backView}
          </button>
        </div>
      </div>

      {/* Anatomical SVG Interactive Body */}
      <div className="relative w-full max-w-[320px] aspect-[1/1.6] flex items-center justify-center my-3 select-none">
        
        {/* SVG Diagram */}
        <svg
          viewBox="0 0 240 380"
          className="w-full h-full filter drop-shadow-sm transition-all"
        >
          <defs>
            <linearGradient id="bodyBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* BACKGROUND SILHOUETTE OUTLINE */}
          <g className="transition-all duration-300">
            
            {/* HEAD */}
            <path
              d="M 120 22 C 102 22 98 42 98 58 C 98 75 106 88 120 88 C 134 88 142 75 142 58 C 142 42 138 22 120 22 Z"
              onClick={() => onSelectArea('head', view)}
              className="cursor-pointer transition-all duration-200"
              fill={selectedArea === 'head' ? activeColor : '#e2e8f0'}
              fillOpacity={selectedArea === 'head' ? '0.85' : '1'}
              stroke={selectedArea === 'head' ? activeColor : '#cbd5e1'}
              strokeWidth={selectedArea === 'head' ? '3' : '1.5'}
            />

            {/* NECK */}
            <path
              d="M 112 88 L 128 88 L 132 102 L 108 102 Z"
              onClick={() => onSelectArea('neck', view)}
              className="cursor-pointer transition-all duration-200"
              fill={selectedArea === 'neck' ? activeColor : '#e2e8f0'}
              fillOpacity={selectedArea === 'neck' ? '0.85' : '1'}
              stroke={selectedArea === 'neck' ? activeColor : '#cbd5e1'}
              strokeWidth={selectedArea === 'neck' ? '3' : '1.5'}
            />

            {view === 'front' ? (
              <>
                {/* CHEST (Front Only) */}
                <path
                  d="M 94 102 L 146 102 L 142 144 L 98 144 Z"
                  onClick={() => onSelectArea('chest', view)}
                  className="cursor-pointer transition-all duration-200"
                  fill={selectedArea === 'chest' ? activeColor : '#e2e8f0'}
                  fillOpacity={selectedArea === 'chest' ? '0.85' : '1'}
                  stroke={selectedArea === 'chest' ? activeColor : '#cbd5e1'}
                  strokeWidth={selectedArea === 'chest' ? '3' : '1.5'}
                />

                {/* ABDOMEN (Front Only) */}
                <path
                  d="M 98 145 L 142 145 L 140 188 L 100 188 Z"
                  onClick={() => onSelectArea('abdomen', view)}
                  className="cursor-pointer transition-all duration-200"
                  fill={selectedArea === 'abdomen' ? activeColor : '#e2e8f0'}
                  fillOpacity={selectedArea === 'abdomen' ? '0.85' : '1'}
                  stroke={selectedArea === 'abdomen' ? activeColor : '#cbd5e1'}
                  strokeWidth={selectedArea === 'abdomen' ? '3' : '1.5'}
                />
              </>
            ) : (
              <>
                {/* BACK (Back View) */}
                <path
                  d="M 92 102 L 148 102 L 142 188 L 98 188 Z"
                  onClick={() => onSelectArea('back', view)}
                  className="cursor-pointer transition-all duration-200"
                  fill={selectedArea === 'back' ? activeColor : '#e2e8f0'}
                  fillOpacity={selectedArea === 'back' ? '0.85' : '1'}
                  stroke={selectedArea === 'back' ? activeColor : '#cbd5e1'}
                  strokeWidth={selectedArea === 'back' ? '3' : '1.5'}
                />
              </>
            )}

            {/* LEFT ARM & RIGHT ARM */}
            {/* Left Arm */}
            <path
              d="M 94 104 L 72 135 L 56 195 L 68 200 L 84 148 L 96 118 Z"
              onClick={() => onSelectArea('arms', view)}
              className="cursor-pointer transition-all duration-200"
              fill={selectedArea === 'arms' ? activeColor : '#e2e8f0'}
              fillOpacity={selectedArea === 'arms' ? '0.85' : '1'}
              stroke={selectedArea === 'arms' ? activeColor : '#cbd5e1'}
              strokeWidth={selectedArea === 'arms' ? '3' : '1.5'}
            />
            {/* Right Arm */}
            <path
              d="M 146 104 L 168 135 L 184 195 L 172 200 L 156 148 L 144 118 Z"
              onClick={() => onSelectArea('arms', view)}
              className="cursor-pointer transition-all duration-200"
              fill={selectedArea === 'arms' ? activeColor : '#e2e8f0'}
              fillOpacity={selectedArea === 'arms' ? '0.85' : '1'}
              stroke={selectedArea === 'arms' ? activeColor : '#cbd5e1'}
              strokeWidth={selectedArea === 'arms' ? '3' : '1.5'}
            />

            {/* HANDS */}
            {/* Left Hand */}
            <path
              d="M 54 196 L 46 220 C 44 225 56 228 60 222 L 68 202 Z"
              onClick={() => onSelectArea('hands', view)}
              className="cursor-pointer transition-all duration-200"
              fill={selectedArea === 'hands' ? activeColor : '#e2e8f0'}
              fillOpacity={selectedArea === 'hands' ? '0.85' : '1'}
              stroke={selectedArea === 'hands' ? activeColor : '#cbd5e1'}
              strokeWidth={selectedArea === 'hands' ? '3' : '1.5'}
            />
            {/* Right Hand */}
            <path
              d="M 186 196 L 194 220 C 196 225 184 228 180 222 L 172 202 Z"
              onClick={() => onSelectArea('hands', view)}
              className="cursor-pointer transition-all duration-200"
              fill={selectedArea === 'hands' ? activeColor : '#e2e8f0'}
              fillOpacity={selectedArea === 'hands' ? '0.85' : '1'}
              stroke={selectedArea === 'hands' ? activeColor : '#cbd5e1'}
              strokeWidth={selectedArea === 'hands' ? '3' : '1.5'}
            />

            {/* PELVIS / HIPS */}
            <path
              d="M 100 188 L 140 188 L 146 222 L 94 222 Z"
              onClick={() => onSelectArea(view === 'front' ? 'abdomen' : 'back', view)}
              className="cursor-pointer transition-all duration-200 opacity-60"
              fill="#e2e8f0"
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />

            {/* LEGS */}
            {/* Left Leg */}
            <path
              d="M 94 222 L 116 222 L 112 305 L 96 305 Z"
              onClick={() => onSelectArea('legs', view)}
              className="cursor-pointer transition-all duration-200"
              fill={selectedArea === 'legs' ? activeColor : '#e2e8f0'}
              fillOpacity={selectedArea === 'legs' ? '0.85' : '1'}
              stroke={selectedArea === 'legs' ? activeColor : '#cbd5e1'}
              strokeWidth={selectedArea === 'legs' ? '3' : '1.5'}
            />
            {/* Right Leg */}
            <path
              d="M 124 222 L 146 222 L 144 305 L 128 305 Z"
              onClick={() => onSelectArea('legs', view)}
              className="cursor-pointer transition-all duration-200"
              fill={selectedArea === 'legs' ? activeColor : '#e2e8f0'}
              fillOpacity={selectedArea === 'legs' ? '0.85' : '1'}
              stroke={selectedArea === 'legs' ? activeColor : '#cbd5e1'}
              strokeWidth={selectedArea === 'legs' ? '3' : '1.5'}
            />

            {/* FEET */}
            {/* Left Foot */}
            <path
              d="M 96 306 L 112 306 L 114 340 C 114 348 90 348 90 340 L 96 306 Z"
              onClick={() => onSelectArea('feet', view)}
              className="cursor-pointer transition-all duration-200"
              fill={selectedArea === 'feet' ? activeColor : '#e2e8f0'}
              fillOpacity={selectedArea === 'feet' ? '0.85' : '1'}
              stroke={selectedArea === 'feet' ? activeColor : '#cbd5e1'}
              strokeWidth={selectedArea === 'feet' ? '3' : '1.5'}
            />
            {/* Right Foot */}
            <path
              d="M 128 306 L 144 306 L 150 340 C 150 348 126 348 126 340 L 128 306 Z"
              onClick={() => onSelectArea('feet', view)}
              className="cursor-pointer transition-all duration-200"
              fill={selectedArea === 'feet' ? activeColor : '#e2e8f0'}
              fillOpacity={selectedArea === 'feet' ? '0.85' : '1'}
              stroke={selectedArea === 'feet' ? activeColor : '#cbd5e1'}
              strokeWidth={selectedArea === 'feet' ? '3' : '1.5'}
            />

          </g>

          {/* Animated Target Radar / Pin at selected region */}
          {selectedArea === 'head' && <circle cx="120" cy="55" r="7" fill={activeColor} className="animate-ping" opacity="0.6" />}
          {selectedArea === 'neck' && <circle cx="120" cy="95" r="5" fill={activeColor} className="animate-ping" opacity="0.6" />}
          {selectedArea === 'chest' && view === 'front' && <circle cx="120" cy="122" r="9" fill={activeColor} className="animate-ping" opacity="0.6" />}
          {selectedArea === 'abdomen' && view === 'front' && <circle cx="120" cy="165" r="8" fill={activeColor} className="animate-ping" opacity="0.6" />}
          {selectedArea === 'back' && view === 'back' && <circle cx="120" cy="145" r="9" fill={activeColor} className="animate-ping" opacity="0.6" />}
          {selectedArea === 'arms' && <circle cx="70" cy="155" r="6" fill={activeColor} className="animate-ping" opacity="0.6" />}
          {selectedArea === 'hands' && <circle cx="52" cy="210" r="6" fill={activeColor} className="animate-ping" opacity="0.6" />}
          {selectedArea === 'legs' && <circle cx="104" cy="265" r="7" fill={activeColor} className="animate-ping" opacity="0.6" />}
          {selectedArea === 'feet' && <circle cx="103" cy="328" r="6" fill={activeColor} className="animate-ping" opacity="0.6" />}
        </svg>

        {/* Floating Selected Tag */}
        <div className="absolute bottom-2 start-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg whitespace-nowrap">
          <MapPin className="w-3.5 h-3.5 text-rose-400" />
          <span>{t.pain.areas[selectedArea]}</span>
          <span className="text-slate-400 text-[10px]">({view === 'front' ? t.pain.frontView : t.pain.backView})</span>
        </div>

      </div>

      {/* Quick Region Selector Pills */}
      <div className="w-full mt-3 pt-3 border-t border-slate-100">
        <div className="text-[11px] font-bold text-slate-400 mb-2">
          {t.pain.selectedArea} <strong className="text-medical-700">{t.pain.areas[selectedArea]}</strong>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(['head', 'neck', 'chest', 'abdomen', 'back', 'arms', 'hands', 'legs', 'feet'] as PainAreaId[]).map((areaId) => {
            const isSel = selectedArea === areaId;
            return (
              <button
                key={areaId}
                type="button"
                onClick={() => {
                  const targetView = areaId === 'back' ? 'back' : (areaId === 'chest' || areaId === 'abdomen' ? 'front' : view);
                  if (targetView !== view) setView(targetView);
                  onSelectArea(areaId, targetView);
                }}
                className={`px-2.5 py-1 rounded-xl text-xs font-medium transition-all ${
                  isSel
                    ? 'bg-medical-500 text-white font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.pain.areas[areaId]}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
