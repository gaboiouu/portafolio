"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";

interface HeaderProps {
  loader?: boolean;
}

const NAV_LINKS = [
  { label: "SOBRE MÍ", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROYECTOS", href: "#projects" },
  { label: "SERVICIOS", href: "#servicios" },
  { label: "EXPERIENCIA", href: "#experiencia" },
];

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in"
      )}
      style={{
        background: isActive ? "hsl(var(--background) / .95)" : "hsl(var(--background) / .78)",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className={cn(styles.bar, "flex items-center justify-between")}>
        <Link href="/" className="flex items-center justify-center">
          <Button variant={"link"} className="text-md font-bold tracking-tight">
            {config.author}
          </Button>
        </Link>

        {/* Navegación central con estilo técnico [ ... ] */}
        <nav className={styles.centerNav} aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={`/${link.href}`} className={styles.navLink}>
              <span className={styles.bracket}>[</span>
              <span>{link.label}</span>
              <span className={styles.bracket}>]</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <OnlineUsers />
          <FunnyThemeToggle className="w-6 h-6 mr-4" />
          <Button
            variant={"ghost"}
            onClick={() => setIsActive(!isActive)}
            className={cn(
              styles.el,
              "m-0 p-0 h-6 bg-transparent flex items-center justify-center"
            )}
          >
            <div className="relative flex items-center">
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
              >
                Menú
              </motion.p>
              <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
                Cerrar
              </motion.p>
            </div>
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </Button>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;


