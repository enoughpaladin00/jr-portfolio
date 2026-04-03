import { motion, type Variants } from 'framer-motion';

export default function ShortFilm() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="cortometraggio" className="py-24 border-t border-zinc-800/50">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4 flex items-center">
          <span className="text-emerald-400 font-mono text-2xl mr-3">03.</span>
          Cortometraggio
        </h2>
        <div className="w-24 h-1 bg-emerald-400/30 rounded-full"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center max-w-4xl mx-auto"
      >
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
          <iframe 
            src="https://www.youtube.com/embed/PwGMcgh1_QA?si=R8gQbUggxznyazhV" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <p className="mt-8 text-zinc-400 text-center text-lg leading-relaxed max-w-2xl">
          Il cortometraggio indipendente di cui ho curato la fotografia e il montaggio, 
          un'esperienza che mi ha permesso di unire creatività e precisione tecnica.
        </p>
      </motion.div>
    </section>
  );
}
