"use client";

import { motion } from "motion/react";
import type { Product } from "@/lib/products";
import { waLink } from "@/lib/whatsapp";

export default function ProductCard({ product }: { product: Product }) {
  const onSale = product.salePrice !== undefined && product.salePrice < product.price;
  const finalPrice = onSale ? (product.salePrice as number) : product.price;
  const saved = onSale ? product.price - finalPrice : 0;

  const message = `Assalam o Alaikum! I want to order:\n\n${product.name} (${product.category})\nCode: ${product.id}\nPrice: Rs. ${finalPrice.toLocaleString()}\n\nPlease share size and delivery details.`;
  const askMessage = `Assalam o Alaikum! I have a question about:\n\n${product.name} (Code: ${product.id})`;

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
          {product.occasion ? `${product.category} · ${product.occasion}` : product.category}
        </span>
        <div className="absolute left-3 top-3 flex gap-2">
          {onSale && (
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">
              Sale
            </span>
          )}
          {product.isNew && (
            <span className="rounded-full bg-gold px-3 py-1 text-xs font-medium text-ink">
              New
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-lg">{product.name}</h3>
        <p className="mt-1 text-sm text-ink/60">{product.description}</p>

        <div className="mt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-medium text-gold-dark">
              Rs. {finalPrice.toLocaleString()}
            </span>
            {onSale && (
              <span className="text-sm text-ink/40 line-through">
                Rs. {product.price.toLocaleString()}
              </span>
            )}
          </div>
          {onSale && (
            <p className="mt-0.5 text-xs font-medium text-red-600">
              Save Rs. {saved.toLocaleString()}
            </p>
          )}
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-4 py-2.5 text-center text-sm font-medium text-white transition hover:brightness-95"
          >
            Order on WhatsApp
          </a>
          <a
            href={waLink(askMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold/40 px-4 py-2 text-center text-xs text-ink/70 transition hover:border-gold"
          >
            Size / question? Ask on WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
}
