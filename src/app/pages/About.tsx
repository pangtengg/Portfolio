import { motion } from 'motion/react';
import { ExternalLink, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'Machine Learning', icon: '🤖' },
  { name: 'Deep Learning', icon: '🧬' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Git', icon: '📌' },
  { name: 'NLP', icon: '💬' },
  { name: 'Computer Vision', icon: '👁️' },
  { name: 'SQL', icon: '🗄️' },
];

const languages = [
  { name: 'english', level: 'C1' },
  { name: 'mandarin', level: 'native' },
  { name: 'malay', level: 'fluent' },
  { name: 'french', level: 'A1' },
];

const education = [
  {
    school: 'multimedia university',
    degree: 'bachelor of computer science (hons) artificial intelligence',
    period: '2023 – 2026',
    location: 'melaka, malaysia',
  },
  {
    school: 'multimedia university',
    degree: 'foundation in information technology',
    period: '2022 – 2023',
    location: 'melaka, malaysia',
  },
    {
    school: 'smk infant jesus convent',
    degree: 'spm 2021',
    period: '2019 – 2022',
    location: 'johor bahru, malaysia',
  },
];

const experiences = [
  {
    role: 'full stack developer intern',
    company: 'ifast global hub ai sdn bhd',
    period: 'july 2025 - october 2025',
    description: 'worked on stocks and etf modules for fsmone, frontend revamp projects, prompt tuning for stella ai agent and building power bi dashboards',
  },
  {
    role: 'research helper',
    company: 'multimedia university',
    period: 'jan 2024 - march 2024',
    description: 'annotated 13,000+ different vehicle images using computer vision annotation tool for the smart-vetran project',
  },
];

export default function About() {
  const profileImage = "/ditto.gif";
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [weeks, setWeeks] = useState<any[]>([]);
  const [hoveredDay, setHoveredDay] = useState<any | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = '/api/github';
        const res = await fetch(apiUrl);
        const json = await res.json();

        const weeksData = json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
        // Keep only the latest 52 weeks (1 year) to show most recent contributions
        const recentWeeks = weeksData.slice(-52);
        setWeeks(recentWeeks);
      } catch (err) {
        console.error('Failed to fetch GitHub contributions', err);
      }
    }

    fetchData();
  }, []);

  function getColor(count: number) {
    if (!count || count === 0) return '#0d1117';
    if (count < 3) return '#2f3133';
    if (count < 6) return '#5a5c5e';
    if (count < 10) return '#858687';
    return '#ffffff';
  }

  return (
    <div className="min-h-screen pt-12 pb-16 px-4 md:pr-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Infinite Scrolling Python Code */}
        <div className="overflow-hidden bg-[#0D1117] border border-[#3A3A3A] py-4">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="whitespace-nowrap font-mono text-sm text-green-400"
          >
            <span className="inline-block px-4">
              print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world")
            </span>
            <span className="inline-block px-4">
              print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world") &nbsp;&nbsp;&nbsp;&nbsp; print("hello world")
            </span>
          </motion.div>
        </div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-8"
        >
          {/* Profile Photo - No Frame */}
          <div className="w-full max-w-[200px] md:max-w-none mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <img
                src={profileImage}
                alt="kueh pang teng"
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </motion.div>
          </div>

          {/* Bio Text */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white space-y-3"
            >
              <p className="text-lg">
                i'm <span className="font-semibold">kueh pang teng</span> (郭)(湘婷) guō xiāng tíng.
              </p>
              <p className="text-[#B4B4B4] leading-relaxed">
                i grew up fascinated by how machines could learn and think which led me to ai, and now exploring 
                the intersection of code and data. when i'm not training models or debugging code, you'll find me 
                listening to music, editing videos or journaling random thoughts.
              </p>
            </motion.div>

            {/* GitHub Contributions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-[#1a1a1a] p-6 border border-[#3A3A3A]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs text-[#8E8E8E]">
                    github contributions
                  </span>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto cursor-hover"
                  >
                    <ExternalLink size={16} className="text-[#8E8E8E]" />
                  </a>
                </div>
                {/* GitHub Contribution Grid (real data) */}
                <div className="w-full overflow-x-auto overflow-y-hidden pb-2">
                  {weeks.length === 0 ? (
                    <div className="grid grid-cols-12 gap-1">
                      {Array.from({ length: 84 }).map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square bg-white/5"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex gap-1 min-w-max">
                      {weeks.map((week: any, wi: number) => (
                        <div key={wi} className="flex flex-col gap-1">
                          {week.contributionDays.map((day: any) => (
                            <div
                              key={day.date}
                              onMouseEnter={() => setHoveredDay(day)}
                              onMouseLeave={() => setHoveredDay(null)}
                              role="img"
                              aria-label={`${day.contributionCount} contributions on ${day.date}`}
                              title={`${day.contributionCount} contributions on ${day.date}`}
                              style={{
                                width: 12,
                                height: 12,
                                backgroundColor: getColor(day.contributionCount),
                                borderRadius: 2,
                                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                                boxShadow:
                                  hoveredDay?.date === day.date
                                    ? '0 0 6px rgba(255,255,255,0.06)'
                                    : 'none',
                              }}
                              className="hover:scale-125 cursor-pointer md:w-[14px] md:h-[14px]"
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Legend and hover info */}
                <div className="mt-4 flex items-center gap-4">
                  {hoveredDay ? (
                    <div className="text-xs text-white bg-neutral-800 px-3 py-1 rounded-md">
                      {hoveredDay.contributionCount} contributions on {hoveredDay.date}
                    </div>
                  ) : (
                    <div className="mt-4 text-center font-mono text-xs text-[#8E8E8E]">
                      live updated · {new Date().toLocaleTimeString()}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Resume Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Left Column */}
          <div className="space-y-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider mb-4 border-b border-[#3A3A3A] pb-2 text-[#8E8E8E]">
                languages
              </h3>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center text-sm text-white">
                    <span>{lang.name}</span>
                    <span className="font-mono text-xs text-[#8E8E8E]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider mb-4 border-b border-[#3A3A3A] pb-2 text-[#8E8E8E]">
                skills
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative flex items-center justify-center p-3 bg-[#1a1a1a] border border-[#3A3A3A] hover:border-white transition-colors cursor-hover group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    {hoveredSkill === skill.name && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                        {skill.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
            <a
              href="https://docs.google.com/document/d/1jITWz0-vwzyKlS7l7Ziy-RMZJeYIDUt1z5T4BqBjXhA/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-mono text-sm hover:bg-[#E0E0E0] transition-colors cursor-hover"
            >
              <Download size={16} />
              <span>resume</span>
            </a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider mb-6 border-b border-[#3A3A3A] pb-2 text-[#8E8E8E]">
                education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-white">{edu.school}</h4>
                      <span className="font-mono text-xs text-[#8E8E8E]">{edu.period}</span>
                    </div>
                    <p className="text-sm text-[#B4B4B4]">{edu.degree}</p>
                    <p className="text-xs text-[#8E8E8E]">{edu.location}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider mb-6 border-b border-[#3A3A3A] pb-2 text-[#8E8E8E]">
                experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-white">{exp.role}</h4>
                        <p className="text-sm text-[#B4B4B4]">{exp.company}</p>
                      </div>
                      <span className="font-mono text-xs text-[#8E8E8E]">{exp.period}</span>
                    </div>
                    <p className="text-sm text-[#B4B4B4]">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
