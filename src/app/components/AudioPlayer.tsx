import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('/keshi - forever.mp3');
    audioRef.current.loop = true;
    
    // Try to auto-play on load
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Auto-play succeeded
        setIsPlaying(true);
      }).catch((err) => {
        // Auto-play failed - browser blocked it
        console.log('Auto-play blocked by browser');
        setIsPlaying(false);
      });
    }

    // Add click listener to start audio on first user interaction
    const handleFirstInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => console.log('Play after interaction failed:', err));
        
        // Remove listeners after first interaction
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
      }
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log('Audio playback failed:', err));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} loop />

      {/* Floating volume button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative group"
            >
              {/* Hover label */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                <p className="font-mono text-xs text-white/90">forever by keshi</p>
              </div>
              
              {/* Volume button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={toggleMute}
                className={`relative w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                  isMuted 
                    ? 'text-white/30' 
                    : 'text-white'
                }`}
                style={{
                  filter: isMuted ? 'none' : 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))',
                }}
              >
                {/* Glowing effect when playing */}
                {!isMuted && (
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-lg animate-pulse" />
                )}
                
                {/* Icon */}
                <span className="relative z-10">
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Play button (shown when not playing) */}
        {!isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={togglePlay}
            className="w-10 h-10 flex items-center justify-center text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/30 transition-all"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))',
            }}
          >
            <Volume2 size={24} />
          </motion.button>
        )}
      </div>
    </>
  );
}
