import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building2, X, BadgeCheck, ChevronRight, Sparkles } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper';

const certifications = [
  {
    id: 1,
    title: 'Back-End Web Development',
    program: 'ALX Software Engineering',
    issuer: 'ALX Africa',
    date: 'November 2025',
    duration: '4 Months',
    description: 'Intensive programme covering back-end web development, server-side programming, databases, and API development.',
    skills: ['Python', 'Node.js', 'Databases', 'REST APIs', 'Server Architecture'],
    credential: 'https://savanna.alxafrica.com/certificates/TC9LHZ2psS',
    credentialId: 'TC9LHZ2psS',
    color: 'emerald',
  },
  {
    id: 2,
    title: 'ProDev Frontend',
    program: 'ALX Software Engineering',
    issuer: 'ALX Africa',
    date: 'December 2025',
    duration: '4 Months',
    description: 'Professional frontend development with modern frameworks, responsive design, and industry best practices.',
    skills: ['React.js', 'TypeScript', 'TailwindCSS', 'UI/UX', 'Performance'],
    credential: 'https://savanna.alxafrica.com/certificates/cf3Rz7GNJy',
    credentialId: 'cf3Rz7GNJy',
    color: 'cyan',
  },
  {
    id: 3,
    title: 'Data Analytics',
    program: 'ALX Data Analytics',
    issuer: 'ALX Africa',
    date: 'December 2025',
    duration: '6 Months',
    description: 'Comprehensive programme in Data Analytics with Professional Development Skills for the Digital Age.',
    skills: ['Data Analysis', 'Power BI', 'SQL', 'Python', 'Visualization'],
    credential: 'https://savanna.alxafrica.com/certificates/JcrGYSCZeX',
    credentialId: 'JcrGYSCZeX',
    color: 'purple',
  },
];

const colorClasses = {
  emerald: {
    primary: '#10b981',
    bg: 'bg-emerald-500/10',
    bgSolid: 'bg-emerald-500',
    border: 'border-emerald-500/30',
    borderHover: 'hover:border-emerald-400',
    text: 'text-emerald-400',
    glow: 'shadow-emerald-500/20',
    gradient: 'from-emerald-600 to-emerald-400',
  },
  cyan: {
    primary: '#06b6d4',
    bg: 'bg-cyan-500/10',
    bgSolid: 'bg-cyan-500',
    border: 'border-cyan-500/30',
    borderHover: 'hover:border-cyan-400',
    text: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
    gradient: 'from-cyan-600 to-cyan-400',
  },
  purple: {
    primary: '#a855f7',
    bg: 'bg-purple-500/10',
    bgSolid: 'bg-purple-500',
    border: 'border-purple-500/30',
    borderHover: 'hover:border-purple-400',
    text: 'text-purple-400',
    glow: 'shadow-purple-500/20',
    gradient: 'from-purple-600 to-purple-400',
  },
};

function CertificateModal({ cert, onClose }) {
  if (!cert) return null;
  const colors = colorClasses[cert.color];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate Card Design */}
        <div className="relative bg-[#0a1628] border-2 border-emerald-500/30 rounded-2xl overflow-hidden">
          {/* ALX-style header pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
            <svg viewBox="0 0 400 400" className="absolute -right-20 -top-20 w-[500px] h-[500px] opacity-20">
              <path d="M200 50 L350 200 L200 350 L50 200 Z" fill="none" stroke="#10b981" strokeWidth="3" />
              <path d="M200 80 L320 200 L200 320 L80 200 Z" fill="none" stroke="#10b981" strokeWidth="2" />
              <path d="M200 110 L290 200 L200 290 L110 200 Z" fill="none" stroke="#10b981" strokeWidth="2" />
            </svg>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="relative p-8 md:p-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white font-[Space_Grotesk]">alx</span>
                <span className="text-emerald-400 text-sm">|</span>
                <span className="text-emerald-400 text-sm">{cert.program.includes('Data') ? 'Data Analytics' : 'Software Engineering'}</span>
              </div>
            </div>

            <p className="text-slate-500 text-sm uppercase tracking-wider mb-8">Certificate of Completion</p>

            {/* Title */}
            <div className="mb-6">
              <p className="text-slate-400 mb-2">This is awarded to</p>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 font-[Space_Grotesk] mb-4">
                Yafet Zekariyas
              </h2>
              <div className="w-48 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent" />
            </div>

            {/* Description */}
            <p className="text-slate-300 mb-6 max-w-xl">
              For completing the <span className="font-semibold text-white">{cert.duration}</span> {cert.program} Programme in{' '}
              <span className="font-bold text-white">{cert.title}</span>
            </p>

            {/* Skills */}
            <div className="mb-8">
              <p className="text-slate-500 text-sm mb-3">Skills Acquired:</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-700/50">
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-emerald-400 text-xs mb-1">Date of Issue</p>
                  <p className="text-white font-medium">{cert.date}</p>
                </div>
                <div>
                  <p className="text-emerald-400 text-xs mb-1">Credential ID</p>
                  <p className="text-white font-medium font-mono text-sm">{cert.credentialId}</p>
                </div>
              </div>

              <motion.a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-lg transition-colors"
              >
                <BadgeCheck className="w-5 h-5" />
                Verify Certificate
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CertificateCard({ cert, index, onClick }) {
  const colors = colorClasses[cert.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => onClick(cert)}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border-2 ${colors.border} ${colors.borderHover} bg-gradient-to-br from-slate-900 to-slate-800 transition-all duration-300 hover:shadow-2xl ${colors.glow}`}
    >
      {/* Decorative corner pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 100 100" className="absolute -right-6 -top-6 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke={colors.primary} strokeWidth="2" />
          <path d="M50 25 L75 50 L50 75 L25 50 Z" fill="none" stroke={colors.primary} strokeWidth="1.5" />
        </svg>
      </div>

      {/* Top accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${colors.gradient}`} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Award className={`w-7 h-7 ${colors.text}`} />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 rounded-full">
            <BadgeCheck className={`w-4 h-4 ${colors.text}`} />
            <span className="text-xs text-slate-300 font-medium">Verified</span>
          </div>
        </div>

        {/* Program name */}
        <p className={`text-sm font-medium ${colors.text} mb-1`}>{cert.program}</p>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 font-[Space_Grotesk] group-hover:text-emerald-300 transition-colors">
          {cert.title}
        </h3>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            {cert.issuer}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {cert.date}
          </span>
        </div>

        {/* Duration badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
            {cert.duration}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-2">
          {cert.description}
        </p>

        {/* View button */}
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {cert.skills.slice(0, 3).map((skill, i) => (
              <span
                key={skill}
                className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs font-bold text-slate-300"
                title={skill}
              >
                {skill.charAt(0)}
              </span>
            ))}
            {cert.skills.length > 3 && (
              <span className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-800 flex items-center justify-center text-xs font-medium text-slate-300">
                +{cert.skills.length - 3}
              </span>
            )}
          </div>

          <motion.div
            whileHover={{ x: 5 }}
            className={`flex items-center gap-1 text-sm font-medium ${colors.text} group-hover:underline`}
          >
            View Certificate
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
    </motion.div>
  );
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <SectionWrapper id="certifications" dark>
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="relative">
        <SectionHeader
          label="Credentials"
          title="Professional Certifications"
          description="Industry-recognized certifications from ALX Africa validating my expertise in software engineering and data analytics."
        />

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 mb-12 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/30"
        >
          {[
            { value: '3', label: 'Certifications', icon: Award },
            { value: '14+', label: 'Months Training', icon: Calendar },
            { value: '100%', label: 'Verified', icon: BadgeCheck },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-[Space_Grotesk]">{stat.value}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={index}
              onClick={setSelectedCert}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/30">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-slate-300">
              Click on any certificate to view details and verify credentials
            </span>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
