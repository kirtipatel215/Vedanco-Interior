
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../assets';

const Showcase: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1,
        ease: ease
      } 
    }
  };

  return (
    <section id="showcase" className="bg-[#0a0a0a] py-32 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            {/* Left: Images Collage */}
            <div className="relative">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10 w-[80%] aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700"
                >
                    <img 
                        src={ASSETS.showcase.main}
                        alt="Interior" 
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div 
                    style={{ y }}
                    className="absolute top-1/2 right-0 w-[50%] aspect-square z-20 border-[8px] border-[#0a0a0a]"
                >
                    <img 
                        src={ASSETS.showcase.detail}
                        alt="Detail" 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Badge */}
                    <div className="absolute -bottom-10 -right-10 bg-amber-500 p-8 text-white">
                        <span className="block text-4xl font-bold font-serif">12+</span>
                        <span className="block text-xs uppercase tracking-widest mt-1">Years Exp.</span>
                    </div>
                </motion.div>
            </div>

            {/* Right: Text Content */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
            >
                <motion.span variants={textVariants} className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase block mb-6">Who We Are</motion.span>
                <motion.h2 variants={textVariants} className="text-5xl md:text-7xl font-serif text-white font-light leading-[1.1] mb-8">
                    Crafting <br />
                    <span className="italic text-gray-500">Living Art.</span>
                </motion.h2>
                <motion.div variants={textVariants} className="h-[1px] w-24 bg-white/20 mb-8"></motion.div>
                <motion.p variants={textVariants} className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                    VEDANCO stands at the intersection of Indian craftsmanship and global design sensibilities. We don't just fill empty rooms; we curate experiences that resonate with the people who inhabit them.
                </motion.p>
                <motion.div variants={textVariants} className="grid grid-cols-2 gap-8 text-white">
                    <div>
                        <h4 className="font-serif text-xl mb-2">Turnkey Solutions</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Design to Handover</p>
                    </div>
                    <div>
                        <h4 className="font-serif text-xl mb-2">Global Design</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Remote Excellence</p>
                    </div>
                </motion.div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Showcase;
