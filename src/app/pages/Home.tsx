import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { StarField } from '../components/Starfield';

const ASCII_ART = `
                        .:--==++***##%%%##+=-:..
                    .:=*#%%%%%%%%%%%%%%%%%%#****+=-:.
                  :=*##%%%%%%%%%%%%%%%%%%%%%%%%%%%#***+=:
                -*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#***+=
              .*%%%##%##%%##%####%##%%#%##%###%%#%%%%%#**+-
            +%%%%%###%###%##%###%####%##%####%#%#%%%%%#**=
            *%%%%%##%#####%##%###%####%##%%###%##%#%%%%%#*+
          +%%%%%###%####%##%####%####%##%####%##%%#%%%%%#+
          =%%####%##%##%%####%###%####%##%###%####%##%%%%#*
          #%#%##%###%%##%##%%###%####%####%##%##%%##%####%+
        :%###%##%##%#%##%###%###%##%#####%##%###%##%##%%#-
        +%###%#%##%##%###%##%%##%##%####%###%##%##%####%%-
        *%###%##%###%##%###%%##%####%##%###%###%###%%%##%+
        #%##%##%####%##%###%##%####%####%###%##%###%%%%#%+
        #%##%###%###%###%##%###%####%###%##%####%###%%%#%-
        +%##%###%##%####%##%##%#####%##%###%##%##%###%%#*
        :%##%##%###%##%###%#%%###%##%##%###%##%###%%##%#*
          +%##%###%##%##%###%%##%#%##%##%###%%#%##%##%##*
          =#%%##%###%##%##%##%##%##%###%###%##%##%####*-
            :*%##%###%%##%###%%##%###%##%##%###%##%###*=.
              :+%##%###%%##%###%%##%###%##%##%####%*=.
        .....  .-*%%##%###%##%###%##%###%%###%%*=.
        :#%##%##*=: :=+#%###%##%###%##%###%%*=:
      .*%###%##%##*+=-:.:-=+*#####%%%#*+=-.
      +%####%%##%####%#**+=====+**+=:.
      .#%####%####%%##%####%%%##*+-.
      =%#####%####%%##%#####%%#+:
      *%##%###%###%##%###%##%%+
      +%##%###%####%###%###%##
      -%%###%###%##%###%###%%*
      *%###%##%##%###%%%##%-
      .+%###%##%%##%###%%##*
        :=*%##%##%##%%%#*=.
            .:--====--:.
`;

const PASSPORT_ROWS = [
  { key: 'name', val: 'kueh pang teng', accent: false },
  { key: 'currently', val: 'ai major @ mmu melaka', accent: true },
  { key: 'aspiration', val: 'aspiring ai developer', accent: false },
  { key: 'based in', val: 'johor bahru, malaysia', accent: false },
  { key: 'updated', val: '03 march 2026', accent: false },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const navLinks = [
    { label: 'about me →', to: '/about', primary: true },
    { label: 'projects', to: '/projects', primary: false },
    { label: 'interests', to: '/interests', primary: false },
    { label: 'connect', to: '/connect', primary: false },
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
            <div className="h-7 bg-[#111] border border-[#333] rounded-md flex items-center justify-center gap-2 text-xs text-[#888]">
            </div>
          </div>

          {/* Nav Icons */}
          <div className="flex gap-4 text-[#555] text-sm">
            <span>⟵</span>
            <span>⟶</span>
            <span>↻</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 md:gap-14">
          {/* ASCII Panel */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative"
          >
            <pre className="text-[3.5px] md:text-[4px] leading-[1.1] text-[#5a5a5a] whitespace-pre font-mono tracking-wider select-none">
              {ASCII_ART}
            </pre>
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
            <div className="bg-white/[0.02] border border-[#333] rounded-lg p-5 relative">
              {/* Header */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-[#141414] px-3 text-[8px] text-[#555] tracking-[0.15em] uppercase font-mono whitespace-nowrap">
                ── PASSEPORT DU DEVELOPPEUR ──
              </div>

              {/* Rows */}
              <div className="mt-2 space-y-1">
                {PASSPORT_ROWS.map(({ key, val, accent }) => (
                  <div
                    key={key}
                    className="grid grid-cols-[90px_1fr] gap-2 py-1 border-b border-white/[0.04] text-[11px] font-mono"
                  >
                    <span className="text-[#555] text-[10px] tracking-wider">{key}</span>
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
                {'<<<IMPTYEAHH<<KUEHPANGTENG<<<<<<<'}
                <br />
                {'<<<<904APR94<MYS0101011M26830151<<<'}
              </p>
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap gap-2">
              {navLinks.map(({ label, to, primary }) => (
                <Link
                  key={label}
                  to={to}
                  className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] rounded border transition-all font-mono ${
                    primary
                      ? 'bg-[#4a9eff]/10 border-[#4a9eff]/40 text-[#4a9eff]'
                      : 'border-[#333] text-[#555] hover:text-[#888] hover:border-[#444]'
                  }`}
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
            <span>johor bahru, my</span>
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
