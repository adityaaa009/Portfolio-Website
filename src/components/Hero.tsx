
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 px-6 md:px-12 flex items-center">
      <div className="absolute inset-0 bg-[#0F0F0F] z-[-1]">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-[#7B4AE280] to-transparent opacity-20"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Creative <span className="text-[#7B4AE2]">design</span> and <span className="text-[#7B4AE2]">development</span> studio
            </h1>
            
            <p className="text-white/70 text-lg max-w-md">
              I design and code beautifully simple things, and I love what I do.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <Button 
                className="bg-[#7B4AE2] hover:bg-[#6B3AD2] text-white rounded-full px-8 py-6"
                asChild
              >
                <a href="#contact">Let's talk</a>
              </Button>
              
              <Button 
                variant="outline" 
                className="text-white border-white/20 rounded-full px-8 py-6 hover:bg-white/5"
                asChild
              >
                <a href="#projects">My work</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Hero Image" 
                className="rounded-lg object-cover h-[500px] w-full"
              />
              <div className="absolute inset-0 bg-[#7B4AE2]/20 rounded-lg"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a 
            href="#about"
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
