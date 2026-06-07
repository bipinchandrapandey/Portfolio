import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Briefcase, Award } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';
import InteractiveRobot from '@/components/InteractiveRobot';

const stats = [
  { icon: Calendar, value: '', label: 'MCA Student', suffix: '' },
  { icon: Briefcase, value: '3', label: 'Projects Completed', suffix: '+' },
  { icon: Award, value: '', label: 'Continuous Learning', suffix: '' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const sectionRef = useRef<HTMLElement>(null);
  const { y: parallaxY } = useParallax(-0.18, sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef as React.LegacyRef<HTMLElement>}
      className="relative min-h-screen py-20 bg-[#080d1a] dark:bg-black overflow-hidden"
    >
      {/* Background effects — parallax layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: parallaxY }} className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-400/8 dark:bg-purple-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/8 dark:bg-cyan-600/10 rounded-full blur-[150px]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white dark:text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Interactive Robot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <InteractiveRobot />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-300 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a passionate MCA student at ITM GKP and an aspiring Full-Stack Developer with a strong interest in building modern, scalable web applications. As a fresher, I’m continuously learning and experimenting with technologies across Web Development, DevOps, and Cloud Computing.
              </p>
              <p>
                I enjoy developing responsive web interfaces and exploring backend systems using tools like React.js, Node.js, Express, and databases such as MongoDB and MySQL. Along with development, I’m also interested in DevOps practices and cloud platforms, learning tools like Git, Docker, and deployment workflows to understand how modern applications are built and deployed.
              </p>
              <p>
                My focus is on writing clean, maintainable code, improving problem-solving skills, and gaining practical experience by building real-world projects. I’m eager to grow as a developer and contribute to impactful software solutions.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -6, rotateY: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="bg-white/5 dark:bg-white/5 border border-purple-500/20 dark:border-white/10 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3 group cursor-default shadow-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <stat.icon className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white dark:text-white">
                      {stat.value}
                      <span className="text-purple-500 dark:text-purple-400">{stat.suffix}</span>
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
