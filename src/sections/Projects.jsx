import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X, Code, Globe, Folder, Star, Coffee, ShoppingCart, ChefHat, BarChart3, Layers, Server, Layout, ImageOff } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper';
import Button from '../components/Button';

const projects = [
  {
    title: 'Shaafamo Coffee',
    description: 'A modern, elegant coffee shop website with beautiful UI/UX design, responsive layout, and smooth animations.',
    longDescription: 'Shaafamo Coffee is a professionally designed coffee shop website built with TypeScript and modern web technologies. Features include an elegant landing page, menu showcase, about section, and contact information. The site is fully responsive and deployed on Vercel for optimal performance.',
    tags: ['TypeScript', 'React', 'TailwindCSS', 'Vercel'],
    icon: Coffee,
    image: '/projects/shaafamo-coffee.png',
    github: 'https://github.com/Y3B3L4Y3/Shaafamo-Coffee',
    demo: 'https://shaafamo-coffee.vercel.app',
    featured: true,
    category: 'Web App',
    color: 'amber',
    stats: { commits: 4, language: 'TypeScript' },
  },
  {
    title: 'Agora E-Commerce',
    description: 'Full-stack e-commerce platform with admin panel, user authentication, product management, and order processing.',
    longDescription: 'A comprehensive e-commerce catalog built as part of the ALX Project Nexus. Features include user authentication with JWT, role-based access control (Super Admin, Admin, Moderator, Editor, Viewer), product CRUD operations, order management, and a responsive admin dashboard. Backend API deployed on Render with MySQL database.',
    tags: ['TypeScript', 'React', 'Node.js', 'TailwindCSS', 'MySQL'],
    icon: ShoppingCart,
    image: '/projects/agora-ecommerce.png',
    github: 'https://github.com/Y3B3L4Y3/alx-project-nexus',
    demo: 'https://alx-project-nexus-tau-sage.vercel.app',
    featured: true,
    category: 'Full-Stack',
    color: 'indigo',
    stats: { commits: 35, language: 'TypeScript' },
  },
  {
    title: 'Resepi Recipe App',
    description: 'A Python-based recipe application for discovering, saving, and sharing delicious recipes with an intuitive interface.',
    longDescription: 'Resepi is a feature-rich recipe application built with Python, designed for food enthusiasts. Users can browse recipes, view detailed cooking instructions, save favorites, and explore cuisines from around the world. Built with Python backend and modern web technologies for a seamless user experience.',
    tags: ['Python', 'Django', 'SQLite'],
    icon: ChefHat,
    image: '/projects/resepi-app.png',
    github: 'https://github.com/Y3B3L4Y3/Resepi_app_final-project',
    demo: null,
    featured: false,
    category: 'Python App',
    color: 'emerald',
    stats: { commits: 10, language: 'Python' },
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive data visualization project showcasing charts, graphs, and analytical insights using Python.',
    longDescription: 'A data visualization project demonstrating proficiency in transforming raw data into meaningful visual insights. Features various chart types including bar charts, line graphs, pie charts, and interactive elements. Built with Python data science libraries to showcase data analysis and visualization skills.',
    tags: ['Python', 'Jupyter Notebook', 'Matplotlib', 'Data Analysis'],
    icon: BarChart3,
    image: '/projects/data-viz.png',
    github: 'https://github.com/Y3B3L4Y3/data_visualization-',
    demo: null,
    featured: false,
    category: 'Data Analytics',
    color: 'purple',
    stats: { commits: 8, language: 'Python' },
  },
];

const colorClasses = {
  amber: {
    gradient: 'from-amber-600/30 to-orange-600/30',
    gradientSolid: 'from-amber-500 to-orange-500',
    text: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/20',
    iconBg: 'bg-amber-500/20',
  },
  indigo: {
    gradient: 'from-indigo-600/30 to-purple-600/30',
    gradientSolid: 'from-indigo-500 to-purple-500',
    text: 'text-indigo-400',
    border: 'border-indigo-500/30',
    bg: 'bg-indigo-500/20',
    iconBg: 'bg-indigo-500/20',
  },
  emerald: {
    gradient: 'from-emerald-600/30 to-teal-600/30',
    gradientSolid: 'from-emerald-500 to-teal-500',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/20',
    iconBg: 'bg-emerald-500/20',
  },
  purple: {
    gradient: 'from-purple-600/30 to-pink-600/30',
    gradientSolid: 'from-purple-500 to-pink-500',
    text: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/20',
    iconBg: 'bg-purple-500/20',
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

// Tech stack visualization component
function TechStackVisualization({ tags }) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag, i) => (
        <motion.span
          key={tag}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * i, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="px-4 py-2 text-sm font-semibold bg-slate-800/80 text-white rounded-xl border border-slate-600/50 hover:border-slate-500 shadow-lg transition-all cursor-default"
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}

// Project stats visualization
function ProjectStats({ stats }) {
  return (
    <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-700/30">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center">
          <Code className="w-5 h-5 text-slate-300" />
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide">Commits</p>
          <p className="text-lg font-bold text-white">{stats.commits}+</p>
        </div>
      </div>
      <div className="w-px h-10 bg-slate-700/50" />
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center">
          <Layers className="w-5 h-5 text-slate-300" />
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide">Language</p>
          <p className="text-lg font-bold text-white">{stats.language.split(' ')[0]}</p>
        </div>
      </div>
    </div>
  );
}

// Image component with fallback
function ProjectImage({ src, alt, icon: Icon, colors, isHovered }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // If no image or error, show icon fallback
  if (!src || imageError) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background pattern */}
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
          <motion.div
            animate={{ y: isHovered ? -20 : 0, opacity: isHovered ? 0.5 : 0.2 }}
            className="absolute top-10 right-10 w-20 h-20 rounded-full border border-white/10"
          />
          <motion.div
            animate={{ y: isHovered ? 20 : 0, opacity: isHovered ? 0.5 : 0.2 }}
            className="absolute bottom-10 left-10 w-16 h-16 rounded-full border border-white/10"
          />
        </motion.div>

        {/* Icon */}
        <motion.div
          animate={{
            scale: isHovered ? 1.15 : 1,
            rotate: isHovered ? -5 : 0,
            y: isHovered ? -5 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`w-24 h-24 rounded-2xl bg-slate-800/90 backdrop-blur-sm flex items-center justify-center border ${colors.border} shadow-2xl`}
        >
          <Icon className={`w-12 h-12 ${colors.text}`} />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* Loading skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
          <ImageOff className="w-12 h-12 text-slate-600" />
        </div>
      )}
      
      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5 }}
        className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      />
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const colors = colorClasses[project.color] || colorClasses.indigo;
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50, rotateX: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-2xl bg-slate-900 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image or gradient */}
        <div className={`relative h-56 overflow-hidden ${!project.image ? `bg-gradient-to-br ${colors.gradient}` : ''}`}>
          {project.image ? (
            <ProjectImage
              src={project.image}
              alt={project.title}
              icon={Icon}
              colors={colors}
              isHovered={false}
            />
          ) : (
            <>
              {/* Animated background patterns */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              </motion.div>

              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem]" />

              {/* Floating icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', delay: 0.2, stiffness: 200 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className={`w-24 h-24 rounded-2xl bg-slate-800/90 backdrop-blur-sm flex items-center justify-center border ${colors.border} shadow-2xl`}
                >
                  <Icon className={`w-12 h-12 ${colors.text}`} />
                </motion.div>
              </motion.div>
            </>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Category badge */}
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`absolute top-4 left-4 px-4 py-1.5 text-xs font-bold bg-slate-800/90 ${colors.text} rounded-full border ${colors.border} z-10`}
          >
            {project.category}
          </motion.span>

          {/* Featured badge */}
          {project.featured && (
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold bg-amber-500/20 text-amber-400 rounded-full border border-amber-500/30 flex items-center gap-1 z-10"
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

          {/* Tech stack visualization */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h4 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest flex items-center gap-2">
              <Code className="w-4 h-4" /> Technologies Used
            </h4>
            <TechStackVisualization tags={project.tags} />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ProjectStats stats={project.stats} />
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-6"
          >
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
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${colors.gradientSolid} text-white rounded-xl transition-colors font-medium shadow-lg`}
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
  const Icon = project.icon;

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -12 }}
      onClick={() => onSelect(project)}
      className="group relative bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 overflow-hidden cursor-pointer card-glow"
    >
      {/* Animated glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-3xl blur-xl transition-opacity`}
      />

      {/* Featured badge */}
      {project.featured && (
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full border border-amber-500/30 flex items-center gap-1 shadow-lg backdrop-blur-sm"
        >
          <Star className="w-3 h-3" /> Featured
        </motion.div>
      )}

      {/* Category badge */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        className={`absolute top-4 left-4 z-20 px-3 py-1.5 bg-slate-800/90 backdrop-blur-sm ${colors.text} text-xs font-bold rounded-full border ${colors.border}`}
      >
        {project.category}
      </motion.div>

      {/* Project preview with image or icon */}
      <div className={`relative h-56 md:h-64 overflow-hidden ${!project.image ? `bg-gradient-to-br ${colors.gradient}` : 'bg-slate-900'}`}>
        <ProjectImage
          src={project.image}
          alt={project.title}
          icon={Icon}
          colors={colors}
          isHovered={isHovered}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent pointer-events-none" />

        {/* Hover overlay with CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-slate-900/70 flex items-center justify-center backdrop-blur-sm"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            className={`px-6 py-3 bg-gradient-to-r ${colors.gradientSolid} text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-xl`}
          >
            <Layout className="w-4 h-4" />
            View Details
          </motion.span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 bg-slate-900/50">
        <h3 className="text-xl font-bold text-white mb-3 font-[Space_Grotesk] group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tags preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-xs font-semibold bg-slate-700/60 text-slate-200 rounded-lg border border-slate-600/40 hover:bg-slate-600/60 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-3 py-1.5 text-xs font-semibold bg-slate-800/60 text-slate-400 rounded-lg border border-slate-700/40">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Quick links */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
          <div className="flex items-center gap-5">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.05, x: 2 }}
              className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05, x: 2 }}
                className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
          </div>

          {/* Language badge */}
          <span className="px-3 py-1.5 text-xs font-bold bg-slate-700/50 text-slate-300 rounded-lg">
            {project.stats.language.split(' ')[0]}
          </span>
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
          description="Real-world applications showcasing my expertise in full-stack development and data analytics."
        />

        {/* Project stats overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-12 py-6 border-y border-slate-800/50"
        >
          {[
            { icon: Folder, label: 'Projects', value: '4+' },
            { icon: Code, label: 'Technologies', value: '10+' },
            { icon: Server, label: 'Deployed', value: '3' },
            { icon: Star, label: 'Featured', value: '2' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
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
              View All on GitHub
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
