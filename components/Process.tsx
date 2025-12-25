import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_INDIA, PROCESS_INTERNATIONAL } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="bg-[#0f0f0f] py-32 text-white relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
            >
                <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase block mb-4">Our Methodology</span>
                <h2 className="text-4xl md:text-6xl font-serif font-light">From Concept to Creation</h2>
            </motion.div>
        </div>

        {/* India Process - Horizontal Scroll */}
        <div className="mb-24">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-8">01 / India Turnkey</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {PROCESS_INDIA.map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pt-8 border-t border-white/20 group hover:border-amber-500 transition-colors duration-500"
                    >
                        <span className="absolute -top-3 left-0 bg-[#0f0f0f] pr-2 text-xs text-gray-500 group-hover:text-amber-500 transition-colors">Step 0{item.step}</span>
                        <h4 className="text-xl font-serif mb-3 group-hover:text-amber-500 transition-colors">{item.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* International Process */}
        <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-8">02 / Global Design</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {PROCESS_INTERNATIONAL.map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pt-8 border-t border-white/20 group hover:border-amber-500 transition-colors duration-500"
                    >
                        <span className="absolute -top-3 left-0 bg-[#0f0f0f] pr-2 text-xs text-gray-500 group-hover:text-amber-500 transition-colors">Step 0{item.step}</span>
                        <h4 className="text-xl font-serif mb-3 group-hover:text-amber-500 transition-colors">{item.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Process;