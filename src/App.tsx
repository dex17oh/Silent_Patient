import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { MobileNav } from './components/layout/MobileNav';
import { NotificationToast } from './components/common/NotificationToast';

import { OverviewPage } from './pages/OverviewPage';
import { CommunicationPage } from './pages/CommunicationPage';
import { PainAssessmentPage } from './pages/PainAssessmentPage';
import { DoctorDashboardPage } from './pages/DoctorDashboardPage';
import { NeuroAnalysisPage } from './pages/NeuroAnalysisPage';
import { SettingsPage } from './pages/SettingsPage';

const AppContent: React.FC = () => {
  const { activeTab, highContrast } = useApp();
  const { isRTL } = useLanguage();

  const renderActivePage = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewPage />;
      case 'communication':
        return <CommunicationPage />;
      case 'pain-assessment':
        return <PainAssessmentPage />;
      case 'doctor-dashboard':
        return <DoctorDashboardPage />;
      case 'neuro-analysis':
        return <NeuroAnalysisPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className={`min-h-screen flex bg-slate-50/70 text-slate-800 ${highContrast ? 'high-contrast' : ''}`}>
      
      {/* Toast Notifications */}
      <NotificationToast />

      {/* Persistent Desktop Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-20 lg:pb-8">
        
        {/* Top Navbar */}
        <Header />

        {/* Dynamic Page Container */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {renderActivePage()}
        </main>

      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav />

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </LanguageProvider>
  );
};

export default App;
