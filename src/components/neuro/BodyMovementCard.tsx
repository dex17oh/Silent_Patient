import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { Activity, Move, Waves, AlertTriangle } from 'lucide-react';

export const BodyMovementCard: React.FC = () => {
  const { t, language } = useLanguage();
  const { neuroMetrics } = useApp();

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Move className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">
                {t.neuro.motionCard.title}
              </h4>
              <p className="text-[10px] text-slate-400">
                {t.neuro.motionCard.desc}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-bold">
            Kinetic IMU
          </span>
        </div>

        {/* Real-time Tremor / Kinetic Wave Simulation */}
        <div className="p-3 bg-slate-900 rounded-2xl mb-4 border border-slate-800">
          <div className="flex items-center justify-between text-[10px] font-mono text-amber-400 mb-1.5">
            <span className="flex items-center gap-1">
              <Waves className="w-3 h-3 animate-pulse" />
              <span>MOTOR AGITATION DISPERSION</span>
            </span>
            <span>Freq: 4.8 Hz</span>
          </div>

          <div className="h-20 w-full flex items-center justify-center">
            <svg viewBox="0 0 300 70" className="w-full h-full overflow-hidden">
              <path
                d={
                  neuroMetrics.motorAgitationScore > 50
                    ? "M 0 35 Q 25 10 50 35 T 100 35 T 150 15 T 200 55 T 250 20 T 300 35"
                    : "M 0 35 Q 25 30 50 35 T 100 35 T 150 32 T 200 37 T 250 34 T 300 35"
                }
                fill="none"
                stroke={neuroMetrics.motorAgitationScore > 50 ? '#f59e0b' : '#38bdf8'}
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            </svg>
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1 pt-1 border-t border-slate-800">
            <span>Score: {neuroMetrics.motorAgitationScore}/100</span>
            <span className={neuroMetrics.motorAgitationScore > 50 ? 'text-amber-400 font-bold' : 'text-emerald-400'}>
              {neuroMetrics.motorAgitationScore > 50 ? 'Agitation Detected' : 'Calm / Resting'}
            </span>
          </div>
        </div>

        {/* Meters */}
        <div className="space-y-3">
          {/* Restlessness Index */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
              <span>{t.neuro.motionCard.restlessness}</span>
              <span className="font-mono text-slate-500">{neuroMetrics.motorAgitationScore}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${
                  neuroMetrics.motorAgitationScore > 50 ? 'bg-amber-500' : 'bg-turquoise-500'
                }`}
                style={{ width: `${neuroMetrics.motorAgitationScore}%` }}
              ></div>
            </div>
          </div>

          {/* Muscle Rigidity */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
              <span>{t.neuro.motionCard.rigidity}</span>
              <span className="font-mono text-slate-500">{neuroMetrics.muscleRigidityIndex}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full bg-medical-500 transition-all duration-300"
                style={{ width: `${neuroMetrics.muscleRigidityIndex}%` }}
              ></div>
            </div>
          </div>

          {/* Posture shifts */}
          <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl text-xs">
            <span className="text-slate-600 font-medium">{t.neuro.motionCard.postureShifts}</span>
            <span className="font-mono font-bold text-slate-800">{neuroMetrics.postureShiftRate} shifts/h</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 flex items-center justify-between font-mono">
        <span>Sampling Rate: 60 Hz</span>
        <span>Sensor: Depth 3D Skeleton</span>
      </div>
    </div>
  );
};
