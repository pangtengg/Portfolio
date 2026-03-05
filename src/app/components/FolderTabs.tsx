import { NavLink } from 'react-router';
import { motion } from 'motion/react';

const tabs = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'projects', path: '/projects' },
  { name: 'interests', path: '/interests' },
  { name: 'connect', path: '/connect' },
];

export function FolderTabs() {
  return (
    <nav className="fixed top-1/2 right-6 -translate-y-1/2 z-40 flex flex-col gap-1">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          end={tab.path === '/'}
        >
          {({ isActive }) => (
            <motion.div
              className={`relative py-4 px-3 font-mono text-xs transition-all duration-200 cursor-hover whitespace-nowrap ${
                isActive
                  ? 'bg-[#2B2B2B] border-l-2 border-white text-white'
                  : 'bg-[#1a1a1a] border-l border-[#3A3A3A] text-[#8E8E8E] hover:text-white hover:border-white'
              }`}
              style={{
                borderRadius: '4px 0 0 4px',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
              }}
              whileHover={{ scaleX: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {tab.name}
            </motion.div>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
