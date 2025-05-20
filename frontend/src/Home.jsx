import p1 from './assets/p1.jpg';
import { FaKey } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="z-10 flex flex-col items-center relative w-full py-8 sm:py-12 px-2 sm:px-0">
      {/* Solar system sun and planets */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-40 h-40 bg-yellow-400 rounded-full blur-2xl opacity-40 animate-pulse pointer-events-none" style={{zIndex:0}} />
      <div className="absolute left-1/4 top-20 w-16 h-16 bg-blue-400 rounded-full blur-lg opacity-30 animate-spin-slow pointer-events-none" style={{zIndex:0}} />
      <div className="absolute right-1/4 top-32 w-12 h-12 bg-purple-400 rounded-full blur-lg opacity-20 animate-spin-reverse pointer-events-none" style={{zIndex:0}} />
      <div className="group flex flex-col items-center w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto">
        <img
          src={p1}
          alt="Ayush Amulya"
          className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border-4 border-white shadow-2xl mb-6 sm:mb-8 object-cover z-10 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-yellow-300/70 group-hover:border-yellow-300 hover:brightness-110 hover:shadow-2xl hover:shadow-yellow-200/60"
          style={{ cursor: 'pointer' }}
        />
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-2 sm:mb-4 tracking-widest animate-fade-in-up transition-all duration-500 group-hover:text-yellow-300 hover:scale-105 hover:drop-shadow-yellow-200 text-center"
          style={{ cursor: 'pointer' }}
        >
          AYUSH AMULYA
        </h1>
        {/* Animated underline */}
        <div className="relative w-40 sm:w-64 h-2 mt-2">
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 rounded-full opacity-60 transition-all duration-700 group-hover:opacity-100 animate-underline-glow" />
        </div>
      </div>
      <p className="text-base sm:text-xl md:text-2xl font-semibold text-cyan-200 mt-2 px-3 sm:px-6 py-2 sm:py-3 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-cyan-300/30 animate-fade-in-up transition-all duration-700 text-center max-w-lg mx-auto relative tagline-crazy group cursor-pointer overflow-hidden">
        <span className="relative z-10">Passionate about technology, obsessed with clean code—I'm Ayush, a full-stack developer on a mission to create impact.</span>
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-60 blur-2xl transition-all duration-500 pointer-events-none" />
        <span className="absolute left-0 top-0 w-full h-full pointer-events-none z-0 group-hover:animate-crazy-glow" />
      </p>
      <button
        className="absolute top-4 sm:top-6 right-4 sm:right-8 text-2xl sm:text-3xl text-white hover:text-yellow-400 transition z-20 bg-black/30 rounded-full p-2 shadow-lg border-2 border-yellow-300"
        onClick={() => navigate('/about')}
        aria-label="About"
      >
        <FaKey />
      </button>
      <style>{`
        @keyframes underline-glow {
          0% { box-shadow: 0 0 0px 0px #ffe066; }
          50% { box-shadow: 0 0 16px 6px #ffe066, 0 0 32px 12px #ffd70044; }
          100% { box-shadow: 0 0 0px 0px #ffe066; }
        }
        .animate-underline-glow { animation: underline-glow 2.5s infinite; }
        .tagline-crazy {
          box-shadow: 0 0 24px 0 #ffe06644, 0 0 48px 0 #a5b4fc33;
        }
        .tagline-crazy:hover {
          box-shadow: 0 0 48px 8px #ffe066, 0 0 96px 16px #a5b4fc, 0 0 0 8px #fff2cc44;
          transform: scale(1.04) rotate(-1deg);
        }
        @keyframes crazy-glow {
          0% { filter: blur(16px) brightness(1.2) hue-rotate(0deg); opacity: 0.7; }
          25% { filter: blur(24px) brightness(1.4) hue-rotate(30deg); opacity: 1; }
          50% { filter: blur(32px) brightness(1.6) hue-rotate(60deg); opacity: 0.8; }
          75% { filter: blur(24px) brightness(1.4) hue-rotate(330deg); opacity: 1; }
          100% { filter: blur(16px) brightness(1.2) hue-rotate(0deg); opacity: 0.7; }
        }
        .group:hover .group-hover\:animate-crazy-glow {
          animation: crazy-glow 1.2s infinite linear alternate;
        }
      `}</style>
    </div>
  );
}
