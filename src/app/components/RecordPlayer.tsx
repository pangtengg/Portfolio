import { motion } from 'motion/react'

interface RecordPlayerProps {
  isPlaying: boolean
  onToggle: () => void
}

export function RecordPlayer({ isPlaying, onToggle }: RecordPlayerProps) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center gap-4">
      <h3 className="font-mono text-xs uppercase tracking-wider text-[#8E8E8E]">now playing</h3>

      {/* Turntable body */}
      <div
        className="relative cursor-pointer select-none"
        style={{ width: 220, height: 220 }}
        onClick={onToggle}
        title={isPlaying ? 'Click to pause' : 'Click to play'}
      >
        {/* Body plate — brushed metal look */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(145deg, #2e2e2e 0%, #1c1c1c 40%, #252525 70%, #1a1a1a 100%)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.4)',
            border: '1px solid #333',
          }}
        />

        {/* Platter recess ring */}
        <div
          className="absolute rounded-full"
          style={{
            top: 18, left: 18, right: 60, bottom: 18,
            background: 'radial-gradient(circle, #141414 60%, #1e1e1e 100%)',
            boxShadow: 'inset 0 4px 16px rgba(0,0,0,0.9), inset 0 0 0 2px #111',
          }}
        />

        {/* Spinning vinyl */}
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={isPlaying
            ? { repeat: Infinity, duration: 2.8, ease: 'linear' }
            : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }
          className="absolute rounded-full"
          style={{
            top: 24, left: 24, right: 66, bottom: 24,
          }}
        >
          {/* Vinyl SVG — grooves + label */}
          <svg viewBox="0 0 140 140" width="100%" height="100%">
            {/* Outer vinyl */}
            <circle cx="70" cy="70" r="70" fill="#0d0d0d" />

            {/* Groove rings */}
            {[62, 56, 50, 44, 38, 32, 27].map((r, i) => (
              <circle key={i} cx="70" cy="70" r={r}
                fill="none"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth={i % 2 === 0 ? 1.2 : 0.6}
              />
            ))}

            {/* Groove shimmer */}
            <circle cx="70" cy="70" r="48"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="18"
              strokeDasharray="60 220"
              strokeDashoffset="0"
            />

            {/* Center label */}
            <circle cx="70" cy="70" r="22" fill="#e8e4d4" />
            <circle cx="70" cy="70" r="21" fill="none" stroke="#ccc9b8" strokeWidth="0.5" />

            {/* Label text lines */}
            <line x1="52" y1="66" x2="88" y2="66" stroke="#999" strokeWidth="0.8" opacity="0.6" />
            <line x1="55" y1="70" x2="85" y2="70" stroke="#999" strokeWidth="0.8" opacity="0.4" />
            <line x1="58" y1="74" x2="82" y2="74" stroke="#999" strokeWidth="0.8" opacity="0.3" />

            {/* Spindle hole */}
            <circle cx="70" cy="70" r="3" fill="#1a1a1a" />
            <circle cx="70" cy="70" r="2" fill="#111" />
          </svg>
        </motion.div>

        {/* Tonearm pivot housing (top-right) */}
        <div
          className="absolute"
          style={{ top: 20, right: 14, width: 28, height: 28 }}
        >
          {/* Outer ring */}
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle at 40% 35%, #666 0%, #333 50%, #222 100%)',
              boxShadow: '0 3px 8px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.15)',
              border: '1px solid #444',
            }}
          />
          {/* Inner knob */}
          <div
            className="absolute rounded-full"
            style={{
              top: 6, left: 6, right: 6, bottom: 6,
              background: 'radial-gradient(circle at 40% 35%, #999 0%, #555 100%)',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2)',
            }}
          />
        </div>

        {/* Tonearm — pivots from top-right */}
        <motion.div
          animate={{ rotate: isPlaying ? 22 : 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute"
          style={{
            top: 33,
            right: 26,
            width: 2,
            height: 110,
            transformOrigin: 'top center',
          }}
        >
          {/* Arm shaft */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(180deg, #aaa 0%, #777 30%, #999 60%, #666 100%)',
              boxShadow: '1px 0 4px rgba(0,0,0,0.6)',
            }}
          />

          {/* Headshell (angled at bottom) */}
          <div
            className="absolute bottom-0 left-1/2"
            style={{
              width: 16,
              height: 10,
              transform: 'translateX(-50%) rotate(-35deg)',
              transformOrigin: 'top center',
              background: 'linear-gradient(135deg, #888 0%, #555 100%)',
              borderRadius: '2px 2px 4px 4px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.6)',
            }}
          />

          {/* Stylus needle */}
          <div
            className="absolute"
            style={{
              bottom: -6,
              left: '50%',
              width: 1,
              height: 10,
              background: 'linear-gradient(180deg, #ccc, #fff)',
              transform: 'translateX(-50%) rotate(-35deg)',
              transformOrigin: 'top center',
            }}
          />
        </motion.div>

        {/* Bottom-left power button */}
        <div
          className="absolute bottom-5 left-5 w-5 h-5 rounded-full flex items-center justify-center"
          style={{
            background: isPlaying
              ? 'radial-gradient(circle, #ff3b3b, #cc0000)'
              : 'radial-gradient(circle, #444, #222)',
            boxShadow: isPlaying
              ? '0 0 8px rgba(255,50,50,0.6)'
              : '0 2px 4px rgba(0,0,0,0.6)',
            border: '1px solid #555',
            transition: 'all 0.4s ease',
          }}
        />

        {/* Speed knob — bottom right area */}
        <div
          className="absolute bottom-5 right-5 w-4 h-4 rounded-full"
          style={{
            background: 'radial-gradient(circle at 40% 35%, #666, #222)',
            border: '1px solid #444',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        />

        {/* Pitch slider rail */}
        <div
          className="absolute flex flex-col items-center gap-1"
          style={{ right: 10, top: '50%', transform: 'translateY(-50%)', height: 60 }}
        >
          <div
            className="w-1 flex-1 rounded-full"
            style={{ background: 'linear-gradient(180deg, #333, #1a1a1a)', border: '1px solid #2a2a2a' }}
          />
          <div
            className="w-3 h-2 rounded-sm"
            style={{ background: 'linear-gradient(90deg, #777, #444)', boxShadow: '0 1px 3px rgba(0,0,0,0.6)' }}
          />
        </div>
      </div>

      {/* Status label */}
      <p className="font-mono text-[9px] tracking-[0.4em] text-[#444] uppercase transition-all duration-500">
        {isPlaying ? '▶ spinning' : '○ idle'}
      </p>
    </div>
  )
}