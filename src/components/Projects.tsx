"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { PROJECTS, type Project } from "@/data/content";

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="section-pad relative overflow-hidden bg-accent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl"
          >
            Look at Saad&apos;s
            <br />
            recent projects
            <span className="mt-3 block h-1 w-16 rounded-full bg-primary" />
          </motion.h2>

          <div className="flex gap-3">
            <button
              data-cursor-hover
              onClick={() => scrollBy(-1)}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              data-cursor-hover
              onClick={() => scrollBy(1)}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((project, i) => (
            <motion.button
              key={project.id}
              data-cursor-hover
              onClick={() => setActive(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[3/4] w-72 shrink-0 snap-start overflow-hidden rounded-2xl text-left shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)] sm:w-80"
              style={{ background: project.image }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/95" />
              <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 font-mono text-[11px] text-white backdrop-blur">
                {project.category}
              </span>
              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="font-display text-xl font-semibold text-white">
                  {project.title}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View details <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative w-full max-w-lg overflow-hidden rounded-3xl border border-line/70"
            >
              <div className="h-44 w-full" style={{ background: active.image }} />
              <button
                data-cursor-hover
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
              >
                <X size={16} />
              </button>

              <div className="p-6 sm:p-8">
                <span
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: active.accent }}
                >
                  {active.category}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-dim">
                  {active.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={active.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="magnetic-btn mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  View my project
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
