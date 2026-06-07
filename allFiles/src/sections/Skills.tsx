import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  FileCode,
  Atom,
  Palette,
  Layers,
  Rocket,
  PenTool,
  Server,
  Database,
  GitBranch,
  Github,
} from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

const skills = [
  { name: 'HTML5/CSS3', icon: FileCode, percentage: 95 },
  { name: 'JavaScript', icon: Code2, percentage: 90 },
  { name: 'React/Redux', icon: Atom, percentage: 90 },
  { name: 'Tailwind CSS', icon: Palette, percentage: 91 },
  { name: 'Bootstrap', icon: Layers, percentage: 91 },
  { name: 'Next.js', icon: Rocket, percentage: 85 },
  { name: 'UI/UX Design', icon: PenTool, percentage: 87 },
  { name: 'Node.js/Express.js', icon: Server, percentage: 87 },
  { name: 'MongoDB', icon: Database, percentage: 82 },
  { name: 'PostgreSQL', icon: Database, percentage: 80 },
  { name: 'Git', icon: GitBranch, percentage: 88 },
  { name: 'GitHub', icon: Github, percentage: 90 },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const sectionRef = useRef<HTMLElement>(null);
  const { y: parallaxY } = useParallax(-0.2, sectionRef);

  return (
    <section
      id="skills"
      ref={sectionRef as React.LegacyRef<HTMLElement>}
      className="relative py-20 bg-[#080d1a] dark:bg-black overflow-hidden"
    >
      {/* Background effects — parallax layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: parallaxY }} className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/8 dark:bg-purple-600/5 rounded-full blur-[150px]" />
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-400/5 dark:bg-pink-600/5 rounded-full blur-[120px]" />
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
            <span className="text-white dark:text-white">My </span>
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{
                scale: 1.07,
                y: -8,
                rotateX: -6,
                rotateY: 6,
                transition: { duration: 0.25, type: 'spring', stiffness: 300 },
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="group relative"
            >
              <div className="relative bg-[#0e1628]/80 dark:bg-gray-900/50 border border-purple-500/20 dark:border-white/5 rounded-xl p-4 md:p-6 overflow-hidden transition-all duration-300 group-hover:border-purple-400/50 dark:group-hover:border-purple-500/30 group-hover:bg-purple-500/10 dark:group-hover:bg-gray-800/50 shadow-lg">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-50" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/30 transition-shadow"
                  >
                    <skill.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </motion.div>

                  {/* Skill name */}
                  <h3 className="text-center text-sm md:text-base font-medium text-white dark:text-white mb-3">
                    {skill.name}
                  </h3>

                  {/* Progress bar */}
                  <div className="relative h-1.5 bg-white/10 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.08,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #a855f7, #ec4899)',
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>

                  {/* Percentage */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 + index * 0.08 }}
                    className="text-center text-xs text-gray-400 dark:text-gray-500 mt-2"
                  >
                    {skill.percentage}%
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
