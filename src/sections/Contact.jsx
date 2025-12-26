import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, Github, ArrowUpRight, Check, AlertCircle, Loader2, Sparkles, MessageSquare } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Y3B3L4Y3', color: 'hover:text-white hover:border-white/30 hover:bg-white/5' },
  { name: 'Email', icon: Mail, href: 'mailto:yafetzekarias23@gmail.com', color: 'hover:text-indigo-400 hover:border-indigo-400/30 hover:bg-indigo-500/10' },
];

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

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('loading');

    setTimeout(() => {
      const mailtoLink = `mailto:yafetzekarias23@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const inputClasses = (fieldName) =>
    `w-full px-5 py-4 bg-slate-800/30 backdrop-blur-sm border rounded-2xl text-white placeholder-slate-500 focus:outline-none transition-all duration-300 ${
      errors[fieldName]
        ? 'border-red-500/50 focus:border-red-500'
        : focusedField === fieldName
        ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/10'
        : 'border-slate-700/50 hover:border-slate-600/50'
    }`;

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div className="space-y-5">
        {/* Name field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            placeholder="Your name"
            className={inputClasses('name')}
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-400 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.name}
            </motion.p>
          )}
        </motion.div>

        {/* Email field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            placeholder="your@email.com"
            className={inputClasses('email')}
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-400 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </motion.p>
          )}
        </motion.div>

        {/* Message field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            placeholder="Tell me about your project..."
            rows={5}
            className={`${inputClasses('message')} resize-none`}
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-400 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.message}
            </motion.p>
          )}
        </motion.div>

        {/* Submit button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
            whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
            className={`relative w-full py-4 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden ${
              status === 'success'
                ? 'bg-green-600 text-white'
                : status === 'loading'
                ? 'bg-indigo-600/70 text-white/70 cursor-wait'
                : 'text-white'
            }`}
          >
            {/* Animated gradient background */}
            {status !== 'success' && status !== 'loading' && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%]"
                animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            )}
            <span className="relative flex items-center gap-2">
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <Check className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.form>
  );
}

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="contact" dark>
      {/* Animated decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[150px]"
      />

      <div className="relative" ref={containerRef}>
        {/* Main CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20"
          >
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Space_Grotesk] text-white mb-6"
          >
            Let's Work{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            I'm currently available for freelance work and exciting opportunities.
            Have a project in mind? Let's bring your ideas to life!
          </motion.p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Form container with glow */}
            <div className="relative p-8 bg-slate-800/20 backdrop-blur-xl rounded-3xl border border-slate-700/50">
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl"
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-[Space_Grotesk]">
                    Send a Message
                  </h3>
                </div>
                <ContactForm />
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Info & Social */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl font-semibold text-white mb-6 font-[Space_Grotesk] flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              Contact Information
            </motion.h3>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              <motion.a
                href="mailto:yafetzekarias23@gmail.com"
                variants={itemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                className="group flex items-center gap-4 p-5 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/40 transition-all cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all"
                >
                  <Mail className="w-6 h-6 text-indigo-400" />
                </motion.div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Email</p>
                  <p className="text-slate-300 group-hover:text-indigo-300 transition-colors font-medium">
                    yafetzekarias23@gmail.com
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 ml-auto opacity-0 group-hover:opacity-100 transition-all" />
              </motion.a>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-5 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Location</p>
                  <p className="text-slate-300 font-medium">Ethiopia / Remote Worldwide</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-5 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500" />
                  </span>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Status</p>
                  <p className="text-emerald-400 font-semibold">Available for Opportunities</p>
                </div>
              </motion.div>
            </div>

            {/* Social links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                Connect With Me
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.icon === Github ? '_blank' : undefined}
                    rel={social.icon === Github ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group flex items-center gap-3 px-5 py-3 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 text-slate-400 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-sm font-semibold">{social.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick response note */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20"
            >
              <p className="text-sm text-indigo-300 flex items-start gap-2">
                <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  I typically respond within 24 hours. Looking forward to hearing about your project!
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
