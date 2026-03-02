import { PassportCard } from '../components/PassportCard';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const profileImage = "https://images.unsplash.com/photo-1614492898637-435e0f87cef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGFzaWFuJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzIzOTA0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-12"
        >
          {/* Passport Card */}
          <div className="w-full">
            <PassportCard profileImage={profileImage} />
            <p className="text-center text-xs font-mono text-[#8E8E8E] mt-4">
              tap to flip
            </p>
          </div>

          {/* Decorative Doodles */}
          <div className="relative w-full max-w-[520px] h-32 opacity-40">
            <div className="absolute top-0 left-8 text-2xl">💻</div>
            <div className="absolute top-4 right-12 text-2xl">🐰</div>
            <div className="absolute bottom-8 left-24 text-2xl">🍣</div>
            <div className="absolute bottom-4 right-8 text-2xl">🎧</div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[#8E8E8E]"
          >
            <span className="text-xs font-mono">scroll ↓</span>
            <ChevronDown size={16} />
          </motion.div>

          {/* Introduction */}
          <div className="text-center space-y-4 mt-8">
            <h1 className="font-serif text-4xl md:text-5xl text-white">
              hi, i'm kueh pang teng
            </h1>
            <p className="text-lg text-[#B4B4B4] max-w-2xl mx-auto">
              an AI student building things at the intersection of code + curiosity
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
