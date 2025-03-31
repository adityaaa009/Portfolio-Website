import { Github, Linkedin, AtSign } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-xl font-normal text-gray-600">Hi, I am</h2>
            <h1 className="text-4xl md:text-6xl font-bold">Aditya Sharma</h1>
            <p className="text-xl text-gray-600">Full-Stack Developer (MERN Stack)</p>
            <p className="text-gray-500 max-w-xl">
              Passionate about creating innovative web solutions and building scalable applications.
              Specialized in the MERN stack with a focus on clean code and user experience.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="https://github.com/adityaaa009" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/aditya-sharma-27624123b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:adityalkosharma@gmail.com" 
                className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <AtSign size={20} />
                <span>Contact</span>
              </a>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <img 
                src="/Profile Pic.png" 
                alt="Aditya Sharma" 
                className="rounded-full object-cover w-full h-full shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
