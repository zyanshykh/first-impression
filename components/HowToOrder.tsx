"use client";

import { motion } from "motion/react";

const steps = [
  { n: "1", title: "Design chunein", text: "Collection mein se apna pasandida burkha ya abaya select karein." },
  { n: "2", title: "WhatsApp pe order", text: "Order button dabayein, message khud ban jayega. Bas size bata dein." },
  { n: "3", title: "Delivery", text: "Confirmation ke baad aapka order aapke ghar bhej diya jayega." },
];

export default function HowToOrder() {
  return (
    <section id="how" className="bg-ink py-20 text-cream">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center font-serif text-3xl sm:text-4xl">
          Order kaise karein
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-2xl border border-gold/25 p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold font-serif text-xl text-ink">
                {s.n}
              </div>
              <h3 className="mt-4 font-serif text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-cream/70">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
