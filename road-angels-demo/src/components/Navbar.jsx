import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, ShieldAlert, Menu, X } from "lucide-react";

export default function Navbar({ setPage, currentPage, isLoggedIn }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when navigating
  const handleNavigate = (id) => {
    setPage(id);
    setIsMobileMenuOpen(false);
  };

  const links = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Membership', id: 'membership' },
    { label: 'Contact Us', id: 'contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 w-full z-[100] px-6 md:px-20 py-6 flex justify-between items-center transition-all duration-500 border-b ${
          scrolled || isMobileMenuOpen
            ? "bg-black/95 backdrop-blur-2xl border-white/10 py-4" 
            : "bg-transparent border-transparent"
        }`}
      >
        {/* LOGO SECTION */}
        <div 
          className="flex items-center gap-4 cursor-pointer group z-[110]"
          onClick={() => handleNavigate('home')}
        >
          <div className="relative">
            <img 
              src="/Logo.png" 
              alt="Road Angels RSA Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-[var(--color-halo-silver)]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="flex flex-col">
            <div className="text-[14px] md:text-[16px] tracking-[0.25em] font-black italic text-white leading-none">
              ROAD <span className="text-[var(--color-halo-silver)]">ANGELS</span>
            </div>
            <div className="text-[8px] md:text-[9px] tracking-[0.5em] font-bold text-gray-500 uppercase mt-1">
              RSA Engineering
            </div>
          </div>
        </div>

        {/* DESKTOP CENTER LINKS */}
        <div className="hidden lg:flex gap-10 text-[12px] uppercase tracking-[0.3em] font-bold">
          {links.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className={`relative transition-colors duration-300 ${
                currentPage === link.id ? 'text-[var(--color-halo-silver)]' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              {currentPage === link.id && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[var(--color-halo-silver)]"
                />
              )}
            </button>
          ))}
        </div>

        {/* RIGHT ACTIONS & HAMBURGER */}
        <div className="flex items-center gap-4 md:gap-8 z-[110]">
          <button 
            onClick={() => handleNavigate(isLoggedIn ? 'user-dashboard' : 'auth')} 
            className={`flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-widest font-black transition-all ${
              currentPage === 'auth' || currentPage === 'user-dashboard' ? 'text-[var(--color-halo-silver)]' : 'text-gray-400 hover:text-white'
            }`}
          >
            <User size={14} className={currentPage === 'auth' ? 'text-[var(--color-halo-silver)]' : 'text-gray-500'} /> 
            <span className="hidden xs:inline">{isLoggedIn ? 'Member Active' : 'Portal'}</span>
          </button>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button 
            onClick={() => handleNavigate('contact')}
            className="hidden md:flex items-center gap-2 border border-[var(--color-halo-silver)]/30 text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-3 hover:bg-[var(--color-halo-silver)] hover:text-black transition-all group overflow-hidden relative"
          >
            <ShieldAlert size={14} className="text-[var(--color-halo-silver)] group-hover:text-black transition-colors z-10" />
            <span className="z-10">Emergency RSA</span>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-[#050505] pt-32 px-10 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] mb-4">Navigation Menu</p>
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className={`text-3xl font-black italic uppercase tracking-tighter text-left transition-all ${
                    currentPage === link.id ? 'text-[var(--color-halo-silver)] italic' : 'text-white/40'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-auto pb-12 space-y-4">
              <button 
                onClick={() => handleNavigate('contact')}
                className="w-full py-5 bg-[var(--color-halo-silver)] text-black font-black uppercase text-[12px] tracking-widest italic"
              >
                Emergency Dispatch
              </button>
              <p className="text-[8px] text-gray-800 uppercase tracking-[0.4em] text-center">
                Authorized Personnel Only // RSA v2.0
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}