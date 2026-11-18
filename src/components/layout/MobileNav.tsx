import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useApp } from '../../context/AppContext';
import { NavigationTab } from '../../types';
import { 
  Home, 
  MessageSquare, 
  Heart, 
  LayoutDashboard, 
  Brain, 
  Settings 
} from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { t } = useLanguage();
  const { activeTab, setActiveTab } = useApp();

  const items: { id: NavigationTab; label: string; icon: React.ElementType }[] = [
    { id: 'overview', label: t.nav.overview, icon: Home },
    { id: 'communication', label: t.nav.communication, icon: MessageSquare },
    { id: 'pain-assessment', label: t.nav.painAssessment, icon: Heart },
    { id: 'doctor-dashboard', label: t.nav.doctorDashboard, icon: LayoutDashboard },
    { id: 'neuro-analysis', label: t.nav.neuroAnalysis, icon: Brain },
    { id: 'settings', label: t.nav.settings, icon: Settings },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 start-0 end-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-2 py-1.5 shadow-lg">
      <div className="flex items-center justify-around gap-1 max-w-md mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
                isActive
                  ? 'text-medical-600 font-bold scale-105'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${isActive ? 'bg-medical-50 text-medical-600' : ''}`}>
                <Icon className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-[10px] mt-0.5 line-clamp-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
