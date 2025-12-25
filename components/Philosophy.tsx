import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  const whatsappUrl = "https://wa.me/916353097642";

  return (
    <section id="philosophy" className="bg-[#0a0a0a] py-32 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            
            {/* Title Block */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase block mb-6">Why Vedanco</span>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                    Beyond Aesthetics, <br/>
                    <span className="italic text-gray-500">We Design Living.</span>
                </h2>
                <div className="h-[1px] w-24 bg-white/20 my-10"></div>
                
                <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                    We believe that luxury isn't just about expensive materials—it's about the seamless integration of form, function, and feeling. Whether it's a turnkey project in Mumbai or a digital concept for London, our approach remains rooted in precision and soul.
                </p>
            </motion.div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { title: "Detail Oriented", desc: "Every millimeter matters. We obsess over the details so you don't have to." },
                    { title: "Global Standard", desc: "Bringing international design trends and quality to local execution." },
                    { title: "Transparent", desc: "No hidden costs. Clear BOQs and honest communication from day one." },
                    { title: "Timeless", desc: "Creating spaces that outlast trends and age gracefully with you." }
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.8 }}
                        className="bg-white/5 p-8 border border-white/5 hover:border-amber-500/30 transition-colors duration-500 group"
                    >
                        <div className="w-2 h-2 bg-amber-500 mb-6 group-hover:scale-150 transition-transform"></div>
                        <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

        </div>

        {/* Closing Statement */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-24 text-center border-t border-white/10 pt-16"
        >
             <a 
                href={whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 ease-out"
            >
                Request Proposal
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Philosophy;