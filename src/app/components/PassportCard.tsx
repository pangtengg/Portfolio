import { useState } from 'react';
import { motion } from 'motion/react';

interface PassportCardProps {
  profileImage?: string;
}

export function PassportCard({ profileImage }: PassportCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-[520px] mx-auto perspective-1000">
      <motion.div
        className="relative w-full h-[380px] cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of Card */}
        <div
          className="absolute w-full h-full bg-[#1a1a1a] border-2 border-white p-6"
          style={{
            backfaceVisibility: 'hidden',
            boxShadow: isFlipped ? 'none' : '0 8px 16px rgba(255,255,255,0.1)',
          }}
        >
          {/* Header Strip */}
          <div className="text-center mb-6 pb-2 border-b border-[#3A3A3A]">
            <div className="font-mono text-[10px] tracking-widest text-white">
              ★ ★ ★ developer license pass ★ ★ ★
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center gap-4">
            {/* Polaroid Photo */}
            <div className="bg-white p-3 pb-8 shadow-lg" style={{ transform: 'rotate(-2deg)' }}>
              <img
                src={profileImage}
                alt="kueh pang teng"
                className="w-40 h-48 object-cover grayscale"
              />
            </div>

            {/* Info */}
            <div className="w-full font-mono text-xs space-y-2 text-white">
              <div>
                <div className="text-[#8E8E8E] text-[10px]">name:</div>
                <div>kueh pang teng</div>
              </div>
              <div>
                <div className="text-[#8E8E8E] text-[10px]">currently:</div>
                <div>an AI major @ mmu melaka</div>
              </div>
              <div>
                <div className="text-[#8E8E8E] text-[10px]">aspiration:</div>
                <div>aspiring AI developer</div>
              </div>
              <div>
                <div className="text-[#8E8E8E] text-[10px]">based in:</div>
                <div>johor bahru, malaysia</div>
              </div>
              <div>
                <div className="text-[#8E8E8E] text-[10px]">last updated:</div>
                <div>01 march 2026</div>
              </div>
            </div>
          </div>

          {/* Corner Stars */}
          <div className="absolute top-2 left-2 text-white text-xs">✦</div>
          <div className="absolute top-2 right-2 text-white text-xs">✦</div>
          <div className="absolute bottom-2 left-2 text-white text-xs">✦</div>
          <div className="absolute bottom-2 right-2 text-white text-xs">✦</div>
        </div>

        {/* Back of Card - Blank */}
        <div
          className="absolute w-full h-full bg-[#1a1a1a] border-2 border-white"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            boxShadow: isFlipped ? '0 8px 16px rgba(255,255,255,0.1)' : 'none',
          }}
        >
          {/* Blank back */}
        </div>
      </motion.div>
    </div>
  );
}
