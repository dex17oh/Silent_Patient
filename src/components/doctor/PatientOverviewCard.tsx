import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { 
  User, 
  Activity, 
  Heart, 
  Thermometer, 
  Wind, 
  FileText, 
  AlertTriangle,
  Bed,
  CheckCircle2
} from 'lucide-react';
import { PatientDetailsModal } from './PatientDetailsModal';

export const PatientOverviewCard: React.FC = () => {
  const { t, language } = useLanguage();
  const { activePatient } = useApp();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden">
        {/* Top Accent Gradient Border */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-medical-500 via-turquoise-400 to-lavender-500"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-medical-500 to-turquoise-500 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-medical-100">
              <User className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {language === 'ar' ? activePatient.nameAr : activePatient.name}
                </h3>
                <span className="text-xs bg-medical-50 text-medical-700 font-bold px-2.5 py-0.5 rounded-full border border-medical-200/60">
                  {t.room} {activePatient.roomNumber} • {t.bed} {activePatient.bedNumber}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                {activePatient.primaryCondition}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all shadow-xs"
          >
            <FileText className="w-4 h-4 text-medical-600" />
            <span>{t.doctor.patientCard.viewFullDetails}</span>
          </button>
        </div>

        {/* Clinical Grid Details */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
          
          {/* Heart Rate */}
          <div className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/60">
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-semibold mb-1">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>HR (النبض)</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-slate-800">{activePatient.heartRate}</span>
              <span className="text-[10px] text-slate-400">bpm</span>
            </div>
          </div>

          {/* Blood Pressure */}
          <div className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/60">
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-semibold mb-1">
              <Activity className="w-3.5 h-3.5 text-medical-500" />
              <span>BP (الضغط)</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-slate-800">{activePatient.bloodPressure}</span>
              <span className="text-[10px] text-slate-400">mmHg</span>
            </div>
          </div>

          {/* Oxygen Saturation */}
          <div className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/60">
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-semibold mb-1">
              <Wind className="w-3.5 h-3.5 text-turquoise-500" />
              <span>SpO₂ (الأكسجين)</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-slate-800">{activePatient.oxygenSaturation}%</span>
              <span className="text-[10px] text-emerald-600 font-bold">Optimal</span>
            </div>
          </div>

          {/* Body Temperature */}
          <div className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/60">
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-semibold mb-1">
              <Thermometer className="w-3.5 h-3.5 text-amber-500" />
              <span>Temp (الحرارة)</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-slate-800">{activePatient.temperature}°C</span>
              <span className="text-[10px] text-slate-400">Norm</span>
            </div>
          </div>

        </div>

        {/* Communication Barrier Indicator Bar */}
        <div className="p-3 bg-medical-50/60 border border-medical-100 rounded-2xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">{t.doctor.patientCard.commBarrier}:</span>
            <span className="text-medical-800 font-medium">{activePatient.communicationStatus}</span>
          </div>
          <span className="hidden sm:inline text-[11px] text-slate-400">
            {t.doctor.patientCard.admission}: {activePatient.admissionDate}
          </span>
        </div>

      </div>

      {/* Details Modal */}
      <PatientDetailsModal
        patient={activePatient}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};
