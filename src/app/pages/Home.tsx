import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { StarField } from '../components/Starfield';

const PASSPORT_ROWS = [
  { key: 'name', val: 'kueh pang teng', accent: false },
  { key: 'currently', val: 'final sem ai major @ mmu melaka', accent: true },
  { key: 'aspiration', val: 'aspiring ai developer', accent: false },
  { key: 'based in', val: 'johor bahru, malaysia', accent: false },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const navLinks = [
    { label: 'about me →', to: '/about', primary: true },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-10 bg-[#0d0d0d] gap-8">
      <StarField />
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-4"
      >
        <h1
          className="font-serif text-5xl md:text-6xl text-white leading-[1.1] tracking-tight"
          style={{ textShadow: '0 0 80px rgba(255,255,255,0.08)' }}
        >
          hi, i'm kueh pang teng
          <span style={{ animation: 'blink 1s step-end infinite' }}> </span>
        </h1>

        <p className="text-base text-[#888] max-w-md mx-auto leading-relaxed font-mono tracking-wide">
          at the intersection of code + curiosity
        </p>
      </motion.div>

      {/* Safari Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl bg-[#141414] border border-[#2a2a2a] rounded-xl overflow-hidden shadow-2xl"
        style={{
          boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 40px 120px rgba(0,0,0,0.8)',
        }}
      >
        {/* Title Bar */}
        <div className="h-11 bg-[#1a1a1a] border-b border-[#2a2a2a] flex items-center px-4 gap-3">
          {/* Traffic Lights */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#f5c842]" />
            <div className="w-3 h-3 rounded-full bg-[#3dd68c]" />
          </div>

          {/* Address Bar */}
          <div className="flex-1 max-w-md mx-auto">
            <div className="h-7 bg-[#1a1a1a] border border-[#333] rounded-md flex items-center justify-between px-3 text-xs text-[#888]">
              {/* Tab icon on left */}
              <svg className="w-3.5 h-3.5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" />
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" />
              </svg>
              {/* Empty center */}
              <span></span>
              {/* Refresh icon on right */}
              <span className="text-[#666] text-sm">↻</span>
            </div>
          </div>

          {/* Nav Icons */}
          <div className="flex gap-4 text-[#666] text-sm items-center">
            {/* Share icon */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
            {/* Add tab icon */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            {/* Sidebar icon */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth={1.5} />
              <line x1="9" y1="3" x2="9" y2="21" stroke="currentColor" strokeWidth={1.5} />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-10 max-w-4xl mx-auto">
          {/* ASCII Panel */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative"
          >
            <img
              src="/pfp.gif"
              alt="ASCII Portrait"
              className="w-full h-auto object-contain opacity-90"
            />
            {/* Fade overlay at bottom */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, #141414 0%, transparent 25%)',
              }}
            />
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center gap-7"
          >
            {/* Passport Card */}
            <div className="bg-white/[0.02] border border-[#333] rounded-lg p-6 relative">
              {/* Header */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-[#141414] px-3 text-[10px] text-[#555] tracking-[0.15em] uppercase font-mono whitespace-nowrap">
                ── PASSEPORT DU DEVELOPPEUR ──
              </div>

              {/* Rows */}
              <div className="mt-4 space-y-2">
                {PASSPORT_ROWS.map(({ key, val, accent }) => (
                  <div
                    key={key}
                    className="grid grid-cols-[100px_1fr] gap-3 py-2 border-b border-white/[0.06] text-[13px] font-mono"
                  >
                    <span className="text-[#555] text-[12px] tracking-wider">{key}</span>
                    <span className="text-[#e8e8e8]">
                      {accent ? (
                        <>
                          <span className="text-[#4a9eff]">ai major</span> @ mmu melaka
                        </>
                      ) : (
                        val
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* MRZ */}
              <p className="mt-3 text-[8px] text-[#2a2a2a] tracking-[0.08em] font-mono break-all">
                {'<<<IMPTYEAHH<<KUEHPANGTENG<<<<<<<<<<<04APR04<MYS0101011M26830151<<<'}
              </p>
            </div>

            {/* Nav Links */}
            <div className="flex justify-center">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="px-6 py-2.5 text-[10px] uppercase tracking-[0.15em] rounded border border-[#333] bg-black text-[#555] hover:text-[#4a9eff] hover:border-[#4a9eff]/40 hover:bg-[#4a9eff]/10 transition-all font-mono"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Status Bar */}
        <div className="h-7 bg-[#111] border-t border-[#2a2a2a] flex items-center justify-between px-5 text-[9px] text-[#555] tracking-wider font-mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3dd68c] shadow-[0_0_6px_#3dd68c]" />
              online
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>my</span>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
