
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
        scrolled ? "bg-black py-4" : "bg-black py-4"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-end items-center gap-8">
        <a href="#about" className="text-white hover:text-gray-300 transition-colors text-sm">About me</a>
        <a href="#skills" className="text-white hover:text-gray-300 transition-colors text-sm">Skills</a>
        <a href="#projects" className="text-white hover:text-gray-300 transition-colors text-sm">Projects</a>
        <Button 
          className="bg-white text-black rounded-full px-6 hover:bg-gray-200"
          asChild
        >
          <a href="#contact">CONTACT ME</a>
        </Button>
      </div>
    </header>
  );
};
