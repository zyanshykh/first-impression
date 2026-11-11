export type Category = "Burkha" | "Abaya" | "Hijab";
export type Occasion = "Daily Wear" | "Party Wear";

export interface Product {
  id: string;
  name: string;
  category: Category;
  occasion?: Occasion;
  price: number; // PKR, asli (sale se pehle wali) qeemat
  salePrice?: number; // agar sale hai to yahan nayi qeemat likhein
  isNew?: boolean;
  description: string;
  colors: [string, string]; // placeholder gradient (jab tak photo na ho)
  image?: string; // e.g. "/products/black-butterfly.jpg" (public/products mein rakhein)
}

export const products: Product[] = [
  {
    id: "fi-001",
    name: "Classic Black Burkha",
    category: "Burkha",
    occasion: "Daily Wear",
    price: 4500,
    description: "Soft nida fabric, full-length, comfortable fit for daily wear.",
    colors: ["#1b1816", "#3a322c"],
  },
  {
    id: "fi-002",
    name: "Butterfly Abaya",
    category: "Abaya",
    occasion: "Daily Wear",
    price: 5800,
    salePrice: 5200,
    description: "Flowy butterfly cut with elegant sleeves and light fabric.",
    colors: ["#2a2420", "#6b5a48"],
  },
  {
    id: "fi-003",
    name: "Royal Front Open Abaya",
    category: "Abaya",
    occasion: "Party Wear",
    price: 6500,
    isNew: true,
    description: "Front open style with gold-tone detailing for special occasions.",
    colors: ["#3b2f1f", "#b8935a"],
  },
  {
    id: "fi-004",
    name: "Embroidered Burkha",
    category: "Burkha",
    occasion: "Party Wear",
    price: 8200,
    salePrice: 7200,
    description: "Fine hand-finished embroidery on sleeves and borders.",
    colors: ["#221d1a", "#8a6a3a"],
  },
  {
    id: "fi-005",
    name: "Nida Daily Abaya",
    category: "Abaya",
    occasion: "Daily Wear",
    price: 4200,
    description: "Lightweight, breathable and easy to maintain. Perfect for work or uni.",
    colors: ["#2d2a28", "#57504a"],
  },
  {
    id: "fi-006",
    name: "Premium Bridal Burkha",
    category: "Burkha",
    occasion: "Party Wear",
    price: 9800,
    isNew: true,
    description: "Statement piece with premium fabric and detailed finishing.",
    colors: ["#17130f", "#d9bf8f"],
  },
  {
    id: "fi-007",
    name: "Georgette Hijab",
    category: "Hijab",
    price: 1200,
    description: "Light georgette, easy to drape, stays in place all day.",
    colors: ["#3a2f2a", "#a58a6a"],
  },
  {
    id: "fi-008",
    name: "Chiffon Hijab Set",
    category: "Hijab",
    price: 1800,
    salePrice: 1500,
    description: "Soft chiffon hijab with matching under-cap.",
    colors: ["#2b2522", "#c9b28a"],
  },
];
