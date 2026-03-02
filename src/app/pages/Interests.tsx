import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, MapPin, X, Play, Pause } from 'lucide-react';
import Masonry from 'react-responsive-masonry';

const songs = {
  recentlyPlayed: [
    { title: 'anti-hero', artist: 'taylor swift', cover: '🎵' },
    { title: 'flowers', artist: 'miley cyrus', cover: '🎵' },
    { title: 'as it was', artist: 'harry styles', cover: '🎵' },
  ],
  personalHits: [
    { title: 'levitating', artist: 'dua lipa', cover: '🎵' },
    { title: 'good 4 u', artist: 'olivia rodrigo', cover: '🎵' },
    { title: 'blinding lights', artist: 'the weeknd', cover: '🎵' },
  ],
};

const travelLocations = [
  {
    name: 'sydney',
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
    name: 'tokyo',
    photos: [
      'https://images.unsplash.com/photo-1691459841469-87e136cbaa27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMHNoaWJ1eWElMjBzdHJlZXR8ZW58MXx8fHwxNzcyMzkwNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800',
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
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [expandedThought, setExpandedThought] = useState<number | null>(null);
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const selectedLocationData = travelLocations.find((loc) => loc.name === selectedLocation);

  const handleSongPlay = (songTitle: string) => {
    if (currentSong === songTitle && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentSong(songTitle);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen pt-12 pb-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-serif text-4xl text-white mb-2">all time favs!</h1>
        </motion.div>

        {/* Songs Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <Music size={24} className="text-white" />
            <h2 className="font-mono text-sm uppercase tracking-wider text-[#8E8E8E]">music</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Record Player */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#8E8E8E]">
                now playing
              </h3>
              <div className="relative w-48 h-48 mx-auto">
                {/* Vinyl Record */}
                <motion.div
                  animate={{
                    rotate: isPlaying ? 360 : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: isPlaying ? Infinity : 0,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 bg-black rounded-full border-4 border-white"
                >
                  <div className="absolute inset-8 bg-[#1a1a1a] rounded-full border border-white"></div>
                  <div className="absolute inset-[72px] bg-white rounded-full"></div>
                  <div className="absolute inset-[88px] bg-black rounded-full"></div>
                </motion.div>
                {/* Play/Pause Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 m-auto w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-hover hover:bg-[#E0E0E0] transition-colors z-10"
                >
                  {isPlaying ? <Pause size={20} className="text-black" /> : <Play size={20} className="text-black ml-1" />}
                </button>
              </div>
              {currentSong && (
                <p className="text-center text-xs font-mono text-[#B4B4B4] mt-4">
                  {currentSong}
                </p>
              )}
            </div>

            {/* Recently Played */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#8E8E8E]">
                recently played
              </h3>
              <div className="space-y-2">
                {songs.recentlyPlayed.map((song, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSongPlay(song.title)}
                    className="flex items-center gap-3 p-3 bg-[#1a1a1a] border border-[#3A3A3A] hover:border-white transition-all cursor-hover group"
                  >
                    <div className="text-2xl">{song.cover}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate text-white">{song.title}</div>
                      <div className="text-xs text-[#8E8E8E] truncate">{song.artist}</div>
                    </div>
                    {currentSong === song.title && isPlaying && (
                      <div className="text-xs text-white">♪</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Hits */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#8E8E8E]">
                personal hits
              </h3>
              <div className="space-y-2">
                {songs.personalHits.map((song, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSongPlay(song.title)}
                    className="flex items-center gap-3 p-3 bg-[#1a1a1a] border border-[#3A3A3A] hover:border-white transition-all cursor-hover group"
                  >
                    <div className="text-2xl">{song.cover}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate text-white">{song.title}</div>
                      <div className="text-xs text-[#8E8E8E] truncate">{song.artist}</div>
                    </div>
                    {currentSong === song.title && isPlaying && (
                      <div className="text-xs text-white">♪</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

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
      </div>

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
