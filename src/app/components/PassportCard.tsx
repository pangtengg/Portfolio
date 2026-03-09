import { useState } from 'react';
import { motion } from 'motion/react';

interface PassportCardProps {
  profileImage?: string;
}

export function PassportCard({ profileImage }: PassportCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-[520px] mx-auto" style={{ perspective: '1200px' }}>
      <motion.div
        className="relative w-full cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
          height: '340px',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.01 }}
      >

        {/* ── FRONT ── */}
        <div
          className="absolute w-full h-full p-6"
          style={{
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(145deg, #1c1c1c 0%, #141414 100%)',
            border: '1px solid #2e2e2e',
            boxShadow: isFlipped
              ? 'none'
              : '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >

          {/* Top header */}
          <div className="text-center mb-5 pb-4" style={{ borderBottom: '1px solid #252525' }}>
            <div className="font-mono text-[9px] tracking-[0.35em] text-[#4A4A4A] uppercase">
              ── passeport du développeur ──
            </div>
          </div>

          {/* Main layout */}
          <div className="flex gap-7 items-start">

            {/* Photo */}
            <div className="flex-shrink-0">
              <div
                className="bg-white shadow-xl"
                style={{
                  transform: 'rotate(-1.5deg)',
                  padding: '10px 10px 24px 10px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                }}
              >
                <img
                  src={profileImage}
                  alt="kueh pang teng"
                  className="w-[130px] h-[160px] object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ display: 'block' }}
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 font-mono text-[11px] text-white space-y-1 pt-1">
              <div className="grid grid-cols-[88px_1fr] gap-y-3">
                <span className="text-[#4A4A4A] text-[9px] tracking-widest self-center">name</span>
                <span className="text-[#E0E0E0]">kueh pang teng</span>

                <span className="text-[#4A4A4A] text-[9px] tracking-widest self-center">currently</span>
                <span className="text-[#E0E0E0]">ai major @ mmu melaka</span>

                <span className="text-[#4A4A4A] text-[9px] tracking-widest self-center">aspiration</span>
                <span className="text-[#E0E0E0]">aspiring ai developer</span>

                <span className="text-[#4A4A4A] text-[9px] tracking-widest self-center">based in</span>
                <span className="text-[#E0E0E0]">johor bahru, malaysia</span>

                <span className="text-[#4A4A4A] text-[9px] tracking-widest self-center">updated</span>
                <span className="text-[#E0E0E0]">03 march 2026</span>
              </div>

              {/* MRZ strip at bottom */}
              <div
                className="mt-5 font-mono text-[12px] tracking-[0.15em] text-[#2A2A2A]"
                style={{ borderTop: '1px solid #222', paddingTop: '10px' }}
              >
                &lt;&lt;&lt;&lt;IMPTYEAHH&lt;&lt;KUEHPANGTENG&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br />
                &lt;&lt;&lt;&lt;A04APR04&lt;MYS0101011M2603015&lt;&lt;&lt;
              </div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-3 left-3 text-[#2A2A2A] text-sm font-mono">✦</div>
          <div className="absolute top-3 right-3 text-[#2A2A2A] text-sm font-mono">✦</div>
          <div className="absolute bottom-3 left-3 text-[#2A2A2A] text-sm font-mono">✦</div>
          <div className="absolute bottom-3 right-3 text-[#2A2A2A] text-sm font-mono">✦</div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute w-full h-full flex items-center justify-center px-10 text-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(145deg, #1c1c1c 0%, #141414 100%)',
            border: '1px solid #2e2e2e',
            boxShadow: isFlipped
              ? '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.05)'
              : 'none',
          }}
        >
          <div className="relative flex flex-col items-center gap-3">

            {/* Quote */}
            <p
              className="font-serif italic text-xl md:text-2xl text-[#BDBDBD] leading-relaxed"
              style={{ textShadow: '0 0 30px rgba(255,255,255,0.05)' }}
            >
              when there's a will there's a way.
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-[#2A2A2A]" />

            {/* Signature line */}
            <div className="font-mono text-[9px] tracking-[0.4em] text-[#444]">
              quote
            </div>

          </div>
        </div>

      </motion.div>
    </div>
  );
}