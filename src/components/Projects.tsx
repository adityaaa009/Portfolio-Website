import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

type FilterCategory = "ALL" | "CODED" | "DESIGNED";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("ALL");
  
  const projects = [
    {
      id: 1,
      title: "Zappy Campus Canteen Manager",
      category: "CODED",
      image: "/projects/ZAPPY.png",
      description: "A comprehensive application designed to streamline the management of campus canteens with various features to improve efficiency.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/adityaaa009/ZAPPY-campus-canteen-manager",
      liveUrl: "https://zappy-canteen.netlify.app/"
    },
    {
      id: 2,
      title: "Scoutant Team Builder",
      category: "CODED",
      image: "/projects/SCOUTANT.png",
      description: "A specialized platform designed to help Valorant players build and manage teams, connecting players for competitive rosters.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/adityaaa009/SCOUTANT-the-ultimate-team-builder",
      liveUrl: "https://scoutant.netlify.app/"
    },
    {
      id: 3,
      title: "Amazon Clone",
      category: "CODED",
      image: "/projects/Amazon_Clone.png",
      description: "A front-end clone of amazon.com with responsive design and modern UI components.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/adityaaa009/AMAZON_Clone",
      liveUrl: "https://adityaaa009.github.io/AMAZON_Clone/"
    },
    {
      id: 4,
      title: "Spotify Clone",
      category: "CODED",
      image: "/projects/Spotify_Clone.png",
      description: "A music streaming platform frontend with responsive design and modern UI.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/adityaaa009/Music-Streaming-Platform",
      liveUrl: "https://adityaaa009.github.io/Music-Streaming-Platform/"
    },
    {
      id: 5,
      title: "Pixel Perfect",
      category: "DESIGNED",
      image: "/projects/Pixel_Perfect.png",
      description: "A photography portfolio website with beautiful UI/UX design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/adityaaa009/Pixel_Perfect",
      liveUrl: "https://adityaaa009.github.io/Pixel_Perfect/"
    },
    {
      id: 6,
      title: "Google Sign-Up Page",
      category: "DESIGNED",
      image: "/projects/Google_SignUp_Page.png",
      description: "A pixel-perfect clone of Google's sign-up page with modern design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/adityaaa009/Welcome-To-Google",
      liveUrl: "https://adityaaa009.github.io/Welcome-To-Google/"
    },
  ];
  
  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
        </div>
        
        {/* Filter navigation */}
        <div className="flex justify-center space-x-8 mb-12">
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === "ALL" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setActiveFilter("ALL")}
          >
            All Projects
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === "CODED" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setActiveFilter("CODED")}
          >
            Coded
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === "DESIGNED" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setActiveFilter("DESIGNED")}
          >
            Designed
          </button>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center space-x-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
