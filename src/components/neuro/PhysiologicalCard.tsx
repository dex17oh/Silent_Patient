import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { Heart, Activity, Wind, Gauge } from 'lucide-react';

export const PhysiologicalCard: React.FC = () => {
  const { t } = useLanguage();
  const { neuroMetrics } = useApp();

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Heart className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">
                {t.neuro.physioCard.title}
              </h4>
              <p className="text-[10px] text-slate-400">
                {t.neuro.physioCard.desc}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full font-bold">
            rPPG Optical
          </span>
        </div>

        {/* Pulse Hemodynamic Waveform */}
        <div className="p-3 bg-slate-900 rounded-2xl mb-4 border border-slate-800">
          <div className="flex items-center justify-between text-[10px] font-mono text-rose-400 mb-1.5">
            <span className="flex items-center gap-1">
              <Activity className="w-3 h-3 animate-pulse" />
              <span>SUBDERMAL PULSE TRANSMISSION (rPPG)</span>
            </span>
            <span className="text-emerald-400">Signal: 98%</span>
          </div>

          <div className="h-20 w-full flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 320 60" className="w-full h-full">
              {/* ECG wave path */}
              <path
                d="M 0 30 L 40 30 L 50 30 L 55 10 L 60 50 L 65 20 L 70 30 L 120 30 L 130 30 L 135 10 L 140 50 L 145 20 L 150 30 L 200 30 L 210 30 L 215 10 L 220 50 L 225 20 L 230 30 L 280 30 L 290 30 L 295 10 L 300 50 L 305 20 L 310 30 L 320 30"
                fill="none"
                stroke="#f43f5e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
              />
            </svg>
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1 pt-1 border-t border-slate-800">
            <span>HR: <strong className="text-white">{neuroMetrics.heartRateEstimate} bpm</strong></span>
            <span>SpO₂: <strong className="text-white">98%</strong></span>
            <span>Resp: <strong className="text-white">{neuroMetrics.respiratoryRateEstimate} rpm</strong></span>
          </div>
        </div>

        {/* Clinical Grid Meters */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
            <span className="text-[10px] text-slate-400 font-semibold block mb-0.5">
              {t.neuro.physioCard.heartRate}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-extrabold text-slate-800">{neuroMetrics.heartRateEstimate}</span>
              <span className="text-[10px] text-slate-400">BPM</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
            <span className="text-[10px] text-slate-400 font-semibold block mb-0.5">
              {t.neuro.physioCard.hrv}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-extrabold text-slate-800">{neuroMetrics.hrvEstimated}</span>
              <span className="text-[10px] text-slate-400">ms</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
            <span className="text-[10px] text-slate-400 font-semibold block mb-0.5">
              {t.neuro.physioCard.respiration}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-extrabold text-slate-800">{neuroMetrics.respiratoryRateEstimate}</span>
              <span className="text-[10px] text-slate-400">BPM</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
            <span className="text-[10px] text-slate-400 font-semibold block mb-0.5">
              {t.neuro.physioCard.autonomicStress}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-extrabold text-slate-800">
                {neuroMetrics.heartRateEstimate > 90 ? 'High' : 'Normal'}
              </span>
              <span className="text-[10px] text-medical-600 font-bold">Symp</span>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 flex items-center justify-between font-mono">
        <span>Non-invasive Hemodynamic</span>
        <span>Filter: Butterworth Bandpass</span>
      </div>
    </div>
  );
};
