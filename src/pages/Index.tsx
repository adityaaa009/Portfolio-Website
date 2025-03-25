
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
