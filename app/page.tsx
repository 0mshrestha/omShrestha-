import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100 font-mono antialiased">
      <Navbar />
      <main className="max-w-6xl mx-18 px-4 sm:px-6 lg:px-8 space-y-28 py-8">
        <Hero />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
