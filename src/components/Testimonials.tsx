"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
        >
          Valuable feedback
          <br />
          from Saad&apos;s clients
          <span className="mt-3 block h-1 w-16 rounded-full bg-accent" />
        </motion.h2>

        <div className="relative mt-14 flex items-center gap-4">
          <button
            data-cursor-hover
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="relative min-h-[220px] flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6 sm:flex-row sm:items-center"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-surface text-accent">
                  <Quote size={26} />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-ink sm:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-5 flex items-center gap-2 text-sm text-ink-dim">
                    <span className="h-px w-6 bg-line" />
                    <strong className="font-semibold text-ink">{t.name}</strong>
                    <span>— {t.role}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            data-cursor-hover
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              data-cursor-hover
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-accent" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
