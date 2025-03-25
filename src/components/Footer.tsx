
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com" },
    { icon: <Twitter size={20} />, url: "https://twitter.com" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com" },
    { icon: <Instagram size={20} />, url: "https://instagram.com" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] border-t border-white/10 py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="font-bold text-2xl">T<span className="text-[#7B4AE2]">.</span></a>
            <p className="text-white/50 mt-2">
              Designing and developing beautiful digital experiences.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                className="bg-[#1A1A1A] hover:bg-[#7B4AE2] transition-colors duration-300 rounded-full w-10 h-10 flex items-center justify-center text-white/70 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {currentYear} Tomasz Gajda. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-white/50">
              <li><a href="#" className="hover:text-[#7B4AE2] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#7B4AE2] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#7B4AE2] transition-colors">Cookies Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
