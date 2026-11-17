"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Monitor } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { portfolioProjects, type PortfolioProject } from "@/data/portfolio-projects";
import styles from "./projects.module.scss";

function ScreenContent({ project, compact = false }: { project: PortfolioProject; compact?: boolean }) {
  return <div className={`${styles.screenContent} bg-gradient-to-br ${project.accent}`}>
    {project.image ? <Image src={project.image} alt={`Captura de ${project.title}`} fill sizes="(max-width: 768px) 90vw, 700px" className="object-cover object-top" /> : <div className={styles.projectIntro}>
      <span className={styles.screenCategory}>{project.category}</span>
      <span className={styles.screenTitle}>{project.title}</span>
      {!compact && <span className={styles.screenDescription}>{project.description}</span>}
      {!compact && <span className={styles.previewNote}><Monitor size={14}/> Captura próximamente</span>}
    </div>}
  </div>;
}

export default function ProjectsSection() {
  const [{ active, direction }, setGallery] = useState({ active: 0, direction: 1 });
  const reduceMotion = useReducedMotion();
  const count = portfolioProjects.length;
  const project = portfolioProjects[active];
  const previous = (active - 1 + count) % count;
  const next = (active + 1) % count;
  const move = (step: number) => setGallery(current => ({ active: (current.active + step + count) % count, direction: step }));
  const choose = (index: number) => { if (index !== active) setGallery({ active: index, direction: index === next ? 1 : -1 }); };

  return <section id="projects" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
    <h2 className="text-4xl uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Mis <span className="text-violet-600 dark:text-violet-400">proyectos.</span></h2>
    <p className="mt-4 font-sans text-slate-600 dark:text-slate-300">Explora mis proyectos y descubre qué hice en cada uno.</p>
    <div className={styles.gallery} role="region" aria-label="Galería de proyectos">
      <button type="button" onClick={() => move(-1)} aria-label="Proyecto anterior" className={`${styles.arrow} ${styles.arrowLeft}`}><ArrowLeft size={20}/></button>
      <motion.button key={`left-${previous}`} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -45, rotateY: 25, rotateZ: -2, scale: 0.9 }} animate={{ opacity: 1, x: 0, rotateY: 25, rotateZ: -2, scale: 1 }} transition={{ duration: 0.3 }} type="button" onClick={() => move(-1)} aria-label={`Ver ${portfolioProjects[previous].title}`} className={`${styles.sideScreen} ${styles.sideLeft}`}><ScreenContent project={portfolioProjects[previous]} compact /></motion.button>
      <Dialog>
        <AnimatePresence initial={false} mode="sync" custom={direction}>
        <motion.div key={active} className={styles.monitor} custom={direction}
          variants={{ enter: (d: number) => reduceMotion ? { opacity: 0 } : { opacity: 0, x: d * 170, rotateY: d * -28, scale: 0.9 }, center: { opacity: 1, x: 0, rotateY: 0, scale: 1 }, exit: (d: number) => reduceMotion ? { opacity: 0 } : { opacity: 0, x: d * -170, rotateY: d * 28, scale: 0.9 } }}
          initial="enter" animate="center" exit="exit"
          transition={{ duration: reduceMotion ? 0.12 : 0.32, ease: [0.22, 1, 0.36, 1] }}>
          <DialogTrigger asChild><button type="button" className={styles.monitorButton} aria-label={`Ver detalles de ${project.title}`}>
            <span className={styles.browserBar} aria-hidden="true"><i/><i/><i/><span/></span>
            <ScreenContent project={project}/>
            <span className={styles.monitorFooter}><span>Ver proyecto</span><ArrowUpRight size={16}/></span>
          </button></DialogTrigger>
          <div className={styles.monitorNeck} aria-hidden="true"/><div className={styles.monitorBase} aria-hidden="true"/>
        </motion.div>
        </AnimatePresence>
        <DialogContent className="max-h-[90dvh] max-w-3xl overflow-y-auto rounded-2xl border-slate-300 bg-white p-0 dark:border-white/10 dark:bg-slate-950">
          <div className="relative aspect-video overflow-hidden"><ScreenContent project={project}/></div>
          <div className="space-y-5 p-6 sm:p-9"><p className="font-mono text-xs tracking-widest text-violet-600 dark:text-violet-300">{project.category}</p><DialogTitle className="text-3xl leading-tight sm:text-4xl">{project.title}</DialogTitle><DialogDescription className="font-sans text-base leading-7 text-slate-600 dark:text-slate-300">{project.description}</DialogDescription><div><h4 className="mb-2 text-sm">¿Qué hice?</h4><p className="font-sans leading-7 text-slate-600 dark:text-slate-300">{project.contribution}</p></div><div className="flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-slate-300 px-3 py-1 font-sans text-xs dark:border-white/15">{tag}</span>)}</div>{project.repository && <a href={project.repository} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-sans font-bold text-violet-600 hover:underline dark:text-violet-300">Ver repositorio <ArrowUpRight size={18}/></a>}</div>
        </DialogContent>
      </Dialog>
      <motion.button key={`right-${next}`} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 45, rotateY: -25, rotateZ: 2, scale: 0.9 }} animate={{ opacity: 1, x: 0, rotateY: -25, rotateZ: 2, scale: 1 }} transition={{ duration: 0.3 }} type="button" onClick={() => move(1)} aria-label={`Ver ${portfolioProjects[next].title}`} className={`${styles.sideScreen} ${styles.sideRight}`}><ScreenContent project={portfolioProjects[next]} compact /></motion.button>
      <button type="button" onClick={() => move(1)} aria-label="Proyecto siguiente" className={`${styles.arrow} ${styles.arrowRight}`}><ArrowRight size={20}/></button>
    </div>
    <div className={styles.dots} aria-label="Elegir proyecto">{portfolioProjects.map((item, index) => <button key={item.number} type="button" aria-label={`Mostrar ${item.title}`} aria-pressed={active === index} onClick={() => choose(index)} className={active === index ? styles.activeDot : ""}/>)}</div>
    <p className="mt-5 text-center font-sans text-sm text-slate-600 dark:text-slate-300" aria-live="polite">{project.title} · selecciona la pantalla para ver los detalles</p>
    <div className="mt-8 text-center"><a href="https://github.com/gaboiouu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-sans font-bold text-violet-600 hover:underline dark:text-violet-300">Visita mi GitHub <ArrowUpRight size={18}/></a></div>
  </section>;
}




