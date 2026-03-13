import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, X } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { RecordPlayer } from '../components/RecordPlayer';

const PERSONAL_HITS = [
  { id: '2C5nlzIMJ81NYmeGhofNNP' },
  { id: '0XWf8CRB6IptewumZDi5b6' },
  { id: '1XGmzt0PVuFgQYYnV2It7A' },
  { id: '3AJwUDP919kvQ9QcozQPxg' },
  { id: '2262bWmqomIaJXwCRHr13j' },
  { id: '4wVduR10VslHbDO60hTZhm' },
]

const travelLocations = [
  {
    name: "japan",
    folder: 'jpn',
    photos: Array.from({ length: 10 }, (_, i) => `/jpn/jpn${i + 1}.jpg`),
  },
  {
    name: "sydney",
    folder: 'syd',
    photos: Array.from({ length: 13 }, (_, i) => `/syd/syd${i + 1}.jpg`),
  },
  {
    name: "melbourne",
    folder: 'mel',
    photos: Array.from({ length: 10 }, (_, i) => `/mel/mel${i + 1}.jpg`),
  },
  {
    name: "seoul",
    folder: 'sel',
    photos: Array.from({ length: 2 }, (_, i) => `/sel/sel${i + 1}.jpg`),
  },
  {
    name: "shanghai",
    folder: 'sha',
    photos: Array.from({ length: 4 }, (_, i) => `/sha/sha${i + 1}.jpg`),
  },
];

const thoughts = [
  {
    title: 'kind',
    date: '06/03/2026',
    content: 'i would like to relate to a chinese saying i grew up with <人之初，性本善。性相近，習相遠。> from three characteristics classic (三字經) which means all men are born with good and similar nature. it is through the environment that shapes our personalities and behaviours. it led me thinking how really the society plays and works really changes our mindsets and perceptions on wealth, material possessions, and the pursuit of happiness. for me kindness means the willingness to help someone when theyre in need which should be the instinct of men but now i dont understand why theres probably ww3 in the near future for people trying to claim everything but we are born with nothing. i dont really understand why the world is operated by now or how to this extent that this world has been operated. idk what im talking about anyways ill always stand by kindness breaks rocks and melts hearts happy friday!',
  },
  {
    title: 'halo world im 22 :D',
    date: '01/03/2026',
    content: 'ive came to realised that time does really flies, life is impermanent and im still unsure (quoting who knows by daniel caesar: is it a crime to be unsure) what my mission on earth and why do i live :D',
  },
];

export default function Interests() {
  const [playingId, setPlayingId] = useState<string | null>(null)
  const iframeRefs = useRef<Record<string, HTMLIFrameElement | null>>({})
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [expandedThought, setExpandedThought] = useState<number | null>(null);

  const selectedLocationData = travelLocations.find((loc) => loc.name === selectedLocation);

  const handleTrackClick = (id: string) => {
    setPlayingId(prev => (prev === id ? null : id))
  }

  return (
    <div className="min-h-screen px-8 py-16 md:px-16">

      {/* Page title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-serif text-4xl mb-2 text-white text-center">all time favourites!</h1>
          <p className="font-mono text-sm text-[#8E8E8E] text-center">
            that keeps me alive
          </p>
      </motion.h1>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
          <div className="flex items-center gap-3">
            <h2 className="font-mono text-sm uppercase tracking-wider text-[#8E8E8E]">🎧 music</h2>
          </div>
      </motion.div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">

        {/* LEFT — Record player */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex-shrink-0 lg:sticky lg:top-24"
        >
          <RecordPlayer isPlaying={playingId !== null} onToggle={() => setPlayingId(playingId !== null ? null : PERSONAL_HITS[0]?.id || null)} />
          {playingId && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-center font-mono text-[9px] tracking-widest text-[#555] uppercase"
            >
              click again to pause
            </motion.p>
          )}
        </motion.div>

        {/* RIGHT — Personal Hits */}
        <div className="flex-1 min-w-0">
          <p className="font-mono text-[9px] tracking-[0.4em] text-[#555] uppercase mb-6">
            personal hits
          </p>

          <div className="grid grid-cols-2 gap-3">
            {PERSONAL_HITS.map((track, i) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                onClick={() => handleTrackClick(track.id)}
                className="relative cursor-pointer group"
              >
                {/* Highlight ring when active */}
                <div
                  className="absolute -inset-[2px] rounded-[4px] transition-opacity duration-300"
                  style={{
                    opacity: playingId === track.id ? 1 : 0,
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.15)',
                  }}
                />
                <iframe
                  ref={el => { iframeRefs.current[track.id] = el }}
                  src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{
                    borderRadius: '4px',
                    display: 'block',
                    pointerEvents: 'auto',
                    filter: playingId === track.id
                      ? 'brightness(1.05)'
                      : 'brightness(0.85)',
                    transition: 'filter 0.3s ease',
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Favourite Artist & Album */}
          <div className="mt-10 space-y-4">
            <p className="font-mono text-[9px] tracking-[0.4em] text-[#555] uppercase">
              favourite artist & album
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <iframe
                src="https://open.spotify.com/embed/artist/3pc0bOVB5whxmD50W79wwO?utm_source=generator&theme=0"
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '4px' }}
              />
              <iframe
                src="https://open.spotify.com/embed/album/6cbwstHlsAIIWurIIXXBPd?utm_source=generator&theme=0"
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Travel Folders - Now "Postcards" */}
      <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8 mt-16"
        >
          <div className="flex items-center gap-3">
            <h2 className="font-mono text-sm uppercase tracking-wider text-[#8E8E8E]">⚲ postcards</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
            {travelLocations.map((location, idx) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -4, rotate: -2 }}
                onClick={() => setSelectedLocation(location.name)}
                className="relative bg-[#2B2B2B] border border-[#3A3A3A] p-6 pb-12 cursor-pointer hover:border-white transition-all cursor-hover"
              >
                {/* Folder Tab */}
                <div className="absolute -top-3 left-4 bg-[#2B2B2B] border border-[#3A3A3A] border-b-0 px-4 py-1 font-mono text-xs text-white whitespace-nowrap">
                  {location.name}
                </div>

                {/* Folder Icon */}
                <div className="flex items-center justify-center h-24 text-4xl opacity-60">
                  📁
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Thoughts Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8 mt-16"
        >
          <h2 className="font-mono text-sm uppercase tracking-wider text-[#8E8E8E]">✎ᝰ letters from me</h2>

          <div className="space-y-1">
            {thoughts.map((thought, idx) => (
              <div key={idx} className="border-b border-[#3A3A3A] last:border-b-0">
                <div
                  onClick={() => setExpandedThought(expandedThought === idx ? null : idx)}
                  className="flex justify-between items-center py-4 cursor-pointer hover:bg-[#1a1a1a] px-4 -mx-4 cursor-hover"
                >
                  <h3 className="font-medium text-white">{thought.title}</h3>
                  <span className="font-mono text-xs text-[#8E8E8E]">{thought.date}</span>
                </div>
                <AnimatePresence>
                  {expandedThought === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 px-4 -mx-4 font-mono text-sm text-[#B4B4B4] leading-relaxed">
                        {thought.content.split('').map((char, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.01 }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.section>

      {/* Travel Archive Modal - Mood Board Layout */}
      <AnimatePresence>
        {selectedLocation && selectedLocationData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedLocation(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#1a1a1a] border-2 border-white max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-serif text-3xl text-white">{selectedLocation}'s archive</h2>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="p-2 hover:bg-white/10 rounded cursor-hover"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              {/* Mood Board - Masonry Layout */}
              <Masonry columnsCount={3} gutter="8px">
                {selectedLocationData.photos.map((photo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="break-inside-avoid mb-2"
                  >
                    <img
                      src={photo}
                      alt={`${selectedLocation} ${idx + 1}`}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </Masonry>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
