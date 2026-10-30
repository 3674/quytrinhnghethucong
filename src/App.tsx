import React, { useState } from 'react';
import { ActiveScreen } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RecordModal } from './components/RecordModal';
import { HeritageRecord } from './data/records';

import { HomeScreen } from './screens/HomeScreen';
import { ProcessScreen } from './screens/ProcessScreen';
import { LibraryScreen } from './screens/LibraryScreen';
import { RepositoryScreen } from './screens/RepositoryScreen';
import { AIAssistantScreen } from './screens/AIAssistantScreen';
import { SourcesScreen } from './screens/SourcesScreen';
import { AboutScreen } from './screens/AboutScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('home');
  const [selectedRecord, setSelectedRecord] = useState<HeritageRecord | null>(null);

  const handleNavigate = (screen: ActiveScreen) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7EE] text-[#2C241E] font-['Be_Vietnam_Pro',sans-serif]">
      {/* Sticky Navigation Header */}
      <Navbar activeScreen={activeScreen} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeScreen === 'home' && (
          <HomeScreen 
            onNavigate={handleNavigate} 
            onOpenRecord={(r) => setSelectedRecord(r)} 
          />
        )}

        {activeScreen === 'process' && (
          <ProcessScreen />
        )}

        {activeScreen === 'library' && (
          <LibraryScreen />
        )}

        {activeScreen === 'repository' && (
          <RepositoryScreen 
            onOpenRecord={(r) => setSelectedRecord(r)} 
          />
        )}

        {activeScreen === 'ai-assistant' && (
          <AIAssistantScreen 
            onNavigate={handleNavigate} 
          />
        )}

        {activeScreen === 'sources' && (
          <SourcesScreen />
        )}

        {activeScreen === 'about' && (
          <AboutScreen 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Record Inspection Modal */}
      <RecordModal 
        record={selectedRecord} 
        onClose={() => setSelectedRecord(null)} 
      />
    </div>
  );
}
