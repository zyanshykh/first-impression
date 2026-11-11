"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { announcements } from "@/lib/store";

export default function AnnouncementBar() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (announcements.length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % announcements.length), 3500);
    return () => clearInterval(t);
  }, []);

  if (announcements.length === 0) return null;

  return (
    <div className="bg-gold-dark px-4 py-2 text-center text-xs text-cream sm:text-sm">
      <AnimatePresence mode="wait">
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
        >
          {announcements[i]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
