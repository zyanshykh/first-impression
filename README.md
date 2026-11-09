# First Impression: Ladies Burkhas & Abayas

Next.js 15 + TypeScript + Tailwind CSS + Motion. Order WhatsApp pe hota hai.

## Run karna

```bash
npm install
npm run dev
```

Phir browser mein http://localhost:3000 kholein.

## Kya kahan badalna hai

- **WhatsApp number**: `lib/whatsapp.ts` (abhi 03222043700)
- **Products, naam, qeemat**: `lib/products.ts`
- **Asli photos**: photo ko `public/products/` mein rakhein aur product mein `image: "/products/photo.jpg"` likhein
- **Colors**: `tailwind.config.ts`

## Deploy (free)

GitHub pe push karein, phir vercel.com pe repo import kar dein.
