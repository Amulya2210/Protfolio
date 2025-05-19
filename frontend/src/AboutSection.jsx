import p3 from '../../Constent Item/photo/p3.jpg';
import { useState } from 'react';

const timelineData = [
	{
		year: 'Current',
		title: 'Fidelity Investments',
		summary: 'Software Developer Intern',
		details: `Currently, I’m working as a Software Developer Intern at Fidelity Investments, where I’m gaining hands-on experience in real-world development practices.\n\nThis opportunity is helping me sharpen my technical skills, collaborate in agile teams, and contribute to impactful projects in a professional environment.`,
	},
	{
		year: '2021 - 2025',
		title: 'Kalinga Institute of Industrial Technology (KIIT)',
		summary: 'B.Tech in Computer Science and Engineering',
		details: `My journey at Kalinga Institute of Industrial Technology (KIIT) has been nothing short of transformative. It wasn’t just a college—it was a place where I grew both technically and personally.\n\nOver the course of my B.Tech in Computer Science and Engineering, I not only gained strong technical skills in software development, programming, and modern tech stacks, but also developed important life skills like communication, collaboration, time management, and adaptability.\n\nKIIT provided me with a platform to learn, explore, and evolve—and I’m proud to carry that experience forward into my professional journey.`,
	},
	{
		year: '2019 - 2021',
		title: 'Senior Secondary (CBSE)',
		summary: 'Physics, Chemistry, Mathematics (PCM)',
		details: `My academic path has been a continuous journey of growth and exploration. I completed my Senior Secondary education under the CBSE board, with a focus on Physics, Chemistry, and Mathematics (PCM).`,
	},
	{
		year: '2018 - 2019',
		title: 'St. Xavier’s High School, Patna',
		summary: 'ICSE 10th Grade',
		details: `I began my foundation at St. Xavier’s High School, Patna, where I completed my 10th grade under the ICSE board. It was there that I developed a deep sense of curiosity, discipline, and a love for structured learning.`,
	},
];

export default function AboutSection() {
	const [unlocked, setUnlocked] = useState(false);
	const [openIndex, setOpenIndex] = useState(null);
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 via-blue-900 to-black text-white relative overflow-hidden px-2 py-10">
			{/* Solar system background */}
			<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
				<div className="w-96 h-96 border-2 border-yellow-300/20 rounded-full absolute animate-spin-slow" />
				<div className="w-72 h-72 border-2 border-blue-300/10 rounded-full absolute animate-spin-reverse" />
				<div className="w-56 h-56 border-2 border-purple-400/10 rounded-full absolute animate-spin-slow" />
				<div className="w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-20 absolute animate-pulse" />
			</div>
			{/* About Me section locked behind photo */}
			<div className="z-10 max-w-2xl mx-auto mb-10 text-center flex flex-col items-center">
				{!unlocked ? (
					<img
						src={p3}
						alt="Unlock About"
						className="w-40 h-40 rounded-full border-4 border-yellow-300 shadow-xl mb-6 object-cover cursor-pointer hover:scale-105 transition"
						onClick={() => setUnlocked(true)}
					/>
				) : (
					<>
						<img
							src={p3}
							alt="Ayush Amulya"
							className="w-40 h-40 rounded-full border-4 border-yellow-300 shadow-xl mb-6 object-cover"
							style={{ pointerEvents: 'none' }}
						/>
						<h1 className="text-4xl font-bold mb-4">About Me</h1>
						<p className="text-lg md:text-xl bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 shadow-lg border border-white/20 mb-6">
							I'm Ayush Amulya, a passionate full-stack software developer with a
							B.Tech degree in Computer Science and Engineering. I thrive at the
							intersection of technology and creativity, always eager to explore new
							tools, frameworks, and ideas.
							<br />
							<br />
							With a curious mind and a builder's heart, I enjoy crafting meaningful
							digital solutions—whether it's a feature-rich web app or a simple tool
							that solves a real-world problem.
							<br />
							<br />
							Outside of code, I also have a knack for writing and storytelling,
							which helps me communicate complex ideas clearly and creatively. I'm
							always excited to learn, build, and share.
						</p>
					</>
				)}
				{/* Timeline always visible below photo/about */}
				<div className="z-10 flex flex-col items-center w-full max-w-xl relative">
					<div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400/40 via-blue-400/30 to-purple-400/30" style={{ zIndex: 0 }} />
					{timelineData.map((item, idx) => (
						<div key={item.year} className="relative w-full flex items-center mb-16 last:mb-0">
							<div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400/40 via-blue-400/30 to-purple-400/30" style={{ zIndex: 0 }} />
							<div className={`mx-auto flex flex-col items-center w-full z-10`}>
								<button
									className={`group flex flex-col items-center focus:outline-none transition-transform duration-300 ${openIndex === idx ? 'scale-110' : 'hover:scale-105'}`}
									onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
									aria-label={`Show details for ${item.year}`}
								>
									<div
										className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 ${
											idx === 0
												? 'bg-yellow-300/80 border-yellow-400'
												: idx === 1
												? 'bg-blue-400/80 border-blue-400'
												: 'bg-purple-400/80 border-purple-400'
										} group-hover:shadow-2xl group-hover:brightness-110 transition-all duration-300 animate-pulse`}
									>
										<span className="text-xl font-bold text-black drop-shadow-lg">
											{item.year}
										</span>
									</div>
									<span className="mt-3 text-lg font-semibold text-white drop-shadow-md">
										{item.title}
									</span>
									<span className="text-sm text-cyan-100 mb-2">
										{item.summary}
									</span>
								</button>
								{openIndex === idx && (
									<div className="mt-4 bg-white/90 text-gray-900 rounded-xl shadow-2xl border border-yellow-300/30 px-6 py-4 max-w-lg w-full animate-fade-in-up z-20">
										<button
											className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-xl font-bold focus:outline-none"
											onClick={() => setOpenIndex(null)}
											aria-label="Close details"
										>
											×
										</button>
										<div className="whitespace-pre-line text-base md:text-lg font-medium">
											{item.details}
										</div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			<style>{`
        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 18s linear infinite; }
        .animate-spin-reverse { animation: spin-slow 24s linear infinite reverse; }
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.7s cubic-bezier(0.23, 1, 0.32, 1) both; }
      `}</style>
		</div>
	);
}
