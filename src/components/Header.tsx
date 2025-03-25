import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-[rgba(11,11,11,1)] flex w-full items-center gap-[40px_83px] text-[17px] text-white font-bold text-center flex-wrap px-[73px] py-2.5 fixed top-0 z-50 max-md:px-5">
      <nav className="flex items-center gap-[40px] flex-wrap">
        <Link to="#about" className="hover:text-gray-300 transition-colors">
          About me
        </Link>
        <Link to="#skills" className="hover:text-gray-300 transition-colors">
          Skills
        </Link>
        <Link to="#projects" className="hover:text-gray-300 transition-colors">
          Projects
        </Link>
      </nav>
      <Button
        variant="outline"
        className="bg-white text-[15px] text-black px-[22px] py-[18px] rounded-[30px] border-white border-4 hover:bg-transparent hover:text-white transition-colors"
        asChild
      >
        <Link to="#contact">CONTACT ME</Link>
      </Button>
    </header>
  );
};
