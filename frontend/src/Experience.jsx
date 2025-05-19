export default function Experience() {
  return (
    <div className="mt-14 w-full max-w-xl bg-gradient-to-r from-yellow-200/30 via-blue-200/10 to-purple-200/10 rounded-2xl shadow-2xl border-4 border-yellow-300/20 px-8 py-8 animate-fade-in-up relative overflow-hidden">
      {/* Solar system orbit effect */}
      <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-yellow-200/30 rounded-full animate-spin-slow pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-400 rounded-full blur-xl opacity-20 animate-pulse pointer-events-none z-0" />
      <h2 className="text-3xl font-extrabold text-yellow-300 mb-4 text-center tracking-wider drop-shadow-lg z-10">Experience</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 z-10">
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
  );
}
