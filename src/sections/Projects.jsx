import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X, Code, Globe, Folder, Star } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper';
import Button from '../components/Button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
    longDescription: 'Built a comprehensive e-commerce solution featuring secure user authentication, dynamic product catalog, real-time inventory management, shopping cart with session persistence, and Stripe payment integration. Implemented responsive design for optimal mobile shopping experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: null,
    github: 'https://github.com/Y3B3L4Y3',
    demo: 'https://example.com',
    featured: true,
    category: 'Web App',
    color: 'indigo',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for visualizing business metrics and KPIs with real-time data updates and custom reporting.',
    longDescription: 'Developed an analytics dashboard that transforms raw business data into actionable insights. Features include customizable widgets, real-time data synchronization, automated report generation, and interactive data visualizations using Power BI integration.',
    tags: ['React', 'Python', 'Power BI', 'PostgreSQL'],
    image: null,
    github: 'https://github.com/Y3B3L4Y3',
    demo: 'https://example.com',
    featured: true,
    category: 'Data',
    color: 'emerald',
  },
  {
    title: 'Secure Task Manager',
    description: 'Collaborative task management tool with end-to-end encryption and secure coding practices implemented.',
    longDescription: 'A security-focused task management application implementing secure coding practices, input validation, XSS protection, and data encryption. Features team collaboration, real-time updates, and comprehensive activity logging for audit trails.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Security'],
    image: null,
    github: 'https://github.com/Y3B3L4Y3',
    demo: 'https://example.com',
    featured: false,
    category: 'Cybersecurity',
    color: 'purple',
  },
  {
    title: 'ETL Data Pipeline',
    description: 'Automated data pipeline for processing and transforming large datasets from multiple sources.',
    longDescription: 'Engineered a robust ETL pipeline using Python and Apache Airflow for automated data extraction, transformation, and loading. Handles multiple data sources, implements data quality checks, and provides monitoring dashboards for pipeline health.',
    tags: ['Python', 'Apache Airflow', 'AWS', 'PostgreSQL'],
    image: null,
    github: 'https://github.com/Y3B3L4Y3',
    demo: null,
    featured: false,
    category: 'Data Engineering',
    color: 'cyan',
  },
  {
    title: 'Network Security Scanner',
    description: 'Web-based vulnerability scanner with automated reporting and remediation suggestions.',
    longDescription: 'Developed a network security assessment tool that performs automated vulnerability scanning, port analysis, and security audits. Generates detailed reports with risk scores and provides remediation recommendations based on industry best practices.',
    tags: ['Python', 'Node.js', 'Docker', 'Security'],
    image: null,
    github: 'https://github.com/Y3B3L4Y3',
    demo: null,
    featured: false,
    category: 'Cybersecurity',
    color: 'rose',
  },
];

const colorClasses = {
  indigo: {
    gradient: 'from-indigo-600/30 to-purple-600/30',
    text: 'text-indigo-400',
    border: 'border-indigo-500/30',
    bg: 'bg-indigo-500/20',
  },
  emerald: {
    gradient: 'from-emerald-600/30 to-teal-600/30',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/20',
  },
  purple: {
    gradient: 'from-purple-600/30 to-pink-600/30',
    text: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/20',
  },
  cyan: {
    gradient: 'from-cyan-600/30 to-blue-600/30',
    text: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/20',
  },
  rose: {
    gradient: 'from-rose-600/30 to-orange-600/30',
    text: 'text-rose-400',
    border: 'border-rose-500/30',
    bg: 'bg-rose-500/20',
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const colors = colorClasses[project.color] || colorClasses.indigo;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-2xl bg-slate-900 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated header gradient */}
        <div className={`relative h-40 bg-gradient-to-br ${colors.gradient} overflow-hidden`}>
          {/* Animated patterns */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-30"
          >
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl" />
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          </motion.div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20" />

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className={`w-20 h-20 rounded-2xl bg-slate-800/90 backdrop-blur-sm flex items-center justify-center border ${colors.border} shadow-xl`}>
              <Folder className={`w-10 h-10 ${colors.text}`} />
            </div>
          </motion.div>

          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Category badge */}
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`absolute top-4 left-4 px-4 py-1.5 text-xs font-bold bg-slate-800/90 ${colors.text} rounded-full border ${colors.border}`}
          >
            {project.category}
          </motion.span>

          {/* Featured badge */}
          {project.featured && (
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold bg-amber-500/20 text-amber-400 rounded-full border border-amber-500/30 flex items-center gap-1"
            >
              <Star className="w-3 h-3" /> Featured
            </motion.span>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-white mb-3 font-[Space_Grotesk]"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 leading-relaxed mb-6"
          >
            {project.longDescription}
          </motion.p>

          {/* Tech stack */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05, type: 'spring' }}
                  className={`px-4 py-2 text-sm font-medium ${colors.bg} ${colors.text} rounded-xl border ${colors.border}`}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors font-medium"
              >
                <Github className="w-5 h-5" />
                View Code
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${colors.gradient} text-white rounded-xl transition-colors font-medium border ${colors.border}`}
              >
                <Globe className="w-5 h-5" />
                Live Demo
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const colors = colorClasses[project.color] || colorClasses.indigo;

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      onClick={() => onSelect(project)}
      className="group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 overflow-hidden cursor-pointer"
    >
      {/* Animated glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        className={`absolute -inset-0.5 bg-gradient-to-r ${colors.gradient} rounded-2xl blur-xl transition-opacity`}
      />

      {/* Featured badge */}
      {project.featured && (
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full border border-amber-500/30 flex items-center gap-1"
        >
          <Star className="w-3 h-3" /> Featured
        </motion.div>
      )}

      {/* Category badge */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        className={`absolute top-4 left-4 z-20 px-3 py-1.5 bg-slate-800/90 ${colors.text} text-xs font-bold rounded-full border ${colors.border}`}
      >
        {project.category}
      </motion.div>

      {/* Project preview */}
      <div className={`relative h-52 md:h-60 overflow-hidden bg-gradient-to-br ${colors.gradient}`}>
        {/* Animated background pattern */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_50%)]" />
        </motion.div>

        {/* Project icon */}
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? -5 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`w-20 h-20 rounded-2xl bg-slate-800/90 backdrop-blur-sm flex items-center justify-center border ${colors.border} shadow-2xl`}
          >
            <span className={`text-3xl font-bold ${colors.text} font-[Space_Grotesk]`}>
              {project.title.charAt(0)}
            </span>
          </motion.div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

        {/* Hover overlay with CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-slate-900/70 flex items-center justify-center backdrop-blur-sm"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            className={`px-6 py-3 bg-gradient-to-r ${colors.gradient} text-white text-sm font-bold rounded-full flex items-center gap-2 border ${colors.border}`}
          >
            <Code className="w-4 h-4" />
            View Details
          </motion.span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 bg-slate-900/50">
        <h3 className={`text-xl font-bold text-white mb-3 font-[Space_Grotesk] group-hover:${colors.text} transition-colors`}>
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-xs font-medium ${colors.bg} ${colors.text} rounded-full border ${colors.border}`}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-400 rounded-full border border-slate-600/30">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Quick links */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-700/30">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.1 }}
              className={`flex items-center gap-1.5 text-sm text-slate-400 hover:${colors.text} transition-colors`}
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <SectionWrapper id="projects">
      {/* Animated decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px]"
      />

      <div className="relative" ref={containerRef}>
        <SectionHeader
          label="My Work"
          title="Featured Projects"
          description="A showcase of projects spanning web development, data engineering, and cybersecurity."
        />

        {/* Projects grid with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </motion.div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button href="https://github.com/Y3B3L4Y3" variant="outline" size="lg">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
