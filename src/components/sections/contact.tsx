"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 min-h-screen max-w-7xl mx-auto px-5">
      <Link href={"#contact"}>
        <h2
          className={cn(
            "text-4xl text-center uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl pt-16",
            "text-slate-900 dark:text-white",
            
          )}
        >
          TRABAJEMOS <br />
          <span className="text-violet-600 dark:text-violet-400">JUNTOS.</span>
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999]">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Contacto</CardTitle>
            <CardDescription>
              Escríbeme directamente a{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-violet-600 dark:text-violet-300 cursor-can-hover rounded-lg"
              >
                {config.email}
              </a>{" "}
              o completa el formulario a continuación.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default ContactSection;


