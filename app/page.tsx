import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowToOrder from "@/components/HowToOrder";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <HowToOrder />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
