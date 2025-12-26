import { motion } from 'framer-motion';

export default function SectionWrapper({
  children,
  id,
  className = '',
  dark = false,
}) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-32 overflow-hidden ${
        dark ? 'bg-slate-950' : 'bg-slate-900'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ label, title, description, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${center ? 'text-center max-w-3xl mx-auto' : ''}`}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Space_Grotesk] text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

