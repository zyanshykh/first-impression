import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Products from "@/components/Products";
import HowToOrder from "@/components/HowToOrder";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Products />
        <HowToOrder />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
