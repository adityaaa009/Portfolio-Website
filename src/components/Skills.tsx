export const Skills = () => {
  const currentSkills = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/07da8a4fd9fe7f87cb03b6f37bed6fe5b3764389?placeholderIfAbsent=true",
      name: "PYTHON",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/9462896415837f12ae0f80c34a42dcc5775a11cd?placeholderIfAbsent=true",
      name: "HTML5",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/ab75445ac6c715527881f9750ab3fd30dc9ebf2f?placeholderIfAbsent=true",
      name: "CSS3",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/2d5153e6274c46a2fe8537ef3756fde1c3509528?placeholderIfAbsent=true",
      name: "JAVASCRIPT",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/ef5bc3bac5debafebec2032931b9cce1c86f76f9?placeholderIfAbsent=true",
      name: "BOOTSTRAP",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/a36fa39e395d51a9828497b5b2d819481b610ad1?placeholderIfAbsent=true",
      name: "GIT",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/fee217c983841d5789bea2aa9cb72ee9ea1d0931?placeholderIfAbsent=true",
      name: "FIGMA",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/086ba9c3c2e03b5b19c158c04c185b79e819b3b5?placeholderIfAbsent=true",
      name: "REACT",
    },
  ];

  const learningSkills = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/114a153d95caa15004140e07c3bb6b3a1915440f?placeholderIfAbsent=true",
      name: "MONGODB",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/d2169f140d66b0bf9709174dfd431779c6b3f7c1?placeholderIfAbsent=true",
      name: "MySQL",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/557002d059529cf3f703431c5411bed658fef2b5?placeholderIfAbsent=true",
      name: "NODEJS",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/37d3bbb734db1256e3da964f8103703ea4e5e0b6?placeholderIfAbsent=true",
      name: "TYPESCRIPT",
    },
  ];

  const otherSkills = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/434f5f00439a3d0aede2c34fd5582a95086e316b?placeholderIfAbsent=true",
      name: "JAVA",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/1e0e40f9d510770385e336a274aca9b6ec2202aa?placeholderIfAbsent=true",
      name: "ENGLISH",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/b0ade5df0c28d42edb2f61965e44f8978485f734?placeholderIfAbsent=true",
      name: "SUPABASE",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/dd4f498b331d0af6358f9d6a4990e473f65af68e?placeholderIfAbsent=true",
      name: "TAILWIND CSS",
    },
  ];

  return (
    <section className="bg-white py-20 px-20 max-md:px-5" id="skills">
      <div className="max-w-[1018px] mx-auto">
        <h2 className="text-3xl font-bold text-center tracking-[10.66px] border-8 border-black py-[43px] mb-20">
          SKILLS
        </h2>

        <div className="mb-20">
          <h3 className="text-3xl font-bold tracking-[5.56px] mb-10">
            USING NOW:
          </h3>
          <div className="grid grid-cols-4 gap-10 max-md:grid-cols-2">
            {currentSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <span className="text-2xl tracking-[3.25px]">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold tracking-[5.56px] mb-10">
            LEARNING:
          </h3>
          <div className="grid grid-cols-4 gap-10 max-md:grid-cols-2">
            {learningSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <span className="text-2xl tracking-[3.25px]">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold tracking-[5.56px] mb-10">
            OTHER SKILLS:
          </h3>
          <div className="grid grid-cols-4 gap-10 max-md:grid-cols-2">
            {otherSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <span className="text-2xl tracking-[3.25px]">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
