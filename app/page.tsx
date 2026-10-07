import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100 font-mono antialiased">
      <Navbar />
      <main className="max-w-6xl md:mx-18 px-6 sm:px-6 lg:px-8 space-y-28 py-4 lg:py-6">
        <Intro />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
