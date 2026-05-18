import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-10 py-4 bg-white border-b border-gray-200">
        <img src="/nxtwave-logo.png" alt="NXT WAVE" className="h-[45px] object-contain" />
      </header>
      
      <main className="flex-1 bg-[#1b2128] text-white px-10 py-16 flex justify-between gap-10">
        
        {/* Left Side: Original Content */}
        <div className="w-1/2 flex flex-col">
          <h2 className="text-lg font-normal text-gray-300 mb-4">
            Hi Mandagiri Sri Rama Veeranjaneyulu,<br/>Welcome to
          </h2>
          <h1 className="text-4xl font-bold text-[#f2ebd9] mb-12">
            Offline Placement Exam
          </h1>
          
          <div className="flex flex-col gap-4 mb-16">
            <div className="flex items-center gap-3 text-sm font-semibold text-[#00cfb4] uppercase">
              <BookOpen size={18} />
              <span>5 SECTIONS</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-[#00cfb4] uppercase">
              <Clock size={18} />
              <span>ASSESSMENT DURATION - 3HRS 30MINS</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm text-[#00cfb4]">
              <Clock size={18} />
              <span>Assessment Starts in <strong className="text-white">0Hrs 16Mins</strong></span>
            </div>
            <button 
              onClick={onStart}
              className="bg-[#0079d3] hover:bg-[#005fa6] text-white font-semibold py-3 px-10 rounded-md w-fit transition-colors"
            >
              Start
            </button>
          </div>
        </div>

        {/* Right Side: Instructions */}
        <div className="w-1/2 bg-[#222a33] p-8 rounded-lg border border-gray-700 shadow-xl max-w-lg">
          <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-600 pb-3">Important Instructions</h3>
          <ul className="list-decimal pl-5 space-y-4 text-sm text-gray-300">
            <li>Ensure you have a stable internet connection before starting the assessment.</li>
            <li>Do not close or refresh the browser window once the exam has started.</li>
            <li>Switching tabs or exiting full-screen mode may result in automatic submission.</li>
            <li>Each section has a specific time limit. Unanswered questions will be auto-submitted when time is up.</li>
            <li>Use the navigation grid to jump between questions within the same section.</li>
            <li>Click "Submit" only when you have completed all questions in the current section.</li>
          </ul>
        </div>
      </main>
      
      <footer className="px-10 py-5 bg-[#1b2128] text-right text-sm text-gray-400">
        Powered by <strong className="text-pink-500">topin.tech</strong>
      </footer>
    </div>
  );
}
