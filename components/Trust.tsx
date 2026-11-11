"use client";

import { motion } from "motion/react";
import { trustPoints } from "@/lib/store";

export default function Trust() {
  return (
    <section className="border-y border-gold/20 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="text-3xl">{t.icon}</div>
            <h3 className="mt-3 font-serif text-lg">{t.title}</h3>
            <p className="mt-1 text-sm text-ink/60">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
