import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

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
    tags: ['python', 'tensorflow', 'computer vision'],
    image: '/stockwise.jpg',
    github: 'https://github.com/pangtengg/StockAnalyser',
    demo: '#',
  },
];

const otherProjects = [
  { id: 5, title: 'bus booking system', github: 'https://github.com/pangtengg/BusBookingSystem', demo: '#' },
  { id: 6, title: 'medimind for vhack25', github: 'https://github.com/Xuannn28/vhack2025', demo: '#' },
  { id: 7, title: 'finassist for cursor hackathon', github: 'https://github.com/yccccc12/finance-assistance', demo: '#' },
  { id: 8, title: 'disaster prediction', github: 'https://github.com/pangtengg/disaster-prediction', demo: '#' },
  { id: 9, title: 'chronovault ai for agentforce', github: 'https://github.com/AMBERKUEH/agentforce', demo: '#' },
  { id: 10, title: 'energy mind for hackomania', github: 'https://github.com/pangtengg/energymind', demo: '#' },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const selectedProjectData = featuredProjects.find((p) => p.id === selectedProject);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 2) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 2 + featuredProjects.length) % featuredProjects.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 2) % featuredProjects.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

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

        {/* Featured Projects Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div className="relative px-16">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {[0, 1].map((offset) => {
                  const projectIndex = (currentIndex + offset) % featuredProjects.length;
                  const project = featuredProjects[projectIndex];
                  return (
                    <motion.div
                      key={project.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedProject(project.id)}
                      className="bg-[#1a1a1a] border-2 border-[#3A3A3A] overflow-hidden cursor-pointer hover:border-white transition-all cursor-hover"
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
                          <a
                            href={project.demo}
                            className="flex items-center gap-1 text-sm font-mono hover:text-white transition-colors cursor-hover text-[#B4B4B4]"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={14} />
                            demo
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full cursor-hover transition-colors"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full cursor-hover transition-colors"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all cursor-hover ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-[#3A3A3A]'
                }`}
              />
            ))}
          </div>
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
                className="flex items-center gap-4 py-3 border-b border-[#3A3A3A] hover:border-white transition-colors group"
              >
                <span className="font-mono text-sm text-[#8E8E8E] w-8">
                  #{project.id}
                </span>
                <button
                  onClick={() => {
                    // For now, just show a simple alert. In a real app, this would navigate to a detail page
                    const details = featuredProjects.find(p => p.id === project.id);
                    if (details) {
                      setSelectedProject(project.id);
                    }
                  }}
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
                <a
                  href={project.demo}
                  className="font-mono text-xs text-[#8E8E8E] hover:text-white transition-colors cursor-hover"
                >
                  [demo]
                </a>
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
                  <a
                    href={selectedProjectData.demo}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-white font-mono text-sm text-white hover:bg-white hover:text-black transition-colors cursor-hover"
                  >
                    <ExternalLink size={16} />
                    live demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
