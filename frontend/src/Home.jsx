import p1 from './assets/p1.jpg';
import { FaKey } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="z-10 flex flex-col items-center relative w-full py-12">
      {/* Solar system sun and planets */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-40 h-40 bg-yellow-400 rounded-full blur-2xl opacity-40 animate-pulse pointer-events-none" style={{zIndex:0}} />
      <div className="absolute left-1/4 top-20 w-16 h-16 bg-blue-400 rounded-full blur-lg opacity-30 animate-spin-slow pointer-events-none" style={{zIndex:0}} />
      <div className="absolute right-1/4 top-32 w-12 h-12 bg-purple-400 rounded-full blur-lg opacity-20 animate-spin-reverse pointer-events-none" style={{zIndex:0}} />
      <img src={p1} alt="Ayush Amulya" className="w-44 h-44 rounded-full border-4 border-white shadow-2xl mb-8 object-cover z-10" />
      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-4 tracking-widest animate-fade-in-up">AYUSH AMULYA</h1>
      <p className="text-xl md:text-2xl font-semibold text-cyan-200 mt-2 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-cyan-300/30 animate-fade-in-up transition-all duration-700">
        Passionate about technology, obsessed with clean code—I'm Ayush, a full-stack developer on a mission to create impact.
      </p>
      <button
        className="absolute top-6 right-8 text-3xl text-white hover:text-yellow-400 transition z-20 bg-black/30 rounded-full p-2 shadow-lg border-2 border-yellow-300"
        onClick={() => navigate('/about')}
        aria-label="About"
      >
        <FaKey />
      </button>
    </div>
  );
}
