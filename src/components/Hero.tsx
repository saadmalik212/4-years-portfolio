"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SITE } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const ROLES = [
  "Software Engineer",
  "Website Developer",
  "Full Stack Engineer",
  "API Integration Specialist",
];

function useTypewriter(words: string[], speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && text === "") {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, wordIndex]);

  return text;
}

const TERMINAL_LINES = [
  { prompt: "$", text: "whoami" },
  { prompt: ">", text: "saad — software engineer" },
  { prompt: "$", text: "cat stack.json" },
  { prompt: ">", text: '["Next.js","Node.js","AWS","Firebase"]' },
  { prompt: "$", text: "build --website --fast" },
];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary/25 blur-[110px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,#000_10%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 font-mono text-xs text-ink-dim"
          >
            <Sparkles size={13} className="text-accent" />
            Available for new projects
          </motion.span>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{SITE.name}</span>
          </h1>

          <div className="mt-4 flex h-10 items-center font-mono text-lg text-ink-dim sm:text-xl">
            <span className="text-primary">&gt;</span>
            <span className="ml-2">{typed}</span>
            <span className="animate-caret ml-0.5 h-6 w-[2px] bg-accent" />
          </div>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-dim">
            Saad brings {SITE.years}+ years of experience turning ideas into fast,
            scalable websites and web apps — engineered end-to-end with Next.js,
            React, Node.js and AWS.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              data-cursor-hover
              className="magnetic-btn group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Say Hello
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#portfolio"
              data-cursor-hover
              className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              My Works
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-dim">
              Follow
            </span>
            <div className="h-px w-10 bg-line" />
            {[
              { icon: GithubIcon, href: SITE.social.github },
              { icon: LinkedinIcon, href: SITE.social.linkedin },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Signature: animated terminal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="animate-float-slow absolute -right-6 -top-6 h-16 w-16 rounded-2xl border border-accent/40 sm:h-20 sm:w-20" />
          <div className="animate-float-slower absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-primary/20 blur-xl" />

          <div className="glass relative rounded-2xl border border-line/70 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-2 border-b border-line/70 px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-ink-dim">saad@dev — zsh</span>
            </div>
            <div className="space-y-2.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
              {TERMINAL_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.22, duration: 0.4 }}
                >
                  <span className={line.prompt === "$" ? "text-primary" : "text-accent"}>
                    {line.prompt}
                  </span>{" "}
                  <span className={line.prompt === "$" ? "text-ink" : "text-ink-dim"}>
                    {line.text}
                  </span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + TERMINAL_LINES.length * 0.22 }}
                className="flex items-center gap-1 pt-1"
              >
                <span className="text-primary">$</span>
                <span className="animate-caret h-4 w-2 bg-ink" />
              </motion.div>
            </div>
          </div>

          <div className="animate-pulse-ring absolute -bottom-4 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-accent font-display text-xs font-semibold text-bg shadow-lg">
            4+yrs
          </div>
        </motion.div>
      </div>
    </section>
  );
}
