import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { Eye, Scan, Camera, Sparkles, CheckCircle2 } from 'lucide-react';

export const FacialAnalysisCard: React.FC = () => {
  const { t, language } = useLanguage();
  const { neuroMetrics } = useApp();
  const [pulseScan, setPulseScan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseScan(p => (p + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-lavender-50 text-lavender-600 flex items-center justify-center">
              <Eye className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">
                {t.neuro.facialCard.title}
              </h4>
              <p className="text-[10px] text-slate-400">
                {t.neuro.facialCard.desc}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono bg-lavender-50 text-lavender-700 px-2 py-0.5 rounded-full font-bold">
            FACS Mesh
          </span>
        </div>

        {/* Simulated Camera & Landmark Mesh Viewport */}
        <div className="relative aspect-video rounded-2xl bg-slate-950 overflow-hidden mb-4 border border-slate-800 flex items-center justify-center group shadow-inner">
          
          {/* Subtle Grid / Scan lines */}
          <div className="absolute inset-0 bg-medical-grid opacity-20 pointer-events-none"></div>

          {/* Animated Scanning Beam */}
          <div 
            className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 pointer-events-none shadow-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            style={{ top: `${pulseScan}%` }}
          ></div>

          {/* Simulated Face Outline & Wireframe Landmarks SVG */}
          <svg viewBox="0 0 200 160" className="w-48 h-36 opacity-75">
            {/* Face Oval */}
            <ellipse cx="100" cy="80" rx="46" ry="60" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Eyebrows */}
            <path d="M 70 54 Q 82 50 94 56" fill="none" stroke={neuroMetrics.browFurrowIntensity > 50 ? '#f43f5e' : '#38bdf8'} strokeWidth="2" />
            <path d="M 106 56 Q 118 50 130 54" fill="none" stroke={neuroMetrics.browFurrowIntensity > 50 ? '#f43f5e' : '#38bdf8'} strokeWidth="2" />
            
            {/* Eyes */}
            <ellipse cx="82" cy="66" rx="8" ry="4" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="82" cy="66" r="2" fill="#38bdf8" />
            <ellipse cx="118" cy="66" rx="8" ry="4" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="118" cy="66" r="2" fill="#38bdf8" />

            {/* Nose Bridge & Base */}
            <path d="M 100 58 L 100 90 L 92 96 L 108 96" fill="none" stroke="#0ea5e9" strokeWidth="1.2" />

            {/* Mouth / Grimace points */}
            <path 
              d={neuroMetrics.facialGrimaceScore > 50 
                ? "M 80 118 Q 100 110 120 118 Q 100 124 80 118" 
                : "M 82 116 Q 100 122 118 116"} 
              fill="none" 
              stroke={neuroMetrics.facialGrimaceScore > 50 ? '#f43f5e' : '#2dd4bf'} 
              strokeWidth="2" 
            />

            {/* Connected Triangulation Landmark points */}
            {[
              {x: 70, y: 54}, {x: 94, y: 56}, {x: 106, y: 56}, {x: 130, y: 54},
              {x: 82, y: 66}, {x: 118, y: 66}, {x: 100, y: 78}, {x: 100, y: 96},
              {x: 80, y: 118}, {x: 120, y: 118}, {x: 100, y: 138}
            ].map((pt, i) => (
              <circle key={i} cx={pt.x} cy={pt.y} r="2.5" fill="#38bdf8" className="animate-pulse" />
            ))}
          </svg>

          {/* Viewport Top HUD Overlays */}
          <div className="absolute top-2 start-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[9px] text-cyan-300 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span>468 LANDMARKS</span>
          </div>

          <div className="absolute top-2 end-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[9px] text-slate-300 font-mono">
            FPS: 30.2 • 1080p
          </div>

          {/* Viewport Bottom Overlay */}
          <div className="absolute bottom-2 inset-x-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] text-white flex items-center justify-between font-mono">
            <span>Grimace Score: <strong className={neuroMetrics.facialGrimaceScore > 50 ? 'text-rose-400' : 'text-emerald-400'}>{neuroMetrics.facialGrimaceScore}%</strong></span>
            <span className="text-slate-400">AU4, AU6, AU9, AU12</span>
          </div>

        </div>

        {/* Feature Sliders / Indicators */}
        <div className="space-y-2.5">
          {/* Brow Furrow */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
              <span>{t.neuro.facialCard.browFurrow}</span>
              <span className="font-mono text-slate-500">{neuroMetrics.browFurrowIntensity}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${
                  neuroMetrics.browFurrowIntensity > 50 ? 'bg-rose-500' : 'bg-medical-500'
                }`}
                style={{ width: `${neuroMetrics.browFurrowIntensity}%` }}
              ></div>
            </div>
          </div>

          {/* Eye Blink Rate */}
          <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl text-xs">
            <span className="text-slate-600 font-medium">معدل ارتعاش وطرف الأجفان</span>
            <span className="font-mono font-bold text-slate-800">{neuroMetrics.eyeBlinkRate} blinks/min</span>
          </div>

        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 flex items-center justify-between font-mono">
        <span>FACS Confidence: 92.4%</span>
        <span>Sensor: RGB-D Vision</span>
      </div>
    </div>
  );
};
