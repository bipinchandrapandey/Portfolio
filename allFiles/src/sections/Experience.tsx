import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

const educationData = [
    {
        id: 1,
        degree: 'Master of Computer Applications (MCA)',
        institution: 'Institute of Technology & Management',
        type: 'Post Graduate',
        period: '2025 - 2027',
        location: 'Gorakhpur, UP',
        description:
            'Pursuing MCA with specialization in advanced software engineering, cloud computing, and AI/ML fundamentals.',
        achievements: [
            'Advanced software development practices',
            'Research in modern web technologies',
            'Learning DevOps and cloud computing',
        ],
        side: 'left',
    },
    {
        id: 2,
        degree: 'Bachelor of Pharmacy (B.Pharm)',
        institution: 'BBDNIIT Lucknow',
        type: 'Graduate',
        period: '2015 - 2020',
        location: 'Lucknow, UP',
        description:
            'Completed B.Pharm with a strong foundation in pharmacy sciences, medicinal chemistry, and pharmacology.',
        achievements: [
            'Gained comprehensive knowledge of pharmacology and medicinal chemistry',
            'Conducted practical research and hands-on laboratory experiments',
            'Successfully completed academic research projects related to pharmaceutical sciences',
        ],
        side: 'right',
    },
    {
        id: 3,
        degree: 'Intermediate (12th)',
        institution: 'Board of High School & Intermediate Education',
        type: 'Higher Secondary',
        period: '2013 - 2015',
        location: 'Barhaj, Deoria, UP',
        description:
            'Completed Intermediate with Science stream, building a strong base in Mathematics and Physics.',
        achievements: [
            'Science stream with Mathematics',
            'Introduced to basics of computer science',
            'Strong analytical and problem-solving skills',
        ],
        side: 'left',
    },
    {
        id: 4,
        degree: 'High School (10th)',
        institution: 'Board of High School & Intermediate Education',
        type: 'Secondary',
        period: '2012 - 2013',
        location: 'Barhaj, Deoria, UP',
        description:
            'Completed High School with distinction, developing core academic skills and curiosity for technology.',
        achievements: [
            'Distinction in Mathematics & Science',
            'Active participation in tech events',
            'Developed interest in computers and logic',
        ],
        side: 'right',
    },
];

function EducationCard({
    item,
    index,
}: {
    item: (typeof educationData)[0];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const isLeft = item.side === 'left';

    const cardContent = (
        <motion.div
            whileHover={{
                scale: 1.02,
                rotateX: -3,
                rotateY: isLeft ? 4 : -4,
                y: -6,
                transition: { type: 'spring', stiffness: 280, damping: 22 },
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="group relative bg-[#0e1628]/90 dark:bg-gray-900/60 border border-purple-500/20 dark:border-white/10 rounded-2xl p-6 hover:border-purple-400/50 dark:hover:border-purple-500/40 hover:bg-purple-500/10 dark:hover:bg-gray-800/60 transition-all duration-300 shadow-lg dark:shadow-xl"
        >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none" />
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 30px rgba(168,85,247,0.15), 0 0 60px rgba(236,72,153,0.08)' }} />

            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <h3 className="text-white font-bold text-lg leading-snug">{item.degree}</h3>
                    <p className="text-purple-500 dark:text-purple-400 text-sm font-medium mt-0.5">{item.institution}</p>
                </div>
                <div className="ml-3 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <GraduationCap className="w-5 h-5 text-white" />
                </div>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-3 mb-3 text-gray-400 text-xs">
                <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {item.period}
                </span>
                <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {item.location}
                </span>
            </div>

            <p className="text-gray-300 text-sm mb-4">{item.description}</p>

            {/* Achievements */}
            <div>
                <p className="text-purple-300 dark:text-white text-xs font-semibold mb-2">Key Achievements:</p>
                <ul className="space-y-1.5">
                    {item.achievements.map((ach) => (
                        <li key={ach} className="flex items-start gap-2 text-gray-400 text-xs">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                            {ach}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Type badge */}
            <div className="mt-5">
                <span className="text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded-full px-3 py-1">
                    {item.type}
                </span>
            </div>
        </motion.div>
    );

    return (
        <div ref={ref} className="relative flex items-center justify-center mb-14 last:mb-0">
            {/* Desktop Left Side */}
            {isLeft && (
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="w-full md:w-[45%] md:mr-auto md:pr-12"
                >
                    {cardContent}
                </motion.div>
            )}

            {/* Timeline dot (Hidden on Mobile) */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="w-5 h-5 rounded-full border-4 border-purple-500 bg-white dark:bg-black shadow-lg shadow-purple-500/40"
                />
            </div>

            {/* Desktop Right Side Placeholder for Left Items */}
            {isLeft && <div className="hidden md:block w-[45%] md:ml-auto md:pl-12" />}

            {/* Desktop Right Side */}
            {!isLeft && (
                <>
                    <div className="hidden md:block w-[45%] md:mr-auto md:pr-12" />
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="w-full md:w-[45%] md:ml-auto md:pl-12"
                    >
                        {cardContent}
                    </motion.div>
                </>
            )}
        </div>
    );
}

export default function Education() {
    const headerRef = useRef<HTMLDivElement>(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' });
    const sectionRef = useRef<HTMLElement>(null);
    const { y: parallaxY } = useParallax(-0.15, sectionRef);

    return (
        <section
            id="education"
            ref={sectionRef as React.LegacyRef<HTMLElement>}
            className="relative py-20 bg-[#080d1a] dark:bg-black overflow-hidden"
        >
            {/* Background glow — parallax layer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div style={{ y: parallaxY }} className="absolute inset-0">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 dark:bg-purple-600/5 rounded-full blur-[180px]" />
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 dark:bg-pink-600/5 rounded-full blur-[120px]" />
                </motion.div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-white">My </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Education</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4">
                        The academic journey that shaped my technical foundation and passion for building software.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical center line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent -translate-x-1/2" />

                    {educationData.map((item, index) => (
                        <EducationCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}