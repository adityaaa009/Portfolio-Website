
import { Facebook, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-6 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center mb-6 hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl mb-1">&#8226;</span>
            <span className="text-xs tracking-widest">BACK TO TOP</span>
          </button>

          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="#" 
              className="hover:text-gray-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#" 
              className="hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="hover:text-gray-300 transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="hover:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-xs text-center">
            @2025 Aditya Sharma All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
