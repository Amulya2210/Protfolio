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

export default function Certificates() {
  return (
    <div className="mt-16 w-full max-w-2xl bg-gradient-to-br from-yellow-200/20 via-blue-200/10 to-purple-200/10 rounded-3xl shadow-2xl px-8 py-12 flex flex-col items-center border-4 border-yellow-300/30 relative overflow-hidden">
      {/* Solar system decorative orbits */}
      <div className="absolute -top-20 -left-20 w-72 h-72 border-4 border-yellow-200/30 rounded-full animate-spin-slow pointer-events-none z-0" />
      <div className="absolute -bottom-24 right-0 w-60 h-60 border-4 border-blue-200/20 rounded-full animate-spin-reverse pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl opacity-30 animate-pulse -translate-x-1/2 -translate-y-1/2 z-0" />
      <h2 className="text-4xl font-extrabold text-yellow-300 mb-10 text-center border-b-4 border-yellow-300 pb-2 w-full tracking-wider drop-shadow-lg z-10">Certificates</h2>
      <ul className="w-full flex flex-col gap-5 z-10">
        {certificates.map((cert, idx) => (
          <li key={cert.name} className="relative">
            <button
              className="w-full text-left px-6 py-4 rounded-xl bg-yellow-200/40 hover:bg-yellow-300/60 text-lg font-bold text-yellow-900 shadow-lg transition flex items-center gap-3 border-2 border-yellow-300/30 hover:scale-105 hover:shadow-yellow-400/40 duration-300"
              onClick={() => window.open(cert.file, '_blank')}
            >
              <span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-3 animate-pulse" />
              {cert.name}
            </button>
            {/* Solar system mini planet effect */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-300 rounded-full blur-md opacity-40 animate-pulse" />
          </li>
        ))}
      </ul>
    </div>
  );
}
