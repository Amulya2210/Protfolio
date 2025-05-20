import p6 from '../../Constent Item/photo/p6.jpg';
import munCert from '../../Constent Item/extra/MUN _ CERTIFICATE  (1).pdf';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AchievementMUN() {
  const [showCert, setShowCert] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Solar system themed background */}
      <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] border-4 border-blue-200/20 rounded-full animate-spin-slow pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute left-1/2 top-1/2 w-[400px] h-[400px] border-4 border-yellow-200/20 rounded-full animate-spin-reverse pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute left-1/2 top-1/2 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl opacity-30 animate-pulse -translate-x-1/2 -translate-y-1/2 z-0" />
      <button onClick={() => navigate(-1)} className="absolute top-6 left-6 bg-black/60 text-blue-300 px-4 py-2 rounded-full font-bold shadow hover:bg-blue-400 hover:text-black transition z-20 border-2 border-blue-200/40">← Back</button>
      <div className="relative z-10 w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-300 mb-4 sm:mb-6 text-center border-b-4 border-blue-300 pb-2 w-full tracking-wider drop-shadow-lg">Deputy Director – KIIT MUN</h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 text-center font-semibold">Asia’s Largest Model United Nations Conference</p>
        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 text-center max-w-2xl">
          KIITMUN brings together thousands of delegates from across the globe, making it one of the largest and most prestigious MUNs in Asia. As the Deputy Director of Digital Marketing, I played a key role in ensuring the event's success through strategic planning, marketing, and operations.
        </p>
        <ul className="text-xs sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 space-y-2 sm:space-y-4 list-none max-w-2xl">
          <li>📊 <b>Strategic Digital Marketing:</b> Led digital campaigns across Instagram, LinkedIn, and WhatsApp, boosting registrations and engagement by 40%.</li>
          <li>🎯 <b>Targeted Outreach:</b> Conducted audience analysis and optimized content for different demographics.</li>
          <li>🏛️ <b>Event Coordination:</b> Collaborated with teams to ensure timely arrangements for 1000+ delegates.</li>
          <li>🎥 <b>Creative Content Creation:</b> Designed promotional content, teaser videos, and speaker spotlights.</li>
          <li>🤝 <b>Team Management:</b> Mentored and coordinated with 15+ junior marketers and volunteers.</li>
          <li>🌍 <b>Global Delegate Interaction:</b> Managed communications with international participants.</li>
        </ul>
        <div className="flex flex-col items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl shadow-2xl border-4 border-blue-200 bg-white/20 overflow-hidden flex items-center justify-center cursor-pointer hover:scale-105 transition" onClick={() => setShowCert(true)} title="Click to view certificate">
            <img src={p6} alt="KIIT MUN" className="w-full h-full object-cover object-center" />
          </div>
          <span className="text-xs sm:text-sm text-blue-200 italic">Click the photo to view certificate</span>
        </div>
        {showCert && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setShowCert(false)}>
            <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full relative animate-fade-in-up" onClick={e => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-gray-500 hover:text-blue-500 text-2xl font-bold" onClick={() => setShowCert(false)} aria-label="Close">&times;</button>
              <iframe src={munCert} title="MUN Certificate" className="w-full h-[70vh] rounded-xl" />
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 18s linear infinite; }
        .animate-spin-reverse { animation: spin-slow 24s linear infinite reverse; }
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1) both; }
      `}</style>
    </div>
  );
}
