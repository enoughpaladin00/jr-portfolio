import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

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
                className="text-sm font-mono text-zinc-300 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-1"
              >
                <span className="text-emerald-400/70">0{i + 1}.</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Qui potremmo aggiungere un hamburger menu per il mobile in futuro */}
      </div>
    </motion.nav>
  );
}