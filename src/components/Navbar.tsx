"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    ) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border border-line/60 px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]" : "bg-transparent"
          }`}
        >
          <a
            href="#home"
            data-cursor-hover
            className="font-display text-lg font-semibold tracking-tight text-ink"
          >
            Saad<span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  data-cursor-hover
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    active === link.href
                      ? "text-ink"
                      : "text-ink-dim hover:text-ink"
                  }`}
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-surface-2"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              data-cursor-hover
              className="magnetic-btn hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-primary/90 sm:flex"
            >
              Say Hello
              <ArrowUpRight size={16} />
            </a>
            <button
              data-cursor-hover
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
                closed: {},
              }}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 24 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-semibold text-ink"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 24 },
                }}
                className="pt-4"
              >
                <a
                  href={`mailto:${SITE.email}`}
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
                >
                  {SITE.email}
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
