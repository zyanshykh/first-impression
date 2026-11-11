// Store ki general settings. Yahan se banner aur trust points badal sakte hain.

// Top pe dikhne wala announcement banner (ek ya zyada lines, ghoomti rehti hain)
export const announcements: string[] = [
  "Delivery all over Pakistan",
  "Order seedha WhatsApp pe, size aur design ka masla ho to hum guide karenge",
];

// Trust section ke points.
// Apni asli policy ho to hi add karein (jaise COD, exchange, free delivery).
export const trustPoints: { icon: string; title: string; text: string }[] = [
  {
    icon: "🚚",
    title: "Delivery All Over Pakistan",
    text: "Karachi se Khyber tak, aapke ghar tak pohanchayenge.",
  },
  {
    icon: "💬",
    title: "Easy WhatsApp Ordering",
    text: "Koi account ya form nahi. Bas ek message pe order confirm.",
  },
  {
    icon: "📏",
    title: "Size Guidance",
    text: "Size ka confusion ho to WhatsApp pe pooch lein, hum madad karenge.",
  },
  {
    icon: "✨",
    title: "Quality Fabric",
    text: "Soft, comfortable aur roz pehenne ke liye tayyar kapra.",
  },
];

// Examples jo aap tab add karein jab ye aapki asli policy ho:
// { icon: "💵", title: "Cash on Delivery", text: "..." },
// { icon: "🔁", title: "Easy Exchange", text: "..." },
// { icon: "🎁", title: "Free Delivery", text: "Rs. 5,000 se upar ke orders pe." },
