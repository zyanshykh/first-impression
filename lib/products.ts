export type Category = "Burkha" | "Abaya";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number; // PKR, apni asli qeemat yahan likhein
  description: string;
  colors: [string, string]; // placeholder gradient (jab tak photo na ho)
  image?: string; // e.g. "/products/black-butterfly.jpg" (public/products mein rakhein)
}

export const products: Product[] = [
  {
    id: "fi-001",
    name: "Classic Black Burkha",
    category: "Burkha",
    price: 4500,
    description: "Soft nida fabric, full-length, comfortable fit for daily wear.",
    colors: ["#1b1816", "#3a322c"],
  },
  {
    id: "fi-002",
    name: "Butterfly Abaya",
    category: "Abaya",
    price: 5200,
    description: "Flowy butterfly cut with elegant sleeves and light fabric.",
    colors: ["#2a2420", "#6b5a48"],
  },
  {
    id: "fi-003",
    name: "Royal Front Open Abaya",
    category: "Abaya",
    price: 6500,
    description: "Front open style with gold-tone detailing for special occasions.",
    colors: ["#3b2f1f", "#b8935a"],
  },
  {
    id: "fi-004",
    name: "Embroidered Burkha",
    category: "Burkha",
    price: 7200,
    description: "Fine hand-finished embroidery on sleeves and borders.",
    colors: ["#221d1a", "#8a6a3a"],
  },
  {
    id: "fi-005",
    name: "Nida Daily Abaya",
    category: "Abaya",
    price: 4200,
    description: "Lightweight, breathable and easy to maintain. Perfect for work or uni.",
    colors: ["#2d2a28", "#57504a"],
  },
  {
    id: "fi-006",
    name: "Premium Bridal Burkha",
    category: "Burkha",
    price: 9800,
    description: "Statement piece with premium fabric and detailed finishing.",
    colors: ["#17130f", "#d9bf8f"],
  },
];
