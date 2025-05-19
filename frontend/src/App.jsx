import './index.css';
import p1 from './assets/p1.jpg';
import { useNavigate } from 'react-router-dom';
import { FaKey } from 'react-icons/fa';
import { useState } from 'react';

import Home from './Home.jsx';
import AboutSection from './AboutSection.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Certificates from './Certificates.jsx';

export default function App() {
  const navigate = useNavigate();
  const [activeSkillTab, setActiveSkillTab] = useState('development');
  const [openCert, setOpenCert] = useState(null);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Key icon button in top-right */}
      <button
        className="absolute top-6 right-8 text-2xl text-white hover:text-yellow-400 transition z-20"
        onClick={() => navigate('/about')}
        aria-label="About"
      >
        <FaKey />
      </button>
      {/* Solar system background planets */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-30 animate-pulse" style={{zIndex:0}} />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300 rounded-full blur-xl opacity-20 animate-spin-slow" style={{zIndex:0}} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-400 rounded-full blur-lg opacity-20 animate-pulse" style={{zIndex:0}} />
      {/* Main content */}
      <div className="z-10 w-full flex flex-col items-center">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
      </div>
      {/* Solar system orbit lines (decorative) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 border border-white/10 rounded-full absolute animate-spin-slow" />
        <div className="w-72 h-72 border border-white/10 rounded-full absolute animate-spin-reverse" />
        <div className="w-56 h-56 border border-white/10 rounded-full absolute animate-spin-slow" />
      </div>
      <style>{`
        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 18s linear infinite; }
        .animate-spin-reverse { animation: spin-slow 24s linear infinite reverse; }
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1) both; }
      `}</style>
    </div>
  );
}
