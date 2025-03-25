
export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "I conduct thorough research to understand your business goals, target audience, and competition."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Based on the research findings, I develop a strategic plan that outlines the project scope, timeline, and deliverables."
    },
    {
      number: "03",
      title: "Design",
      description: "I create visually stunning designs that are user-friendly, responsive, and align with your brand identity."
    },
    {
      number: "04",
      title: "Development",
      description: "I bring the designs to life with clean, efficient code that follows best practices and industry standards."
    },
    {
      number: "05",
      title: "Testing",
      description: "I thoroughly test the website or application across different devices and browsers to ensure optimal performance."
    },
    {
      number: "06",
      title: "Launch",
      description: "Once everything is ready, I help you launch your project and provide post-launch support to ensure smooth operation."
    }
  ];

  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-[#0F0F0F]">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-[#7B4AE2]">How I Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2">My Process</h3>
          <p className="text-white/70 mt-4">
            I follow a structured process to ensure that every project is completed on time and to the highest standard.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-[#151515] rounded-lg p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:border-b-2 hover:border-[#7B4AE2]"
            >
              <span className="text-4xl font-bold text-[#7B4AE2]/30">{step.number}</span>
              <h4 className="text-xl font-bold mt-4 mb-4">{step.title}</h4>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
