import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  link: string;
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const visibleProjects = projects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section id="progetti" className="py-24 border-t border-zinc-800/50 relative">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4 flex items-center">
          <span className="text-emerald-400 font-mono text-2xl mr-3">02.</span>
          Progetti GitHub
        </h2>
        <div className="w-24 h-1 bg-emerald-400/30 rounded-full"></div>
      </div>

      {projects.length === 0 ? (
        <p className="text-zinc-400 font-mono">Nessun progetto trovato o caricamento in corso...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  layout
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-400/50 transition-colors duration-300"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                      </div>
                      
                      <div className="flex gap-4 text-zinc-400">
                        <button 
                          onClick={() => setSelectedProject(project)} 
                          className="hover:text-emerald-400 transition-colors cursor-pointer" 
                          aria-label="Vedi Dettagli"
                          title="Apri panoramica"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        </button>

                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="GitHub" title="Vedi su GitHub">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        </a>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors duration-300 capitalize">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-zinc-400 mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <li key={i} className="text-xs font-mono text-emerald-400/80 bg-emerald-400/10 px-2 py-1 rounded">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {visibleCount < projects.length && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 flex justify-center"
            >
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 border border-zinc-700 text-zinc-300 font-mono text-sm rounded hover:border-emerald-400 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2"
              >
                Carica altri progetti
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            </motion.div>
          )}
        </>
      )}

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md cursor-pointer"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-zinc-50 capitalize pr-8">
                  {selectedProject.title}
                </h3>
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="absolute top-6 right-6 text-zinc-500 hover:text-emerald-400 transition-colors bg-zinc-800/50 p-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="prose prose-invert max-w-none">
                <h4 className="text-emerald-400 font-mono text-sm mb-3 uppercase tracking-wider">Panoramica</h4>
                <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <h4 className="text-emerald-400 font-mono text-sm mb-3 uppercase tracking-wider">Stack Tecnologico</h4>
                <ul className="flex flex-wrap gap-2 list-none p-0 m-0 mb-10">
                  {selectedProject.tech.map((tech, i) => (
                    <li key={i} className="text-sm font-mono text-emerald-400 border border-emerald-400/30 bg-emerald-400/5 px-3 py-1.5 rounded-md">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-6 border-t border-zinc-800/50">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-950 rounded-lg transition-colors font-semibold text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  Repository Completa
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}