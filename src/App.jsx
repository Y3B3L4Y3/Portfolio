import { useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';

// Lazy load sections for better performance
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Certifications = lazy(() => import('./sections/Certifications'));
const Learning = lazy(() => import('./sections/Learning'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-10 h-10 border-3 border-indigo-500/30 border-t-indigo-500 rounded-full"
      />
    </div>
  );
}

// Section loading fallback
function SectionLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-slate-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 mx-auto mb-4 border-3 border-indigo-500/30 border-t-indigo-500 rounded-full"
        />
        <p className="text-slate-500 text-sm">Loading...</p>
      </motion.div>
    </div>
  );
}

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Preload critical sections after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      // Preload About section after hero is visible
      import('./sections/About');
      import('./sections/Skills');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-slate-900 text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main>
        {/* Hero loads immediately for best LCP */}
        <Hero />
        
        {/* Lazy loaded sections with suspense */}
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Certifications />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Learning />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
