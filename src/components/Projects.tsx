
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
};

type FilterCategory = "All" | "UI/UX" | "Web Design" | "App Design";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Finance Mobile App",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      url: "#"
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.0.3",
      url: "#"
    },
    {
      id: 3,
      title: "Health Tracker App",
      category: "App Design",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      url: "#"
    },
    {
      id: 4,
      title: "Corporate Branding",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3",
      url: "#"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3",
      url: "#"
    },
    {
      id: 6,
      title: "Travel Booking Platform",
      category: "App Design",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      url: "#"
    }
  ];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#151515]">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm uppercase tracking-wider text-[#7B4AE2]">My Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h3>
          <p className="text-white/70 mt-4">
            Here are some of my recent projects. I've worked on a wide range of projects, from websites to mobile apps.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {["All", "UI/UX", "Web Design", "App Design"].map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={`rounded-full px-6 ${activeFilter === category ? 'bg-[#7B4AE2] hover:bg-[#6B3AD2]' : 'text-white border-white/20 hover:bg-white/5'}`}
              onClick={() => setActiveFilter(category as FilterCategory)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="group relative rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="text-[#7B4AE2]">{project.category}</p>
                <a 
                  href={project.url} 
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight size={20} className="text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
