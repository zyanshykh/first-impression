"use client";

import { motion } from "motion/react";
import type { Product } from "@/lib/products";
import { waLink } from "@/lib/whatsapp";

export default function ProductCard({ product }: { product: Product }) {
  const message = `Assalam o Alaikum! I want to order:\n\n${product.name} (${product.category})\nCode: ${product.id}\nPrice: Rs. ${product.price.toLocaleString()}\n\nPlease share size and delivery details.`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
      className="overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-sm"
    >
      <div
        className="relative flex aspect-[4/5] items-end"
        style={{
          background: `linear-gradient(160deg, ${product.colors[0]}, ${product.colors[1]})`,
        }}
      >
        {product.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <span className="relative m-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-ink">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-lg">{product.name}</h3>
        <p className="mt-1 text-sm text-ink/60">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-medium text-gold-dark">
            Rs. {product.price.toLocaleString()}
          </span>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition hover:brightness-95"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
}
