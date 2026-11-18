import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { notifications, removeNotification } = useApp();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-20 end-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {notifications.map((notif) => {
        let borderClass = 'border-medical-200 bg-white/95 text-slate-800 shadow-medical-100/50';
        let icon = <Info className="w-5 h-5 text-medical-600 shrink-0" />;

        if (notif.type === 'success') {
          borderClass = 'border-emerald-200 bg-white/95 text-slate-800 shadow-emerald-100/50';
          icon = <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />;
        } else if (notif.type === 'warning') {
          borderClass = 'border-amber-200 bg-white/95 text-slate-800 shadow-amber-100/50';
          icon = <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />;
        } else if (notif.type === 'urgent') {
          borderClass = 'border-rose-300 bg-rose-50/95 text-rose-900 shadow-rose-200/50 ring-2 ring-rose-400/50';
          icon = <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 animate-bounce" />;
        }

        return (
          <div
            key={notif.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl border shadow-xl backdrop-blur-md transition-all duration-300 animate-in slide-in-from-top-4 fade-in ${borderClass}`}
          >
            {icon}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-bold truncate">{notif.title}</h4>
                <span className="text-[10px] opacity-60 font-mono">{notif.timestamp}</span>
              </div>
              <p className="text-xs mt-0.5 opacity-90 leading-relaxed">{notif.message}</p>
            </div>
            <button
              onClick={() => removeNotification(notif.id)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
