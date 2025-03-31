import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black py-4" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-end items-center gap-8">
        <a 
          href="#about" 
          className={`transition-colors text-sm px-4 py-2 rounded ${
            scrolled 
              ? "text-white hover:text-gray-300" 
              : "text-black bg-white/80 hover:bg-white"
          }`}
        >
          About me
        </a>
        <a 
          href="#skills" 
          className={`transition-colors text-sm px-4 py-2 rounded ${
            scrolled 
              ? "text-white hover:text-gray-300" 
              : "text-black bg-white/80 hover:bg-white"
          }`}
        >
          Skills
        </a>
        <a 
          href="#projects" 
          className={`transition-colors text-sm px-4 py-2 rounded ${
            scrolled 
              ? "text-white hover:text-gray-300" 
              : "text-black bg-white/80 hover:bg-white"
          }`}
        >
          Projects
        </a>
        <Button 
          className={`rounded-full px-6 transition-colors ${
            scrolled
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-black text-white hover:bg-gray-900"
          }`}
          asChild
        >
          <a href="#contact">CONTACT ME</a>
        </Button>
      </div>
    </header>
  );
};
