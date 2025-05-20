import p8 from '../../Constent Item/photo/p8.jpeg';
import p4 from '../../Constent Item/photo/p4.jpg';
import p9 from '../../Constent Item/photo/p9.jpg';
import { useNavigate } from 'react-router-dom';

export default function FidelityExperience() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Solar system themed background with p8 */}
      <img src={p8} alt="Fidelity Experience" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" style={{filter:'blur(2px)'}} />
      {/* Solar system orbits */}
      <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] border-4 border-yellow-200/20 rounded-full animate-spin-slow pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute left-1/2 top-1/2 w-[400px] h-[400px] border-4 border-blue-200/20 rounded-full animate-spin-reverse pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute left-1/2 top-1/2 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl opacity-30 animate-pulse -translate-x-1/2 -translate-y-1/2 z-0" />
      <button onClick={() => navigate(-1)} className="absolute top-6 left-6 bg-black/60 text-yellow-300 px-4 py-2 rounded-full font-bold shadow hover:bg-yellow-400 hover:text-black transition z-20 border-2 border-yellow-200/40">← Back</button>
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-12 sm:py-20 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-300 mb-6 text-center border-b-4 border-yellow-300 pb-2 w-full tracking-wider drop-shadow-lg">Software Developer Intern – Fidelity International</h1>
        <p className="text-lg text-white/90 mb-2 text-center font-semibold">Jan 2025 – Present</p>
        <ul className="text-base sm:text-lg text-white/90 mb-8 space-y-4 list-none">
          <li>🔧 Developed and optimized backend services using <b>Spring Boot</b>, implementing key business logic for enterprise-level applications.</li>
          <li>☁️ Contributed to <b>cloud migration</b> initiatives by refactoring legacy code and supporting seamless deployment pipelines.</li>
          <li>📊 Designed and built an <b>Order Analysis Dashboard</b> using Python (backend) and React (frontend) to visualize and track daily fund orders directly from the database.</li>
          <li>🧩 Worked on <b>Micro Frontends (MFEs)</b> to create a modular, scalable, and maintainable frontend architecture for internal tools.</li>
        </ul>
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-200 mb-4 mt-10 text-center border-b-2 border-yellow-200 pb-1 w-full max-w-xs">Learning</h2>
        <ul className="text-base sm:text-lg text-white/90 mb-8 space-y-3 list-none">
          <li>💡 <b>Spring Boot in Depth:</b> Hands-on experience building scalable backend services and implementing real-world business logic.</li>
          <li>☁️ <b>Cloud Migration & DevOps Exposure:</b> Understood clean, refactorable code for cloud-readiness and got exposure to deployment and CI/CD.</li>
          <li>🧮 <b>Data Handling & Visualization:</b> Learned to fetch, process, and visualize large datasets using Python and React.</li>
          <li>🧩 <b>Modular Frontend Architecture:</b> Developed understanding of Micro Frontends and scalable component-based design.</li>
          <li>🛠️ <b>Professional Development Practices:</b> Used Git, Jira, Confluence, and wrote maintainable code in a professional environment.</li>
        </ul>
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-200 mb-4 mt-10 text-center border-b-2 border-yellow-200 pb-1 w-full max-w-xs">My Experience & Reflections</h2>
        <ul className="text-base sm:text-lg text-white/90 mb-8 space-y-3 list-none">
          <li>🌟 <b>Confidence Boost:</b> Working on real-world financial systems gave me immense confidence in my coding and problem-solving skills.</li>
          <li>🧠 <b>Bridging Theory & Practice:</b> College concepts made real sense as I applied them to impactful projects.</li>
          <li>🤝 <b>Team Collaboration:</b> Learned the value of communication, feedback, and agile teamwork.</li>
          <li>🚀 <b>Motivated to Learn More:</b> Deepened my interest in backend, cloud, and system design.</li>
          <li>🙌 <b>Gratitude:</b> Grateful for the opportunity to contribute and learn from experienced mentors.</li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-6 mt-8 items-center justify-center">
          <img src={p4} alt="Team" className="w-40 h-40 object-cover rounded-2xl shadow-2xl border-4 border-yellow-200 bg-white/20" />
          <img src={p9} alt="Work" className="w-40 h-40 object-cover rounded-2xl shadow-2xl border-4 border-yellow-200 bg-white/20" />
        </div>
      </div>
      <style>{`
        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 18s linear infinite; }
        .animate-spin-reverse { animation: spin-slow 24s linear infinite reverse; }
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1) both; }
      `}</style>
    </div>
  );
}
