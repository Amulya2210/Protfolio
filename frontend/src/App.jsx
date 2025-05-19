import './index.css';
import p1 from './assets/p1.jpg';
import { useNavigate } from 'react-router-dom';
import { FaKey } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiGmail } from 'react-icons/si';
import { useState, useRef } from 'react';
import { useInView } from './useInView.js';

import AboutSection from './AboutSection.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Certificates from './Certificates.jsx';
import Home from './Home.jsx';
import ResumeSection from './ResumeSection.jsx';
import resumeFile from '../../Constent Item/Resume/Ayush Amulya_Resume_SD.I.pdf';

export default function App() {
  const navigate = useNavigate();
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certsRef = useRef(null);
  // Intersection Observer hooks for pop-in effect
  const [skillsInViewRef, skillsInView] = useInView();
  const [projectsInViewRef, projectsInView] = useInView();
  const [certsInViewRef, certsInView] = useInView();
  const [activeSkillTab, setActiveSkillTab] = useState('development');
  const [openCert, setOpenCert] = useState(null);
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Sticky Header Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center px-8 py-4 bg-black/60 backdrop-blur-md shadow-lg">
        <nav className="flex gap-8 items-center">
          <button onClick={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })} className="text-yellow-300 font-bold text-lg hover:underline">Skills</button>
          <button onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })} className="text-yellow-300 font-bold text-lg hover:underline">Projects</button>
          <button onClick={() => certsRef.current.scrollIntoView({ behavior: 'smooth' })} className="text-yellow-300 font-bold text-lg hover:underline">Certificates</button>
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 font-bold text-lg hover:underline"
            style={{ marginLeft: '8px' }}
          >
            Resume
          </a>
          <button
            className="text-yellow-300 font-bold text-lg hover:underline ml-2 relative"
            onClick={() => setShowContact(v => !v)}
          >
            Contact Me
          </button>
          {showContact && (
            <div className="absolute top-16 right-0 bg-white rounded-2xl shadow-2xl px-8 py-6 flex flex-col gap-4 z-50 animate-fade-in-up border-2 border-yellow-200 min-w-[270px]">
              <a href="https://www.linkedin.com/in/ayush-amulya-443614256/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-700 hover:text-blue-900 font-semibold text-lg transition"><FaLinkedin className="text-2xl" /> LinkedIn</a>
              <a href="https://leetcode.com/u/amulyaayush81/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-orange-500 hover:text-orange-700 font-semibold text-lg transition"><SiLeetcode className="text-2xl" /> LeetCode</a>
              <a href="https://github.com/Amulya2210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-800 hover:text-black font-semibold text-lg transition"><FaGithub className="text-2xl" /> GitHub</a>
              <a href="mailto:Amulyaayush81@gmail.com" className="flex items-center gap-3 text-red-600 hover:text-red-800 font-semibold text-lg transition"><SiGmail className="text-2xl" /> Gmail</a>
              <a href="https://www.instagram.com/amulya_ayushhh_?igsh=MWFoeDd4Zzl3dWx5bw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-pink-500 hover:text-pink-700 font-semibold text-lg transition"><FaInstagram className="text-2xl" /> Instagram</a>
              <button onClick={() => setShowContact(false)} className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl font-bold">×</button>
            </div>
          )}
        </nav>
        <button
          className="ml-auto text-2xl text-white hover:text-yellow-400 transition flex items-center gap-2"
          onClick={() => navigate('/about')}
          aria-label="About"
        >
          <FaKey /> <span className="font-semibold text-base">About Me</span>
        </button>
      </header>
      {/* Solar system background planets */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-30 animate-pulse" style={{zIndex:0}} />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300 rounded-full blur-xl opacity-20 animate-spin-slow" style={{zIndex:0}} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-400 rounded-full blur-lg opacity-20 animate-pulse" style={{zIndex:0}} />
      {/* Main content */}
      <div className="z-10 w-full flex flex-col items-center pt-24">
        <section><Home /></section>
        <section ref={el => { skillsRef.current = el; skillsInViewRef.current = el; }}>
          <div className={skillsInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10 transition-all duration-700'}>
            <Skills />
          </div>
        </section>
        <section ref={el => { projectsRef.current = el; projectsInViewRef.current = el; }}>
          <div className={projectsInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10 transition-all duration-700'}>
            <Projects />
          </div>
        </section>
        <section ref={el => { certsRef.current = el; certsInViewRef.current = el; }}>
          <div className={certsInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10 transition-all duration-700'}>
            <Certificates />
          </div>
        </section>
        <ResumeSection />
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
