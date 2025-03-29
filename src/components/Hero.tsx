
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
        
        {/* Right side - Black with image and text */}
        <div className="w-1/2 bg-black text-white">
          <div className="h-full flex flex-col justify-center items-center px-10 py-12">
            <div className="text-center mb-6">
              <h2 className="text-xl font-normal">Hi, I am</h2>
              <h1 className="text-4xl font-bold mb-2">Aditya Sharma</h1>
              <p className="text-gray-300">Full-Stack Developer (MERN Stack)</p>
            </div>
            
            <div className="w-full flex justify-center">
              <img 
                src="/lovable-uploads/5497e637-0a3a-4a08-b3b5-ec4025859a75.png" 
                alt="Profile" 
                className="max-h-[300px] object-contain"
              />
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#333] p-3 rounded-full hover:bg-[#444] transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#333] p-3 rounded-full hover:bg-[#444] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:example@example.com" 
                className="bg-[#333] p-3 rounded-full hover:bg-[#444] transition-colors"
              >
                <AtSign size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom black banner (reduced size) */}
      <div className="bg-[#1e1e1e] text-white py-8 px-16">
        <h2 className="text-2xl font-bold mb-2">We Are Builders of a Connected Future</h2>
        <p className="text-sm text-gray-300 max-w-3xl mb-4">
          I believe technology is a bridge — connecting ideas, people, and possibilities. Every line of code has the power to solve problems, spark innovation, and bring us together. My experience spans various industries, and I'm passionate about creating solutions that contribute to our collective growth. Together, we can bridge a future where technology empowers, inspires, and unites us all.
        </p>
        <button className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
          READ MORE
        </button>
      </div>
    </section>
  );
};
