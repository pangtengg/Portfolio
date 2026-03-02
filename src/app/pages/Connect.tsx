import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Send, Instagram } from 'lucide-react';

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-12 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* HMU Title */}
          <div className="text-center space-y-4">
            <h1 className="font-mono text-3xl text-white">hmu:</h1>
            <p className="text-[#B4B4B4] max-w-md mx-auto">
              let's connect! whether you want to collaborate on a project, discuss AI, or just say hi.
            </p>
          </div>

          {/* Elsewhere On - Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#8E8E8E] text-center">
              elsewhere on
            </h3>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#B4B4B4] transition-colors cursor-hover"
              >
                <Linkedin size={20} />
                <span className="text-sm font-mono">linkedin</span>
              </a>
              <span className="text-[#3A3A3A]">|</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#B4B4B4] transition-colors cursor-hover"
              >
                <Github size={20} />
                <span className="text-sm font-mono">github</span>
              </a>
              <span className="text-[#3A3A3A]">|</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#B4B4B4] transition-colors cursor-hover"
              >
                <Instagram size={20} />
                <span className="text-sm font-mono">instagram</span>
              </a>
              <span className="text-[#3A3A3A]">|</span>
              <a
                href="https://xiaohongshu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#B4B4B4] transition-colors cursor-hover"
              >
                <span className="text-xl">📕</span>
                <span className="text-sm font-mono">xiaohongshu</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1a1a1a] border-2 border-[#3A3A3A] p-8"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider mb-6 text-[#8E8E8E]">
              send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block font-mono text-xs uppercase text-[#8E8E8E]">
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-2 border-b border-[#3A3A3A] bg-transparent focus:outline-none focus:border-white transition-colors text-white"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block font-mono text-xs uppercase text-[#8E8E8E]">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-2 border-b border-[#3A3A3A] bg-transparent focus:outline-none focus:border-white transition-colors text-white"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block font-mono text-xs uppercase text-[#8E8E8E]">
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-0 py-2 border-b border-[#3A3A3A] bg-transparent focus:outline-none focus:border-white transition-colors resize-none text-white"
                />
              </div>

              {/* Submit Button */}
              <div className="relative">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full py-3 bg-white text-black font-mono text-sm hover:bg-[#E0E0E0] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-hover"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Send size={16} />
                      </motion.div>
                      <span>sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <span>message sent ✦</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>send</span>
                    </>
                  )}
                </button>

                {/* Paper Airplane Animation */}
                {isSubmitted && (
                  <motion.div
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{ x: 200, y: -100, opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="absolute top-0 left-1/2 text-2xl pointer-events-none"
                  >
                    ✈️
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center opacity-20"
          >
            <div className="text-6xl">📮</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
