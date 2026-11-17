import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full h-screen md:h-[150dvh]">
      <div className="top-[70px] sticky mb-96">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "text-4xl text-center uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
                "text-violet-600 dark:text-violet-400",
                
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
        <p className="mx-auto mt-4 line-clamp-4 max-w-3xl font-normal text-base text-center text-neutral-300">
          Explora las tecnologías del teclado
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;


