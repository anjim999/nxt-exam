import React, { useState, useEffect } from 'react';
import { Info, Clock, RotateCw, Battery, Wifi, VolumeX, Power, Key } from 'lucide-react';

export default function ExamInterface({ onSubmit, timeLeft }) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sysTime, setSysTime] = useState(new Date());
  
  // Power button quit modal
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [quitPassword, setQuitPassword] = useState("");

  useEffect(() => {
    const clockTimer = setInterval(() => {
      setSysTime(new Date());
    }, 60000);
    return () => clearInterval(clockTimer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
  };

  const requestFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(err => console.log(err));
    }
  };

  const handleQuitConfirm = () => {
    window.close();
    window.location.href = "about:blank";
  };

  const handleNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      onSubmit();
    }
  };

  // Generate mock questions based on the section
  const questions = Array.from({ length: qCount }, (_, i) => ({
    id: `0c614c`, // Using standard watermark ID based on image
    text: i === 0 
      ? `[${section?.title || 'Section'}] Why are indexes commonly created on database columns?`
      : i === 1 
      ? `[${section?.title || 'Section'}] If Binary Search is applied to find the smallest index i such that arr[i] >= x, it is known as:`
      : i === 2
      ? `[${section?.title || 'Section'}] A customer buys a washing machine priced at Rs. 75,000, to be paid in 6 equal annual installments. The seller charges simple interest at 12% per annum on the original principal for the entire 6-year period. Find the amount of each installment.`
      : `[${section?.title || 'Section'}] Consider a scenario where an application needs to maintain a sorted list of unique identifiers in memory. Which of the following data structures would provide the optimal average time complexity for both insertion and search operations?`,
    options: i === 0 
      ? [
          "To speed up data retrieval operations like SELECT queries",
          "To enforce encryption on sensitive columns",
          "To ensure automatic database recovery",
          "To increase the size of the database for redundancy"
        ]
      : i === 1
      ? [
          "Lower bound",
          "Upper bound",
          "First occurrence",
          "Last occurrence"
        ]
      : i === 2
      ? [
          "Rs.16500",
          "Rs.17500",
          "Rs.18500",
          "Rs.21500"
        ]
      : [
          "A balanced binary search tree (e.g., AVL or Red-Black Tree)",
          "A standard singly linked list",
          "An unsorted dynamic array",
          "A hash table with linear probing"
        ]
  }));

  const currentQuestion = questions[currentQuestionIdx];
  const attemptedCount = Object.keys(answers).length;
  const unattemptedCount = questions.length - attemptedCount;

  return (
    <div className="flex flex-col min-h-screen bg-[#eaeced] relative overflow-hidden font-sans select-none">
      
      {/* Quit Modal */}
      {showQuitModal && (
        <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center">
          <div className="bg-[#f0f0f0] w-[450px] border border-gray-400 rounded shadow-xl flex flex-col">
            <div className="bg-gradient-to-b from-[#e1e1e1] to-[#cfcfcf] px-3 py-1.5 flex justify-between items-center border-b border-gray-400">
              <div className="flex items-center gap-2 text-[11px] text-gray-800 font-sans">
                <div className="w-4 h-4 bg-blue-500 rounded-sm border border-blue-700 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]"></div>
                <span>Password Required</span>
              </div>
              <button onClick={() => setShowQuitModal(false)} className="hover:bg-red-500 hover:text-white px-2 rounded-sm text-sm">✕</button>
            </div>
            <div className="p-6 flex items-start gap-4 bg-[#f0f0f0]">
              <div className="text-yellow-500 pt-1">
                <Key size={48} className="-rotate-45 drop-shadow-md" />
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-[13px] text-gray-800 mb-2">Please enter the quit password in order to terminate SEB:</p>
                <input 
                  type="password" 
                  value={quitPassword} 
                  onChange={e => setQuitPassword(e.target.value)} 
                  className="border border-gray-400 w-full px-2 py-1 text-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] focus:outline-none focus:border-blue-500" 
                />
                <div className="flex justify-end gap-2 mt-6">
                  <button onClick={handleQuitConfirm} className="px-5 py-1 bg-[#e1e1e1] border border-gray-400 hover:border-blue-500 hover:bg-[#e5f1fb] shadow-sm text-sm rounded-sm">Confirm</button>
                  <button onClick={() => setShowQuitModal(false)} className="px-5 py-1 bg-[#e1e1e1] border border-gray-400 hover:border-blue-500 hover:bg-[#e5f1fb] shadow-sm text-sm rounded-sm">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Watermarks across the screen matching the image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex flex-col justify-around z-0">
         <div className="flex justify-around opacity-[0.04] transform -rotate-[25deg] text-[18px] font-semibold text-black tracking-widest mt-12">
            <span>0c614c</span><span>0c614c</span><span>0c614c</span><span>0c614c</span><span>0c614c</span>
         </div>
         <div className="flex justify-around opacity-[0.04] transform -rotate-[25deg] text-[18px] font-semibold text-black tracking-widest">
            <span>0c614c</span><span>0c614c</span><span>0c614c</span><span>0c614c</span><span>0c614c</span>
         </div>
         <div className="flex justify-around opacity-[0.04] transform -rotate-[25deg] text-[18px] font-semibold text-black tracking-widest">
            <span>0c614c</span><span>0c614c</span><span>0c614c</span><span>0c614c</span><span>0c614c</span>
         </div>
      </div>
      
      {/* Top Browser Bar */}
      <div className="w-full px-5 pt-2 pb-1 flex items-start text-xs text-gray-500 relative z-10">
        <div className="flex flex-col gap-1 w-fit">
          <span className="font-medium text-[11px] text-gray-500">topin.tech</span>
          <button className="text-gray-700 hover:text-black transition-colors p-0.5" onClick={() => window.location.reload()}>
            <RotateCw size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>      {/* Main Header */}
      <header className="px-10 pb-3 pt-2 border-b-[4px] border-[#0056b3] relative z-10 bg-[#eaeced]">
        <div className="flex flex-col gap-2">
          
          {/* Row 1: Logo and Name */}
          <div className="flex justify-between items-center">
            <img src="/nxtwave-logo.png" alt="NXT WAVE" className="h-[45px] object-contain object-left" />
            <div className="text-[13px] font-semibold text-gray-700">
              Allu Venkata Reddy
            </div>
          </div>
          
          {/* Row 2: Section Info and Timer */}
          <div className="relative flex items-center h-8 w-full mt-1">
            <div className="absolute left-0 flex flex-col">
              <span className="text-[#003b73] font-bold text-[13px] uppercase tracking-wide">{section?.title || 'DSA MCQS'}</span>
              <button onClick={requestFullscreen} className="text-[#0056b3] font-bold text-[11px] flex items-center gap-1 hover:underline mt-0.5">
                <Info size={14} className="fill-[#0056b3] text-white" /> INSTRUCTIONS
              </button>
            </div>
            
            <div className="absolute left-1/2 -translate-x-1/2 text-[19px] font-medium text-gray-800 flex items-center gap-2 tracking-wide mt-1">
              <Clock size={18} className="text-gray-600" />
              {formatTime(timeLeft)}
            </div>
          </div>
          
        </div>
      </header>

      {/* Content Area - Completely Flat Design */}
      <div className="flex flex-1 max-w-[1400px] mx-auto w-full px-12 py-10 gap-16 relative z-10 pb-20">
        
        {/* Main Question Area */}
        <main className="flex-1 flex flex-col">
          
          <h2 className="text-[14px] text-gray-700 mb-10 leading-relaxed font-normal">
            {currentQuestionIdx === 0 ? (
              <>Why are <strong className="font-bold">indexes</strong> commonly created on database columns?</>
            ) : currentQuestionIdx === 1 ? (
              <>If Binary Search is applied to find the smallest index <code className="bg-transparent px-1 rounded text-[13px] mx-0.5 text-black">i</code> such that <code className="bg-transparent px-1 rounded text-[13px] mx-0.5 text-black">arr[i] &gt;= x</code> , it is known as:</>
            ) : (
              currentQuestion.text
            )}
          </h2>

          <div className="flex flex-col gap-5 pl-2 mb-10">
            {currentQuestion.options.map((opt, idx) => (
              <label 
                key={idx} 
                className="flex items-center gap-4 text-[13px] text-gray-600 cursor-pointer group"
              >
                {/* Custom faint radio button outline */}
                <div className={`w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center ${answers[currentQuestionIdx] === idx ? 'border-blue-500' : 'border-gray-300 group-hover:border-gray-400'}`}>
                   {answers[currentQuestionIdx] === idx && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                </div>
                <input 
                  type="radio" 
                  name={`question-${currentQuestionIdx}`} 
                  className="hidden"
                  checked={answers[currentQuestionIdx] === idx}
                  onChange={() => setAnswers({ ...answers, [currentQuestionIdx]: idx })}
                />
                {opt}
              </label>
            ))}
          </div>

          <div className="mt-8 flex justify-start pl-2">
            <button 
              onClick={handleNext}
              className="bg-[#004d99] hover:bg-[#003d7a] text-white px-8 py-2 rounded font-semibold text-xs transition-colors"
            >
              {currentQuestionIdx === questions.length - 1 ? 'SUBMIT EXAM' : 'SUBMIT'}
            </button>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-[280px] shrink-0 flex flex-col pt-1">
          
          {/* Question Grid Top */}
          <div className="grid grid-cols-5 gap-2 pl-4 mb-8">
            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIdx(idx)}
                className={`w-8 h-8 flex items-center justify-center text-[10px] font-medium rounded-md border transition-colors ${
                  currentQuestionIdx === idx 
                    ? 'border-blue-500 text-blue-700 bg-blue-50 ring-2 ring-blue-200' 
                    : answers[idx] !== undefined 
                      ? 'bg-green-100 border-green-500 text-green-800' 
                      : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <div className="pl-6 pt-6 border-t border-gray-300">
            <div className="flex flex-col gap-3 text-[11px] text-gray-500 font-medium tracking-wide">
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 border-[1.5px] border-blue-500 rounded-sm bg-transparent"></div>
                <span>Current question</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 border-[1.5px] border-green-500 rounded-sm bg-green-100"></div>
                <span>Attempted : {attemptedCount}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 border-[1.5px] border-gray-300 rounded-sm bg-white"></div>
                <span>Unattempted : {unattemptedCount}</span>
              </div>
            </div>
          </div>
        </aside>

      </div>
      
      {/* Footer */}
      <footer className="absolute bottom-12 w-full text-center text-xs text-gray-500 flex justify-center items-center gap-1.5 z-10">
        Powered by 
        <div className="bg-gradient-to-br from-[#f26522] to-[#ec008c] text-white text-[9px] font-bold px-1 py-0.5 rounded-sm flex items-center shadow-sm">
          {'</>'}
        </div>
        <strong className="text-gray-700 text-xs font-bold tracking-tight">topin<span className="text-[#ec008c]">.</span>tech</strong>
      </footer>

      {/* Bottom System Footer */}
      <div className="fixed bottom-0 left-0 w-full px-4 py-1.5 flex justify-between items-center text-black bg-[#d1d5db] z-20 border-t border-gray-400 shadow-md">
        <div></div>
        
        <div className="flex items-center gap-4">
          <Battery size={18} className="cursor-pointer fill-black stroke-black" />
          <Wifi size={16} className="cursor-pointer" />
          <VolumeX size={16} className="cursor-pointer" />
          <div className="flex flex-col items-center justify-center text-[9px] font-bold leading-[1.1] px-1 text-black">
            <span>{sysTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
            <span>{sysTime.toLocaleDateString('en-GB').replace(/\//g, '-')}</span>
          </div>
          <button onClick={() => setShowQuitModal(true)} className="cursor-pointer hover:text-red-600 rounded-full p-0.5 focus:outline-none ml-1">
            <Power size={20} className="stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}
