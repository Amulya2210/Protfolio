import resumeFile from '../../Constent Item/Resume/Ayush Amulya_Resume_SD.I.pdf';

export default function ResumeSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-br from-yellow-100/40 via-blue-100/20 to-purple-100/20 mt-24 animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-yellow-400 mb-6 text-center border-b-4 border-yellow-300 pb-2 w-full max-w-xs tracking-wider drop-shadow-lg">Resume</h2>
      <p className="text-lg text-gray-800 mb-6">Download my latest resume below:</p>
      <a
        href={resumeFile}
        download="Ayush_Amulya_Resume.pdf"
        className="px-8 py-4 rounded-xl bg-yellow-400/80 hover:bg-yellow-500 text-xl font-bold text-yellow-900 shadow-lg transition border-2 border-yellow-300/50 hover:scale-105 hover:shadow-yellow-400/40 duration-300"
      >
        Download Resume
      </a>
    </div>
  );
}
