"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Server,
  Cloud,
  Layers,
  Palette,
  Flame,
  Network,
  Braces,
} from "lucide-react";
import { SKILLS, EXPERIENCE } from "@/data/content";

const ICONS = [Code2, Server, Cloud, Layers, Layers, Palette, Flame, Network, Braces];

const TABS = ["Skills", "Experience"] as const;

export default function Expertise() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Skills");

  return (
    <section className="section-pad relative">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.4fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            My expert
            <br />
            areas
            <span className="mt-3 block h-1 w-16 rounded-full bg-accent" />
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-ink-dim">
            Saad specializes in building fast, user-centric websites and web
            applications — from pixel-perfect interfaces to resilient backend
            systems, wired together with clean, well-tested code.
          </p>
          <p className="mt-4 max-w-sm leading-relaxed text-ink-dim">
            From CI/CD pipelines to third-party and AI API integrations, Saad
            focuses on scalable solutions that meet real user needs and
            business goals.
          </p>
        </motion.div>

        <div>
          <div className="mb-8 inline-flex items-center gap-1 rounded-full border border-line p-1">
            {TABS.map((t) => (
              <button
                key={t}
                data-cursor-hover
                onClick={() => setTab(t)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  tab === t ? "text-bg" : "text-ink-dim hover:text-ink"
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="expertise-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-1.5">
                  {t}
                  <ArrowUpRight size={14} />
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {tab === "Skills" ? (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3"
              >
                {SKILLS.map((skill, i) => {
                  const Icon = ICONS[i % ICONS.length];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      data-cursor-hover
                      className="group"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line text-ink transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent group-hover:text-accent">
                        <Icon size={22} />
                      </div>
                      <p className="mt-3 text-sm font-medium text-ink">
                        {skill.name}{" "}
                        <span className="text-accent">({skill.level}%)</span>
                      </p>
                      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 gap-8 sm:grid-cols-2"
              >
                {EXPERIENCE.map((job, i) => (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="group rounded-2xl border border-line p-5 transition-colors duration-300 hover:border-accent"
                  >
                    <p className="font-mono text-xs uppercase tracking-widest text-primary">
                      {job.period}
                    </p>
                    <p className="mt-1 text-sm text-ink-dim">{job.company}</p>
                    <div className="mt-3 h-px w-8 bg-line transition-all duration-300 group-hover:w-14 group-hover:bg-accent" />
                    <p className="mt-3 font-display text-lg font-semibold text-ink">
                      {job.title}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
