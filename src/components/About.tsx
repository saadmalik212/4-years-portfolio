"use client";

import { motion, type Variants } from "framer-motion";
import { Download } from "lucide-react";
import { SITE } from "@/data/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="section-pad relative bg-primary text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.svg
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 top-8 h-14 w-14 -translate-x-1/2 text-accent sm:left-[58%]"
          viewBox="0 0 60 60"
          fill="none"
        >
          <path
            d="M4 30 Q20 4 40 14 T56 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl bg-accent"
        >
          <span className="absolute -left-4 top-1/2 -translate-y-1/2 font-display text-[9rem] font-bold leading-none text-primary sm:text-[11rem]">
            0{SITE.years}
          </span>
          <div className="absolute bottom-8 left-0 w-full px-6">
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-primary/80">
              Years of Experience
            </p>
            <p className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-primary sm:text-3xl">
              {SITE.name} — Software Engineer
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Get to know me
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            About {SITE.name}
            <span className="ml-3 inline-block h-2 w-14 rounded-full bg-accent align-middle" />
          </h2>

          <p className="mt-6 max-w-xl text-white/80 leading-relaxed">
            With {SITE.years}+ years as a Software Engineer, {SITE.name} specializes in{" "}
            <strong className="font-semibold text-white">Website Development</strong> —
            building fast, reliable products with Next.js, React, Node.js and Tailwind
            CSS. By harnessing AWS, Firebase, REST and GraphQL APIs, {SITE.name} builds
            scalable, future-proof web applications for startups and growing teams.
          </p>
          <p className="mt-4 max-w-xl text-white/80 leading-relaxed">
            {SITE.name} prioritizes clean, maintainable code and stays ahead of
            industry trends to deliver innovative, user-centric experiences —
            collaborating closely to turn ideas into products that drive real
            business results.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              data-cursor-hover
              className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:scale-105"
            >
              Download CV
              <Download size={16} />
            </a>
            <span className="font-display text-2xl italic text-white/70">
              {SITE.name}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
