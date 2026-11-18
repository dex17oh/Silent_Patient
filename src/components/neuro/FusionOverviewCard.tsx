import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { 
  Brain, 
  Sparkles, 
  ShieldAlert, 
  Terminal, 
  Play, 
  RotateCcw,
  AlertCircle
} from 'lucide-react';

export const FusionOverviewCard: React.FC = () => {
  const { t, language } = useLanguage();
  const { neuroMetrics, simulateNeuroScenario } = useApp();

  const getRiskBadge = () => {
    if (neuroMetrics.aiCompositePainRisk < 35) {
      return {
        label: t.neuro.overviewCard.riskLow,
        bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        dot: 'bg-emerald-500'
      };
    }
    if (neuroMetrics.aiCompositePainRisk < 65) {
      return {
        label: t.neuro.overviewCard.riskModerate,
        bg: 'bg-amber-50 text-amber-700 border-amber-200',
        dot: 'bg-amber-500'
      };
    }
    return {
      label: t.neuro.overviewCard.riskHigh,
      bg: 'bg-rose-50 text-rose-700 border-rose-300 ring-1 ring-rose-400',
      dot: 'bg-rose-500 animate-ping'
    };
  };

  const risk = getRiskBadge();

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-medical-50 text-medical-600 flex items-center justify-center">
              <Brain className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">
                {t.neuro.overviewCard.title}
              </h4>
              <p className="text-[10px] text-slate-400">
                {language === 'ar' ? 'دمج مخرجات المستشعرات المتعددة في مؤشر موحد' : 'Multimodal neural fusion inference engine'}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono bg-medical-50 text-medical-700 px-2 py-0.5 rounded-full font-bold">
            Bayesian Fusion
          </span>
        </div>

        {/* Big Fusion Score Gauge Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white mb-4 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 end-0 -mt-4 -me-4 w-28 h-28 bg-medical-500/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] text-slate-400 font-medium block mb-1">
                {t.neuro.overviewCard.compositeScore}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white tracking-tight">
                  {neuroMetrics.aiCompositePainRisk}%
                </span>
                <span className="text-xs text-cyan-300 font-mono">
                  (Confidence: {neuroMetrics.aiConfidence}%)
                </span>
              </div>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
              <Sparkles className="w-7 h-7 text-cyan-300 animate-pulse" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between">
            <span className="text-xs text-slate-300">{t.neuro.overviewCard.riskLevel}:</span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${risk.bg}`}>
              <span className={`w-2 h-2 rounded-full ${risk.dot}`}></span>
              <span>{risk.label}</span>
            </span>
          </div>
        </div>

        {/* Multimodal Contributors Breakdown */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-[11px] text-slate-600 font-medium">
            <span>Facial Grimace Factor (AU4+AU6)</span>
            <strong className="font-mono">{neuroMetrics.facialGrimaceScore}%</strong>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-lavender-500" style={{ width: `${neuroMetrics.facialGrimaceScore}%` }}></div>
          </div>

          <div className="flex justify-between text-[11px] text-slate-600 font-medium pt-1">
            <span>Kinetic Agitation Factor (IMU)</span>
            <strong className="font-mono">{neuroMetrics.motorAgitationScore}%</strong>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500" style={{ width: `${neuroMetrics.motorAgitationScore}%` }}></div>
          </div>

          <div className="flex justify-between text-[11px] text-slate-600 font-medium pt-1">
            <span>Autonomic Tone Factor (rPPG HR)</span>
            <strong className="font-mono">{Math.min(100, Math.round((neuroMetrics.heartRateEstimate / 110) * 100))}%</strong>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-rose-500" style={{ width: `${Math.min(100, Math.round((neuroMetrics.heartRateEstimate / 110) * 100))}%` }}></div>
          </div>
        </div>

        {/* Interactive Scenario Simulators */}
        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
          <div className="text-[11px] font-bold text-slate-700 mb-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-medical-600" />
            <span>{language === 'ar' ? 'تشغيل سيناريوهات المحاكاة التفاعلية:' : 'Demo Scenario Simulator:'}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={() => simulateNeuroScenario('pain-spike')}
              className="py-1.5 px-2 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold rounded-xl text-[10px] border border-rose-200 transition-colors"
            >
              {t.neuro.simulateStress}
            </button>
            <button
              onClick={() => simulateNeuroScenario('calm')}
              className="py-1.5 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded-xl text-[10px] border border-emerald-200 transition-colors"
            >
              {t.neuro.simulateCalm}
            </button>
            <button
              onClick={() => simulateNeuroScenario('motor-restless')}
              className="py-1.5 px-2 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold rounded-xl text-[10px] border border-amber-200 transition-colors"
            >
              {language === 'ar' ? 'محاكاة القلق الحركي' : 'Simulate Agitation'}
            </button>
          </div>
        </div>

      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 flex items-center justify-between font-mono">
        <span>Updated: {neuroMetrics.lastUpdate}</span>
        <span>Version: 0.9.4a-Sim</span>
      </div>
    </div>
  );
};
