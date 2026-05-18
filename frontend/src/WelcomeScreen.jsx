import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-10 py-5 bg-white border-b border-gray-200">
        <img src="/nxtwave-logo.png" alt="NXT WAVE" className="h-12 object-contain mb-4" />
      </header>
      
      <main className="flex-1 bg-[#1b2128] text-white px-10 py-16">
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
      </main>
      
      <footer className="px-10 py-5 bg-[#1b2128] text-right text-sm text-gray-400">
        Powered by <strong className="text-pink-500">topin.tech</strong>
      </footer>
    </div>
  );
}
