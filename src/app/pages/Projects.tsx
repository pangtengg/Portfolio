import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, X } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: 'my portfolio',
    summary: 'my personal portfolio website with my creativity',
    description: 'turned my idea into ui with figma make, built with react and typescript, hosted on vercel',
    tags: ['react', 'typescript', 'vercel'],
    image: '/portfolio.jpg',
    github: 'https://github.com/pangtengg/Portfolio',
    demo: 'https://pangtengg.vercel.app/',
  },
  {
    id: 2,
    title: 'garbage classification system',
    summary: 'cnn resnet50 model for garbage classification with transfer learning',
    description: 'built a CNN model that classifies waste images into 12 categories. developed this during a 5-day CNN course by AI Nusantara (now ASEM). my first ML project - super fun and learned a lot from it!.',
    tags: ['python', 'pytorch', 'resnet50', 'streamlit'],
    image: '/garbage_classification.png',
    github: 'https://github.com/pangtengg/garbage-classifier',
    demo: 'https://garbage-classifier-eco.streamlit.app/',
  },
  {
    id: 3,
    title: 'traffic prediction system',
    summary: 'traffic prediction using fuzzy logic with gru optimised with pso algorithm',      description: 'built for computer intelligence project',     tags: ['python', 'pytorch', 'streamlit'],
    image: '/traffic.png',
    github: 'https://github.com/pangtengg/traffic-prediction',
    demo: '#',
  },    
  {
    id: 4,
    title: 'stock wise',
    summary: 'stock analysis webapp assignment for web techniques course',
    description: 'built for web techniques course project, learned web development with html, css & javascript and used alpha vantage api to fetch stock data',
    tags: ['html', 'css', 'javascript'],
    image: '/stockwise.jpg',
    github: 'https://github.com/pangtengg/StockAnalyser',
    demo: '#',
  },
];

const otherProjects = [
  { id: 5, title: 'bus booking system', github: 'https://github.com/pangtengg/BusBookingSystem', demo: '#', description: 'a bus ticket booking system with seat selection and payment integration', tags: ['java', 'mysql', 'apache netbeans', 'oop'] },
  { id: 6, title: 'medimind for vhack25', github: 'https://github.com/Xuannn28/vhack2025', demo: 'https://youtu.be/1X-N-HAiz5s', description: 'ai-powered healthcare assistant with functionalities such as smart reminders, appointment booking, transcription services, and an AI chatbot, in addition to providing emergency contact support for mental health crises', tags: ['react native'] },
  { id: 7, title: 'finassist for cursor hackathon', github: 'https://github.com/yccccc12/finance-assistance', demo: 'https://devpost.com/software/finger', description: 'personal finance assistant with transaction tracking, receipt scanner, shared bill splitting with whatsapp message, subscription tracker, ai financial assistant with rag', tags: ['next.js', 'tailwind css', 'tidb cloud database', 'fastapi', 'elevenlabs', 'cursor'] },
  { id: 8, title: 'safepatch disaster prediction', github: 'https://github.com/pangtengg/disaster-prediction', demo: '#', description: 'machine learning model for predicting natural disasters', tags: ['python', 'automl', 'huggingface'] },
  { id: 9, title: 'chronovault ai museum for agentforce', github: 'https://github.com/AMBERKUEH/agentforce', demo: '#', description: 'interactive 3D museum with for historical exhibits', tags: ['react', 'three.js', 'node.js + express', 'wavespeed for img generation', 'insforge', 'qoder'] },
  { id: 10, title: 'energy mind for hackomania', github: 'https://github.com/pangtengg/energymind', demo: 'https://youtu.be/Bn2hh0TKaxw?si=YmgWL2huCyxJe1xb', description: 'energy management mobile app with ml-powered optimization suggestions', tags: ['react native', 'typescript', 'javascript', 'python', 'manus'] },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const selectedProjectData = featuredProjects.find((p) => p.id === selectedProject);

  // Autoscroll carousel with infinite loop
  useEffect(() => {
    if (isCarouselPaused || !carouselRef.current) return;
    
    const carousel = carouselRef.current;
    let animationId: number;
    const scrollSpeed = 0.6;
    
    const scroll = () => {
      if (!carousel || isCarouselPaused) return;
      
      carousel.scrollLeft += scrollSpeed;
      
      // When we've scrolled past the first set, reset to start seamlessly
      const firstSetWidth = carousel.scrollWidth / 2;
      if (carousel.scrollLeft >= firstSetWidth) {
        carousel.scrollLeft = 0;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animationId);
  }, [isCarouselPaused]);

  return (
    <div className="min-h-screen pt-12 pb-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-serif text-4xl mb-2 text-white text-center">projects</h1>
          <p className="font-mono text-sm text-[#8E8E8E] text-center">
            things i've built and learned from
          </p>
        </motion.div>

        {/* Fatured Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="relative"
        >
          <div 
            ref={carouselRef}
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            className="overflow-hidden pb-4 -mx-4 px-4 cursor-hover"
          >
            <div className="flex gap-6 min-w-max">
              {/* First set of projects */}
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedProject(project.id)}
                  className="w-[340px] md:w-[400px] bg-[#1a1a1a] border-2 border-[#3A3A3A] overflow-hidden cursor-pointer hover:border-white transition-all cursor-hover flex-shrink-0"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden bg-[#0D1117]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-xl text-white">
                        #{project.id} {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#B4B4B4]">{project.summary}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#2B2B2B] border border-[#3A3A3A] font-mono text-xs text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-mono hover:text-white transition-colors cursor-hover text-[#B4B4B4]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} />
                        code
                      </a>
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-mono hover:text-white transition-colors cursor-hover text-[#B4B4B4]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={14} />
                          demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless infinite scroll */}
              {featuredProjects.map((project) => (
                <motion.div
                  key={`dup-${project.id}`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedProject(project.id)}
                  className="w-[340px] md:w-[400px] bg-[#1a1a1a] border-2 border-[#3A3A3A] overflow-hidden cursor-pointer hover:border-white transition-all cursor-hover flex-shrink-0"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden bg-[#0D1117]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-serif text-xl text-white">{project.title}</h3>
                    <p className="font-mono text-sm text-[#8E8E8E] leading-relaxed">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={`dup-tag-${project.id}-${tag}`}
                          className="font-mono text-xs px-2 py-1 bg-[#2B2B2B] text-[#8E8E8E]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 font-mono text-xs text-[#8E8E8E] hover:text-white transition-colors cursor-hover"
                      >
                        <Github size={14} />
                        github
                      </a>
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 font-mono text-xs text-[#8E8E8E] hover:text-white transition-colors cursor-hover"
                        >
                          <ExternalLink size={14} />
                          demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery of Trying */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="space-y-4"
        >
          <h2 className="font-mono text-xs uppercase tracking-wider text-[#8E8E8E] mb-6 ml-4">
            gallery of trying
          </h2>
          <ul className="space-y-2 text-sm text-[#B4B4B4] ml-4">
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>hackomania 2026</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>nus agent force hackathon</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>kitahack 2026</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>cursor x anthropic hackathon 2025 - 2nd place (tidb track)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>codenection hackathon 2025</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>cimb x microsoft data science & gen ai hackathon - 1st runner up</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>great malaysia ai hackathon</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>kitahack 2025</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>iium disrupt 2025</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>vhack 2025 - consolation award</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>um hackathon 2025</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>umdac datathon 2024 - top 10 finalist</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>codenection open category 2024</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>mcmc datathon 2024</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#555]">-</span>
              <span>google workspace hackathon 2024</span>
            </li>
          </ul>
        </motion.div>

        {/* Other Projects List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="font-mono text-xs uppercase tracking-wider text-[#8E8E8E] mb-6">
            other projects
          </h2>
          <div className="space-y-3">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="border-b border-[#3A3A3A] hover:border-white transition-colors group"
              >
                <div className="flex items-center gap-4 py-3">
                  <span className="font-mono text-sm text-[#8E8E8E] w-8">
                    #{project.id}
                  </span>
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="flex-1 text-left font-mono text-sm text-white hover:text-[#B4B4B4] transition-colors cursor-hover"
                  >
                    {project.title}
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#8E8E8E] hover:text-white transition-colors cursor-hover"
                  >
                    [github]
                  </a>
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#8E8E8E] hover:text-white transition-colors cursor-hover"
                    >
                      [demo]
                    </a>
                  )}
                </div>
                
                {/* Expandable Details */}
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 pl-12 pr-4 space-y-3">
                        <p className="font-mono text-sm text-[#B4B4B4] leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-xs px-2 py-1 bg-[#2B2B2B] text-[#8E8E8E] rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 20 }}
              className="bg-[#1a1a1a] border-2 border-white max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white text-black p-6 flex justify-between items-start z-10">
                <div>
                  <div className="font-mono text-xs mb-2">project #{selectedProjectData.id}</div>
                  <h2 className="font-serif text-2xl">{selectedProjectData.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-black/10 rounded cursor-hover"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Image */}
              <div className="aspect-video overflow-hidden bg-[#0D1117]">
                <img
                  src={selectedProjectData.image}
                  alt={selectedProjectData.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <p className="text-[#B4B4B4] leading-relaxed">
                  {selectedProjectData.description}
                </p>

                {/* Tags */}
                <div>
                  <h3 className="font-mono text-xs uppercase mb-3 text-[#8E8E8E]">technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#2B2B2B] border border-[#3A3A3A] font-mono text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={selectedProjectData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-mono text-sm hover:bg-[#E0E0E0] transition-colors cursor-hover"
                  >
                    <Github size={16} />
                    view code
                  </a>
                  {selectedProjectData.demo && selectedProjectData.demo !== '#' && (
                    <a
                      href={selectedProjectData.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-white font-mono text-sm text-white hover:bg-white hover:text-black transition-colors cursor-hover"
                    >
                      <ExternalLink size={16} />
                      live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
