
import { Code2, GraduationCap, Briefcase, Download } from "lucide-react";
import { Button } from "./ui/button";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              I am a passionate Full Stack Developer with a strong foundation in web development and a keen eye for creating elegant solutions. My journey in technology began with a curiosity for building things that make a difference.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              With expertise in both front-end and back-end development, I specialize in creating responsive, user-friendly applications that solve real-world problems. I believe in writing clean, maintainable code and following best practices to ensure the highest quality of work.
            </p>

            <div className="flex justify-start">
              <Button
                variant="default"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1z83S0ikieimv86Iop3aKTmSds9ADrwTL/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• React.js</li>
                  <li>• TypeScript</li>
                  <li>• HTML5/CSS3</li>
                  <li>• JavaScript</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Backend</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Node.js</li>
                  <li>• Express.js</li>
                  <li>• MongoDB</li>
                  <li>• REST APIs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Education</h3>
                <p className="text-gray-600">Bachelor of Technology in Computer Science</p>
                <p className="text-sm text-gray-500">2020 - 2024</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Experience</h3>
                <p className="text-gray-600">Full Stack Developer</p>
                <p className="text-sm text-gray-500">2023 - Present</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">HTML5</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">CSS3</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
