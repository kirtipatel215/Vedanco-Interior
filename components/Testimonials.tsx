import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-white text-black overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        
        <div className="mb-20">
             <motion.span 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase block mb-4"
             >
                Feedback
             </motion.span>
             <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.1 }}
                 className="text-5xl font-serif font-light"
             >
                Client Perspectives
             </motion.h2>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-12 snap-x scrollbar-hide">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-[85vw] md:min-w-[40vw] bg-gray-50 p-12 snap-center border border-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-6xl text-amber-200 font-serif mb-6 leading-none">“</div>
              <p className="text-xl md:text-2xl font-serif text-gray-800 leading-relaxed mb-10 min-h-[120px]">
                {item.text}
              </p>
              
              <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-black"></div>
                  <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.location} — {item.role}</p>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;