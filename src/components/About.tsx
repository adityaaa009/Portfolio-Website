
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#151515]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Profile Image" 
                className="rounded-lg object-cover h-[500px] w-full"
              />
              <div className="absolute inset-0 bg-[#7B4AE2]/10 rounded-lg"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-sm uppercase tracking-wider text-[#7B4AE2]">About me</h2>
            <h3 className="text-3xl md:text-4xl font-bold">I'm a Professional Designer & Developer</h3>
            
            <p className="text-white/70">
              I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 py-4">
              <div>
                <h4 className="text-xl font-bold">5+</h4>
                <p className="text-white/70">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-xl font-bold">100+</h4>
                <p className="text-white/70">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-xl font-bold">50+</h4>
                <p className="text-white/70">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-xl font-bold">10+</h4>
                <p className="text-white/70">Awards Won</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="text-white border-white/20 rounded-full px-6 py-5 hover:bg-white/5"
            >
              <DownloadIcon size={16} className="mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
