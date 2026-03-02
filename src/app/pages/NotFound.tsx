import { Link } from 'react-router';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8"
      >
        <div className="space-y-4">
          <div className="text-8xl font-serif">404</div>
          <h1 className="text-2xl font-serif">Page Not Found</h1>
          <p className="text-[#4B4B4B] font-mono text-sm">
            Oops! This page doesn't exist in the archive.
          </p>
        </div>

        <Link
          to="/"
          className="inline-block px-8 py-3 bg-[#111111] text-white font-mono text-sm hover:bg-[#2a2a2a] transition-colors cursor-hover"
        >
          ← Back to Portfolio
        </Link>

        <div className="text-6xl opacity-20 mt-8">📁</div>
      </motion.div>
    </div>
  );
}
