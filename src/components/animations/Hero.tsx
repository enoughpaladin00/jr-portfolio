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
      className="flex flex-col items-start justify-center min-h-[60vh]"
    >
      <motion.p variants={item} className="text-emerald-400 font-mono mb-4">
        Ciao, il mio nome è
      </motion.p>
      
      <motion.h1 variants={item} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
        Jacopo Rossi.
      </motion.h1>
      
      <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold text-zinc-400 mb-8">
        Costruisco cose per il web.
      </motion.h2>
      
      <motion.p variants={item} className="text-lg text-zinc-400 max-w-2xl mb-12">
        Sono uno studente e un ingegnere informatico appassionato di architetture scalabili, codice pulito e interfacce dinamiche. 
        Attualmente sto esplorando l'ecosistema moderno del web development.
      </motion.p>
      
      <motion.div variants={item}>
        <a href="#progetti" className="inline-block px-6 py-3 border border-emerald-400 text-emerald-400 font-mono rounded hover:bg-emerald-400 hover:text-zinc-950 transition-colors duration-300">
          Guarda i miei lavori
        </a>
      </motion.div>
    </motion.section>
  );
}