import whatsappCover from '../../Constent Item/project photo/whatapp.jpg';
import empCover from '../../Constent Item/project photo/Emp.png';
import creditCover from '../../Constent Item/project photo/credit.jpeg';
import vocalizeCover from '../../Constent Item/project photo/vocalize.png';
import desiCover from '../../Constent Item/project photo/desi .png';
import { FaGithub } from 'react-icons/fa';
import { useInView } from './useInView.js';
import { useState } from 'react';

export default function Projects() {
  const [ref, inView] = useInView();
  const [modalProject, setModalProject] = useState(null);
  const projects = [
    {
      cover: whatsappCover,
      name: 'WhatsApp-Chat Analyser',
      github: 'https://github.com/Amulya2210/WhatsApp-Chat-Analyzer.git',
      desc: 'Analyse your chats and sentiments.',
      techs: ['Python', 'ML'],
      demo: '',
      details: 'This project analyzes WhatsApp chat exports, providing sentiment analysis, word clouds, and user statistics.'
    },
    {
      cover: empCover,
      name: 'Employee Retention Model',
      github: 'https://github.com/Amulya2210/Employee-Retention-Model.git',
      desc: 'Predictive Modeling for Employee Retention',
      techs: ['Python', 'ML', 'AI'],
      demo: '',
      details: 'Predicts which employees are likely to leave using machine learning models and visualizes key factors.'
    },
    {
      cover: creditCover,
      name: 'Credit Card Fraud Detection',
      github: 'https://github.com/Amulya2210/Credit-Card-Fraud-Detection.git',
      desc: 'Detects the fraud and summarise it.',
      techs: ['Python', 'ML', 'Jupyter Notebook'],
      demo: '',
      details: 'Detects fraudulent transactions using advanced ML algorithms and provides summary dashboards.'
    },
    {
      cover: vocalizeCover,
      name: 'Vocalize - AI',
      github: 'https://github.com/Amulya2210/Vocalize-AI.git',
      desc: 'Works and provides solution like human assistant.',
      techs: ['Python', 'AI', 'Jupyter Notebook'],
      demo: '',
      details: 'An AI-powered voice assistant that can answer questions, set reminders, and more.'
    },
    {
      cover: desiCover,
      name: 'Desi Hatti',
      github: 'https://github.com/Amulya2210/Desi-Hatti-.git',
      desc: 'A desi rental place',
      techs: ['Java', 'React', 'JS', 'Tailwind', 'MongoDB'],
      demo: '',
      details: 'A full-stack rental platform for local businesses, built with React and MongoDB.'
    },
  ];
  return (
    <div
      ref={ref}
      className={`mt-16 w-full max-w-6xl bg-gradient-to-br from-yellow-200/30 via-blue-200/20 to-purple-200/20 rounded-3xl shadow-2xl px-2 sm:px-4 md:px-8 py-8 md:py-12 flex flex-col items-center border-4 border-yellow-300/40 relative overflow-hidden transition-all duration-700 backdrop-blur-xl ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
    >
      {/* Solar system decorative orbits - enhanced */}
      <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 border-4 border-yellow-200/30 rounded-full animate-spin-slow pointer-events-none z-0 blur-md" />
      <div className="absolute -bottom-32 right-0 w-60 sm:w-80 h-60 sm:h-80 border-4 border-blue-200/20 rounded-full animate-spin-reverse pointer-events-none z-0 blur-lg" />
      <div className="absolute top-1/2 left-1/2 w-24 sm:w-40 h-24 sm:h-40 bg-yellow-300/20 rounded-full blur-2xl opacity-30 animate-pulse -translate-x-1/2 -translate-y-1/2 z-0" />
      <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-300 mb-8 sm:mb-10 text-center border-b-4 border-yellow-300 pb-2 w-full tracking-wider drop-shadow-lg z-10 animate-typewriter overflow-hidden whitespace-nowrap" style={{animationDelay: '0.2s'}}>
        Projects
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 z-10">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.name}
            cover={p.cover}
            name={p.name}
            github={p.github}
            desc={p.desc}
            techs={p.techs}
            demo={p.demo}
            details={p.details}
            onClick={() => setModalProject(p)}
            style={{animationDelay: `${0.2 + i * 0.15}s`}}
          />
        ))}
      </div>
      {/* Floating View All Projects Button */}
      <a href="https://github.com/Amulya2210?tab=repositories" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-yellow-400/60 transition-all duration-300 z-50 backdrop-blur-md border-2 border-yellow-200/60">
        View All Projects
      </a>
      {/* Modal for project details */}
      {modalProject && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fade-in-up" onClick={() => setModalProject(null)}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-yellow-500 text-2xl font-bold" onClick={() => setModalProject(null)} aria-label="Close">&times;</button>
            <img src={modalProject.cover} alt={modalProject.name} className="w-full h-40 object-cover rounded-xl mb-4 shadow" />
            <h3 className="text-2xl font-extrabold text-yellow-600 mb-2">{modalProject.name}</h3>
            <p className="text-gray-800 mb-3">{modalProject.details}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {modalProject.techs.map(t => (
                <span key={t} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow border border-yellow-200/60 animate-pulse-slow" title={t}>{t}</span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={modalProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full font-bold hover:bg-yellow-500 transition" aria-label="GitHub Repository">
                <FaGithub /> GitHub
              </a>
              {modalProject.demo && (
                <a href={modalProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold hover:bg-black transition" aria-label="Live Demo">
                  🚀 Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ cover, name, github, desc, techs, demo, details, onClick, style }) {
  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-100/60 to-yellow-300/80 border-4 border-yellow-200 group hover:scale-105 hover:shadow-yellow-400/40 transition-transform duration-500 cursor-pointer z-10 flex flex-col backdrop-blur-lg animate-fade-in-up hover:rotate-1 hover:-translate-y-2"
      tabIndex={0}
      aria-label={`Project: ${name}`}
      onClick={onClick}
      onKeyDown={e => { if (e.key === 'Enter') onClick(); }}
      style={style}
    >
      <div className="relative">
        <img src={cover} alt={name} className="w-full h-44 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500 brightness-95" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-200/40 to-transparent pointer-events-none" />
      </div>
      <div className="p-4 sm:p-7 flex flex-col gap-2 sm:gap-3 flex-1">
        <div className="flex items-center gap-2 sm:gap-3 mb-1">
          <h3 className="text-lg sm:text-2xl font-extrabold text-gray-900 tracking-wide drop-shadow-lg flex-1">{name}</h3>
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-black bg-white/90 rounded-full p-2 hover:bg-yellow-300 hover:text-white shadow transition" aria-label="GitHub Repository" tabIndex={-1} title="View on GitHub">
            <FaGithub className="text-xl sm:text-2xl align-middle" />
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="ml-1 text-yellow-600 bg-white/90 rounded-full p-2 hover:bg-yellow-500 hover:text-white shadow transition" aria-label="Live Demo" tabIndex={-1} title="Live Demo">
              🚀
            </a>
          )}
        </div>
        <p className="text-sm sm:text-base text-gray-800 mb-1 sm:mb-2 font-medium italic">{desc}</p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
          {techs.map(t => (
            <span key={t} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-md border border-yellow-200/60 animate-pulse-slow" title={t}>{t}</span>
          ))}
        </div>
      </div>
      {/* Solar system planet effect */}
      <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-10 sm:w-16 h-10 sm:h-16 bg-yellow-300 rounded-full blur-xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-6 sm:w-10 h-6 sm:h-10 bg-blue-400 rounded-full blur-lg opacity-30 animate-spin-slow" />
    </div>
  );
}

// Add custom animation for tech badges, fade-in, and typewriter
<style>{`
@keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
.animate-pulse-slow { animation: pulse-slow 2.5s infinite; }
@keyframes fade-in-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
.animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1) both; }
@keyframes spin-slow { 100% { transform: rotate(360deg); } }
.animate-spin-slow { animation: spin-slow 12s linear infinite; }
@keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
.animate-spin-reverse { animation: spin-reverse 18s linear infinite; }
@keyframes typewriter { from { width: 0; } to { width: 100%; } }
.animate-typewriter { animation: typewriter 1.2s steps(20) 1 normal both; border-right: 2px solid #facc15; }
`}</style>
