import React, { useState, useEffect } from 'react';
import WelcomeScreen from './WelcomeScreen';
import SectionSelection from './SectionSelection';
import ExamInterface from './ExamInterface';
import CompletedScreen from './CompletedScreen';

const INITIAL_SECTIONS = [
  { id: 'logical', title: 'Logical and Aptitude MCQs', type: 'Multiple Choice Exam', questionCount: 30, score: 30, duration: '30 Min', status: 'active' },
  { id: 'technical', title: 'Technical MCQs', type: 'Multiple Choice Exam', questionCount: 30, score: 30, duration: '30 Min', status: 'locked' },
  { id: 'dsa_mcq', title: 'DSA MCQs', type: 'Multiple Choice Exam', questionCount: 30, score: 30, duration: '30 Min', status: 'locked' },
  { id: 'sql', title: 'SQL Coding', type: 'Coding Assessment', questionCount: 2, score: 20, duration: '30 Min', status: 'locked' },
  { id: 'dsa_coding', title: 'DSA Coding', type: 'Coding Assessment', questionCount: 2, score: 20, duration: '30 Min', status: 'locked' }
];

export default function App() {
  const [currentView, setCurrentView] = useState('welcome');
  const [sections, setSections] = useState(INITIAL_SECTIONS);
  const [activeSectionId, setActiveSectionId] = useState(null);
  
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
    setActiveSectionId(sectionId);
    setCurrentView('exam');
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(err => console.log(err));
    }
  };

  const submitSection = (sectionId) => {
    // Mark current section as completed
    const updatedSections = [...sections];
    const currentIndex = updatedSections.findIndex(s => s.id === sectionId);
    
    if (currentIndex !== -1) {
      updatedSections[currentIndex].status = 'completed';
      
      // Unlock next section if exists
      if (currentIndex + 1 < updatedSections.length) {
        updatedSections[currentIndex + 1].status = 'active';
        setSections(updatedSections);
        setActiveSectionId(null);
        setCurrentView('sections');
      } else {
        // All sections completed
        setSections(updatedSections);
        setActiveSectionId(null);
        setCurrentView('completed');
      }
    }
    
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.log(err));
    }
  };

  const activeSection = sections.find(s => s.id === activeSectionId);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {currentView === 'welcome' && <WelcomeScreen onStart={startExam} />}
      {currentView === 'sections' && <SectionSelection sections={sections} onStartSection={startSection} />}
      {currentView === 'exam' && <ExamInterface section={activeSection} onSubmit={() => submitSection(activeSectionId)} timeLeft={timeLeft} />}
      {currentView === 'completed' && <CompletedScreen />}
    </div>
  );
}
