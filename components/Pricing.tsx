import React from 'react';
import { PRICING_INDIA, PRICING_INTERNATIONAL } from '../constants';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="pricing" className="py-32 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-24">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl font-serif font-light text-white mb-6"
            >
                Investment
            </motion.h2>
            <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[1px] bg-amber-500 mx-auto"
            ></motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            
            {/* India Pricing */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <h3 className="text-2xl font-serif text-amber-500 mb-12 text-center italic">India Execution</h3>
                <div className="bg-black/20 p-8 rounded-xl border border-white/5 backdrop-blur-sm space-y-8">
                    {PRICING_INDIA.map((tier, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="group relative">
                            <div className="flex justify-between items-baseline mb-2 relative z-10">
                                <h4 className="text-lg font-light tracking-wide pr-4 group-hover:text-amber-100 transition-colors duration-300">{tier.service}</h4>
                                <div className="flex-1 border-b border-white/10 group-hover:border-amber-500/30 transition-colors duration-300 mx-2"></div>
                                <span className="text-lg font-serif pl-4 text-amber-500">{tier.price}</span>
                            </div>
                            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                {tier.features.join(" • ")}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* International Pricing */}
            <motion.div 
                 variants={containerVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-100px" }}
            >
                <h3 className="text-2xl font-serif text-amber-500 mb-12 text-center italic">International Design</h3>
                <div className="bg-black/20 p-8 rounded-xl border border-white/5 backdrop-blur-sm space-y-8">
                    {PRICING_INTERNATIONAL.map((tier, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="group relative">
                            <div className="flex justify-between items-baseline mb-2 relative z-10">
                                <h4 className="text-lg font-light tracking-wide pr-4 group-hover:text-amber-100 transition-colors duration-300">{tier.service}</h4>
                                <div className="flex-1 border-b border-white/10 group-hover:border-amber-500/30 transition-colors duration-300 mx-2"></div>
                                <span className="text-lg font-serif pl-4 text-amber-500">{tier.price}</span>
                            </div>
                            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                {tier.features.join(" • ")}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-24 text-center"
        >
             <a href="#contact" className="inline-block px-12 py-4 border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 ease-out">
                Request Proposal
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;