import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, Github, Mail, FileDown, ChevronDown, Briefcase, MapPin } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// Animated counter component
function AnimatedCounter({ value, duration = 2 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration });
    const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, duration, count, rounded]);

  return <span>{displayValue}</span>;
}

// Floating particles background
function FloatingParticles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-indigo-400/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Animated grid background
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-60">
      {/* Horizontal lines */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
          style={{ top: `${(i + 1) * 6.67}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: i * 0.03 }}
        />
      ))}
      {/* Vertical lines */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"
          style={{ left: `${(i + 1) * 6.67}%` }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: i * 0.03 }}
        />
      ))}
    </div>
  );
}

// Text reveal animation variants
const textRevealVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

// Split text into letters for animation
function AnimatedText({ text, className }) {
  return (
    <motion.span
      variants={textRevealVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Glowing orb component
function GlowingOrb({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function Hero() {
  const containerRef = useRef(null);

  const stats = [
    { label: 'Projects', value: 20 },
    { label: 'Certifications', value: 3 },
    { label: 'Technologies', value: 15 },
  ];

  const techStack = ['React', 'Python', 'Django', 'Node.js', 'Power BI'];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030014]"
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-[#030014] to-[#030014]" />
        
        {/* Animated grid */}
        <AnimatedGrid />
        
        {/* Floating particles */}
        <FloatingParticles />
        
        {/* Glowing orbs - Professional positioning */}
        <GlowingOrb className="w-[600px] h-[600px] -top-64 -left-64 bg-indigo-600/25" delay={0} />
        <GlowingOrb className="w-[500px] h-[500px] top-1/2 -right-48 bg-purple-600/20" delay={1.5} />
        <GlowingOrb className="w-[400px] h-[400px] -bottom-32 left-1/4 bg-cyan-600/15" delay={3} />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_0%,#030014_75%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className="text-center">
          {/* Status Badge with Enhanced Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="mb-8 inline-block"
          >
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-emerald-500/20 blur-xl rounded-full group-hover:bg-emerald-500/30 transition-colors" />
              
              <span className="relative inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold shadow-lg shadow-emerald-500/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                Open to Opportunities
              </span>
            </div>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-6"
          >
            <MapPin className="w-4 h-4" />
            <span>Addis Ababa, Ethiopia</span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl mb-4 font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name with Letter Animation */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            <AnimatedText
              text="Yafet Zekariyas"
              className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-sm"
            />
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-6"
          >
            <span className="text-xl md:text-2xl lg:text-3xl font-semibold">
              <span className="text-indigo-400">Self-Taught</span>
              <span className="text-slate-600 mx-3">•</span>
              <span className="text-white">Full-Stack Developer</span>
              <span className="text-slate-600 mx-3">•</span>
              <span className="text-purple-400">Data Analyst</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Electrical & Computer Engineering graduate, <span className="text-indigo-400 font-medium">ALX-certified</span> engineer 
            specializing in building <span className="text-white font-medium">secure, data-driven</span> web applications 
            and transforming raw data into <span className="text-white font-medium">actionable insights</span>.
          </motion.p>

          {/* Tech Stack with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 1.3 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)',
                }}
                className="px-5 py-2.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-sm text-slate-300 font-medium cursor-default transition-all hover:border-indigo-500/40 hover:bg-slate-800/80"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 overflow-hidden rounded-2xl font-semibold text-white btn-shadow"
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%]"
                animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10" />
              {/* Hover glow */}
              <div className="absolute inset-0 bg-indigo-500/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity" />
              <span className="relative flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, borderColor: 'rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl font-semibold text-white transition-all hover:bg-slate-800/80 hover:shadow-lg"
            >
              <Mail className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Resume Download - Premium Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <motion.a
              href="/resume/yz.pdf"
              download="Yafet_Zekariyas_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 overflow-hidden rounded-2xl font-semibold transition-all"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 p-[2px] bg-[length:200%_100%] animate-gradient">
                <div className="h-full w-full rounded-[14px] bg-[#030014] group-hover:bg-slate-900/80 transition-colors" />
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              
              {/* Content */}
              <span className="relative flex items-center gap-2.5 text-amber-400 group-hover:text-amber-300 transition-colors">
                <FileDown className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </span>
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="flex items-center justify-center gap-8 md:gap-16 mt-16 pt-10 border-t border-slate-800/50"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center cursor-default"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter value={stat.value} duration={2} />+
                </div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="flex items-center justify-center gap-5 mt-10"
          >
            {[
              { icon: Github, href: 'https://github.com/Y3B3L4Y3', label: 'GitHub' },
              { icon: Mail, href: 'mailto:yafetzekarias23@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.icon === Github ? '_blank' : undefined}
                rel={social.icon === Github ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/10 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Bottom gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
      />
    </section>
  );
}
