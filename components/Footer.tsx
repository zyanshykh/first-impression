import { WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-ink py-10 text-center text-cream/70">
      <p className="font-serif text-xl text-cream">
        First <span className="text-gold-light">Impression</span>
      </p>
      <p className="mt-2 text-sm">Ladies Burkhas &amp; Abayas</p>
      <a
        href={waLink("Assalam o Alaikum! I want to order from First Impression.")}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-gold-light hover:underline"
      >
        WhatsApp: {WHATSAPP_DISPLAY}
      </a>
      <p className="mt-6 text-xs text-cream/40">
        © {new Date().getFullYear()} First Impression. All rights reserved.
      </p>
    </footer>
  );
}
