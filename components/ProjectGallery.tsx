
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../assets';

const PROJECTS = [
  {
    title: "The Oberoi Villa",
    location: "Mumbai",
    category: "Residential",
    image: ASSETS.projects[0].image
  },
  {
    title: "Skyline Penthouse",
    location: "Dubai",
    category: "Luxury",
    image: ASSETS.projects[1].image
  },
  {
    title: "Azure Workspace",
    location: "Bangalore",
    category: "Commercial",
    image: ASSETS.projects[2].image
  },
  {
    title: "Minimalist Loft",
    location: "London",
    category: "Apartment",
    image: ASSETS.projects[3].image
  },
  {
    title: "Zen Garden Home",
    location: "Kyoto",
    category: "Landscape",
    image: ASSETS.projects[4].image
  }
];

const ProjectGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textX = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section 
      id="project-gallery" 
      ref={containerRef} 
      className="bg-[#050505] py-40 relative overflow-hidden"
    >
      
      {/* Moving Background Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 select-none pointer-events-none">
        <motion.div style={{ x: textX }} className="whitespace-nowrap opacity-[0.03]">
            <span className="text-[20vw] font-serif font-bold text-white leading-none">
                SELECTED WORKS 
            </span>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 mb-16 flex items-end justify-between">
         <div>
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase block mb-4">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Featured Projects</h2>
         </div>
         <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500">
             Drag to Explore <div className="w-12 h-[1px] bg-gray-700"></div>
         </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="w-full overflow-x-auto scrollbar-hide pb-12 cursor-grab active:cursor-grabbing pl-6 lg:pl-12">
        <div className="flex gap-12 w-max pr-12">
            {PROJECTS.map((project, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="relative group w-[80vw] md:w-[500px]"
                >
                    <div className="aspect-[4/5] overflow-hidden bg-gray-900 mb-6 relative">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-serif text-white mb-1">{project.title}</h3>
                            <p className="text-gray-500 text-xs uppercase tracking-widest">{project.location}</p>
                        </div>
                        <span className="text-amber-500 text-xs uppercase border border-amber-500/30 px-3 py-1 rounded-full">{project.category}</span>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
