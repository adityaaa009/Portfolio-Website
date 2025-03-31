import { Github, Linkedin, AtSign } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Left section - Light gray */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[#f5f5f5]"></div>
      
      {/* Right section - Black */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black"></div>
      
      {/* Diagonal divider */}
      <div 
        className="absolute top-0 left-1/2 h-full w-1/4 bg-black transform -skew-x-12 -translate-x-1/2"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      ></div>

      {/* Navigation */}
      <nav className="absolute top-0 right-0 p-8 z-10">
        <ul className="flex items-center space-x-8">
          <li><a href="#about" className="text-white hover:text-gray-300">About me</a></li>
          <li><a href="#skills" className="text-white hover:text-gray-300">Skills</a></li>
          <li><a href="#projects" className="text-white hover:text-gray-300">Projects</a></li>
          <li>
            <a 
              href="#contact" 
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              CONTACT ME
            </a>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="container mx-auto px-4 h-screen">
        <div className="flex items-center h-full">
          {/* Left side - Content */}
          <div className="w-1/2 pr-12 z-10">
            <div className="max-w-xl">
              <h2 className="text-xl mb-2">Hi, I am</h2>
              <h1 className="text-6xl font-bold mb-4">Aditya Sharma</h1>
              <p className="text-gray-600 text-xl mb-6">Full-Stack Developer (MERN Stack)</p>
              
              <div className="flex gap-4 mt-8">
                <a 
                  href="mailto:adityalkosharma@gmail.com"
                  className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/adityaaa009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C19.1375 20.1625 22 16.4125 22 12C22 6.475 17.525 2 12 2Z" fill="black"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/aditya-sharma-27624123b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-1/2 relative z-10">
            <img
              src="/Profile Pic.png"
              alt="Aditya Sharma"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
