"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/content";

export default function Services() {
  const [openId, setOpenId] = useState(SERVICES[0].id);

  return (
    <section id="services" className="section-pad relative bg-bg-soft">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
        >
          Services
          <br />
          Saad Provides
          <span className="mt-3 block h-1 w-16 rounded-full bg-accent" />
        </motion.h2>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {SERVICES.map((service, i) => {
            const isOpen = openId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <button
                  data-cursor-hover
                  onClick={() => setOpenId(isOpen ? "" : service.id)}
                  className={`flex w-full items-center gap-6 px-2 py-7 text-left transition-colors duration-500 sm:px-6 ${
                    isOpen ? "bg-primary text-white" : "text-ink hover:bg-surface"
                  } rounded-xl`}
                >
                  <span
                    className={`font-mono text-sm ${isOpen ? "text-accent" : "text-ink-dim"}`}
                  >
                    {service.id}
                  </span>
                  <span className="font-display text-xl font-semibold sm:text-2xl">
                    {service.title}
                  </span>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        className="hidden overflow-hidden text-sm text-white/80 sm:block"
                      >
                        {service.description}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                      isOpen ? "border-white/40" : "border-line"
                    }`}
                  >
                    <ArrowUpRight size={16} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-2 text-sm leading-relaxed text-ink-dim sm:hidden"
                    >
                      <span className="block pb-6">{service.description}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
