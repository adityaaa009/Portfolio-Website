
import { Github, Linkedin, AtSign } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-grow">
        {/* Left side - Gray */}
        <div className="w-1/2 bg-[#e6e6e6] flex flex-col justify-center px-16 py-24 md:py-0">
          <div className="max-w-md space-y-4">
            <h2 className="text-xl font-normal">Hi, I am</h2>
            <h1 className="text-4xl md:text-6xl font-bold">Aditya Sharma</h1>
            <p className="text-[#666] font-medium">Full-Stack Developer (MERN Stack)</p>
            
            <div className="flex space-x-4 pt-8">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#ddd] p-3 rounded-full hover:bg-[#ccc] transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#ddd] p-3 rounded-full hover:bg-[#ccc] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:example@example.com" 
                className="bg-[#ddd] p-3 rounded-full hover:bg-[#ccc] transition-colors"
              >
                <AtSign size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Right side - Black with image */}
        <div className="w-1/2 bg-black relative">
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            {/* Navigation on top */}
            <div className="flex justify-end items-center gap-8 text-sm">
              <a href="#about" className="text-white hover:text-gray-300 transition-colors">About me</a>
              <a href="#skills" className="text-white hover:text-gray-300 transition-colors">Skills</a>
              <a href="#projects" className="text-white hover:text-gray-300 transition-colors">Projects</a>
              <button className="bg-white text-black rounded-full px-4 py-1 text-sm hover:bg-gray-200">
                CONTACT ME
              </button>
            </div>
            
            {/* Profile image will be centered */}
            <div className="flex-grow flex items-center justify-center">
              <img 
                src="/lovable-uploads/cd5c3d3e-f636-43af-be0e-b3c218eb955c.png" 
                alt="Profile" 
                className="max-h-[80%] object-contain"
              />
            </div>
            
            {/* Empty space at bottom for visual balance */}
            <div></div>
          </div>
        </div>
      </div>
      
      {/* Bottom black banner */}
      <div className="bg-[#1e1e1e] text-white py-12 px-16">
        <h2 className="text-2xl font-bold mb-3">We Are Builders of a Connected Future</h2>
        <p className="text-sm text-gray-300 max-w-3xl mb-6">
          I believe technology is a bridge — connecting ideas, people, and possibilities. Every line of code has the power to solve problems, spark innovation, and bring us together. My experience spans various industries, and I'm passionate about creating solutions that contribute to our collective growth. Together, we can bridge a future where technology empowers, inspires, and unites us all.
        </p>
        <button className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
          READ MORE
        </button>
      </div>
    </section>
  );
};
