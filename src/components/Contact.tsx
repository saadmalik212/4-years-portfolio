"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { SITE } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const badgeText = `welcome to ${SITE.name.toLowerCase()} • let's build • `;

  return (
    <section id="contact" className="relative bg-[#0a0912] pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-10 border-b border-line/60 pb-16 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto h-40 w-40 shrink-0 lg:mx-0"
          >
            <svg viewBox="0 0 200 200" className="animate-spin-slow h-full w-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  fill="none"
                />
              </defs>
              <circle cx="100" cy="100" r="98" fill="var(--accent)" />
              <text fill="var(--bg)" fontSize="12" fontFamily="var(--font-mono)" letterSpacing="2">
                <textPath href="#circlePath">{badgeText.repeat(2)}</textPath>
              </text>
            </svg>
            <div className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-bg">
              <div className="h-0 w-0 border-y-8 border-l-[14px] border-y-transparent border-l-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl"
          >
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Let&apos;s work together
            </h2>
            <p className="mt-3 text-ink-dim">
              Reach out today, and let&apos;s bring your dream project to life —
              built by {SITE.name}.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            href={`mailto:${SITE.email}`}
            data-cursor-hover
            className="magnetic-btn inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Say Hello
            <ArrowUpRight size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-dim">
              <Phone size={13} /> Call
            </p>
            <p className="mt-2 font-display text-xl font-semibold text-ink">
              {SITE.phone}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-dim">
              <Mail size={13} /> Email
            </p>
            <a
              href={`mailto:${SITE.email}`}
              data-cursor-hover
              className="mt-2 block font-display text-xl font-semibold text-ink transition-colors hover:text-accent"
            >
              {SITE.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-ink-dim">
              Follow {SITE.name}
            </p>
            <div className="mt-3 flex gap-3">
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
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line/60 py-8 text-center text-xs text-ink-dim sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="font-mono">
            Built by <span className="text-accent">{SITE.name}</span> with Next.js
            &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
