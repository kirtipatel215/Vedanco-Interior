import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Services from './components/Services';
import Process from './components/Process';
import Philosophy from './components/Philosophy';
import ProjectGallery from './components/ProjectGallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import Intro from './components/Intro';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Force scroll to top on load for proper Hero animation entry
    window.scrollTo(0, 0);
    
    // Lock scroll during intro
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-amber-900 selection:text-white">
      {loading && <Intro onComplete={() => setLoading(false)} />}
      
      <Navbar />
      <Hero />
      <Showcase />
      <Services />
      <ProjectGallery />
      <Philosophy />
      <Process />
      <Testimonials />
      <Contact />
      <AIAssistant />
    </div>
  );
};

export default App;