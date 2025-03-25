export const Hero = () => {
  return (
    <section
      className="bg-[rgba(215,215,215,1)] overflow-hidden pl-20 pt-[94px] max-md:pl-5"
      id="about"
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[32%] max-md:w-full max-md:ml-0">
          <div className="z-10 flex w-full flex-col self-stretch my-auto max-md:max-w-full max-md:mr-[-17px] max-md:mt-10">
            <div className="self-stretch flex flex-col items-stretch text-black font-bold text-center pl-[5px] max-md:max-w-full">
              <h1 className="text-[40px]">
                Hi, I am
                <span className="text-[75px] block mt-[7px] max-md:text-[40px]">
                  Aditya Sharma
                </span>
              </h1>
            </div>
            <p className="text-[rgba(144,144,144,1)] text-[25px] font-extrabold text-center mt-[25px] max-md:max-w-full">
              Full-Stack Developer (MERN Stack)
            </p>
            <div className="flex items-stretch gap-[31px] mt-[142px] max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/858ca6d4033a4218bb353dfcd0669a338014557c?placeholderIfAbsent=true"
                alt="Social Icon 1"
                className="aspect-[1.09] object-contain w-[61px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] shrink-0"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/d61fb768912c12483f219ad70da6ef1c4a5ccb1d?placeholderIfAbsent=true"
                alt="Social Icon 2"
                className="aspect-[1.09] object-contain w-[61px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] shrink-0"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/798c968755a06bad186b2581fe2a758c376a5a02?placeholderIfAbsent=true"
                alt="Social Icon 3"
                className="aspect-[1.09] object-contain w-[61px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] shrink-0"
              />
            </div>
          </div>
        </div>
        <div className="w-[68%] ml-5 max-md:w-full max-md:ml-0">
          <div className="relative min-h-[1022px] max-md:min-h-[500px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/da75e6d03944d1ea1159e322cad422c10e2a662f?placeholderIfAbsent=true"
              alt="Hero Background"
              className="absolute h-full w-full object-cover inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
