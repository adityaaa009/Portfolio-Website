
import { useState } from "react";

type FilterCategory = "ALL" | "CODED" | "DESIGNED";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("ALL");
  
  const projects = [
    {
      id: 1,
      title: "Zappy Food App",
      category: "DESIGNED",
      image: "/lovable-uploads/111d634e-710f-44df-a892-085fab48aecb.png",
    },
    {
      id: 2,
      title: "Scoutant Analytics",
      category: "CODED",
      image: "/lovable-uploads/111d634e-710f-44df-a892-085fab48aecb.png",
    },
    {
      id: 3,
      title: "Google Login",
      category: "CODED",
      image: "/lovable-uploads/111d634e-710f-44df-a892-085fab48aecb.png",
    },
    {
      id: 4,
      title: "Amazon Product Page",
      category: "DESIGNED",
      image: "/lovable-uploads/111d634e-710f-44df-a892-085fab48aecb.png",
    },
  ];
  
  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative">
      {/* Header with background image */}
      <div className="relative py-20 bg-gray-200">
        <div className="container mx-auto flex justify-center">
          <h2 className="section-header relative z-10">PORTFOLIO</h2>
        </div>
      </div>
      
      {/* Filter navigation */}
      <div className="bg-black py-4 px-8">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-12">
            <button
              className={`text-sm ${activeFilter === "ALL" ? "text-white border-b-2 border-white pb-1" : "text-gray-500"}`}
              onClick={() => setActiveFilter("ALL")}
            >
              ALL
            </button>
            <button
              className={`text-sm ${activeFilter === "CODED" ? "text-white border-b-2 border-white pb-1" : "text-gray-500"}`}
              onClick={() => setActiveFilter("CODED")}
            >
              CODED
            </button>
            <button
              className={`text-sm ${activeFilter === "DESIGNED" ? "text-white border-b-2 border-white pb-1" : "text-gray-500"}`}
              onClick={() => setActiveFilter("DESIGNED")}
            >
              DESIGNED
            </button>
          </div>
        </div>
      </div>
      
      {/* Projects grid */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map(project => (
              <div key={project.id} className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
