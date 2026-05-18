import React, { useState, useEffect } from 'react';
import WelcomeScreen from './WelcomeScreen';
import SectionSelection from './SectionSelection';
import ExamInterface from './ExamInterface';
import CompletedScreen from './CompletedScreen';

export default function App() {
  const [currentView, setCurrentView] = useState('welcome');
  const [selectedSection, setSelectedSection] = useState(null);
  
  // Lift timer state to App so it continues without resetting
  const [timeLeft, setTimeLeft] = useState(25 * 60 + 33);
  
  useEffect(() => {
    let timer;
    if (currentView === 'exam' || currentView === 'sections') {
      timer = setInterval(() => {
        setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [currentView]);

  const startExam = () => setCurrentView('sections');
  
  const startSection = (sectionId) => {
    setSelectedSection(sectionId);
    setCurrentView('exam');
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(err => console.log(err));
    }
  };

  const submitSection = () => {
    setSelectedSection(null);
    setCurrentView('completed');
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.log(err));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {currentView === 'welcome' && <WelcomeScreen onStart={startExam} />}
      {currentView === 'sections' && <SectionSelection onStartSection={startSection} />}
      {currentView === 'exam' && <ExamInterface sectionId={selectedSection} onSubmit={submitSection} timeLeft={timeLeft} />}
      {currentView === 'completed' && <CompletedScreen />}
    </div>
  );
}
