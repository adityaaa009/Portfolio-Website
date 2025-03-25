export const About = () => {
  return (
    <section
      className="bg-white py-[182px] px-20 max-md:py-[100px] max-md:px-5"
      id="about"
    >
      <div className="max-w-[1018px] mx-auto">
        <h2 className="text-black text-3xl font-bold leading-none tracking-[10.66px] text-center">
          ABOUT ME
        </h2>
        <p className="text-[rgba(5,5,5,1)] text-[15px] leading-[21px] text-center mt-[68px] max-md:mt-10">
          I'm currently in my 3rd year of pursuing a Bachelors degree in
          Computer Science and Engineering, I'm a passionate full-stack
          developer with experience in building web applications using modern
          technologies like React, TypeScript, and Supabase. With a solid
          foundation in DSA (200+ LeetCode problems) and competitive
          programming, I bring problem-solving skills to every project. Beyond
          development, I've contributed to GSSoC, facilitated Google Cloud
          Arcade, and served as the GDSC DSA Co-lead at my college. When I'm not
          coding, you might find me participating in hackathons, singing, or
          exploring new ideas for my next venture.
        </p>
        <div className="flex justify-center items-center gap-5 mt-10">
          <div className="w-0.5 h-8 border-black border-solid border-2" />
          <span className="text-[15px] font-semibold">EXPLORE</span>
          <div className="w-0.5 h-8 border-black border-solid border-2" />
        </div>
        <div className="mt-[85px] grid grid-cols-2 gap-10 max-md:grid-cols-1">
          <div className="text-sm text-black">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/6c95fabb6b2d1377d5cf7dee1457d648b8f0c959?placeholderIfAbsent=true"
              alt="Design Icon"
              className="w-[143px] mb-4"
            />
            <p className="ml-[37px]">
              I provide expert visual design services, crafting unique and
              effective logos, branding, and UI/UX designs that elevate your
              brand's identity.
            </p>
          </div>
          <div className="text-black">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/4d354354350c8cf3f10a59e7958ff73dd5d8b53d?placeholderIfAbsent=true"
                alt="Development Icon"
                className="w-[69px]"
              />
              <h3 className="text-[22px] font-bold tracking-[4.08px]">
                DEVELOPMENT
              </h3>
            </div>
            <p className="text-sm mt-4">
              I specialize in building high-quality, responsive, and accessible
              websites and web applications using a range of front-end and
              back-end technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
