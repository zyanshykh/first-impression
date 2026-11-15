import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://first-impression-chi.vercel.app";
const TITLE = "First Impression | Ladies Burkhas & Abayas";
const DESCRIPTION =
  "First Impression: elegant ladies burkhas and abayas. Browse the collection and order easily on WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "First Impression",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14110f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
