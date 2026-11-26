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

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    let timer: number | undefined;
    let observer: IntersectionObserver | undefined;
    if (mobile.matches) {
      const skills = document.getElementById("skills");
      if (skills && "IntersectionObserver" in window) {
        observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setShowScene(true);
            observer?.disconnect();
          }
        }, { rootMargin: "150px 0px" });
        observer.observe(skills);
      } else {
        setShowScene(true);
      }
    } else {
      timer = window.setTimeout(() => setShowScene(true), 1200);
    }
    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            {showScene && <AnimatedBackground />}
          </div>
          <HeroSection onActivateScene={() => setShowScene(true)} sceneActive={showScene} />
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


