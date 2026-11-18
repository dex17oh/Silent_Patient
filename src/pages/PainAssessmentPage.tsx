import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { InteractiveBodyMap } from '../components/pain/InteractiveBodyMap';
import { PainScale } from '../components/pain/PainScale';
import { PainTypeSelector } from '../components/pain/PainTypeSelector';
import { PainDurationSelector } from '../components/pain/PainDurationSelector';
import { PainAssessmentSummaryModal } from '../components/pain/PainAssessmentSummaryModal';
import { PainAreaId, PainType, PainOnset, PainAssessmentRecord } from '../types';
import { Heart, Send, Volume2 } from 'lucide-react';

export const PainAssessmentPage: React.FC = () => {
  const { t, language } = useLanguage();
  const { submitPainAssessment, speakSentence } = useApp();

  // State for Pain Assessment
  const [selectedArea, setSelectedArea] = useState<PainAreaId>('chest');
  const [selectedView, setSelectedView] = useState<'front' | 'back'>('front');
  const [intensity, setIntensity] = useState<number>(6);
  const [selectedType, setSelectedType] = useState<PainType>('sharp');
  const [selectedOnset, setSelectedOnset] = useState<PainOnset>('few-minutes');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

  // Modal State
  const [lastSubmittedRecord, setLastSubmittedRecord] = useState<PainAssessmentRecord | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const record = submitPainAssessment({
        area: selectedArea,
        view: selectedView,
        intensity,
        type: selectedType,
        onset: selectedOnset,
        notes: additionalNotes,
      });

      setLastSubmittedRecord(record);
      setIsSubmitting(false);
      setIsModalOpen(true);
    }, 400);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Top Title & Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-700 font-bold text-xs rounded-full mb-2">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>{language === 'ar' ? 'نموذج الفحص والتقييم السريري للألم' : 'Clinical Pain Assessment Instrument'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {t.pain.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
            {t.pain.subtitle}
          </p>
        </div>

        {/* Live Status Pill */}
        <div className="flex items-center gap-3 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200/60 text-xs">
          <div className="text-start">
            <div className="text-[10px] text-slate-400 font-semibold">{t.pain.selectedArea}</div>
            <strong className="text-slate-800 text-sm">{t.pain.areas[selectedArea]}</strong>
          </div>
          <div className="h-6 w-px bg-slate-200"></div>
          <div className="text-start">
            <div className="text-[10px] text-slate-400 font-semibold">Intensity</div>
            <strong className="text-rose-600 text-sm font-mono">{intensity} / 10</strong>
          </div>
        </div>
      </div>

      {/* Main 2-Column Form Layout */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Interactive Body Map (5 Columns) */}
        <div className="lg:col-span-5 space-y-4">
          <InteractiveBodyMap
            selectedArea={selectedArea}
            selectedView={selectedView}
            onSelectArea={(area: PainAreaId, view: 'front' | 'back') => {
              setSelectedArea(area);
              setSelectedView(view);
            }}
            intensity={intensity}
          />

          {/* Quick Voice announcement helper */}
          <button
            type="button"
            onClick={() => {
              const text = language === 'ar'
                ? `أنا أشير إلى ألم في منطقة ${t.pain.areas[selectedArea]}، شدته ${intensity} من عشرة.`
                : `I am indicating pain at my ${t.pain.areas[selectedArea]}, intensity score ${intensity} out of 10.`;
              speakSentence(text);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-2xl text-xs font-bold text-slate-700 shadow-sm transition-all"
          >
            <Volume2 className="w-4 h-4 text-medical-600" />
            <span>{language === 'ar' ? 'نطق مكان وشدة الألم صوتياً' : 'Speak Selected Location & Score'}</span>
          </button>
        </div>

        {/* Right Column: Scale, Type, Onset, Submit (7 Columns) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* 2. Pain Intensity */}
          <PainScale
            intensity={intensity}
            onChange={(val: number) => setIntensity(val)}
          />

          {/* 3. Pain Type */}
          <PainTypeSelector
            selectedType={selectedType}
            onChange={(type: PainType) => setSelectedType(type)}
          />

          {/* 4. Additional Information (Onset) */}
          <PainDurationSelector
            selectedOnset={selectedOnset}
            onChange={(onset: PainOnset) => setSelectedOnset(onset)}
          />

          {/* Optional Bedside Note input */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm">
            <label className="block text-xs font-bold text-slate-800 mb-2">
              {language === 'ar' ? 'ملاحظات إضافية اختيارية للممرض أو الطبيب:' : 'Optional Bedside Notes for Care Team:'}
            </label>
            <textarea
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              placeholder={language === 'ar' ? 'مثال: يزداد الألم مع التنفس العميق أو الحركة...' : 'e.g., Pain worsens upon deep inspiration or coughing...'}
              rows={2}
              className="w-full text-xs p-3 rounded-2xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:ring-2 focus:ring-medical-400 outline-none transition-all placeholder:text-slate-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-medical-600 hover:bg-medical-700 active:scale-[0.99] text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-medical-200 transition-all duration-200"
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? t.pain.submitting : t.pain.submitBtn}</span>
            </button>
            <p className="text-[11px] text-slate-400 text-center mt-2">
              {language === 'ar' 
                ? 'سيتم إدراج هذا التقرير فوراً في لوحة تحكم الطبيب ومتابعة التمريض.' 
                : 'Will immediately dispatch and sync with Doctor Dashboard and nurse station.'}
            </p>
          </div>

        </div>

      </form>

      {/* Summary Modal */}
      <PainAssessmentSummaryModal
        record={lastSubmittedRecord}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
};
