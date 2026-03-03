import { PassportCard } from '../components/PassportCard'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const profileImage =
    "https://images.unsplash.com/photo-1614492898637-435e0f87cef8?..."

  return (
    <div className="min-h-screen px-4 md:pr-24 relative overflow-hidden pt-20 pb-24">
      {/* Subtle background grain */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Soft radial glow behind content */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl mx-auto w-full relative z-10">

        {/* HERO */}
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
          </h1>

          <p className="text-base text-[#888] max-w-md mx-auto leading-relaxed font-mono tracking-wide">
            at the intersection of code + curiosity
          </p>
        </motion.div>

        {/* PASSPORT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <div className="w-full max-w-[560px]">
            <PassportCard profileImage={profileImage} />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-[10px] font-mono tracking-[0.3em] text-[#555]"
          >
            tap to flip
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              to="/about"
              className="group relative inline-flex items-center gap-3 mt-2 px-7 py-3.5 text-xs font-mono tracking-[0.2em] text-white overflow-hidden"
              style={{
                border: '1px solid #2A2A2A',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #111 100%)',
                boxShadow: '0 0 0 1px transparent',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#555';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(255,255,255,0.04)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#2A2A2A';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 0 1px transparent';
              }}
            >
              {/* Hover shimmer */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
                }}
              />
              <span className="relative">about me</span>
              <ArrowRight
                size={13}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}