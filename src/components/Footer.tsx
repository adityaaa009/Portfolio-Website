export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[rgba(26,26,26,1)] px-20 py-[72px] max-md:px-5">
      <div className="max-w-[357px] mx-auto text-center">
        <button
          onClick={scrollToTop}
          className="flex flex-col items-center gap-4 w-full hover:opacity-80 transition-opacity"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/1e0e40f9d510770385e336a274aca9b6ec2202aa?placeholderIfAbsent=true"
            alt="Arrow Up"
            className="w-[15px]"
          />
          <span className="text-white text-[15px] font-bold tracking-[2.78px]">
            BACK TO TOP
          </span>
        </button>

        <div className="flex justify-center gap-5 mt-[52px]">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/b0ade5df0c28d42edb2f61965e44f8978485f734?placeholderIfAbsent=true"
              alt="Social Icon"
              className="w-[30px]"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/dd4f498b331d0af6358f9d6a4990e473f65af68e?placeholderIfAbsent=true"
              alt="Social Icon"
              className="w-[30px]"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/b15b65b6c12eb5407f0071484e274bc38602a69c?placeholderIfAbsent=true"
              alt="Social Icon"
              className="w-[30px]"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8f7387d3a7314782b87a264858bb7881/b7dd1023a55f251086890aa78196a09c7aba1220?placeholderIfAbsent=true"
              alt="Social Icon"
              className="w-[30px]"
            />
          </a>
        </div>

        <p className="text-white text-lg mt-11">
          <span className="font-bold">@2025 Aditya Sharma </span>
          <span>All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
};
