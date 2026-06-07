import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Download, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParallax } from '@/hooks/useParallax';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { y: parallaxY } = useParallax(-0.15, sectionRef);

  // Mouse-based 3D tilt for the avatar
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef as React.LegacyRef<HTMLElement>}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080d1a] dark:bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background effects — parallax layer */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0"
        >
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-400/10 dark:bg-pink-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 dark:bg-cyan-600/5 rounded-full blur-[150px]" />
        </motion.div>

        {/* Grid pattern (static) */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(109,40,217,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(109,40,217,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            opacity: 0.06,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-white">Hi, I'm</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Bipin Chandra Pandey</span>
              <br />
              <span className="text-white">Full Stack </span>
              <span className="gradient-text">Developer</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Full Stack Developer crafting modern, responsive web apps with clean UI
              and robust backend architecture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full font-medium text-base transition-all duration-300 hover:shadow-glow-lg group"
              >
                <span className="mr-2">Hire Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <a href="/Bipin_Chandra_Pandey_Resume_Final.pdf" download="Bipin_Chandra_Pandey_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-purple-500/40 dark:border-white/20 bg-white/5 dark:bg-white/5 hover:bg-purple-500/10 dark:hover:bg-white/10 text-white dark:text-white px-8 py-6 rounded-full font-medium text-base backdrop-blur-sm group"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </a>

              <button
                onClick={() => scrollToSection('#projects')}
                className="text-gray-400 dark:text-gray-400 hover:text-purple-400 dark:hover:text-white flex items-center gap-2 transition-colors group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right content - 3D Character with mouse tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl animate-pulse" />

              {/* Character container with 3D tilt */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative w-full h-full"
              >
                {/* 3D Character SVG */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))' }}
                >
                  {/* Outer glow ring */}
                  <circle cx="200" cy="200" r="160" fill="none" stroke="url(#gradient1)" strokeWidth="2" opacity="0.5" />
                  <circle cx="200" cy="200" r="150" fill="none" stroke="url(#gradient2)" strokeWidth="1" opacity="0.3" />

                  {/* Headphones outer */}
                  <ellipse cx="200" cy="200" rx="140" ry="130" fill="none" stroke="#374151" strokeWidth="20" />
                  <ellipse cx="200" cy="200" rx="140" ry="130" fill="none" stroke="url(#gradient1)" strokeWidth="4" opacity="0.8" />

                  {/* Head */}
                  <circle cx="200" cy="200" r="100" fill="#1f2937" />
                  <circle cx="200" cy="200" r="95" fill="#111827" />

                  {/* Face */}
                  <ellipse cx="200" cy="210" rx="70" ry="60" fill="#1f2937" />

                  {/* Eyes */}
                  <ellipse cx="170" cy="200" rx="15" ry="20" fill="#a855f7" />
                  <ellipse cx="230" cy="200" rx="15" ry="20" fill="#a855f7" />
                  <ellipse cx="170" cy="200" rx="8" ry="12" fill="#000" />
                  <ellipse cx="230" cy="200" rx="8" ry="12" fill="#000" />
                  <circle cx="173" cy="195" r="4" fill="#fff" />
                  <circle cx="233" cy="195" r="4" fill="#fff" />

                  {/* Smile */}
                  <path d="M 170 240 Q 200 260 230 240" fill="none" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" />

                  {/* Headphone ear cups */}
                  <rect x="45" y="150" width="40" height="100" rx="20" fill="#374151" />
                  <rect x="45" y="150" width="40" height="100" rx="20" fill="url(#gradient3)" opacity="0.3" />
                  <rect x="315" y="150" width="40" height="100" rx="20" fill="#374151" />
                  <rect x="315" y="150" width="40" height="100" rx="20" fill="url(#gradient3)" opacity="0.3" />

                  {/* Inner details on ear cups */}
                  <circle cx="65" cy="200" r="15" fill="#a855f7" opacity="0.5" />
                  <circle cx="335" cy="200" r="15" fill="#a855f7" opacity="0.5" />

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-purple-500"
                  style={{
                    top: `${20 + (i * 13) % 60}%`,
                    left: `${10 + (i * 17) % 80}%`,
                  }}
                  animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.35 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-300 dark:border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-500 rounded-full"
          />
        </motion.div>
        <span className="text-gray-400 dark:text-gray-500 text-xs mt-2">Scroll to explore</span>
      </motion.div>

      {/* Bottom right scroll text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm"
      >
        <span>Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
