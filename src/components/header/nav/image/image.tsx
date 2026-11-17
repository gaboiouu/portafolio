import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
import { opacity } from "../../anim";

type PreviewProps = { title: string; isActive: boolean };

const captions: Record<string, { heading: string; detail: string }> = {
  "Sobre mí": { heading: "DESARROLLO WEB & ANÁLISIS DE DATOS", detail: "Aarón Silva Chorres" },
  Skills: { heading: "SKILLS", detail: "Explora mis tecnologías" },
  Proyectos: { heading: "MIS PROYECTOS.", detail: "Una selección de mi trabajo" },
  Servicios: { heading: "MIS SERVICIOS.", detail: "Desarrollo web · Backend · Datos" },
  Experiencia: { heading: "MI EXPERIENCIA.", detail: "Mi experiencia profesional" },
  Contacto: { heading: "TRABAJEMOS JUNTOS", detail: "Cuéntame sobre tu proyecto" },
};

export default function MenuPreview({ title, isActive }: PreviewProps) {
  const caption = captions[title];
  return <motion.div variants={opacity} initial="initial" animate={isActive ? "open" : "closed"} className={styles.imageContainer} aria-hidden="true">
    {title === "Inicio" ? <Image src="/assets/nav-link-previews/aaron-inicio.png" alt="" width={1900} height={950} className={styles.homeImage}/> :
      <div className={styles.preview}>
        <div className={styles.previewHeader}><span>Aarón Silva</span><span>✦</span></div>
        {title === "Sobre mí" ? <div className={styles.aboutPreview}><div><p>{caption.detail}</p><h3>DESARROLLO WEB <span>&amp; ANÁLISIS DE DATOS</span></h3><small>Desarrollador web y estudiante de Ingeniería de Sistemas e Informática.</small></div><Image src="/assets/aaron-retrato.jpeg" alt="" width={180} height={225}/></div> :
          <div className={styles.previewBody}><p>{caption?.detail}</p><h3>{caption?.heading}</h3>{title === "Skills" && <div className={styles.keys}><i>JS</i><i>TS</i><i>⚛</i><i>JS</i><i>SQL</i><i>Git</i></div>}{title === "Proyectos" && <div className={styles.projectCards}><i>01</i><i>02</i><i>03</i></div>}{title === "Servicios" && <div className={styles.projectCards}><i>WEB</i><i>API</i><i>DATOS</i></div>}{title === "Experiencia" && <div className={styles.timeline}><i/><i/><i/><i/></div>}{title === "Contacto" && <div className={styles.formLines}><i/><i/><i/></div>}</div>}
      </div>}
  </motion.div>;
}

