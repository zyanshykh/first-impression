"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { products, type Category } from "@/lib/products";
import ProductCard from "./ProductCard";

const filters: ("All" | Category)[] = ["All", "Burkha", "Abaya"];

export default function Products() {
  const [active, setActive] = useState<"All" | Category>("All");
  const list =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="collection" className="mx-auto max-w-6xl px-5 py-20">
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl">Our Collection</h2>
        <p className="mt-3 text-ink/60">
          Ladies burkhas &amp; abayas, har design pe seedha WhatsApp order.
        </p>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              active === f
                ? "border-ink bg-ink text-cream"
                : "border-gold/40 text-ink/70 hover:border-gold"
            }`}
          >
            {f === "All" ? "All" : f === "Burkha" ? "Burkhas" : "Abayas"}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
