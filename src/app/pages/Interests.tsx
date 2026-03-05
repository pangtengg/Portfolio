import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, X } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { RecordPlayer } from '../components/RecordPlayer';

const PERSONAL_HITS = [
  { id: '2C5nlzIMJ81NYmeGhofNNP' },
  { id: '0XWf8CRB6IptewumZDi5b6' },
  { id: '5hQSXkFgbxjZo9uCwd11so' },
  { id: '1XGmzt0PVuFgQYYnV2It7A' },
  { id: '3AJwUDP919kvQ9QcozQPxg' },
  { id: '4zRZAmBQP8vhNPf9i9opXt' },
  { id: '2262bWmqomIaJXwCRHr13j' },
  { id: '4wVduR10VslHbDO60hTZhm' },
]

const travelLocations = [
    {
    name: 'japan',
    photos: [
      'https://images.unsplash.com/photo-1691459841469-87e136cbaa27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMHNoaWJ1eWElMjBzdHJlZXR8ZW58MXx8fHwxNzcyMzkwNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800',
    ],
  },
  {
    name: 'sydney',
    photos: [
      'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBvcGVyYSUyMGhvdXNlfGVufDF8fHx8MTc3MjM0ODk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
      'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=800',
    ],
  },
  {
    name: 'melbourne',
    photos: [
      'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBvcGVyYSUyMGhvdXNlfGVufDF8fHx8MTc3MjM0ODk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
      'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=800',
    ],
  },
  {
    name: 'taipei',
    photos: [
      'https://images.unsplash.com/photo-1662720262802-91f9373dcac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlwZWklMjAxMDElMjBuaWdodHxlbnwxfHx8fDE3NzIzNTU5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1533005607259-f8c29710f23d?w=800',
      'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800',
    ],
  },
  {
    name: 'shanghai',
    photos: [
      'https://images.unsplash.com/photo-1628308868241-29539fb51fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMGtvcmVhJTIwaGFub2t8ZW58MXx8fHwxNzcyMzkwNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
    ],
  },
  {
    name: 'korea',
    photos: [
      'https://images.unsplash.com/photo-1628308868241-29539fb51fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMGtvcmVhJTIwaGFub2t8ZW58MXx8fHwxNzcyMzkwNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
    ],
  },
    {
    name: 'beijing',
    photos: [
      'https://images.unsplash.com/photo-1628308868241-29539fb51fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMGtvcmVhJTIwaGFub2t8ZW58MXx8fHwxNzcyMzkwNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
    ],
  },
];

const thoughts = [
  {
    title: 'on learning AI',
    date: '15/02/2026',
    content: 'every day i learn something new about neural networks, and every day i realize how much more there is to learn. the field is vast, and that\'s what makes it exciting.',
  },
  {
    title: 'coffee & code',
    date: '28/01/2026',
    content: 'there\'s something meditative about debugging code at 2 AM with a cup of coffee. it\'s just you, the problem, and the solution somewhere in between.',
  },
  {
    title: 'travel plans',
    date: '10/01/2026',
    content: 'planning my next trip to japan. can\'t wait to explore tokyo\'s tech scene and experience the perfect blend of tradition and innovation.',
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
            that kept me alive
          </p>
      </motion.h1>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-serif text-2xl text-white">music</h2>
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

          {/* Fav artists placeholder */}
          <div
            className="mt-10 border border-dashed border-[#2A2A2A] p-6 text-center"
            style={{ borderRadius: '4px' }}
          >
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#333] uppercase">
              favourite artists — coming soon
            </p>
          </div>
        </div>

      </div>

      {/* Travel Folders - Now "Postcards" */}
      <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <MapPin size={24} className="text-white" />
            <h2 className="font-mono text-sm uppercase tracking-wider text-[#8E8E8E]">postcards</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                <div className="absolute -top-3 left-4 bg-[#2B2B2B] border border-[#3A3A3A] border-b-0 px-4 py-1 font-mono text-xs text-white">
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
          className="space-y-8"
        >
          <h2 className="font-mono text-sm uppercase tracking-wider text-[#8E8E8E]">thoughts</h2>

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
                <h2 className="font-serif text-3xl capitalize text-white">{selectedLocation}</h2>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="p-2 hover:bg-white/10 rounded cursor-hover"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              {/* Mood Board - Raw Images */}
              <Masonry columnsCount={3} gutter="16px">
                {selectedLocationData.photos.map((photo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <img
                      src={photo}
                      alt={`${selectedLocation} ${idx + 1}`}
                      className="w-full h-auto"
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
