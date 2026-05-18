import React from 'react';
import { Trophy, Clock } from 'lucide-react';

export default function SectionSelection({ onStartSection }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#e9ecef]">
      <header className="px-10 py-4 bg-white border-b border-gray-200 shadow-sm flex items-center">
        <img src="/nxtwave-logo.png" alt="NXT WAVE" className="h-[45px] object-contain object-left" />
      </header>
      
      <main className="flex-1 p-10 max-w-4xl mx-auto w-full">
        <div className="relative border-l-2 border-green-500 pl-8 ml-4 space-y-8">
          
          {/* Completed Section 1 */}
          <div className="relative bg-white rounded-xl p-6 shadow-sm flex justify-between items-center">
            <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-[#e9ecef] box-content"></div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">Logical and Aptitude MCQs</h3>
              <p className="text-sm text-gray-600 mb-1">Multiple Choice Exam</p>
              <p className="text-sm text-gray-600 mb-3">No of Questions: 30</p>
              <span className="inline-block bg-[#e6f4ea] text-[#1e8e3e] px-3 py-1 rounded-full text-xs font-semibold">
                ✔ COMPLETED
              </span>
            </div>
          </div>

          {/* Active Section 2 */}
          <div className="relative bg-white rounded-xl p-6 shadow-sm flex justify-between items-center border border-gray-100">
            <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0079d3] rounded-full border-4 border-[#e9ecef] box-content"></div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">Technical MCQs</h3>
              <p className="text-sm text-gray-600 mb-1">Multiple Choice Exam</p>
              <p className="text-sm text-gray-600 mb-4">No of Questions: 30</p>
              <button 
                onClick={() => onStartSection('technical')}
                className="bg-[#0056b3] hover:bg-[#004494] text-white px-6 py-2 rounded-md font-semibold transition-colors"
              >
                Start Section
              </button>
            </div>
            <div className="flex flex-col gap-4 text-right">
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                <div className="flex items-center justify-end gap-2 mb-1">
                  <Trophy size={16} className="text-purple-500" />
                  <strong className="text-base text-gray-800">30</strong>
                </div>
                TOTAL SCORE
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                <div className="flex items-center justify-end gap-2 mb-1">
                  <Clock size={16} className="text-green-500" />
                  <strong className="text-base text-gray-800">30 Min</strong>
                </div>
                DURATION
              </div>
            </div>
          </div>

          {/* Locked Section 3 */}
          <div className="relative bg-white rounded-xl p-6 shadow-sm flex justify-between items-center opacity-70">
            <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-[#e9ecef] box-content"></div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">DSA MCQs</h3>
              <p className="text-sm text-gray-600 mb-1">Multiple Choice Exam</p>
              <p className="text-sm text-gray-600 mb-1">No of Questions: 30</p>
            </div>
            <div className="flex flex-col gap-4 text-right">
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                <div className="flex items-center justify-end gap-2 mb-1">
                  <Trophy size={16} className="text-purple-500" />
                  <strong className="text-base text-gray-800">30</strong>
                </div>
                TOTAL SCORE
              </div>
            </div>
          </div>
          
          {/* Locked Section 4 */}
          <div className="relative bg-white rounded-xl p-6 shadow-sm flex justify-between items-center opacity-70">
            <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-[#e9ecef] box-content"></div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">SQL Coding</h3>
              <p className="text-sm text-gray-600 mb-1">Coding Assessment</p>
              <p className="text-sm text-gray-600 mb-1">No of Questions: 2</p>
            </div>
            <div className="flex flex-col gap-4 text-right">
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                <div className="flex items-center justify-end gap-2 mb-1">
                  <Trophy size={16} className="text-purple-500" />
                  <strong className="text-base text-gray-800">20</strong>
                </div>
                TOTAL SCORE
              </div>
            </div>
          </div>

          {/* Locked Section 5 */}
          <div className="relative bg-white rounded-xl p-6 shadow-sm flex justify-between items-center opacity-70 border-b border-transparent">
            {/* The line ends here, so we hide the green border below this dot */}
            <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-[#e9ecef] box-content z-10"></div>
            <div className="absolute -left-[43px] top-1/2 h-full w-2 bg-[#e9ecef] z-0"></div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">DSA Coding</h3>
              <p className="text-sm text-gray-600 mb-1">Coding Assessment</p>
              <p className="text-sm text-gray-600 mb-1">No of Questions: 2</p>
            </div>
            <div className="flex flex-col gap-4 text-right">
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                <div className="flex items-center justify-end gap-2 mb-1">
                  <Trophy size={16} className="text-purple-500" />
                  <strong className="text-base text-gray-800">20</strong>
                </div>
                TOTAL SCORE
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
