import { motion } from 'motion/react';
import { ExternalLink, Download } from 'lucide-react';
import { useState } from 'react';

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
    degree: 'BCS (hons) artificial intelligence',
    period: '2023 – 2026',
    location: 'melaka, malaysia',
  },
  {
    school: 'multimedia university',
    degree: 'foundation in science',
    period: '2022 – 2023',
    location: 'melaka, malaysia',
  },
];

const experiences = [
  {
    role: 'AI research intern',
    company: 'tech innovations lab',
    period: 'jan 2025 – present',
    description: 'working on computer vision projects and ML model optimization',
  },
  {
    role: 'web developer',
    company: 'freelance',
    period: '2023 – present',
    description: 'building responsive web applications for local businesses',
  },
];

export default function About() {
  const profileImage = "https://images.unsplash.com/photo-1614492898637-435e0f87cef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGFzaWFuJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzIzOTA0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080";
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-12 pb-16 px-4">
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
          className="grid md:grid-cols-[300px_1fr] gap-8"
        >
          {/* Profile Photo - No Frame */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <img
                src={profileImage}
                alt="kueh pang teng"
                className="w-full aspect-square object-cover grayscale"
              />
            </motion.div>
          </div>

          {/* Bio Text */}
          <div className="space-y-6">
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
                i grew up fascinated by how machines could learn and think. that curiosity led me to AI, 
                where i'm now exploring the intersection of code, data, and intelligent systems. 
                when i'm not training models or debugging code, you'll find me listening to music, 
                planning my next travel adventure, or journaling random thoughts.
              </p>
            </motion.div>

            {/* GitHub Contributions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider mb-4 border-b border-[#3A3A3A] pb-2 text-[#8E8E8E]">
                contributions
              </h3>
              <div className="bg-[#1a1a1a] p-6 border border-[#3A3A3A]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs text-[#8E8E8E]">
                    i make it, occasionally, in apps
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
                {/* GitHub Contribution Grid */}
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 84 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-white hover:bg-white/60 transition-opacity"
                      style={{
                        opacity: Math.random() > 0.7 ? 0.6 : 0.1,
                      }}
                    />
                  ))}
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
                href="#"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-mono text-sm hover:bg-[#E0E0E0] transition-colors cursor-hover"
              >
                <Download size={16} />
                <span>resume.pdf</span>
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
