import './index.css';
import p1 from './assets/p1.jpg';
import { useNavigate } from 'react-router-dom';
import { FaKey, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaJava, FaGitAlt, FaPython, FaDocker, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiTailwindcss, SiMysql, SiPostgresql, SiSnowflake, SiCplusplus, SiC, SiSpringboot, SiIntellijidea, SiPostman } from 'react-icons/si';
import { useState } from 'react';

// Import certificate PDFs as static assets (Vite: use import instead of require)
import sqlBasicCert from '../../Constent Item/Certification/sql_basic certificate (1).pdf';
import pythonBasicCert from '../../Constent Item/Certification/python_basic certificate (1).pdf';
import pythonDataScienceCert from '../../Constent Item/Certification/Python Data science.pdf';
import promptEngCert from '../../Constent Item/Certification/Prompt Engineering for ChatGPT.pdf';
import problemSolvingCert from '../../Constent Item/Certification/problem_solving_basic certificate (2).pdf';
import javaBasicCert from '../../Constent Item/Certification/java_basic certificate (2).pdf';
import introDataAnalyticsCert from '../../Constent Item/Certification/Introduction to Data Analytics.pdf';
import introBusinessAnalyticsCert from '../../Constent Item/Certification/Introduction to Business Analytics.pdf';
import genAIPromptEngCert from '../../Constent Item/Certification/Generative AI Prompt Engineering Basics.pdf';
import genAIIntroCert from '../../Constent Item/Certification/Generative AI Introduction and Applications.pdf';
import dataScienceCert from '../../Constent Item/Certification/Data Science.pdf';
import dataMethodologyCert from '../../Constent Item/Certification/data mathodology.pdf';
import cloudComputingCert from '../../Constent Item/Certification/Cloud Computing.pdf';
import businessAnalyticsCert from '../../Constent Item/Certification/Business Analytics.pdf';

import whatsappCover from '../../Constent Item/project photo/whatapp.jpg';
import empCover from '../../Constent Item/project photo/Emp.png';
import creditCover from '../../Constent Item/project photo/credit.jpeg';
import vocalizeCover from '../../Constent Item/project photo/vocalize.png';

const certificates = [
  { name: 'SQL Basic', file: sqlBasicCert },
  { name: 'Python Basic', file: pythonBasicCert },
  { name: 'Python Data Science', file: pythonDataScienceCert },
  { name: 'Prompt Engineering for ChatGPT', file: promptEngCert },
  { name: 'Problem Solving Basic', file: problemSolvingCert },
  { name: 'Java Basic', file: javaBasicCert },
  { name: 'Introduction to Data Analytics', file: introDataAnalyticsCert },
  { name: 'Introduction to Business Analytics', file: introBusinessAnalyticsCert },
  { name: 'Generative AI Prompt Engineering Basics', file: genAIPromptEngCert },
  { name: 'Generative AI Introduction and Applications', file: genAIIntroCert },
  { name: 'Data Science', file: dataScienceCert },
  { name: 'Data Methodology', file: dataMethodologyCert },
  { name: 'Cloud Computing', file: cloudComputingCert },
  { name: 'Business Analytics', file: businessAnalyticsCert },
];

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
      <div className="z-10 flex flex-col items-center">
        <img src={p1} alt="Ayush Amulya" className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 object-cover" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2 tracking-wide">AYUSH AMULYA</h1>
        <p className="text-lg md:text-2xl font-semibold text-cyan-200 mt-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md shadow-md border border-cyan-300/20 animate-fade-in-up transition-all duration-700">
          Passionate about technology, obsessed with clean code—I'm Ayush, a full-stack developer on a mission to create impact.
        </p>
        {/* Experience Section */}
        <div className="mt-10 w-full max-w-md bg-white/10 rounded-xl shadow-lg border border-cyan-300/20 px-6 py-6 animate-fade-in-up">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4 text-center">Experience</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="flex-shrink-0 w-16 h-16 bg-yellow-300/80 border-4 border-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-2xl font-bold text-black">FI</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold text-white">Fidelity Internationals</h3>
              <p className="text-cyan-100 text-sm mb-1">Software Developer Intern</p>
              <span className="inline-block text-xs font-medium text-yellow-200 bg-yellow-400/20 rounded px-2 py-1 mb-1">Jan 2025 - Present</span>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-10 w-full max-w-4xl bg-yellow-400 rounded-2xl shadow-xl px-6 py-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white mb-8 text-center border-b-4 border-yellow-300 pb-2 w-full">Skills</h2>
          {/* Skill Tabs */}
          <div className="flex flex-row justify-center gap-4 mb-8">
            <button
              className={`px-6 py-2 rounded-full font-bold text-lg transition-all border-2 ${activeSkillTab === 'development' ? 'bg-white text-yellow-500 border-yellow-400 shadow-md' : 'bg-yellow-300/30 text-white border-transparent hover:bg-white/20'}`}
              onClick={() => setActiveSkillTab('development')}
            >
              Development
            </button>
            <button
              className={`px-6 py-2 rounded-full font-bold text-lg transition-all border-2 ${activeSkillTab === 'languages' ? 'bg-white text-yellow-500 border-yellow-400 shadow-md' : 'bg-yellow-300/30 text-white border-transparent hover:bg-white/20'}`}
              onClick={() => setActiveSkillTab('languages')}
            >
              Languages
            </button>
            <button
              className={`px-6 py-2 rounded-full font-bold text-lg transition-all border-2 ${activeSkillTab === 'tools' ? 'bg-white text-yellow-500 border-yellow-400 shadow-md' : 'bg-yellow-300/30 text-white border-transparent hover:bg-white/20'}`}
              onClick={() => setActiveSkillTab('tools')}
            >
              Tools
            </button>
          </div>
          {/* Solar system orbit lines for skills */}
          <div className="relative w-full flex justify-center items-center mb-8" style={{ minHeight: '120px' }}>
            <div className="absolute left-1/2 -translate-x-1/2 w-72 h-72 border-2 border-white/20 rounded-full animate-spin-slow pointer-events-none" style={{ zIndex: 0 }} />
            <div className="absolute left-1/2 -translate-x-1/2 w-52 h-52 border-2 border-yellow-300/20 rounded-full animate-spin-reverse pointer-events-none" style={{ zIndex: 0 }} />
          </div>
          {/* Tab Content */}
          {activeSkillTab === 'development' && (
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 animate-fade-in-up">
              {/* Development Skills */}
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-5xl text-red-600" />
                <span className="mt-2 font-semibold text-white">HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt className="text-5xl text-blue-500" />
                <span className="mt-2 font-semibold text-white">CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJs className="text-5xl text-yellow-400" />
                <span className="mt-2 font-semibold text-white">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-5xl text-blue-600" />
                <span className="mt-2 font-semibold text-white">TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-5xl text-green-600" />
                <span className="mt-2 font-semibold text-white">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiExpress className="text-5xl text-gray-800" />
                <span className="mt-2 font-semibold text-white">Express.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-5xl text-green-700" />
                <span className="mt-2 font-semibold text-white">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-5xl text-cyan-400" />
                <span className="mt-2 font-semibold text-white">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-5xl text-cyan-500" />
                <span className="mt-2 font-semibold text-white">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMysql className="text-5xl text-yellow-700" />
                <span className="mt-2 font-semibold text-white">MySQL</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPostgresql className="text-5xl text-blue-800" />
                <span className="mt-2 font-semibold text-white">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center">
                <SiSnowflake className="text-5xl text-blue-400" />
                <span className="mt-2 font-semibold text-white">Snowflake</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJava className="text-5xl text-orange-700" />
                <span className="mt-2 font-semibold text-white">Java</span>
              </div>
              <div className="flex flex-col items-center">
                <SiSpringboot className="text-5xl text-green-800" />
                <span className="mt-2 font-semibold text-white">Spring Boot</span>
              </div>
            </div>
          )}
          {activeSkillTab === 'languages' && (
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 animate-fade-in-up">
              {/* Languages */}
              <div className="flex flex-col items-center">
                <SiC className="text-5xl text-blue-700" />
                <span className="mt-2 font-semibold text-white">C</span>
              </div>
              <div className="flex flex-col items-center">
                <SiCplusplus className="text-5xl text-blue-400" />
                <span className="mt-2 font-semibold text-white">C++</span>
              </div>
              <div className="flex flex-col items-center">
                <FaPython className="text-5xl text-yellow-500" />
                <span className="mt-2 font-semibold text-white">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJava className="text-5xl text-orange-700" />
                <span className="mt-2 font-semibold text-white">Java</span>
              </div>
              <div className="flex flex-col items-center">
                <SiSpringboot className="text-5xl text-green-800" />
                <span className="mt-2 font-semibold text-white">Spring Boot</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJs className="text-5xl text-yellow-400" />
                <span className="mt-2 font-semibold text-white">JavaScript</span>
              </div>
            </div>
          )}
          {activeSkillTab === 'tools' && (
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 animate-fade-in-up">
              {/* Tools */}
              <div className="flex flex-col items-center">
                <FaGitAlt className="text-5xl text-orange-600" />
                <span className="mt-2 font-semibold text-white">Git</span>
              </div>
              <div className="flex flex-col items-center">
                {/* VSCode icon fallback */}
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" className="w-12 h-12" />
                <span className="mt-2 font-semibold text-white">VSCode</span>
              </div>
              <div className="flex flex-col items-center">
                <SiIntellijidea className="text-5xl text-indigo-700" />
                <span className="mt-2 font-semibold text-white">IntelliJ</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPostman className="text-5xl text-orange-500" />
                <span className="mt-2 font-semibold text-white">Postman</span>
              </div>
              <div className="flex flex-col items-center">
                <FaDocker className="text-5xl text-blue-400" />
                <span className="mt-2 font-semibold text-white">Docker</span>
              </div>
            </div>
          )}
        </div>
        {/* Project Section */}
        <div className="mt-10 w-full max-w-3xl bg-white/10 rounded-2xl shadow-xl px-6 py-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-yellow-300 mb-8 text-center border-b-4 border-yellow-300 pb-2 w-full">Projects</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WhatsApp-Chat Analyser Project Card */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-yellow-300/60 to-yellow-400/80 border-2 border-yellow-300 group">
              <img src={whatsappCover} alt="WhatsApp-Chat Analyser" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-gray-900">WhatsApp-Chat Analyser</h3>
                  <a href="https://github.com/Amulya2210/WhatsApp-Chat-Analyzer.git" target="_blank" rel="noopener noreferrer" className="text-black bg-white/80 rounded-full p-1 hover:bg-yellow-300 transition" aria-label="GitHub Repository">
                    <FaGithub className="text-xl align-middle" />
                  </a>
                </div>
                <p className="text-base text-gray-800 mb-2">Analyse your chats and sentiments.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-yellow-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full">Python</span>
                  <span className="bg-yellow-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full">ML</span>
                </div>
              </div>
            </div>
            {/* Employee Retention Model Project Card */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-yellow-300/60 to-yellow-400/80 border-2 border-yellow-300 group">
              <img src={empCover} alt="Employee Retention Model" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-gray-900">Employee Retention Model</h3>
                  <a href="https://github.com/Amulya2210/Employee-Retention-Model.git" target="_blank" rel="noopener noreferrer" className="text-black bg-white/80 rounded-full p-1 hover:bg-yellow-300 transition" aria-label="GitHub Repository">
                    <FaGithub className="text-xl align-middle" />
                  </a>
                </div>
                <p className="text-base text-gray-800 mb-2">Predictive Modeling for Employee Retention</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-yellow-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full">Python</span>
                  <span className="bg-yellow-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full">ML</span>
                  <span className="bg-yellow-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full">AI</span>
                </div>
              </div>
            </div>
            {/* Credit Card Fraud Detection Project Card */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-yellow-300/60 to-yellow-400/80 border-2 border-yellow-300 group">
              <img src={creditCover} alt="Credit Card Fraud Detection" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-gray-900">Credit Card Fraud Detection</h3>
                  <a href="https://github.com/Amulya2210/Credit-Card-Fraud-Detection.git" target="_blank" rel="noopener noreferrer" className="text-black bg-white/80 rounded-full p-1 hover:bg-yellow-300 transition" aria-label="GitHub Repository">
                    <FaGithub className="text-xl align-middle" />
                  </a>
                </div>
                <p className="text-base text-gray-800 mb-2">Detects the fraud and summarise it.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-yellow-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full">Python</span>
                  <span className="bg-yellow-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full">ML</span>
                  <span className="bg-yellow-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full">Jupyter Notebook</span>
                </div>
              </div>
            </div>
            {/* Vocalize - AI Project Card */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-yellow-300/60 to-yellow-400/80 border-2 border-yellow-300 group">
              <img src={vocalizeCover} alt="Vocalize - AI" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-gray-900">Vocalize - AI</h3>
                  <a href="https://github.com/Amulya2210/Vocalize-AI.git" target="_blank" rel="noopener noreferrer" className="text-black bg-white/80 rounded-full p-1 hover:bg-yellow-300 transition" aria-label="GitHub Repository">
                    <FaGithub className="text-xl align-middle" />
                  </a>
                </div>
                <p className="text-base text-gray-800 mb-2">works and provide solution like human assistent .</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-yellow-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full">Python</span>
                  <span className="bg-yellow-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full">AI</span>
                  <span className="bg-yellow-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full">Jupyter Notebook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Certificate Section */}
        <div className="mt-10 w-full max-w-2xl bg-white/10 rounded-2xl shadow-xl px-6 py-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-yellow-300 mb-8 text-center border-b-4 border-yellow-300 pb-2 w-full">Certificates</h2>
          <ul className="w-full flex flex-col gap-4">
            {certificates.map((cert, idx) => (
              <li key={cert.name}>
                <button
                  className="w-full text-left px-4 py-3 rounded-lg bg-yellow-200/30 hover:bg-yellow-300/40 text-lg font-semibold text-yellow-900 shadow transition flex items-center gap-2"
                  onClick={() => window.open(cert.file, '_blank')}
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2 animate-pulse" />
                  {cert.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
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
