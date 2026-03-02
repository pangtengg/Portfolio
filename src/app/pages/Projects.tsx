import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, X } from 'lucide-react';
import Slider from 'react-slick';
import 'react-slick/slick/slick.css';
import 'react-slick/slick/slick-theme.css';

const featuredProjects = [
  {
    id: 1,
    title: 'AI image classifier',
    summary: 'deep learning model for multi-class image classification',
    description: 'built a convolutional neural network using tensorflow to classify images across 10 different categories with 94% accuracy. implemented data augmentation and transfer learning techniques.',
    tags: ['python', 'tensorflow', 'computer vision'],
    image: 'https://images.unsplash.com/photo-1569396116180-210c182bedb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG1hY2hpbmUlMjBsZWFybmluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcyMzkwNTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    github: 'https://github.com',
    demo: '#',
  },
  {
    id: 2,
    title: 'portfolio dashboard',
    summary: 'interactive react web application for portfolio management',
    description: 'developed a full-stack web application using react and node.js for managing personal portfolio projects. features include real-time updates, data visualization, and responsive design.',
    tags: ['react', 'typescript', 'node.js'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHJlYWN0JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjM5MDU2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    github: 'https://github.com',
    demo: '#',
  },
  {
    id: 3,
    title: 'NLP sentiment analyzer',
    summary: 'natural language processing tool for sentiment analysis',
    description: 'created a sentiment analysis model using BERT and pytorch to analyze customer reviews. achieved 89% accuracy on test data and deployed as a REST API.',
    tags: ['python', 'pytorch', 'NLP'],
    image: 'https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzcyMjg1OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    github: 'https://github.com',
    demo: '#',
  },
  {
    id: 4,
    title: 'recommendation system',
    summary: 'collaborative filtering for personalized recommendations',
    description: 'implemented a hybrid recommendation system combining collaborative and content-based filtering. integrated with existing e-commerce platform.',
    tags: ['python', 'scikit-learn', 'flask'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTcwOTEyMzQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    github: 'https://github.com',
    demo: '#',
  },
];

const otherProjects = [
  { id: 5, title: 'chatbot assistant', github: 'https://github.com', demo: '#' },
  { id: 6, title: 'stock price predictor', github: 'https://github.com', demo: '#' },
  { id: 7, title: 'image style transfer', github: 'https://github.com', demo: '#' },
  { id: 8, title: 'text summarizer', github: 'https://github.com', demo: '#' },
  { id: 9, title: 'music genre classifier', github: 'https://github.com', demo: '#' },
  { id: 10, title: 'face recognition system', github: 'https://github.com', demo: '#' },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const selectedProjectData = featuredProjects.find((p) => p.id === selectedProject);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: 'ease-in-out',
  };

  return (
    <div className="min-h-screen pt-12 pb-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-serif text-4xl mb-2 text-white">projects</h1>
          <p className="font-mono text-sm text-[#8E8E8E]">
            things i've built and learned from
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="carousel-container"
        >
          <style>{`
            .slick-dots li button:before {
              color: #8E8E8E;
            }
            .slick-dots li.slick-active button:before {
              color: #FFFFFF;
            }
            .slick-prev:before,
            .slick-next:before {
              color: #FFFFFF;
            }
          `}</style>
          <Slider {...sliderSettings}>
            {featuredProjects.map((project) => (
              <div key={project.id} className="px-2">
                <motion.div
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
                      <h3 className="font-semibold text-xl text-white">#{project.id} {project.title}</h3>
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
              </div>
            ))}
          </Slider>
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
