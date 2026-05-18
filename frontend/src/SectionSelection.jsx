import React from 'react';
import { Trophy, Clock } from 'lucide-react';

export default function SectionSelection({ sections, onStartSection }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#e9ecef]">
      <header className="px-10 py-4 bg-white border-b border-gray-200 shadow-sm flex items-center">
        <img src="/nxtwave-logo.png" alt="NXT WAVE" className="h-[45px] object-contain object-left" />
      </header>
      
      <main className="flex-1 p-10 max-w-4xl mx-auto w-full">
        <div className="relative border-l-2 border-green-500 pl-8 ml-4 space-y-8">
          
          {sections.map((section, idx) => {
            const isCompleted = section.status === 'completed';
            const isActive = section.status === 'active';
            const isLocked = section.status === 'locked';
            const isLast = idx === sections.length - 1;

            return (
              <div 
                key={section.id} 
                className={`relative bg-white rounded-xl p-6 shadow-sm flex justify-between items-center ${isLocked ? 'opacity-70' : ''} ${isActive ? 'border border-gray-100' : ''}`}
              >
                {/* Dot */}
                <div className={`absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-[#e9ecef] box-content z-10 ${isCompleted ? 'bg-green-500' : isActive ? 'bg-[#0079d3]' : 'bg-gray-400'}`}></div>
                
                {/* Mask for the green line below the last dot if needed */}
                {isLast && (
                  <div className="absolute -left-[43px] top-1/2 h-full w-2 bg-[#e9ecef] z-0"></div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{section.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{section.type}</p>
                  <p className={`text-sm text-gray-600 ${isActive ? 'mb-4' : 'mb-3'}`}>No of Questions: {section.questionCount}</p>
                  
                  {isCompleted && (
                    <span className="inline-block bg-[#e6f4ea] text-[#1e8e3e] px-3 py-1 rounded-full text-xs font-semibold">
                      ✔ COMPLETED
                    </span>
                  )}
                  {isActive && (
                    <button 
                      onClick={() => onStartSection(section.id)}
                      className="bg-[#0056b3] hover:bg-[#004494] text-white px-6 py-2 rounded-md font-semibold transition-colors"
                    >
                      Start Section
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-4 text-right">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    <div className="flex items-center justify-end gap-2 mb-1">
                      <Trophy size={16} className="text-purple-500" />
                      <strong className="text-base text-gray-800">{section.score}</strong>
                    </div>
                    TOTAL SCORE
                  </div>
                  {isActive && section.duration && (
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      <div className="flex items-center justify-end gap-2 mb-1">
                        <Clock size={16} className="text-green-500" />
                        <strong className="text-base text-gray-800">{section.duration}</strong>
                      </div>
                      DURATION
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          
        </div>
      </main>
    </div>
  );
}
