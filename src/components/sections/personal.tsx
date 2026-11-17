"use client";

import { ArrowUpRight, Braces, ChartNoAxesCombined, Database, GraduationCap, Sparkles, Plus, ArrowLeft, ArrowRight, Newspaper, Store, Laptop, BriefcaseBusiness } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import styles from "./personal-stage.module.scss";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const panel = "rounded-3xl border border-slate-300/70 bg-white/90 p-7 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-slate-950/85 sm:p-9";


export function AboutSection() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.7fr)] md:gap-20">
        <div>
          <p className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Aarón Silva Chorres</p>
          <h2 className="max-w-3xl text-4xl uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Desarrollo web <span className="text-violet-600 dark:text-violet-400">&amp; análisis de datos.</span></h2>
          <div className="mt-8 max-w-2xl space-y-5 font-sans text-base leading-7 text-slate-700 dark:text-slate-200 sm:text-lg">
            <p>Soy Aarón, desarrollador web junior y estudiante de Ingeniería de Sistemas e Informática en la UTP. Me gusta construir experiencias digitales claras, funcionales y pensadas para las personas.</p>
            <p>Combino desarrollo web, datos y automatización para resolver problemas reales. Soy autodidacta y disfruto aprender nuevas herramientas en cada proyecto.</p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[360px] md:ml-auto">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image src="/assets/aaron-retrato.jpeg" alt="Aarón Silva al aire libre" fill sizes="(max-width: 768px) 80vw, 360px" className="object-cover object-[50%_58%]" />
          </div>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">Aarón Silva Chorres <span aria-hidden="true">/</span> Desarrollador web</p>
        </div>
      </div>
    </section>
  );
}
const services = [
  { icon: Braces, number: "01", title: "Desarrollo web", text: "Interfaces y aplicaciones web para llevar ideas y procesos a una experiencia digital clara." },
  { icon: Database, number: "02", title: "Backend y datos", text: "Sistemas, APIs y bases de datos que dan soporte a las necesidades de cada proyecto." },
  { icon: ChartNoAxesCombined, number: "03", title: "Análisis y automatización", text: "Dashboards y automatizaciones que ayudan a organizar información y tomar mejores decisiones." },
];
export function ServicesSection() {
  return <section id="servicios" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 py-24 sm:px-8">
    <h2 className={styles.heading}>Mis <span>servicios.</span></h2>
    <div className={styles.serviceStage}>
      <div className={styles.platform} aria-hidden="true"/>
      {services.map(({ icon: Icon, title, text }, index) => <article key={title} className={styles.service}>
        <div className={`${styles.key} ${index === 1 ? styles.blue : ""}`} aria-hidden="true"><div><Icon strokeWidth={1.7}/></div></div>
        <div className={styles.serviceText}><h3>{title}</h3><p>{text}</p></div>
      </article>)}
    </div>
  </section>;
}
const experience = [
  {
    date: "JUN 2026 — SEP 2026", role: "Practicante de Análisis de Datos", company: "Bufete Fernandez & Vidal",
    summary: "Análisis de datos y automatización de procesos legales.",
    details: ["Modelé procesos legales en Bizagi y automaticé con Python la organización de información, expedientes y archivos.", "Estructuré datos con SQL, Power Query y DAX, y creé dashboards en Power BI sobre casos, carga de trabajo e indicadores."],
    tools: ["Python", "Power BI", "SQL", "Bizagi", "DAX"],
  },
  {
    date: "MAY 2026 — AGO 2026", role: "Practicante de Sistemas e Informática", company: "JBV E.I.R.L.",
    summary: "Desarrollo de software y transformación digital.",
    details: ["Desarrollé sistemas web internos para gestionar proyectos y documentación con Java, Spring Boot, Angular, React, Vite y MySQL.", "Implementé interfaces, automatizaciones y dashboards para el seguimiento y la mejora de procesos."],
    tools: ["Java", "Spring Boot", "Angular", "React", "MySQL"],
  },
  {
    date: "ABR 2025 — JUL 2025", role: "Desarrollador Backend Freelance", company: "Farmacia Ávila",
    summary: "Sistema de ventas e inventario para una farmacia.",
    details: ["Levanté y documenté requerimientos mediante entrevistas con la propietaria.", "Diseñé y desarrollé funcionalidades backend de ventas e inventario con Java, Spring Boot y MySQL, integradas con una interfaz responsiva en React.", "Colaboré en las pruebas funcionales y la organización del proyecto."],
    tools: ["Java", "Spring Boot", "MySQL", "React"],
  },
  {
    date: "AGO 2024 — DIC 2024", role: "Desarrollador Frontend Freelance", company: "Cevichería El Verídico",
    summary: "Sistema de reservas de mesas y platos.",
    details: ["Diseñé e implementé flujos de reserva orientados a mejorar la atención al cliente y la gestión de pedidos.", "Desarrollé la solución con Java y el patrón MVC, aplicando Scrum y Lean Canvas para organizar el proyecto."],
    tools: ["Java", "MVC", "Scrum", "Lean Canvas"],
  },
];


const stations = [...experience].reverse();
const stationIcons = [Newspaper, Store, Laptop, BriefcaseBusiness];
const stationNames = ["El Verídico", "Farmacia Ávila", "JBV", "Fernandez & Vidal"];
export function ExperienceSection() {
  const [active, setActive] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const item = stations[active];
  const move = (step: number) => setActive(value => (value + step + stations.length) % stations.length);
  return <section id="experiencia" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 py-24 sm:px-8">
    <h2 className={styles.heading}>Mi <span>experiencia.</span></h2>
    <div className={styles.experienceHeader}><p><GraduationCap size={24}/> Ingeniería de Sistemas e Informática · UTP</p><div><button onClick={() => move(-1)} aria-label="Experiencia anterior"><ArrowLeft size={20}/></button><button onClick={() => move(1)} aria-label="Experiencia siguiente"><ArrowRight size={20}/></button></div></div>
    <Dialog>
      
      <div className={styles.stations}>
        {stations.map((station, index) => { const Icon = stationIcons[index]; return <div key={station.company} className={styles.stationSlot} onMouseEnter={() => { setActive(index); setShowPreview(true); }} onMouseLeave={() => setShowPreview(false)} onFocus={() => { setActive(index); setShowPreview(true); }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setShowPreview(false); }}>{showPreview && active === index && <DialogTrigger asChild><button className={styles.bubble}><strong>Qué hice:</strong><span>{station.summary}</span><small>Ver experiencia ↗</small></button></DialogTrigger>}<button onClick={() => setActive(index)} aria-pressed={active === index} aria-label={`Seleccionar experiencia en ${station.company}`} className={`${styles.station} ${active === index ? styles.selected : ""}`}><span className={styles.pedestal}><Icon strokeWidth={1.5}/></span><span className={styles.stationName}>{stationNames[index]}</span><span className={styles.date}>{station.date}</span></button></div>; })}
      </div>
      <DialogContent className="max-h-[90dvh] max-w-xl overflow-y-auto rounded-2xl bg-white p-8 dark:bg-slate-950"><p className="font-mono text-xs text-violet-500">{item.date}</p><DialogTitle className="text-2xl">{item.role}</DialogTitle><DialogDescription>{item.company} · {item.summary}</DialogDescription><h3>¿Qué hice?</h3><ul className="list-disc space-y-3 pl-5 font-sans leading-7">{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="flex flex-wrap gap-2">{item.tools.map(tool => <span key={tool} className="rounded-full border px-3 py-1 font-sans text-xs">{tool}</span>)}</div></DialogContent>
    </Dialog>
  </section>;
}



