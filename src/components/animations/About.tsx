import { motion, type Variants } from 'framer-motion';

export default function About() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const skills = [
    "C / C++", "Python", "Java", "Ruby on Rails", 
    "TypeScript / React", "Astro", "Tailwind CSS",
    "Cybersecurity", "Applied Cryptography", 
    "Machine Learning", "Artificial Intelligence", "Docker"
  ];

  return (
    <section id="about" className="py-24 border-t border-zinc-800/50">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4 flex items-center">
          <span className="text-emerald-400 font-mono text-2xl mr-3">01.</span>
          About Me
        </h2>
        <div className="w-24 h-1 bg-emerald-400/30 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Colonna di sinistra: Bio */}
        <motion.div 
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-zinc-400 text-lg leading-relaxed space-y-6"
        >
          <p>
            Sono un Ingegnere Informatico mosso da una curiosità instancabile per l'innovazione. Attualmente frequento la Magistrale in <strong className="text-zinc-200">Computer Science and Artificial Intelligence</strong> alla Sapienza, focalizzandomi sull'intersezione tra AI e Sicurezza Informatica.
          </p>
          <p>
            Il mio approccio alla tecnologia è orientato alle sfide pratiche: essere arrivato <strong className="text-emerald-400 font-mono text-base">finalista alla CyberX Mind4Future</strong> (con Cyber 4.0 e Leonardo) ha consolidato la mia vocazione per la risoluzione di problemi complessi sotto pressione e la crittografia.
          </p>
          <p>
            Ma non vivo di solo codice. Anni nel calcio dilettantistico, spesso con la fascia da capitano al braccio, mi hanno insegnato a <strong className="text-zinc-200">guidare un team e gestire lo stress</strong>. Inoltre, la mia grande passione per il cinema mi ha portato a curare la fotografia e il montaggio di un cortometraggio indipendente, allenando la mia precisione tecnica e visione d'insieme.
          </p>
          <p>
            Sono un programmatore versatile, sempre pronto a imparare nuove tecnologie (dallo sviluppo Full-Stack al Web 3.0) e a portare energia positiva all'interno del gruppo.
          </p>
        </motion.div>

        {/* Colonna di destra: Timeline / Skills */}
        <motion.div 
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          {/* Percorso */}
          <div>
            <h3 className="text-xl font-bold text-zinc-100 mb-6 font-mono">&gt; Formazione ed Esperienze</h3>
            <div className="border-l-2 border-zinc-800 pl-6 space-y-8 relative">
              
              {/* Magistrale */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-emerald-400 rounded-full ring-4 ring-zinc-950"></div>
                <h4 className="text-zinc-100 font-bold text-lg">MSc in AI & Computer Science</h4>
                <p className="text-sm text-zinc-400 font-mono mb-2">Sapienza Università di Roma • 2025 - 2027</p>
                <p className="text-sm text-zinc-500">
                  Focus su Cybersecurity, Crittografia Avanzata, Machine Learning (modelli predittivi, MDP), Situation Calculus e Dependable Distributed Systems.
                </p>
              </div>

              {/* CyberX */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-zinc-700 rounded-full ring-4 ring-zinc-950"></div>
                <h4 className="text-zinc-100 font-bold text-lg">Finalista CyberX Mind4Future</h4>
                <p className="text-sm text-zinc-400 font-mono mb-2">Cyber 4.0 & Leonardo</p>
                <p className="text-sm text-zinc-500">
                  Competizione avanzata di problem solving e sicurezza informatica.
                </p>
              </div>

              {/* Triennale */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-zinc-700 rounded-full ring-4 ring-zinc-950"></div>
                <h4 className="text-zinc-100 font-bold text-lg">Laurea Triennale in Ingegneria Informatica</h4>
                <p className="text-sm text-zinc-400 font-mono mb-2">Sapienza Università di Roma • 2021 - 2025 (Voto: 98)</p>
                <p className="text-sm text-zinc-500">
                  Tesi: Progettazione e sviluppo di <em>Guardaloo</em>, una Web App Full-Stack (Ruby on Rails) dedicata al settore cinematografico.
                </p>
              </div>

            </div>
          </div>

          {/* Competenze */}
          <div>
            <h3 className="text-xl font-bold text-zinc-100 mb-4 font-mono">&gt; Stack & Tecnologie</h3>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <li 
                  key={i} 
                  className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-zinc-300 hover:border-emerald-400/50 hover:text-emerald-400 transition-colors cursor-default shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}