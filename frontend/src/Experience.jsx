import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Experience() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(false);
  return (
    <div
      className="mt-8 sm:mt-14 w-full max-w-xs sm:max-w-xl bg-gradient-to-r from-yellow-200/30 via-blue-200/10 to-purple-200/10 rounded-2xl shadow-2xl border-4 border-yellow-300/20 px-4 sm:px-8 py-6 sm:py-8 animate-fade-in-up relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 group"
      onClick={() => navigate('/fidelity-experience')}
      tabIndex={0}
      aria-label="Fidelity International Experience"
      onKeyDown={e => { if (e.key === 'Enter') navigate('/fidelity-experience'); }}
      onMouseEnter={() => setPreview(true)}
      onMouseLeave={() => setPreview(false)}
      onFocus={() => setPreview(true)}
      onBlur={() => setPreview(false)}
    >
      {/* Solar system orbit effect */}
      <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-yellow-200/30 rounded-full animate-spin-slow pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-400 rounded-full blur-xl opacity-20 animate-pulse pointer-events-none z-0" />
      <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-300 mb-2 sm:mb-4 text-center tracking-wider drop-shadow-lg z-10">Experience</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-2 sm:gap-4 z-10">
        <div className="flex-shrink-0 w-16 h-16 bg-yellow-300/80 border-4 border-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-2xl font-bold text-black">FIL</span>
        </div>
        <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
          <h3 className="text-xl font-semibold text-white">Fidelity International</h3>
          <p className="text-cyan-100 text-sm mb-1">Software Developer Intern</p>
          <span className="inline-block text-xs font-medium text-yellow-200 bg-yellow-400/20 rounded px-2 py-1 mb-1">Jan 2025 - Present</span>
        </div>
      </div>
      {/* Preview overlay on hover/focus */}
      {preview && (
        <div className="absolute inset-0 bg-black/80 bg-opacity-90 flex flex-col items-center justify-center z-20 rounded-2xl p-4 animate-fade-in-up border-2 border-yellow-300/40">
          <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-2 text-center">Software Developer Intern</h3>
          <p className="text-sm sm:text-base text-white mb-2 text-center">Fidelity International<br/>Jan 2025 – Present</p>
          <ul className="text-xs sm:text-sm text-white/90 mb-2 space-y-1 text-left max-w-xs">
            <li>🔧 Developed and optimized backend services using Spring Boot.</li>
            <li>☁️ Contributed to cloud migration and deployment pipelines.</li>
            <li>📊 Built an Order Analysis Dashboard (Python + React).</li>
            <li>🧩 Worked on Micro Frontends for modular architecture.</li>
          </ul>
          <span className="text-xs text-yellow-200 italic">Click to see more...</span>
        </div>
      )}
    </div>
  );
}
