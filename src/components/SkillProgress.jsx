import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Circular progress indicator component for skills
 * Uses SVG for the circular ring with Framer Motion animations
 */
export function CircularProgress({ 
  percentage, 
  name, 
  size = 140,
  strokeWidth = 8,
  index = 0,
  color = 'indigo'
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const colorVariants = {
    indigo: {
      stroke: 'stroke-indigo-500',
      text: 'text-indigo-400',
      glow: 'drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]',
    },
    purple: {
      stroke: 'stroke-purple-500',
      text: 'text-purple-400',
      glow: 'drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]',
    },
    emerald: {
      stroke: 'stroke-emerald-500',
      text: 'text-emerald-400',
      glow: 'drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]',
    },
    amber: {
      stroke: 'stroke-amber-500',
      text: 'text-amber-400',
      glow: 'drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]',
    },
    cyan: {
      stroke: 'stroke-cyan-500',
      text: 'text-cyan-400',
      glow: 'drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]',
    },
    rose: {
      stroke: 'stroke-rose-500',
      text: 'text-rose-400',
      glow: 'drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]',
    },
  };

  const colors = colorVariants[color] || colorVariants.indigo;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center group"
    >
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background circle */}
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            className="fill-none stroke-slate-700/50"
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className={`fill-none ${colors.stroke} ${colors.glow} transition-all duration-300`}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
            style={{
              strokeDasharray: circumference,
            }}
          />
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className={`text-2xl font-bold ${colors.text} font-[Space_Grotesk]`}
          >
            {isInView ? percentage : 0}%
          </motion.span>
        </div>
      </div>
      
      {/* Skill name */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        className="mt-4 text-sm font-medium text-slate-300 group-hover:text-white transition-colors"
      >
        {name}
      </motion.span>
    </motion.div>
  );
}

/**
 * Horizontal progress bar variant
 */
export function ProgressBar({
  percentage,
  name,
  index = 0,
  color = 'indigo'
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const colorVariants = {
    indigo: 'from-indigo-600 to-indigo-400',
    purple: 'from-purple-600 to-purple-400',
    emerald: 'from-emerald-600 to-emerald-400',
    amber: 'from-amber-600 to-amber-400',
    cyan: 'from-cyan-600 to-cyan-400',
    rose: 'from-rose-600 to-rose-400',
  };

  const bgColor = colorVariants[color] || colorVariants.indigo;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-sm font-bold text-slate-400">{percentage}%</span>
      </div>
      <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${bgColor} rounded-full`}
        />
      </div>
    </motion.div>
  );
}

export default CircularProgress;

