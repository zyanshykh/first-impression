"use client";

import { motion } from "motion/react";
import { waLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink("Assalam o Alaikum! I want to order from First Impression.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16.003 3C9.373 3 4 8.373 4 15.003c0 2.65.866 5.1 2.33 7.09L4.8 28l6.07-1.6A11.96 11.96 0 0 0 16.003 27C22.633 27 28 21.627 28 15.003 28 8.373 22.633 3 16.003 3Zm0 21.8c-1.8 0-3.5-.5-4.95-1.4l-.35-.2-3.6.95.96-3.5-.23-.36A9.77 9.77 0 0 1 6.2 15c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8Zm5.4-7.3c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </motion.a>
  );
}
