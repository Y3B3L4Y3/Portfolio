import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { BookOpen, Brain, Cpu, TrendingUp, Zap, Target } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper';

const learningItems = [
  {
    icon: BookOpen,
    title: 'Data Engineering',
    description: 'Building scalable data pipelines and ETL processes for efficient data workflows.',
    status: 'In Progress',
    progress: 65,
    color: 'purple',
    topics: ['Apache Spark', 'Airflow', 'Data Warehousing', 'ETL Design'],
  },
  {
    icon: Brain,
    title: 'Data Science',
    description: 'Statistical analysis, machine learning fundamentals, and predictive modeling.',
    status: 'In Progress',
    progress: 45,
    color: 'indigo',
    topics: ['Statistics', 'Pandas', 'Scikit-learn', 'Data Visualization'],
  },
  {
    icon: Cpu,
    title: 'Deep Learning',
    description: 'Neural networks, AI models, and advanced machine learning techniques.',
    status: 'Starting',
    progress: 25,
    color: 'cyan',
    topics: ['TensorFlow', 'Neural Networks', 'NLP', 'Computer Vision'],
  },
];

const colorClasses = {
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    icon: 'text-purple-400',
    progress: 'bg-purple-500',
    glow: 'shadow-purple-500/20',
  },
  indigo: {
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
    text: 'text-indigo-400',
    icon: 'text-indigo-400',
    progress: 'bg-indigo-500',
    glow: 'shadow-indigo-500/20',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    text: 'text-cyan-400',
    icon: 'text-cyan-400',
    progress: 'bg-cyan-500',
    glow: 'shadow-cyan-500/20',
  },
};

function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

function LearningCard({ item, index }) {
  const colors = colorClasses[item.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative p-6 md:p-8 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${colors.glow}`}
    >
      {/* Status badge */}
      <div className="absolute top-4 right-4">
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
          {item.status}
        </span>
      </div>

      {/* Icon */}
      <div className={`w-14 h-14 mb-6 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <item.icon className={`w-7 h-7 ${colors.icon}`} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 font-[Space_Grotesk]">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {item.description}
      </p>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-slate-500 uppercase tracking-wider">Progress</span>
          <span className={`text-sm font-bold ${colors.text}`}>
            <AnimatedCounter target={item.progress} />%
          </span>
        </div>
        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${item.progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
            className={`h-full ${colors.progress} rounded-full`}
          />
        </div>
      </div>

      {/* Topics */}
      <div className="flex flex-wrap gap-2">
        {item.topics.map((topic, i) => (
          <motion.span
            key={topic}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.05 }}
            className="px-2.5 py-1 text-xs font-medium bg-slate-700/50 text-slate-400 rounded-md border border-slate-600/30"
          >
            {topic}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Learning() {
  return (
    <SectionWrapper id="learning" dark>
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="relative">
        <SectionHeader
          label="Current Learning"
          title="Always Growing"
          description="Continuously expanding my knowledge in cutting-edge technologies and methodologies."
        />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-16"
        >
          {[
            { icon: TrendingUp, label: 'Courses', value: 5 },
            { icon: Target, label: 'Projects', value: 3 },
            { icon: Zap, label: 'Hours/Week', value: 15 },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/30"
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-indigo-400" />
              <div className="text-2xl md:text-3xl font-bold text-white font-[Space_Grotesk]">
                <AnimatedCounter target={stat.value} duration={1500} />
                {stat.label === 'Hours/Week' && '+'}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {learningItems.map((item, index) => (
            <LearningCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Motivation quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-lg md:text-xl text-slate-400 italic max-w-2xl mx-auto">
            "The capacity to learn is a gift; the ability to learn is a skill; 
            the willingness to learn is a choice."
          </blockquote>
          <p className="mt-4 text-sm text-slate-500">— Brian Herbert</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

