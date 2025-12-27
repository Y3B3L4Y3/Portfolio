import { motion, useInView } from 'framer-motion';
import { Code2, Server, Wrench, Zap, Sparkles } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper';
import { useRef, useState, useEffect } from 'react';

const skillCategories = [
  {
    title: 'Front-End',
    icon: Code2,
    color: 'cyan',
    skills: ['HTML', 'CSS', 'TailwindCSS', 'React.js', 'TypeScript'],
    description: 'Building responsive, interactive user interfaces',
  },
  {
    title: 'Back-End',
    icon: Server,
    color: 'emerald',
    skills: ['Python', 'Node.js', 'Django', 'MySQL', 'MongoDB'],
    description: 'Creating robust server-side applications',
  },
  {
    title: 'Platforms & Tools',
    icon: Wrench,
    color: 'purple',
    skills: ['Linux', 'Git', 'GitHub', 'VS Code', 'Power BI', 'Figma', 'Jupyter Notebook'],
    description: 'Leveraging modern development tools',
  },
];

const colorClasses = {
  cyan: {
    bg: 'bg-cyan-500/10',
    bgHover: 'group-hover:bg-cyan-500/15',
    border: 'border-cyan-500/30',
    borderHover: 'group-hover:border-cyan-400/50',
    text: 'text-cyan-400',
    icon: 'text-cyan-400',
    glow: 'shadow-cyan-500/25',
    glowHover: 'group-hover:shadow-cyan-500/40',
    tag: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/25 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    bgHover: 'group-hover:bg-emerald-500/15',
    border: 'border-emerald-500/30',
    borderHover: 'group-hover:border-emerald-400/50',
    text: 'text-emerald-400',
    icon: 'text-emerald-400',
    glow: 'shadow-emerald-500/25',
    glowHover: 'group-hover:shadow-emerald-500/40',
    tag: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  purple: {
    bg: 'bg-purple-500/10',
    bgHover: 'group-hover:bg-purple-500/15',
    border: 'border-purple-500/30',
    borderHover: 'group-hover:border-purple-400/50',
    text: 'text-purple-400',
    icon: 'text-purple-400',
    glow: 'shadow-purple-500/25',
    glowHover: 'group-hover:shadow-purple-500/40',
    tag: 'bg-purple-500/15 text-purple-300 border-purple-500/30 hover:bg-purple-500/25 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
};

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const skillTagVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 12,
    },
  },
};

function SkillCategory({ category, index }) {
  const colors = colorClasses[category.color];
  const Icon = category.icon;
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`group relative p-6 md:p-8 rounded-2xl border ${colors.border} ${colors.borderHover} ${colors.bg} ${colors.bgHover} backdrop-blur-sm transition-all duration-500 shadow-xl ${colors.glow} ${colors.glowHover}`}
    >
      {/* Animated glow effect on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-2xl blur-xl`}
      />

      {/* Card content */}
      <div className="relative z-10">
        {/* Animated Icon */}
        <motion.div
          animate={{
            rotate: isHovered ? [0, -10, 10, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          className={`w-14 h-14 mb-6 rounded-xl ${colors.bg} flex items-center justify-center border ${colors.border} shadow-lg ${colors.glow}`}
        >
          <Icon className={`w-7 h-7 ${colors.icon}`} />
        </motion.div>

        {/* Title with gradient underline */}
        <div className="mb-2">
          <h3 className={`text-xl font-bold font-[Space_Grotesk] ${colors.text}`}>
            {category.title}
          </h3>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className={`h-0.5 w-16 mt-2 bg-gradient-to-r ${colors.gradient} origin-left`}
          />
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 mb-6 leading-relaxed">{category.description}</p>

        {/* Skills as animated tags */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap gap-3"
        >
          {category.skills.map((skill) => (
            <motion.span
              key={skill}
              variants={skillTagVariants}
              whileHover={{
                scale: 1.1,
                y: -3,
                transition: { type: 'spring', stiffness: 400 },
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 text-sm font-medium rounded-xl border cursor-default transition-all duration-200 ${colors.tag}`}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Animated skill counter
function SkillCounter({ value, label, icon: Icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="text-center cursor-default"
    >
      <div className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-bold text-white mb-1">
        {Icon && <Icon className="w-6 h-6 text-indigo-400" />}
        <span>{count}+</span>
      </div>
      <div className="text-sm text-slate-500 font-medium">{label}</div>
    </motion.div>
  );
}

export default function Skills() {
  const allSkills = skillCategories.flatMap((cat) => cat.skills);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <SectionWrapper id="skills">
      {/* Animated decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute top-1/4 right-0 w-80 h-80 bg-purple-500 rounded-full blur-[150px]"
      />

      <div className="relative" ref={containerRef}>
        <SectionHeader
          label="Skills & Expertise"
          title="Technologies I Work With"
          description="A comprehensive toolkit of technologies and tools I use to bring ideas to life."
        />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-12 md:gap-20 mb-16 py-8 border-y border-slate-800/50"
        >
          <SkillCounter value={15} label="Technologies" />
          <SkillCounter value={3} label="Categories" />
          <SkillCounter value={100} label="Hours Learning" />
        </motion.div>

        {/* Skills categories grid with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </motion.div>

        {/* Tech marquee with smooth animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 py-8 overflow-hidden relative"
        >
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />

          <motion.div
            animate={{ x: ['0%', '-33.33%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12"
          >
            {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ color: 'rgba(148, 163, 184, 1)', scale: 1.05 }}
                className="text-2xl md:text-3xl font-bold text-slate-700/50 whitespace-nowrap font-[Space_Grotesk] transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Note with icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center"
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 text-sm cursor-default"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            Self-taught and continuously expanding my skillset through hands-on projects.
          </motion.p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
