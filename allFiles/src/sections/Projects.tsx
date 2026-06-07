import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

const projects = [
  {
    id: 1,
    title: 'Bike-time — Immersive Experience',
    description:
      'Developed an interactive biking experience website featuring dynamic animations, route exploration, performance stats, and a sleek responsive interface for riders and enthusiasts.',
    image:
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80',
    tags: ['React', 'Node.js', 'Three.js', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 2,
    title: '3D Portfolio Website — Interactive & Animated',
    description:
      'A visually engaging portfolio website featuring real-time 3D elements with Spline, fluid animations using GSAP, and a responsive UI built with React and Tailwind CSS.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['React', 'Spline', 'GSAP', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 3,
    title: '3D Website Landing Page',
    description:
      'A modern 3D landing page built with Spline, HTML, and CSS, featuring smooth animations, interactive visuals, and a responsive layout for an engaging user experience across all devices.',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    tags: ['HTML', 'CSS', 'Spline', 'JavaScript'],
    link: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const sectionRef = useRef<HTMLElement>(null);
  const { y: parallaxY } = useParallax(-0.18, sectionRef);

  return (
    <section
      id="projects"
      ref={sectionRef as React.LegacyRef<HTMLElement>}
      className="relative py-20 bg-[#080d1a] dark:bg-black overflow-hidden"
    >
      {/* Background effects — parallax layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: parallaxY }} className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-400/8 dark:bg-purple-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-400/8 dark:bg-pink-600/10 rounded-full blur-[150px]" />
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
            <span className="text-white dark:text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A curated collection of full stack projects demonstrating my expertise
            in building modern, scalable web applications — from intuitive
            frontends to robust backend systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                scale: 1.04,
                y: -10,
                rotateX: -4,
                rotateY: index === 0 ? 4 : index === 1 ? 0 : -4,
                transition: { type: 'spring', stiffness: 260, damping: 20 },
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="group relative"
            >
              <div className="relative bg-[#0e1628]/90 dark:bg-gray-900/50 border border-purple-500/20 dark:border-white/5 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-purple-400/50 dark:group-hover:border-purple-500/30 h-full shadow-lg group-hover:shadow-[0_20px_60px_rgba(168,85,247,0.25)]">
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
                  <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
                </div>

                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1628] dark:from-gray-900 via-transparent to-transparent opacity-60" />

                  {/* External link icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-purple-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white dark:text-white mb-3 group-hover:text-purple-400 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full border border-purple-300/40 dark:border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group/link"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
