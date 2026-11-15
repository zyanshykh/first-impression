import { ImageResponse } from "next/og";

export const alt = "First Impression | Ladies Burkhas & Abayas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// WhatsApp / Facebook link preview card, generated at build time.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#14110f",
          color: "#f7f1e8",
        }}
      >
        <div style={{ display: "flex", fontSize: 96, letterSpacing: 2 }}>
          First <span style={{ color: "#d9b36c", marginLeft: 24 }}>Impression</span>
        </div>
        <div style={{ fontSize: 36, marginTop: 24, opacity: 0.8 }}>
          Ladies Burkhas &amp; Abayas
        </div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#d9b36c" }}>
          Modest. Elegant. Confident.
        </div>
      </div>
    ),
    size,
  );
}
