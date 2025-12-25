import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsappUrl = "https://wa.me/916353097642";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Restored Navigation for Interior Design
  const navLinks = [
    { name: 'Work', href: '#project-gallery' },
    { name: 'Expertise', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Stories', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
    }
  };

  const navClasses = isOpen 
    ? 'bg-transparent border-transparent py-4' 
    : scrolled 
      ? 'bg-black/80 backdrop-blur-md border-white/5 py-4' 
      : 'bg-transparent border-transparent py-8';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-700 ease-[0.22,1,0.36,1] border-b ${navClasses}`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center z-[60] relative">
            <a href="#" className="group relative flex items-center gap-3" onClick={(e) => {
               if(isOpen) setIsOpen(false);
               window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-amber-500 transition-colors duration-500">
                  <span className="font-serif text-xl font-light text-white group-hover:text-amber-500 transition-colors duration-500 pt-0.5">V</span>
              </div>
              <span className="text-xl md:text-2xl font-light tracking-[0.2em] text-white font-serif group-hover:text-amber-500 transition-colors duration-500 block">
                VEDANCO
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-300 hover:text-amber-400 font-light text-xs uppercase tracking-[0.15em] transition-all duration-500 relative group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 ease-out"
            >
              Inquire
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center z-[60] relative">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-amber-500 transition-colors focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#0a0a0a] z-50 flex flex-col items-center justify-center md:hidden h-screen pt-20"
          >
            <div className="space-y-8 text-center">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                          setIsOpen(false);
                          handleScroll(e, link.href);
                      }}
                      className="block text-4xl font-serif font-light text-white hover:text-amber-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                </motion.div>
              ))}
              <motion.div variants={linkVariants}>
                  <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="inline-block mt-8 px-10 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
                  >
                      Start Project
                  </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 left-0 w-full text-center pointer-events-none"
            >
               <span className="text-[15vw] font-serif font-bold text-white leading-none whitespace-nowrap">VEDANCO</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;