import { motion, useInView } from 'framer-motion';
import { Code, Database, Shield, Sparkles, GraduationCap, MapPin, Calendar, Heart, Rocket, BookOpen } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper';
import { useRef } from 'react';

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
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated background decoration */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl"
              />
              
              {/* Main image container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative z-10 aspect-square bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden"
              >
                {/* Placeholder avatar */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/25"
                    >
                      <span className="text-5xl font-bold text-white font-[Space_Grotesk]">YZ</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-slate-400"
                    >
                      <p className="text-lg font-medium text-white mb-2">Yafet Zekariyas</p>
                      <p className="text-sm">Self-Taught Developer</p>
                      <p className="text-sm text-indigo-400">& Data Engineer</p>
                    </motion.div>
                  </div>
                </div>

                {/* Animated grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
              </motion.div>

              {/* Floating badges with bounce animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="absolute -top-4 -right-4 z-20 px-4 py-2 bg-slate-800/90 backdrop-blur-sm rounded-xl border border-slate-700 shadow-xl"
              >
                <span className="text-sm font-medium text-indigo-400">3+ Years</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, y: 5 }}
                className="absolute -bottom-4 -left-4 z-20 px-4 py-2 bg-slate-800/90 backdrop-blur-sm rounded-xl border border-slate-700 shadow-xl"
              >
                <span className="text-sm font-medium text-purple-400">20+ Projects</span>
              </motion.div>

              {/* Self-taught badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/2 -right-6 z-20 px-3 py-2 bg-gradient-to-r from-emerald-600/90 to-teal-600/90 backdrop-blur-sm rounded-xl shadow-xl"
              >
                <span className="text-xs font-bold text-white flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  Self-Taught
                </span>
              </motion.div>
            </div>
          </motion.div>

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

            {/* Education Card with hover effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="mb-6 p-5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
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
                    <span className="px-2 py-0.5 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                      Education
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white font-[Space_Grotesk] mb-1">
                    Electrical and Computer Engineering
                  </h4>
                  <p className="text-cyan-400 font-medium text-sm mb-2">
                    Bachelor's Degree
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      Arba Minch University
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      Ethiopia
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
              whileHover={{ scale: 1.02 }}
              className="mb-6 p-5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300"
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
                    <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                      Self-Taught Journey
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white font-[Space_Grotesk] mb-1">
                    Continuous Learner
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    From online courses to documentation, from tutorials to building real projects — 
                    every day is an opportunity to grow. <span className="text-emerald-400">ALX certified</span> and always hungry for more.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skill Tags with staggered animation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-xl ${colorClasses[category.color].bg} border ${colorClasses[category.color].border} transition-all duration-300`}
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
                        className={`px-3 py-1.5 text-sm font-medium rounded-lg border ${colorClasses[category.color].tag} cursor-default transition-all`}
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

        {/* Highlights grid with professional animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group p-6 bg-slate-800/30 rounded-2xl border border-slate-700/30 hover:border-${item.color}-500/30 transition-all duration-300 cursor-default`}
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
              <p className="text-sm text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
