import { waLink } from "@/lib/whatsapp";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-ink/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="font-serif text-xl tracking-wide text-cream">
          First <span className="text-gold-light">Impression</span>
        </a>
        <div className="flex items-center gap-5 text-sm text-cream/80">
          <a href="#collection" className="hidden hover:text-gold-light sm:block">
            Collection
          </a>
          <a href="#how" className="hidden hover:text-gold-light sm:block">
            How to order
          </a>
          <a
            href={waLink("Assalam o Alaikum! I want to order from First Impression.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-4 py-2 font-medium text-ink transition hover:bg-gold-light"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
