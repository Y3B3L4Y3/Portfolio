import { motion, useInView } from 'framer-motion';
import { Code, Database, Shield, Sparkles, GraduationCap, MapPin, Calendar, BookOpen, Briefcase, Award } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper';
import { useRef, useState } from 'react';

const highlights = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building modern, responsive web applications with React and cutting-edge technologies.',
    color: 'indigo',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Designing robust data pipelines and transforming raw data into valuable insights.',
    color: 'purple',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Implementing secure coding practices and penetration testing fundamentals.',
    color: 'emerald',
  },
  {
    icon: Sparkles,
    title: 'Data-Driven Solutions',
    description: 'Creating analytics dashboards and business intelligence solutions.',
    color: 'cyan',
  },
];

const colorMap = {
  indigo: 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20',
  purple: 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20',
};

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS', 'TailwindCSS'],
    color: 'indigo',
  },
  {
    title: 'Data',
    skills: ['Data Analysis', 'Data Engineering', 'Power BI'],
    color: 'purple',
  },
  {
    title: 'Cybersecurity',
    skills: ['Penetration Testing Basics', 'Secure Coding Practices'],
    color: 'emerald',
  },
  {
    title: 'Currently Learning',
    skills: ['Data Engineering', 'Data Science', 'Deep Learning'],
    color: 'amber',
  },
];

const colorClasses = {
  indigo: {
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
    text: 'text-indigo-400',
    tag: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    tag: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    tag: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  },
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    tag: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  },
};

// Staggered container animation
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

// Professional animated profile card component
function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -50, rotate: -5 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, type: 'spring' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <div className="relative aspect-square max-w-md mx-auto">
        {/* Animated orbiting rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[-20px] rounded-full border border-indigo-500/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[-40px] rounded-full border border-purple-500/10"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[-60px] rounded-full border border-cyan-500/5"
        />

        {/* Animated pulsing glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-3xl blur-2xl"
        />

        {/* Main card container */}
        <motion.div
          whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
          className="relative z-10 aspect-square glass-card rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20"
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500"
            animate={{
              background: [
                'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #06b6d4 100%)',
                'linear-gradient(135deg, #a855f7 0%, #06b6d4 50%, #6366f1 100%)',
                'linear-gradient(135deg, #06b6d4 0%, #6366f1 50%, #a855f7 100%)',
                'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #06b6d4 100%)',
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-full h-full bg-slate-900 rounded-3xl" />
          </motion.div>

          {/* Content */}
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <div className="text-center">
              {/* Animated avatar with glow */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                className="relative inline-block mb-6"
              >
                {/* Outer glow ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-[-8px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-md"
                />

                {/* Avatar circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-2xl cursor-pointer"
                >
                  {/* Inner border */}
                  <div className="absolute inset-[3px] rounded-full bg-slate-900" />
                  
                  {/* Initials with gradient */}
                  <motion.span
                    animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5 }}
                    className="relative text-5xl font-bold bg-gradient-to-br from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent font-[Space_Grotesk]"
                  >
                    YZ
                  </motion.span>
                </motion.div>

                {/* Floating particles around avatar */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-indigo-400"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      x: [0, Math.cos((i * 60 * Math.PI) / 180) * 80],
                      y: [0, Math.sin((i * 60 * Math.PI) / 180) * 80],
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </motion.div>

              {/* Name with typing effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.p
                  className="text-xl font-bold text-white mb-2 font-[Space_Grotesk]"
                  animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                >
                  Yafet Zekariyas
                </motion.p>
                
                {/* Role badges */}
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  <motion.span
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/30"
                  >
                    Full-Stack Dev
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30"
                  >
                    Data Engineer
                  </motion.span>
                </div>

                {/* Status indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-medium text-emerald-400">Available for Work</span>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Animated grid overlay */}
          <motion.div
            animate={{ opacity: isHovered ? 0.3 : 0.15 }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"
          />
        </motion.div>

        {/* Floating badges with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
          className="absolute -top-4 -right-4 z-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/30 blur-lg rounded-xl" />
            <div className="relative px-4 py-2.5 glass-card rounded-xl shadow-xl">
              <span className="text-sm font-bold text-indigo-400">3+ Years</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.15, y: 5, rotate: -5 }}
          className="absolute -bottom-4 -left-4 z-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/30 blur-lg rounded-xl" />
            <div className="relative px-4 py-2.5 glass-card rounded-xl shadow-xl">
              <span className="text-sm font-bold text-purple-400">20+ Projects</span>
            </div>
          </div>
        </motion.div>

        {/* Self-taught badge with shine effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.15, x: 5 }}
          className="absolute top-1/2 -right-10 z-20"
        >
          <div className="relative overflow-hidden px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-xl shadow-emerald-500/30">
            {/* Shine effect */}
            <motion.div
              animate={{ x: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute inset-0 w-10 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
            <span className="relative text-sm font-bold text-white">Self-Taught</span>
          </div>
        </motion.div>

        {/* ALX Certified badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.15, x: -5 }}
          className="absolute top-1/3 -left-8 z-20"
        >
          <div className="relative overflow-hidden px-4 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl shadow-xl shadow-amber-500/30">
            <motion.div
              animate={{ x: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, delay: 1 }}
              className="absolute inset-0 w-10 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
            <span className="relative text-sm font-bold text-white flex items-center gap-1">
              <Award className="w-4 h-4" />
              ALX Certified
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="about" dark>
      {/* Animated decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[150px]"
      />

      <div className="relative" ref={ref}>
        <SectionHeader
          label="About Me"
          title="Turning Vision Into Reality"
          description="A self-taught developer with a relentless passion for building innovative solutions that make a difference."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Professional Animated Profile Card */}
          <ProfileCard />

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Bio with animated highlight */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6 space-y-4"
            >
              <motion.p variants={itemVariants} className="text-lg text-slate-300 leading-relaxed">
                I'm <span className="text-white font-semibold">Yafet Zekariyas</span>, a{' '}
                <span className="text-emerald-400 font-semibold">self-taught programmer</span> with an insatiable 
                curiosity for technology. My journey began with a formal education in{' '}
                <span className="text-white font-medium">Electrical & Computer Engineering</span> at Arba Minch 
                University, Ethiopia, but my true skills were forged through countless hours of self-study, 
                personal projects, and real-world problem-solving.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-lg text-slate-300 leading-relaxed">
                As an <span className="text-indigo-400 font-semibold">ALX-certified</span> developer, I've proven 
                my dedication to continuous learning. I specialize in building{' '}
                <span className="text-white font-medium">full-stack web applications</span> using React, Node.js, 
                Python, and Django. I'm also passionate about{' '}
                <span className="text-white font-medium">data analytics</span> with Power BI and SQL, transforming 
                complex data into actionable insights.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-lg text-slate-300 leading-relaxed">
                Currently expanding my expertise in{' '}
                <span className="text-amber-400 font-medium">Data Engineering</span>,{' '}
                <span className="text-amber-400 font-medium">Data Science</span>, and{' '}
                <span className="text-amber-400 font-medium">Deep Learning</span>. I believe that the best 
                developers never stop learning.
              </motion.p>

              <motion.p variants={itemVariants} className="text-lg text-slate-300 leading-relaxed">
                I write <span className="text-emerald-400 font-medium">clean, maintainable code</span> and create 
                solutions that are functional, <span className="text-emerald-400 font-medium">secure</span>, and{' '}
                <span className="text-emerald-400 font-medium">scalable</span>. Every project is an opportunity to learn 
                something new and push my boundaries.
              </motion.p>
            </motion.div>

            {/* Professional Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="mb-5 p-5 rounded-2xl glass-card card-glow cursor-default"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0"
                >
                  <Briefcase className="w-6 h-6 text-indigo-400" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/30">
                      Experience
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white font-[Space_Grotesk] mb-1">
                    Full-Stack Developer & Project Leader
                  </h4>
                  <p className="text-indigo-400 font-medium text-sm mb-2">
                    ENNLIT Technology • July 2024 - November 2024
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Led development teams, designed RESTful APIs, and delivered full-stack web applications using modern technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="mb-5 p-5 rounded-2xl glass-card card-glow cursor-default"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0"
                >
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                      Education
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white font-[Space_Grotesk] mb-1">
                    Electrical and Computer Engineering
                  </h4>
                  <p className="text-cyan-400 font-medium text-sm mb-2">
                    Bachelor's Degree • Electronics Stream
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      Arba Minch University
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      2021 - 2025
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Self-taught journey highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="mb-6 p-5 rounded-2xl glass-card card-glow cursor-default"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: -10 }}
                  className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0"
                >
                  <BookOpen className="w-6 h-6 text-emerald-400" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                      Self-Taught Journey
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white font-[Space_Grotesk] mb-1">
                    Continuous Learner
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    From online courses to documentation, from tutorials to building real projects — 
                    every day is an opportunity to grow. <span className="text-emerald-400 font-medium">ALX certified</span> and always hungry for more.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skill Tags */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {skillCategories.map((category) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-xl ${colorClasses[category.color].bg} border ${colorClasses[category.color].border} transition-all duration-300 hover:shadow-lg`}
                >
                  <h4 className={`text-sm font-semibold mb-3 ${colorClasses[category.color].text}`}>
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1.5 text-sm font-medium rounded-lg border ${colorClasses[category.color].tag} cursor-default transition-all shadow-sm`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 glass-card rounded-2xl card-glow cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-12 h-12 mb-4 rounded-xl ${colorMap[item.color]} flex items-center justify-center transition-all`}
              >
                <item.icon className="w-6 h-6" />
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2 font-[Space_Grotesk]">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
