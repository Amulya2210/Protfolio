// Use public path for resume file
const resumeFile = '/AYUSH_AMULYA_RESUME_SD_I.pdf';

export default function ResumeSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-100/40 via-blue-100/20 to-purple-100/20 mt-16 sm:mt-20 md:mt-24 animate-fade-in-up px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400 mb-4 sm:mb-6 text-center border-b-4 border-yellow-300 pb-2 w-full max-w-xs tracking-wider drop-shadow-lg animate-fade-in-up">Resume</h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-4 sm:mb-6 text-center max-w-lg">Download my latest resume below:</p>
      <a
        href={resumeFile}
        download="Ayush_Amulya_Resume.pdf"
        className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-yellow-400/80 hover:bg-yellow-500 text-lg sm:text-xl font-bold text-yellow-900 shadow-lg transition border-2 border-yellow-300/50 hover:scale-105 hover:shadow-yellow-400/40 duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300"
      >
        Download Resume
      </a>
    </div>
  );
}

<style>{`
@keyframes fade-in-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
.animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1) both; }
`}</style>
