import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

const HeroSection = ({ sceneReady }: { sceneReady?: boolean }) => {
  return (
    <section id="hero" className={cn("relative w-full min-h-[max(100svh,760px)] md:min-h-[100svh]")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "min-h-[max(100svh,760px)] md:min-h-[100svh] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "px-5 pb-24 pt-28 sm:pb-32 md:px-12 md:py-24 lg:px-20 xl:px-28"
          )}
        >
          {(
            <>
              <div className="">
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hola, soy
                    <br className="md:hidden" />
                  </p>
                <h1
                        className={cn(
                          "font-thin text-[clamp(3rem,13vw,6rem)] leading-none text-transparent text-slate-800 ml-1 text-left",
                          "cursor-default text-edge-outline font-display lg:text-8xl "
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <span className="md:hidden">{" "}</span>
                        <br className="md:block hidden" />
                        {config.author.split(" ")[1]}
                      </h1>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl bg-clip-text "
                    )}
                  >
                    Ingeniero &amp; Desarrollador Full Stack Junior
                  </p>
              </div>
              <div className="mt-8 md:ml-2 flex flex-col gap-3">
                <Link
                  href="/assets/cv-aaron-silva.pdf"
                  target="_blank"
                  className={cn(buttonVariants(), "flex items-center gap-2 w-full")}
                >
                      <File size={24} />
                      <span>Currículum</span>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"} className={cn(buttonVariants({variant:"outline"}), "w-full")}>
                          Contáctame
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>¡Hablemos! ✉️</p>
                    </TooltipContent>
                  </Tooltip>
                  <Link
                    href={config.social.github}
                    target="_blank"
                    aria-label="Visitar mi GitHub"
                    className={buttonVariants({variant:"outline", size:"icon"})}
                  >
                      <SiGithub size={24} aria-hidden="true" />
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                    aria-label="Visitar mi LinkedIn"
                    className={buttonVariants({variant:"outline", size:"icon"})}
                  >
                      <SiLinkedin size={24} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;


