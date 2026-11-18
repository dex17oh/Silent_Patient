import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { FacialAnalysisCard } from '../components/neuro/FacialAnalysisCard';
import { BodyMovementCard } from '../components/neuro/BodyMovementCard';
import { PhysiologicalCard } from '../components/neuro/PhysiologicalCard';
import { FusionOverviewCard } from '../components/neuro/FusionOverviewCard';
import { 
  Brain, 
  Sparkles, 
  Cpu 
} from 'lucide-react';

export const NeuroAnalysisPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Prominent Mandatory Experimental Prototype Banner */}
      <div className="rounded-3xl p-6 bg-gradient-to-r from-lavender-500/10 via-purple-500/10 to-medical-500/10 border-2 border-lavender-300/80 shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-lavender-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-lavender-200">
              <Brain className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-3 py-0.5 rounded-full text-xs font-black bg-lavender-600 text-white tracking-wide uppercase">
                  {t.neuro.experimentalBanner}
                </span>
                <span className="text-[11px] font-mono text-purple-700 font-bold bg-white px-2 py-0.5 rounded border border-purple-200">
                  Concept Demonstration
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {t.neuro.title}
              </h2>
              <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
                {t.neuro.experimentalDisclaimer}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-xs text-xs font-mono">
            <Cpu className="w-4 h-4 text-purple-600 animate-spin" />
            <span>AI Pipeline: v0.9 (Pre-Alpha)</span>
          </div>
        </div>
      </div>

      {/* Optical Sensor Active Notice Bar */}
      <div className="p-3.5 bg-slate-900 rounded-2xl text-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono shadow-md">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-cyan-300 font-bold">{t.neuro.cameraSimulation}</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300 text-[11px]">{t.neuro.scanningStatus}</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span>Latency: ~12ms</span>
          <span>Inference: Edge NPU</span>
        </div>
      </div>

      {/* 4 Core Demonstration Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Card 1: Facial Expression Analysis */}
        <FacialAnalysisCard />

        {/* Card 2: Body Movement Analysis */}
        <BodyMovementCard />

        {/* Card 3: Physiological Indicators */}
        <PhysiologicalCard />

        {/* Card 4: Analysis Overview & Multimodal Fusion */}
        <FusionOverviewCard />

      </div>

      {/* Technical Architecture Future Roadmap Notice */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
        <h3 className="font-extrabold text-slate-900 text-sm mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-medical-600" />
          <span>{language === 'ar' ? 'مسار التطوير المستقبلي لنموذج الذكاء الاصطناعي' : 'Future Multimodal AI Integration Roadmap'}</span>
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-4">
          {language === 'ar' 
            ? 'في الإصدارات المستقبلية، سيتم ربط هذه الواجهة بنماذج رؤية حاسوبية مدربة سريرياً (FACS CNNs و Transformers) لتحليل ملامح الوجه وتغيرات الدورة الدموية الدقيقة دون الحاجة لأي حساسات لاصقة ترهق المريض.' 
            : 'In future production stages, this module will ingest live non-invasive camera feeds processed through edge vision transformers to detect subtle pain grimacing and hemodynamic micro-variations without cumbersome patient wiring.'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60 font-mono text-slate-700">
            <strong>Stage 1 (Current):</strong> Interactive UX & Clinical Workflow Simulator
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60 font-mono text-slate-700">
            <strong>Stage 2 (Planned):</strong> On-device MediaPipe FaceMesh & rPPG extraction
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60 font-mono text-slate-700">
            <strong>Stage 3 (Future):</strong> Multi-center Clinical Validation & EMR HL7 Export
          </div>
        </div>
      </div>

    </div>
  );
};
