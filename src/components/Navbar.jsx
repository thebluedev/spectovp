import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute w-full z-[70] text-black flex items-center justify-between backdrop-blur border-solid border-0 border-b-[0.05px] border-[#ffffff2a]">
      <div className="flex items-center">
        <div className="text-2xl font-bold ml-4 py-4">SpectoV</div>
      </div>
      <div className="hidden md:flex items-center space-x-16 ">

        <a href="https://example.com" className="transition-colors duration-500 hover:text-[#43A7B6]">
          Products
        </a>
        <a href="#ar" className="transition-colors duration-500 hover:text-[#DD5061]">
          AR
        </a>
        <a href="#support" className="transition-colors duration-500 hover:text-[#FDC654]">
          Support
        </a>
        
      </div>

      <div className="hidden md:block">
        <button className="transition-colors duration-500 bg-[#dd5061] hover:bg-[#ffffff] hover:text-black text-black font-bold rounded-none flex items-center h-16 px-[5em]">
            Shop
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="mobile-menu-button bg-[#dd5061] rounded-none h-16 px-8"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden w-full absolute top-20 left-0  text-black text-center backdrop-blur-sm z-[70]`}
      >
        <a href="#products" className="block py-4 hover:bg-[#43a7b66f] transition-colors duration-500">
          Products
        </a>
        <a href="#ar" className="block py-4 hover:bg-[#dd50606b] transition-colors duration-500">
          AR
        </a>
        <a href="#support" className="block py-4 hover:bg-[#ffdb6576] transition-colors duration-500">
          Support
        </a>
        <a href="#shop" className="block py-4 rounded-none hover:bg-[#ffffffbc] hover:text-black transition-colors duration-500">
          Shop
        </a>
      </div>
    </nav>
  );
};

export default Navbar;