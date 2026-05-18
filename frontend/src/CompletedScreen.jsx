import React, { useState, useEffect } from 'react';
import { Check, ChevronDown, Battery, Wifi, VolumeX, Power, Key } from 'lucide-react';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#0a66c2]">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function CompletedScreen() {
  const [sysTime, setSysTime] = useState(new Date());
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [quitPassword, setQuitPassword] = useState("");

  useEffect(() => {
    const clockTimer = setInterval(() => setSysTime(new Date()), 60000);
    return () => clearInterval(clockTimer);
  }, []);

  const handleQuitConfirm = () => {
    window.close();
    window.location.href = "about:blank";
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#ebedee] relative overflow-hidden">
      
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

      {/* Top Browser Bar */}
      <div className="w-full bg-[#f5f5f5] px-4 pt-2 pb-1 flex justify-between items-start text-xs text-gray-500">
        <div className="flex flex-col gap-1.5">
          <span className="font-medium text-[11px]">topin.tech</span>
        </div>
      </div>

      {/* Header */}
      <header className="px-10 py-5 bg-white border-b border-gray-200 shadow-sm flex justify-between items-center">
        <div className="flex items-center">
          <img src="/nxtwave-logo.png" alt="NXT WAVE" className="h-[32px] object-contain object-left" />
        </div>
        <div className="flex justify-end items-center gap-1 text-[13px] font-semibold text-gray-700">
          Mandagiri Sri Rama Veeranjaneyulu
          <ChevronDown size={16} className="text-gray-500" />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center p-8 z-10 pb-20">
        <div className="bg-white rounded-lg shadow-sm max-w-4xl w-full px-12 py-10 flex flex-col items-center border border-gray-200">
           
           <div className="w-full flex items-start gap-4 border-b border-gray-200 pb-8 mb-16">
              <div className="bg-green-600 rounded-full text-white p-0.5 mt-0.5 shadow-sm">
                 <Check size={16} strokeWidth={4} />
              </div>
              <div className="flex flex-col">
                 <h2 className="text-[17px] font-bold text-gray-800 mb-1">Thank you for attending the assessment</h2>
                 <p className="text-[14px] text-gray-600">We'll get in touch with you shortly</p>
              </div>
           </div>

           <div className="flex flex-col items-center mb-10 text-center max-w-lg">
              <div className="bg-green-500 rounded-full text-white p-5 mb-8 shadow-md">
                 <Check size={48} strokeWidth={4} />
              </div>
              <h2 className="text-[22px] font-bold text-gray-800 mb-3">Thank you for your feedback</h2>
              <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm">
                 Your feedback is valuable to us! We'll review it thoroughly to enhance our product
              </p>
           </div>

        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 bg-[#ebedee] text-center flex justify-center items-center gap-12 relative z-10 pb-16">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          Powered by 
          <div className="bg-gradient-to-br from-[#f26522] to-[#ec008c] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm flex items-center shadow-sm">
            {'</>'}
          </div>
          <strong className="text-gray-800 text-base font-semibold tracking-tight">topin<span className="text-[#ec008c]">.</span>tech</strong>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 text-[13px] font-semibold">
           Follow us on <LinkedinIcon />
        </div>
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
