
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        scrolled ? "bg-[#0F0F0F] py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-bold text-2xl">T<span className="text-[#7B4AE2]">.</span></a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white/70 hover:text-white transition-colors">About me</a>
          <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
          <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
          <a href="#process" className="text-white/70 hover:text-white transition-colors">Process</a>
          <Button 
            className="bg-[#7B4AE2] hover:bg-[#6B3AD2] text-white rounded-full px-6"
            asChild
          >
            <a href="#contact">Contact me</a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F0F0F] border-t border-white/10 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="text-white/70 hover:text-white transition-colors p-2" onClick={() => setIsOpen(false)}>About me</a>
            <a href="#services" className="text-white/70 hover:text-white transition-colors p-2" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors p-2" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#process" className="text-white/70 hover:text-white transition-colors p-2" onClick={() => setIsOpen(false)}>Process</a>
            <Button 
              className="bg-[#7B4AE2] hover:bg-[#6B3AD2] text-white rounded-full w-full"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <a href="#contact">Contact me</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
