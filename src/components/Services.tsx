
import { Layers, Code, Monitor, PenTool } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Layers size={24} className="text-[#7B4AE2]" />,
      title: "UI/UX Design",
      description: "I create beautiful, intuitive interfaces that are easy to use and visually appealing."
    },
    {
      icon: <PenTool size={24} className="text-[#7B4AE2]" />,
      title: "Brand Identity",
      description: "I help businesses establish their brand through logos, color schemes, and other visual elements."
    },
    {
      icon: <Code size={24} className="text-[#7B4AE2]" />,
      title: "Web Development",
      description: "I build responsive websites that work seamlessly across all devices and browsers."
    },
    {
      icon: <Monitor size={24} className="text-[#7B4AE2]" />,
      title: "App Development",
      description: "I create native and cross-platform mobile applications for iOS and Android."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-[#0F0F0F]">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-[#7B4AE2]">My services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2">Services I Offer</h3>
          <p className="text-white/70 mt-4">
            I help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#151515] rounded-lg p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#7B4AE2]/20"
            >
              <div className="bg-[#1A1A1A] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
