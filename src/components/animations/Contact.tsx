import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section 
      id="contatti" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-32 flex flex-col items-center justify-center text-center"
    >
      <p className="text-emerald-400 font-mono mb-4">03. Qual è il prossimo passo?</p>
      
      <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-6 tracking-tight">
        Mettiamoci in contatto
      </h2>
      
      <p className="text-zinc-400 max-w-lg mb-10 text-lg">
        Attualmente sono alla ricerca di nuove opportunità per mettermi alla prova. 
        Che tu abbia una domanda, una proposta di collaborazione o voglia semplicemente dire ciao, 
        la mia inbox è sempre aperta!
      </p>
      
      <a 
        href="mailto:rossijacopo002@gmail.com" 
        className="px-8 py-4 bg-transparent border border-emerald-400 text-emerald-400 font-mono rounded hover:bg-emerald-400 hover:text-zinc-950 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_0_0_rgba(16,185,129,0)] hover:shadow-[0_0_20px_0_rgba(16,185,129,0.3)]"
      >
        Scrivimi un'email
      </a>
    </motion.section>
  );
}