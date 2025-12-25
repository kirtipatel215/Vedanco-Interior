import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Sequence timing
    const timer1 = setTimeout(() => setStage(1), 800);   // Show Logo & Group Name
    const timer2 = setTimeout(() => setStage(2), 2800);  // Show Tagline
    const timer3 = setTimeout(() => setStage(3), 4500);  // Exit animation starts
    const timer4 = setTimeout(() => onComplete(), 5500); // Unmount

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={stage === 3 ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Background Ambience - Subtle moving light */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px]"
      />

      {/* Main Content Container - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6">
        <AnimatePresence>
          {/* Stage 1: Brand Identity (Logo + Name) */}
          {(stage >= 1 && stage < 3) && (
            <motion.div
              key="brand-identity"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-6"
            >
              {/* Logo */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                 <span className="font-serif text-3xl md:text-4xl font-light text-white pt-1">V</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-[0.1em] font-light text-center">
                VEDANCO GROUP
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 2: Tagline */}
        {/* We place it in a container that allows the flex parent to adjust height naturally */}
        <AnimatePresence>
            {stage === 2 && (
                <motion.div
                    key="tagline"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.8 }}
                    className="overflow-hidden"
                >
                    <p className="text-gray-400 text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.3em] font-light text-center whitespace-nowrap">
                        Empowering Businesses Across Industries
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Intro;