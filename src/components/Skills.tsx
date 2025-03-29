
export const Skills = () => {
  const currentSkills = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML5",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS3",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      name: "PYTHON",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JAVASCRIPT",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "REACT",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      name: "BOOTSTRAP",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      name: "GIT",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      name: "FIGMA",
    },
  ];

  const learningSkills = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "NODEJS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      name: "MySQL",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "MONGODB",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      name: "TYPESCRIPT",
    },
  ];

  return (
    <section className="bg-[#e6e6e6] py-24 px-6 md:px-12" id="skills">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-header mb-16">SKILLS</h2>
        </div>

        <div className="mb-20">
          <h3 className="text-lg font-bold mb-12">USING NOW:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
            {currentSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 object-contain mb-4"
                />
                <span className="text-sm tracking-wider">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-lg font-bold mb-12">LEARNING:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
            {learningSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 object-contain mb-4"
                />
                <span className="text-sm tracking-wider">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
