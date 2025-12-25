import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { handleScroll } from './Navbar';
import { ASSETS } from '../assets';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
        videoElement.muted = true;
        videoElement.defaultMuted = true;
        videoElement.playsInline = true;
        
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                setIsVideoPlaying(true);
            }).catch(error => {
                console.log("Autoplay blocked, falling back to static image.");
            });
        }
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Media Container */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-20" />
        
        {/* Static Fallback */}
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isVideoPlaying ? 0 : 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-10 bg-black"
        >
            <img 
                src={ASSETS.hero.poster} 
                alt="Architecture" 
                className="w-full h-full object-cover" 
            />
        </motion.div>

        {/* Video Player */}
        <video 
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          onPlaying={() => setIsVideoPlaying(true)}
          className="w-full h-full object-cover pointer-events-none"
        >
          <source src={ASSETS.hero.video} type="video/mp4" />
        </video>
      </motion.div>

      <div className="relative z-30 w-full max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* Main Typography */}
            <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <motion.div 
                            initial={{ scaleX: 0, originX: 0 }} 
                            animate={{ scaleX: 1 }} 
                            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="h-[1px] w-12 bg-amber-500"
                        ></motion.div>
                        <h2 className="text-amber-500 text-sm md:text-base font-medium tracking-[0.4em] uppercase">
                            Luxury Interior Architecture
                        </h2>
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-light text-white leading-[0.85] tracking-tighter mix-blend-difference">
                        VEDANCO
                    </h1>
                </motion.div>
            </div>

            {/* Description & CTAs */}
            <div className="lg:col-span-4 lg:mb-4">
                 <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-8"
                >
                    <p className="text-gray-300 font-light text-lg leading-relaxed border-l border-amber-500/50 pl-6 backdrop-blur-sm">
                        Crafting bespoke environments that blend Indian artistry with international design precision.
                    </p>
                    
                    <div className="flex gap-8 pl-6">
                         <a 
                           href="#project-gallery" 
                           onClick={(e) => handleScroll(e, '#project-gallery')}
                           className="text-white uppercase text-xs tracking-[0.2em] border-b border-white/30 pb-1 hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
                         >
                             View Portfolio
                         </a>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <ArrowDown className="text-white/50 w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;