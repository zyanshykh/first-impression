"use client";

import { motion } from "motion/react";
import { waLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold-dark/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 text-center sm:py-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs uppercase tracking-[0.35em] text-gold-light"
        >
          Ladies Burkhas &amp; Abayas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl leading-tight sm:text-7xl"
        >
          First <span className="text-gold-light">Impression</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-base text-cream/75 sm:text-lg"
        >
          Modest. Elegant. Confident. Pasand karein aur seedha WhatsApp pe order
          karein.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={waLink("Assalam o Alaikum! I want to order from First Impression.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-gold px-8 py-3 font-medium text-ink transition hover:bg-gold-light sm:w-auto"
          >
            Order on WhatsApp
          </a>
          <a
            href="#collection"
            className="w-full rounded-full border border-gold/60 px-8 py-3 text-cream transition hover:bg-gold/10 sm:w-auto"
          >
            View Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
}
