
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ initialTextColor = "text-white" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="w-full fixed top-0 z-50">
        <nav
          className={`w-full flex justify-between items-center px-6 py-4 transition-all duration-300 ${
            scrolled ? "bg-white text-black shadow-md" : `bg-transparent ${initialTextColor}`
          }`}
        >
          {/* Logo */}
          <h1 className="font-[Typo-4] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[15px]">
            vanshkansal.
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-7">
            <NavLink
              to="/"
              onClick={handleClick}
              className="font-[Typo-6] transition-all duration-300 hover:text-[#a9a9a9]"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="font-[Typo-6] transition-all duration-300 hover:text-[#a9a9a9]"
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="font-[Typo-6] transition-all duration-300 hover:text-[#a9a9a9]"
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="font-[Typo-6] transition-all duration-300 hover:text-[#a9a9a9]"
            >
              Contact
            </NavLink>
          </div>


          
          <button className="hidden md:block px-6 py-2 rounded-full font-[Typo-5] bg-black text-white transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 border-2 border-white">
          <a href="mailto:vanshkansal328@gmail.com?subject=Freelance%20Opportunity&body=Hi%20Vansh%2C%0A%0A%7BYour%20text%20here%7D">Hire Me</a>
</button>




          {/* Hamburger Icon */}
          <div className="md:hidden">
            {menuOpen ? (
              <FiX size={24} onClick={closeMenu} className="cursor-pointer z-50" />
            ) : (
              <FiMenu size={24} onClick={() => setMenuOpen(true)} className="cursor-pointer z-50" />
            )}
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start px-6 py-8 space-y-6">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="font-[Typo-6] transition-all duration-300 hover:text-blue-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className="font-[Typo-6] transition-all duration-300 hover:text-blue-500"
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            onClick={closeMenu}
            className="font-[Typo-6] transition-all duration-300 hover:text-blue-500"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="font-[Typo-6] transition-all duration-300 hover:text-blue-500"
          >
            Contact
          </NavLink>
          
<a
  href="mailto:vanshkansal328@gmail.com?subject=Freelance%20Opportunity&body=Hi%20Vansh%2C%0A%0A%7BYour%20text%20here%7D"
  className="px-6 py-2 rounded-full font-[Typo-5] bg-black text-white transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 border-2 border-white block"
>
  Hire Me
</a>


        </div>
      </div>
    </>
  );
};

export default Navbar;
