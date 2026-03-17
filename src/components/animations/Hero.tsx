import { motion, type Variants } from 'framer-motion';

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-start justify-center min-h-[70vh]"
    >
      <motion.p variants={item} className="text-emerald-400 font-mono mb-4">
        Ciao, il mio nome è
      </motion.p>
      
      <motion.h1 variants={item} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-zinc-50">
        Jacopo Rossi.
      </motion.h1>
      
      <motion.h2 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-400 mb-8 tracking-tight">
        Costruisco architetture sicure e intelligenti.
      </motion.h2>
      
      <motion.p variants={item} className="text-lg text-zinc-400 max-w-2xl mb-12 leading-relaxed">
        Sono un Ingegnere Informatico specializzando in <strong className="text-zinc-200">Artificial Intelligence & Cybersecurity</strong>. 
        Amo risolvere problemi complessi sotto pressione, sviluppare applicazioni Full-Stack scalabili e sperimentare con la crittografia.
      </motion.p>
      
      <motion.div variants={item} className="flex gap-4">
        <a href="#progetti" className="inline-block px-6 py-3 bg-emerald-400/10 border border-emerald-400 text-emerald-400 font-mono rounded hover:bg-emerald-400 hover:text-zinc-950 transition-colors duration-300">
          Scopri i miei progetti
        </a>
        <a href="#about" className="inline-block px-6 py-3 border border-zinc-700 text-zinc-300 font-mono rounded hover:border-zinc-500 hover:text-zinc-50 transition-colors duration-300 hidden sm:block">
          Leggi la mia bio
        </a>
      </motion.div>
    </motion.section>
  );
}