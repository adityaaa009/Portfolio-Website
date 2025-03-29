
export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#e6e6e6]">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-header mb-16">ABOUT ME</h2>
          
          <p className="text-center text-sm leading-relaxed max-w-3xl">
            I'm currently in my 3rd year of pursuing a Bachelors degree in Computer Science and Engineering. I'm a passionate full-stack developer with experience in building web applications using modern technologies like React, TypeScript, and Supabase. With a solid foundation in DSA (200+ LeetCode problems) and competitive programming, I bring problem-solving skills to every project. Beyond development, I've contributed to GSSoC, facilitated Google Cloud Arcade, and served as the GDSC DSA Co-lead at my college. When I'm not coding, you might find me participating in hackathons, singing, or exploring new ideas for my next venture.
          </p>
          
          <button className="border-2 border-black px-8 py-2 mt-8 text-sm hover:bg-black hover:text-white transition-colors">
            EXPLORE
          </button>
          
          <div className="separator mt-16">
            <span></span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-[#f2f2f2] p-8 shadow-md">
            <h3 className="text-base font-bold tracking-wide mb-4">DESIGN</h3>
            <p className="text-sm leading-relaxed">
              I provide expert visual design services, crafting unique and effective logos, branding, and UI/UX designs that elevate your brand's identity.
            </p>
          </div>
          
          <div className="bg-[#f2f2f2] p-8 shadow-md">
            <h3 className="text-base font-bold tracking-wide mb-4">DEVELOPMENT</h3>
            <p className="text-sm leading-relaxed">
              I specialize in building high-quality, responsive, and accessible websites and web applications using a range of front-end and back-end technologies.
            </p>
          </div>
          
          <div className="bg-[#f2f2f2] p-8 shadow-md">
            <h3 className="text-base font-bold tracking-wide mb-4">MAINTENANCE</h3>
            <p className="text-sm leading-relaxed">
              I offer ongoing maintenance and support services to ensure your website continues to operate smoothly, implementing updates, fixing issues, and making recommendations.
            </p>
          </div>
        </div>
        
        <div className="separator mt-16">
          <span></span>
        </div>
      </div>
    </section>
  );
};
