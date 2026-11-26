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
    const timer = window.setTimeout(() => setShowScene(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            {showScene && <AnimatedBackground />}
          </div>
          <HeroSection />
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


