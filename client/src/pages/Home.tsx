import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Architecture from "@/components/Architecture";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Architecture />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
