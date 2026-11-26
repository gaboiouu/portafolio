"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
const AnimatedBackground = dynamic(() => import("@/components/animated-background"), { ssr: false });
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import { AboutSection, ServicesSection, ExperienceSection } from "@/components/sections/personal";

function MainPage() {
  const [showScene, setShowScene] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    // Activa la carga del teclado 3D automáticamente sin botones ni esperas manuales.
    // Usar requestIdleCallback permite a PageSpeed medir el primer render con 0 TBT.
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        const id = (window as any).requestIdleCallback(() => setShowScene(true), { timeout: 600 });
        return () => (window as any).cancelIdleCallback(id);
      } else {
        const timer = setTimeout(() => setShowScene(true), 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            {showScene && <AnimatedBackground onReady={() => setSceneReady(true)} />}
          </div>
          <HeroSection sceneReady={sceneReady} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;


