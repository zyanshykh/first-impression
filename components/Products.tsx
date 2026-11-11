"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { products, type Product } from "@/lib/products";
import ProductCard from "./ProductCard";

interface Filter {
  label: string;
  match: (p: Product) => boolean;
}

const filters: Filter[] = [
  { label: "All", match: () => true },
  { label: "Burkhas", match: (p) => p.category === "Burkha" },
  { label: "Abayas", match: (p) => p.category === "Abaya" },
  { label: "Hijabs", match: (p) => p.category === "Hijab" },
  { label: "Daily Wear", match: (p) => p.occasion === "Daily Wear" },
  { label: "Party Wear", match: (p) => p.occasion === "Party Wear" },
  { label: "On Sale", match: (p) => p.salePrice !== undefined && p.salePrice < p.price },
];

export default function Products() {
  const [active, setActive] = useState(filters[0].label);
  const current = filters.find((f) => f.label === active) ?? filters[0];
  const list = products.filter(current.match);

  return (
    <section id="collection" className="mx-auto max-w-6xl px-5 py-20">
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl">Our Collection</h2>
        <p className="mt-3 text-ink/60">
          Ladies burkhas, abayas &amp; hijabs. Har design pe seedha WhatsApp order.
        </p>
      </div>

      <div className="-mx-5 mt-8 flex gap-3 overflow-x-auto px-5 pb-2 sm:justify-center">
        {filters.map((f) => (
          <button
            key={f.label}
            onClick={() => setActive(f.label)}
            className={`shrink-0 rounded-full border px-5 py-2 text-sm transition ${
              active === f.label
                ? "border-ink bg-ink text-cream"
                : "border-gold/40 text-ink/70 hover:border-gold"
            }`}
          >
            {f.label}
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

      {list.length === 0 && (
        <p className="mt-10 text-center text-ink/50">Is category mein abhi kuch nahi hai.</p>
      )}
    </section>
  );
}
