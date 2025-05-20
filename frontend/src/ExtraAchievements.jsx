import { useNavigate } from 'react-router-dom';

export function ExtraAchievements() {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-xl mt-16 mb-10 bg-gradient-to-br from-yellow-200/20 via-blue-200/10 to-purple-200/10 rounded-3xl shadow-2xl px-4 sm:px-8 py-8 flex flex-col items-center border-4 border-yellow-300/30 relative overflow-hidden animate-fade-in-up">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-300 mb-6 text-center border-b-4 border-yellow-300 pb-2 w-full tracking-wider drop-shadow-lg z-10">Extra Achievements</h2>
      <div className="flex flex-col gap-6 w-full z-10">
        <button onClick={() => navigate('/achievement-khwaab')} className="w-full bg-gradient-to-r from-yellow-400/80 to-yellow-200/60 rounded-xl shadow-lg px-6 py-4 text-lg sm:text-xl font-bold text-yellow-900 hover:bg-yellow-400/90 hover:scale-105 transition-all border-2 border-yellow-300/40 flex items-center justify-between group">
          Assistant Coordinator – Khwaab
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </button>
        <button onClick={() => navigate('/achievement-mun')} className="w-full bg-gradient-to-r from-blue-400/80 to-blue-200/60 rounded-xl shadow-lg px-6 py-4 text-lg sm:text-xl font-bold text-blue-900 hover:bg-blue-400/90 hover:scale-105 transition-all border-2 border-blue-300/40 flex items-center justify-between group">
          Deputy Director – KIIT MUN
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
      {/* Solar system orbits for decoration */}
      <div className="absolute -top-16 -left-16 w-40 h-40 border-4 border-yellow-200/30 rounded-full animate-spin-slow pointer-events-none z-0" />
      <div className="absolute -bottom-20 right-0 w-32 h-32 border-4 border-blue-200/20 rounded-full animate-spin-reverse pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-yellow-300/20 rounded-full blur-2xl opacity-30 animate-pulse -translate-x-1/2 -translate-y-1/2 z-0" />
    </div>
  );
}
