import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_INDIA, SERVICES_INTERNATIONAL } from '../constants';
import { Region } from '../types';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<Region>(Region.INDIA);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  
  const activeServices = activeRegion === Region.INDIA ? SERVICES_INDIA : SERVICES_INTERNATIONAL;

  // CRITICAL FIX: Reset hovered index when region changes to avoid index out of bounds error
  useEffect(() => {
    setHoveredIndex(0);
  }, [activeRegion]);

  // Safe accessor to prevent undefined error during state transition
  const currentService = activeServices[hoveredIndex] || activeServices[0];
  const currentImage = currentService?.image || "";

  return (
    <section id="services" className="bg-[#050505] py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background Image - Antra Style */}
      <div className="absolute inset-0 z-0">
         <AnimatePresence mode='wait'>
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${currentImage})` }}
            />
         </AnimatePresence>
         <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-0"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Panel: Content List */}
            <div className="lg:col-span-7">
                <div className="mb-16">
                     <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase block mb-4">Our Expertise</span>
                     <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
                        {activeRegion === Region.INDIA ? 'Turnkey Execution' : 'Design Services'}
                     </h2>
                     
                     {/* Region Toggle */}
                     <div className="flex gap-6">
                        <button 
                            onClick={() => setActiveRegion(Region.INDIA)}
                            className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 pb-2 border-b ${activeRegion === Region.INDIA ? 'text-white border-amber-500' : 'text-gray-600 border-transparent hover:text-white'}`}
                        >
                            India
                        </button>
                        <button 
                            onClick={() => setActiveRegion(Region.INTERNATIONAL)}
                            className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 pb-2 border-b ${activeRegion === Region.INTERNATIONAL ? 'text-white border-amber-500' : 'text-gray-600 border-transparent hover:text-white'}`}
                        >
                            International
                        </button>
                     </div>
                </div>

                <div className="space-y-0">
                    {activeServices.map((service, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`group relative border-t border-white/10 py-10 cursor-pointer transition-all duration-500 ${hoveredIndex === index ? 'pl-8' : 'pl-0'}`}
                        >
                            {/* Hover Indicator */}
                            {hoveredIndex === index && (
                                <motion.div 
                                    layoutId="active-indicator"
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-amber-500"
                                />
                            )}
                            
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-6">
                                    <span className={`text-sm font-light tracking-widest transition-colors duration-300 ${hoveredIndex === index ? 'text-amber-500' : 'text-gray-600'}`}>
                                        0{index + 1}
                                    </span>
                                    <h3 className={`text-2xl md:text-3xl font-serif transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-gray-400'}`}>
                                        {service.title}
                                    </h3>
                                </div>
                                <ArrowUpRight className={`w-6 h-6 transition-all duration-300 ${hoveredIndex === index ? 'text-amber-500 opacity-100 rotate-45' : 'text-gray-600 opacity-0'}`} />
                            </div>
                            
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.p 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="text-gray-400 font-light mt-4 ml-12 text-sm max-w-md overflow-hidden"
                                    >
                                        {service.description}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                    <div className="border-t border-white/10"></div>
                </div>
            </div>

            {/* Right Panel: Sticky Image (Desktop) */}
            <div className="hidden lg:block lg:col-span-5 relative">
                <div className="sticky top-32 w-full aspect-[3/4]">
                     <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full relative overflow-hidden"
                        >
                             <div className="absolute inset-0 border border-white/10 z-20"></div>
                             {currentImage && (
                               <img 
                                  src={currentImage}
                                  alt="Service Preview"
                                  className="w-full h-full object-cover"
                               />
                             )}
                             {/* Decorative Frame */}
                             <div className="absolute -bottom-4 -right-4 w-full h-full border border-amber-500/30 z-0"></div>
                        </motion.div>
                     </AnimatePresence>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Services;