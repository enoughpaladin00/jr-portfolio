export type Lang = 'it' | 'en';

export const languages: Record<Lang, string> = { it: 'Italiano', en: 'English' };

/** Path of the home page in each language (IT is the default, served at /). */
export const homePath: Record<Lang, string> = { it: '/', en: '/en/' };

export const links = {
  email: 'rossijacopo002@gmail.com',
  github: 'https://github.com/enoughpaladin00',
  linkedin: 'https://www.linkedin.com/in/jacopo-rossi-software-engineer/',
  htb: 'https://profile.hackthebox.com/profile/019cfd80-7483-71e0-b0ad-f776c5b6b2fd',
  netinfect: 'https://github.com/enoughpaladin00/NetInfect',
  cv: '/cv/Jacopo-Rossi-CV.pdf',
};

interface Project {
  name: string;
  meta: string;
  desc: string;
  tags: string[];
  url: string;
}

interface LogEntry {
  when: string;
  what: string;
  where: string;
  note: string;
}

export interface Content {
  meta: { title: string; description: string };
  nav: { label: string; projects: string; log: string; contact: string; langLabel: string };
  hero: {
    role: string;
    pitch: string;
    ctaCv: string;
    ctaProjects: string;
    status: string;
    sys: { k: string; v: string }[];
  };
  projects: {
    title: string;
    featured: string;
    niDesc: string;
    niBullets: string[];
    pipeCaption: string;
    pipeline: { label: string; note: string }[];
    viewCode: string;
    list: Project[];
  };
  log: { title: string; entries: LogEntry[] };
  stack: { title: string; groups: { label: string; items: string[] }[] };
  afk: { title: string; text: string };
  contact: { title: string; text: string };
  footer: string;
}

const projectUrls = {
  echo: 'https://github.com/enoughpaladin00/2003424_ECHO',
  dice: 'https://github.com/enoughpaladin00/dice-game',
  guardaloo: 'https://github.com/enoughpaladin00/Guardaloo',
  fat: 'https://github.com/enoughpaladin00/Sistemi-Operativi',
};

const stackItems = {
  security: ['Burp Suite', 'Nmap', 'Metasploit', 'Wireshark', 'Zeek', 'iptables', 'IDA', 'Gobuster', 'John the Ripper', 'Hydra'],
  ai: ['PyTorch', 'scikit-learn', 'pandas', 'anomaly detection', 'adversarial ML'],
  code: ['Python', 'C/C++', 'Java', 'TypeScript', 'PHP', 'SQL', 'x86 Assembly', 'Solidity', 'Circom'],
  systems: ['UNIX/Linux', 'Docker', 'Kubernetes', 'Kathará', 'Git', 'PostgreSQL', 'Astro'],
};

export const content: Record<Lang, Content> = {
  it: {
    meta: {
      title: 'Jacopo Rossi · AI & Data Security',
      description:
        'Portfolio di Jacopo Rossi, studente magistrale in Computer Science & AI alla Sapienza: sicurezza dei sistemi di machine learning, malware analysis e difesa di rete.',
    },
    nav: { label: 'Navigazione principale', projects: 'progetti', log: 'percorso', contact: 'contatti', langLabel: 'Lingua' },
    hero: {
      role: 'Studente magistrale in Computer Science & AI · AI & Data Security',
      pitch:
        "Proteggo i sistemi di machine learning partendo dall'attaccarli. Sono all'ultimo anno della magistrale alla Sapienza, finalista alla CyberX Mind4Future di Leonardo e Cyber 4.0, e cerco un'internship in AI security.",
      ctaCv: 'Scarica il CV',
      ctaProjects: 'Vedi i progetti',
      status: 'disponibile per internship · Roma / ibrido',
      sys: [
        { k: 'università', v: 'Sapienza Università di Roma' },
        { k: 'corso', v: 'LM Computer Science & AI · laurea 2027' },
        { k: 'media', v: '28,28 / 30' },
        { k: 'focus', v: 'ML security · malware analysis · difesa di rete' },
        { k: 'sede', v: 'Roma, Italia' },
        { k: 'lingue', v: 'italiano · inglese' },
      ],
    },
    projects: {
      title: 'Progetti scelti',
      featured: 'In evidenza · IDS basato su ML',
      niDesc:
        'Sistema di intrusion detection basato su machine learning con risposta attiva in tempo reale, su una rete aziendale emulata a tre zone.',
      niBullets: [
        'Laboratorio Kathará + Docker con zone WAN, DMZ e LAN, e Zeek sul gateway',
        'Modello ibrido: lo score di anomalia di un Isolation Forest alimenta un Random Forest',
        'Attacchi scriptati per i dati etichettati: port scan, brute force SSH, SQLi/XSS, HTTP flood, Slowloris, esfiltrazione',
        'Risposta attiva: regole iptables iniettate in tempo reale, WAF L7 a regex, dashboard Streamlit',
      ],
      pipeCaption: 'pipeline di rilevamento',
      pipeline: [
        { label: 'traffico di rete', note: 'WAN → gateway' },
        { label: 'Zeek', note: 'conn.log · http.log' },
        { label: 'Isolation Forest', note: 'score di anomalia' },
        { label: 'Random Forest', note: 'attacco / legittimo' },
        { label: 'iptables DROP', note: 'attaccante isolato' },
      ],
      viewCode: 'codice',
      list: [
        {
          name: 'ECHO',
          meta: 'Laboratory of Advanced Programming · 2025/26',
          desc: 'Piattaforma distribuita e fault-tolerant che elabora e classifica in tempo reale i flussi di sensori sismici.',
          tags: ['Python', 'sistemi distribuiti', 'fault tolerance'],
          url: projectUrls.echo,
        },
        {
          name: 'Secure Dice Game',
          meta: 'Corso di Cybersecurity',
          desc: 'Gioco di dadi equo tra due parti senza terza parte fidata: commit-then-reveal con SHA-256 e seed derivato via XOR, ogni giocatore nel suo container.',
          tags: ['Python', 'crittografia', 'Docker'],
          url: projectUrls.dice,
        },
        {
          name: 'Guardaloo',
          meta: 'Tesi triennale · progetto di team',
          desc: 'Web app full-stack per cinefili, sviluppata per il Software Architecture and Cybersecurity Lab.',
          tags: ['Ruby on Rails', 'web security'],
          url: projectUrls.guardaloo,
        },
        {
          name: 'FAT file system',
          meta: 'Corso di Sistemi Operativi',
          desc: 'File system basato su FAT scritto in C, con gestione a basso livello di memoria e strutture su disco.',
          tags: ['C', 'sistemi operativi'],
          url: projectUrls.fat,
        },
      ],
    },
    log: {
      title: 'Percorso',
      entries: [
        {
          when: '2025 — oggi',
          what: 'LM Computer Science & AI',
          where: 'Sapienza Università di Roma',
          note: 'Media 28,28/30 · 30/30 in Cybersecurity, Machine Learning e Artificial Intelligence.',
        },
        {
          when: '2024 — 2025',
          what: 'CyberX Mind4Future · finalista',
          where: 'Leonardo & Cyber 4.0',
          note: 'Formazione avanzata in cybersecurity, poi sfide CTF e red teaming su sistemi simulati.',
        },
        {
          when: '2021 — 2025',
          what: 'Laurea in Ingegneria Informatica e Automatica',
          where: 'Sapienza Università di Roma',
          note: 'Tesi: Guardaloo, web app full-stack per cinefili.',
        },
        {
          when: '2022 — 2025',
          what: 'Docente di ripetizioni',
          where: 'Roma',
          note: 'Matematica, fisica, scienze e inglese per studenti delle superiori.',
        },
      ],
    },
    stack: {
      title: 'Stack',
      groups: [
        { label: 'security', items: stackItems.security },
        { label: 'ai / ml', items: stackItems.ai },
        { label: 'codice', items: stackItems.code },
        { label: 'sistemi', items: stackItems.systems },
      ],
    },
    afk: {
      title: 'lontano dalla tastiera',
      text: 'Anni di calcio dilettantistico, spesso da capitano, mi hanno insegnato a guidare un gruppo sotto pressione. Nel 2025 ho curato la direzione tecnica di un cortometraggio indipendente.',
    },
    contact: {
      title: 'Parliamone.',
      text: "Cerco un'internship o una tesi in azienda nell'ambito AI security. Scrivimi o trovami qui sotto.",
    },
    footer: 'costruito con Astro',
  },

  en: {
    meta: {
      title: 'Jacopo Rossi · AI & Data Security',
      description:
        "Portfolio of Jacopo Rossi, MSc student in Computer Science & AI at Sapienza University of Rome: security of machine learning systems, malware analysis and network defense.",
    },
    nav: { label: 'Main navigation', projects: 'projects', log: 'log', contact: 'contact', langLabel: 'Language' },
    hero: {
      role: 'MSc student in Computer Science & AI · AI & Data Security',
      pitch:
        "I secure machine learning systems by attacking them first. Final-year MSc student at Sapienza University of Rome, finalist at Leonardo and Cyber 4.0's CyberX Mind4Future, looking for an internship in AI security.",
      ctaCv: 'Download CV',
      ctaProjects: 'See projects',
      status: 'available for internships · Rome / hybrid',
      sys: [
        { k: 'university', v: 'Sapienza University of Rome' },
        { k: 'degree', v: 'MSc Computer Science & AI · exp. 2027' },
        { k: 'gpa', v: '28.28 / 30' },
        { k: 'focus', v: 'ML security · malware analysis · network defense' },
        { k: 'based in', v: 'Rome, Italy' },
        { k: 'languages', v: 'Italian · English' },
      ],
    },
    projects: {
      title: 'Selected work',
      featured: 'Featured · ML-driven IDS',
      niDesc:
        'Machine-learning intrusion detection with real-time active response, running on an emulated three-zone enterprise network.',
      niBullets: [
        'Kathará + Docker lab with WAN, DMZ and LAN zones, and Zeek on the gateway',
        'Hybrid model: an Isolation Forest anomaly score feeds a Random Forest classifier',
        'Scripted attacks for labelled data: port scan, SSH brute force, SQLi/XSS, HTTP flood, Slowloris, exfiltration',
        'Active response: iptables rules injected live, regex-based L7 WAF, Streamlit dashboard',
      ],
      pipeCaption: 'detection pipeline',
      pipeline: [
        { label: 'network traffic', note: 'WAN → gateway' },
        { label: 'Zeek', note: 'conn.log · http.log' },
        { label: 'Isolation Forest', note: 'anomaly score' },
        { label: 'Random Forest', note: 'attack / benign' },
        { label: 'iptables DROP', note: 'attacker isolated' },
      ],
      viewCode: 'code',
      list: [
        {
          name: 'ECHO',
          meta: 'Laboratory of Advanced Programming · 2025/26',
          desc: 'Distributed, fault-tolerant platform that processes and classifies real-time seismic sensor streams.',
          tags: ['Python', 'distributed systems', 'fault tolerance'],
          url: projectUrls.echo,
        },
        {
          name: 'Secure Dice Game',
          meta: 'Cybersecurity course',
          desc: 'Fair two-party dice game with no trusted third party: SHA-256 commit-then-reveal and XOR seed derivation, each player in its own container.',
          tags: ['Python', 'cryptography', 'Docker'],
          url: projectUrls.dice,
        },
        {
          name: 'Guardaloo',
          meta: 'BSc thesis · team project',
          desc: 'Full-stack web app for film lovers, built for the Software Architecture and Cybersecurity Lab.',
          tags: ['Ruby on Rails', 'web security'],
          url: projectUrls.guardaloo,
        },
        {
          name: 'FAT file system',
          meta: 'Operating Systems course',
          desc: 'FAT-based file system written in C, handling low-level memory and on-disk structures.',
          tags: ['C', 'operating systems'],
          url: projectUrls.fat,
        },
      ],
    },
    log: {
      title: 'Log',
      entries: [
        {
          when: '2025 — now',
          what: 'MSc Computer Science & AI',
          where: 'Sapienza University of Rome',
          note: 'GPA 28.28/30 · 30/30 in Cybersecurity, Machine Learning and Artificial Intelligence.',
        },
        {
          when: '2024 — 2025',
          what: 'CyberX Mind4Future · finalist',
          where: 'Leonardo & Cyber 4.0',
          note: 'Advanced cybersecurity training, then CTF and red-teaming challenges on simulated systems.',
        },
        {
          when: '2021 — 2025',
          what: 'BSc Computer & Control Engineering',
          where: 'Sapienza University of Rome',
          note: 'Thesis: Guardaloo, a full-stack web app for film lovers.',
        },
        {
          when: '2022 — 2025',
          what: 'Private tutor',
          where: 'Rome',
          note: 'Maths, physics, science and English for high-school students.',
        },
      ],
    },
    stack: {
      title: 'Stack',
      groups: [
        { label: 'security', items: stackItems.security },
        { label: 'ai / ml', items: stackItems.ai },
        { label: 'code', items: stackItems.code },
        { label: 'systems', items: stackItems.systems },
      ],
    },
    afk: {
      title: 'away from keyboard',
      text: 'Years of amateur football, often as captain, taught me to lead a team under pressure. In 2025 I was technical director of an independent short film.',
    },
    contact: {
      title: "Let's talk.",
      text: "I'm looking for an internship or a company thesis in AI security. Write to me or find me below.",
    },
    footer: 'built with Astro',
  },
};
