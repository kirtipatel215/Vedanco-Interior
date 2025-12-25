import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/916353097642";
  const instagramUrl = "https://www.instagram.com/vedanco_official?igsh=eXAwcXZuY2l5dDgz";
  const linkedinUrl = "https://www.linkedin.com/company/vedanco/";

  return (
    <section id="contact" className="bg-black pt-40 pb-12 text-white relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-10">
         <h1 className="text-[20vw] font-serif leading-none text-white whitespace-nowrap">VEDANCO</h1>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 border-b border-white/10 pb-24">
            
            {/* CTA Section */}
            <div className="lg:col-span-7">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-9xl font-serif font-light leading-[0.9] mb-12"
                >
                    Let's Build <br/> <span className="text-amber-500">The Future.</span>
                </motion.h2>
                
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-xl uppercase tracking-widest hover:text-amber-500 transition-colors group"
                >
                    Start a Project
                    <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-black transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </a>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-8">
                <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">Navigation</h4>
                    <ul className="space-y-4 text-lg font-light">
                        <li><a href="#services" className="hover:text-amber-500 transition-colors">Expertise</a></li>
                        <li><a href="#showcase" className="hover:text-amber-500 transition-colors">Who We Are</a></li>
                        <li><a href="#project-gallery" className="hover:text-amber-500 transition-colors">Selected Work</a></li>
                        <li><a href="#philosophy" className="hover:text-amber-500 transition-colors">Philosophy</a></li>
                        <li><a href="#testimonials" className="hover:text-amber-500 transition-colors">Stories</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">Connect</h4>
                    <ul className="space-y-4 text-lg font-light">
                        <li><a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">Instagram</a></li>
                        <li><a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">LinkedIn</a></li>
                        <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">WhatsApp</a></li>
                    </ul>
                </div>
                <div className="col-span-2 mt-8">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">India Office</h4>
                    <p className="text-gray-300 font-light leading-relaxed">
                        InfoCity Super Mall 1, Office No. 421M<br/>
                        Gandhinagar, Gujarat – India
                    </p>
                    <p className="text-gray-400 font-light mt-4 text-sm">
                        +91 6353 097 642
                    </p>
                </div>
            </div>

        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                  <span className="font-serif text-sm font-light text-white pt-0.5">V</span>
                </div>
                <p>&copy; 2025 VEDANCO Interior Architecture. All Rights Reserved.</p>
            </div>
           
        </div>

      </div>
    </section>
  );
};

export default Contact;