import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TrendingUp, BarChart3, Activity } from 'lucide-react';

export const SimpleTrendsChart: React.FC = () => {
  const { t, language } = useLanguage();

  // Mock 24-hr pain trajectory data
  const trendData = [
    { time: '00:00', score: 3 },
    { time: '04:00', score: 2 },
    { time: '08:00', score: 5 },
    { time: '12:00', score: 4 },
    { time: '16:00', score: 7 },
    { time: '20:00', score: 4 },
  ];

  // Request category breakdown
  const categoryStats = [
    { name: language === 'ar' ? 'الماء والعطش' : 'Hydration', count: 18, color: 'bg-sky-500', pct: 36 },
    { name: language === 'ar' ? 'تسكين الألم' : 'Analgesia/Pain', count: 14, color: 'bg-rose-500', pct: 28 },
    { name: language === 'ar' ? 'تعديل الوضعية' : 'Repositioning', count: 10, color: 'bg-amber-500', pct: 20 },
    { name: language === 'ar' ? 'المرحاض / رعاية' : 'Hygiene/Restroom', count: 8, color: 'bg-teal-500', pct: 16 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* 24-Hour Pain Trajectory */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-sm">
                {t.doctor.charts.painTrend}
              </h4>
              <span className="text-[10px] text-slate-400">
                {language === 'ar' ? 'متابعة الاستجابة لبروتوكول التسكين' : 'Continuous VAS pain telemetry response'}
              </span>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-xl">
            Avg: 4.1 / 10
          </span>
        </div>

        {/* SVG Curve Chart */}
        <div className="relative h-44 w-full flex items-end pt-4">
          <svg viewBox="0 0 500 160" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="painGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid horizontal guidelines */}
            <line x1="0" y1="20" x2="500" y2="20" stroke="#f1f5f9" strokeDasharray="4 4" strokeWidth="1" />
            <line x1="0" y1="65" x2="500" y2="65" stroke="#f1f5f9" strokeDasharray="4 4" strokeWidth="1" />
            <line x1="0" y1="110" x2="500" y2="110" stroke="#f1f5f9" strokeDasharray="4 4" strokeWidth="1" />
            <line x1="0" y1="150" x2="500" y2="150" stroke="#e2e8f0" strokeWidth="1" />

            {/* Area fill */}
            <path
              d="M 20 120 L 100 135 L 180 85 L 260 100 L 340 50 L 440 95 L 440 150 L 20 150 Z"
              fill="url(#painGrad)"
            />

            {/* Line curve */}
            <path
              d="M 20 120 L 100 135 L 180 85 L 260 100 L 340 50 L 440 95"
              fill="none"
              stroke="#e11d48"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Dots */}
            {[
              { x: 20, y: 120, val: 3 },
              { x: 100, y: 135, val: 2 },
              { x: 180, y: 85, val: 5 },
              { x: 260, y: 100, val: 4 },
              { x: 340, y: 50, val: 7 },
              { x: 440, y: 95, val: 4 },
            ].map((p, idx) => (
              <g key={idx}>
                <circle cx={p.x} cy={p.y} r="5" fill="#ffffff" stroke="#e11d48" strokeWidth="3" />
                <text x={p.x} y={p.y - 10} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                  {p.val}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2 pt-2 border-t border-slate-100">
          {trendData.map((d, i) => (
            <span key={i}>{d.time}</span>
          ))}
        </div>
      </div>

      {/* Distribution of Requests */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-sm">
                {t.doctor.charts.requestDistribution}
              </h4>
              <span className="text-[10px] text-slate-400">
                {language === 'ar' ? 'تصنيف رغبات واحتياجات المرضى' : 'Aggregated non-verbal communication taxonomy'}
              </span>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-xl">
            Total: 50
          </span>
        </div>

        {/* Progress Bars */}
        <div className="space-y-3.5 my-auto">
          {categoryStats.map((cat, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                <span>{cat.name}</span>
                <span className="font-mono text-slate-500">{cat.count} ({cat.pct}%)</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${cat.color}`}
                  style={{ width: `${cat.pct}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60 text-[11px] text-slate-500 mt-4 flex items-center justify-between">
          <span>{language === 'ar' ? 'أسرع استجابة تمريضية:' : 'Median nurse response time:'}</span>
          <strong className="text-emerald-700 font-mono">1.8 min</strong>
        </div>
      </div>

    </div>
  );
};
