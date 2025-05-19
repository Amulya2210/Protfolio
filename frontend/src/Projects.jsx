import whatsappCover from '../../Constent Item/project photo/whatapp.jpg';
import empCover from '../../Constent Item/project photo/Emp.png';
import creditCover from '../../Constent Item/project photo/credit.jpeg';
import vocalizeCover from '../../Constent Item/project photo/vocalize.png';
import desiCover from '../../Constent Item/project photo/desi .png';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <div className="mt-16 w-full max-w-5xl bg-gradient-to-br from-yellow-200/20 via-blue-200/10 to-purple-200/10 rounded-3xl shadow-2xl px-8 py-12 flex flex-col items-center border-4 border-yellow-300/30 relative overflow-hidden">
      {/* Solar system decorative orbits */}
      <div className="absolute -top-24 -left-24 w-96 h-96 border-4 border-yellow-200/30 rounded-full animate-spin-slow pointer-events-none z-0" />
      <div className="absolute -bottom-32 right-0 w-80 h-80 border-4 border-blue-200/20 rounded-full animate-spin-reverse pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-yellow-300/20 rounded-full blur-2xl opacity-30 animate-pulse -translate-x-1/2 -translate-y-1/2 z-0" />
      <h2 className="text-4xl font-extrabold text-yellow-300 mb-10 text-center border-b-4 border-yellow-300 pb-2 w-full tracking-wider drop-shadow-lg z-10">Projects</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
        {/* WhatsApp-Chat Analyser Project Card */}
        <ProjectCard
          cover={whatsappCover}
          name="WhatsApp-Chat Analyser"
          github="https://github.com/Amulya2210/WhatsApp-Chat-Analyzer.git"
          desc="Analyse your chats and sentiments."
          techs={["Python", "ML"]}
        />
        {/* Employee Retention Model Project Card */}
        <ProjectCard
          cover={empCover}
          name="Employee Retention Model"
          github="https://github.com/Amulya2210/Employee-Retention-Model.git"
          desc="Predictive Modeling for Employee Retention"
          techs={["Python", "ML", "AI"]}
        />
        {/* Credit Card Fraud Detection Project Card */}
        <ProjectCard
          cover={creditCover}
          name="Credit Card Fraud Detection"
          github="https://github.com/Amulya2210/Credit-Card-Fraud-Detection.git"
          desc="Detects the fraud and summarise it."
          techs={["Python", "ML", "Jupyter Notebook"]}
        />
        {/* Vocalize - AI Project Card */}
        <ProjectCard
          cover={vocalizeCover}
          name="Vocalize - AI"
          github="https://github.com/Amulya2210/Vocalize-AI.git"
          desc="Works and provides solution like human assistant."
          techs={["Python", "AI", "Jupyter Notebook"]}
        />
        {/* Desi Hatti Project Card */}
        <ProjectCard
          cover={desiCover}
          name="Desi Hatti"
          github="https://github.com/Amulya2210/Desi-Hatti-.git"
          desc="A desi rental place"
          techs={["Java", "React", "JS", "Tailwind", "MongoDB"]}
        />
      </div>
    </div>
  );
}

function ProjectCard({ cover, name, github, desc, techs }) {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-100/60 to-yellow-300/80 border-4 border-yellow-200 group hover:scale-105 hover:shadow-yellow-400/40 transition-transform duration-500 cursor-pointer z-10">
      <div className="relative">
        <img src={cover} alt={name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 brightness-95" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-200/40 to-transparent pointer-events-none" />
      </div>
      <div className="p-7 flex flex-col gap-3">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-wide drop-shadow-lg flex-1">{name}</h3>
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-black bg-white/90 rounded-full p-2 hover:bg-yellow-300 hover:text-white shadow transition" aria-label="GitHub Repository">
            <FaGithub className="text-2xl align-middle" />
          </a>
        </div>
        <p className="text-base text-gray-800 mb-2 font-medium italic">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {techs.map(t => (
            <span key={t} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border border-yellow-200/60 animate-pulse-slow">{t}</span>
          ))}
        </div>
      </div>
      {/* Solar system planet effect */}
      <div className="absolute -top-8 -right-8 w-16 h-16 bg-yellow-300 rounded-full blur-xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-10 h-10 bg-blue-400 rounded-full blur-lg opacity-30 animate-spin-slow" />
    </div>
  );
}

// Add custom animation for tech badges
<style>{`
@keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
.animate-pulse-slow { animation: pulse-slow 2.5s infinite; }
`}</style>
