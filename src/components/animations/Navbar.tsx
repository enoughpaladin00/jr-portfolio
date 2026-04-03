import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Progetti', href: '#progetti' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 shadow-sm"
    >
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo in stile terminale */}
        <a href="#" className="text-emerald-400 font-mono text-xl font-bold tracking-tighter hover:text-emerald-300 transition-colors">
          &lt;Dev/&gt;
        </a>
        
        {/* Link di navigazione (nascosti su mobile per ora, visibili su md+) */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-mono text-zinc-300 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-1"
              >
                <span className="text-emerald-400/70">0{i + 1}.</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon (visibile su mobile) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-zinc-300 hover:text-emerald-400 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/50 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-lg font-mono text-zinc-300 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-emerald-400/70">0{i + 1}.</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}