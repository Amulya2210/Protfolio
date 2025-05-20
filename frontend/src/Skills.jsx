import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaJava, FaGitAlt, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiTailwindcss, SiMysql, SiPostgresql, SiSnowflake, SiCplusplus, SiC, SiSpringboot, SiIntellijidea, SiPostman } from 'react-icons/si';
import { useState } from 'react';

export default function Skills() {
  const [activeSkillTab, setActiveSkillTab] = useState('development');
  // Helper for skill hover pop effect
  const skillPopClass =
    'transition-transform duration-300 hover:scale-125 focus:scale-125';
  return (
    <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl bg-gradient-to-br from-yellow-400/80 via-blue-400/30 to-purple-400/20 rounded-3xl shadow-2xl px-3 sm:px-8 py-8 sm:py-12 flex flex-col items-center mt-10 sm:mt-14 border-4 border-yellow-300/30 relative overflow-hidden">
      {/* Solar system orbit lines for skills */}
      <div className="absolute left-1/2 -translate-x-1/2 w-96 h-96 border-4 border-white/20 rounded-full animate-spin-slow pointer-events-none z-0" />
      <div className="absolute left-1/2 -translate-x-1/2 w-72 h-72 border-4 border-yellow-300/20 rounded-full animate-spin-reverse pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl opacity-30 animate-pulse -translate-x-1/2 -translate-y-1/2 z-0" />
      <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6 sm:mb-10 text-center border-b-4 border-yellow-300 pb-2 w-full tracking-wider drop-shadow-lg z-10">Skills</h2>
      <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-10 z-10">
        <button className={`px-7 py-3 rounded-full font-bold text-xl transition-all border-2 ${activeSkillTab === 'development' ? 'bg-white text-yellow-500 border-yellow-400 shadow-lg' : 'bg-yellow-300/30 text-white border-transparent hover:bg-white/20'}`} onClick={() => setActiveSkillTab('development')}>Development</button>
        <button className={`px-7 py-3 rounded-full font-bold text-xl transition-all border-2 ${activeSkillTab === 'languages' ? 'bg-white text-yellow-500 border-yellow-400 shadow-lg' : 'bg-yellow-300/30 text-white border-transparent hover:bg-white/20'}`} onClick={() => setActiveSkillTab('languages')}>Languages</button>
        <button className={`px-7 py-3 rounded-full font-bold text-xl transition-all border-2 ${activeSkillTab === 'tools' ? 'bg-white text-yellow-500 border-yellow-400 shadow-lg' : 'bg-yellow-300/30 text-white border-transparent hover:bg-white/20'}`} onClick={() => setActiveSkillTab('tools')}>Tools</button>
      </div>
      {/* Tab Content */}
      <div className="z-10">
      {activeSkillTab === 'development' && (
        <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-8 animate-fade-in-up">
          <div className={`flex flex-col items-center ${skillPopClass}`}><FaHtml5 className="text-5xl text-red-600" /><span className="mt-2 font-semibold text-white">HTML</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><FaCss3Alt className="text-5xl text-blue-500" /><span className="mt-2 font-semibold text-white">CSS</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><FaJs className="text-5xl text-yellow-400" /><span className="mt-2 font-semibold text-white">JavaScript</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><SiTypescript className="text-5xl text-blue-600" /><span className="mt-2 font-semibold text-white">TypeScript</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><FaNodeJs className="text-5xl text-green-600" /><span className="mt-2 font-semibold text-white">Node.js</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><SiExpress className="text-5xl text-gray-800" /><span className="mt-2 font-semibold text-white">Express.js</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><SiMongodb className="text-5xl text-green-700" /><span className="mt-2 font-semibold text-white">MongoDB</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><FaReact className="text-5xl text-cyan-400" /><span className="mt-2 font-semibold text-white">React</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><SiTailwindcss className="text-5xl text-cyan-500" /><span className="mt-2 font-semibold text-white">Tailwind CSS</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><SiMysql className="text-5xl text-yellow-700" /><span className="mt-2 font-semibold text-white">MySQL</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><SiPostgresql className="text-5xl text-blue-800" /><span className="mt-2 font-semibold text-white">PostgreSQL</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><SiSnowflake className="text-5xl text-blue-400" /><span className="mt-2 font-semibold text-white">Snowflake</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><FaJava className="text-5xl text-orange-700" /><span className="mt-2 font-semibold text-white">Java</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><SiSpringboot className="text-5xl text-green-800" /><span className="mt-2 font-semibold text-white">Spring Boot</span></div>
        </div>
      )}
      {activeSkillTab === 'languages' && (
        <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-8 animate-fade-in-up">
          <div className={`flex flex-col items-center ${skillPopClass}`}><SiC className="text-5xl text-blue-700" /><span className="mt-2 font-semibold text-white">C</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><SiCplusplus className="text-5xl text-blue-400" /><span className="mt-2 font-semibold text-white">C++</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><FaPython className="text-5xl text-yellow-500" /><span className="mt-2 font-semibold text-white">Python</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><FaJava className="text-5xl text-orange-700" /><span className="mt-2 font-semibold text-white">Java</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><FaJs className="text-5xl text-yellow-400" /><span className="mt-2 font-semibold text-white">JavaScript</span></div>
        </div>
      )}
      {activeSkillTab === 'tools' && (
        <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-8 animate-fade-in-up">
          <div className={`flex flex-col items-center ${skillPopClass}`}><FaGitAlt className="text-5xl text-orange-600" /><span className="mt-2 font-semibold text-white">Git</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" className="w-12 h-12" /><span className="mt-2 font-semibold text-white">VSCode</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><SiIntellijidea className="text-5xl text-indigo-700" /><span className="mt-2 font-semibold text-white">IntelliJ</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><SiPostman className="text-5xl text-orange-500" /><span className="mt-2 font-semibold text-white">Postman</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><FaDocker className="text-5xl text-blue-400" /><span className="mt-2 font-semibold text-white">Docker</span></div>
          <div className={`flex flex-col items-center ${skillPopClass}`}><FaAws className="text-5xl text-orange-400" /><span className="mt-2 font-semibold text-white">AWS</span></div>
        </div>
      )}
      </div>
    </div>
  );
}
