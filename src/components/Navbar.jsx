import React, { useState, useEffect } from "react";
import logo from "../images/navlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to handle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //

  return (
    <header className="sticky top-0 z-50 flex justify-between bg-gray-300 items-center py-3 px-6 md:px-16 transition-all duration-300">
      <img className="w-12 md:w-20 cursor-pointer" src={logo} alt="Logo" />

      {/* Navigation Links for Desktop */}
      <nav className="hidden md:flex space-x-6 items-center">
        <a className="text-lg lg:text-xl font-medium hover:bg-[#dd751e] hover:text-black py-2 px-4 rounded-lg transition-all duration-300">
          <Link to="/">Home</Link>
        </a>
        <a className="text-lg lg:text-xl font-medium hover:bg-[#dd751e] hover:text-black py-2 px-4 rounded-lg transition-all duration-300">
          <Link to="/about">About us</Link>
        </a>
        <a className="text-lg lg:text-xl font-medium hover:bg-[#dd751e] hover:text-black py-2 px-4 rounded-lg transition-all duration-300">
          <Link to="/projects">Projects</Link>
        </a>
        <a className="text-lg lg:text-xl font-medium hover:bg-[#dd751e] hover:text-black py-2 px-4 rounded-lg transition-all duration-300">
          <Link to="/contact">Contact Us</Link>
        </a>
      </nav>

      {/* Phone Icon and Number for Desktop */}
      <a
        href="tel:+919595959595"
        className="hidden md:flex items-center space-x-2 text-lg lg:text-xl font-medium hover:bg-[#dd751e] hover:text-black py-2 px-4 rounded-lg transition-all duration-300"
      >
        <i className="bx bxs-phone text-2xl"></i>
        <span>9595959595</span>
      </a>

      {/* Hamburger Menu for Mobile */}
      <i
        className="md:hidden bx bx-menu text-4xl cursor-pointer hover:text-[#dd751e] transition duration-300"
        onClick={toggleMenu}
      ></i>

      {/* Mobile Menu - Conditional Rendering */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-3/4 bg-gray-200 shadow-lg transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center space-y-6 pt-6`}
      >
        {/* Hamburger Icon inside the mobile menu to close it */}
        <i
          className="bx bx-menu-alt-right text-4xl cursor-pointer absolute top-4 right-4 hover:text-[#dd751e] transition duration-300"
          onClick={toggleMenu}
        ></i>

        <a
          href="#home"
          onClick={toggleMenu} // Close menu on click
          className="text-xl font-medium hover:bg-[#dd751e] hover:text-white py-2 px-4 rounded-lg transition-all duration-300"
        >
          <Link to="/">Home</Link>
        </a>
        <a
          href="#about"
          onClick={toggleMenu} // Close menu on click
          className="text-xl font-medium hover:bg-[#dd751e] hover:text-white py-2 px-4 rounded-lg transition-all duration-300"
        >
          <Link to="/about">About us</Link>
        </a>
        <a
          href="#projects"
          onClick={toggleMenu} // Close menu on click
          className="text-xl font-medium hover:bg-[#dd751e] hover:text-white py-2 px-4 rounded-lg transition-all duration-300"
        >
          <Link to="/projects">Projects</Link>
        </a>
        <a
          href="#contact"
          onClick={toggleMenu} // Close menu on click
          className="text-xl font-medium hover:bg-[#dd751e] hover:text-white py-2 px-4 rounded-lg transition-all duration-300"
        >
          <Link to="/contact">Contact Us</Link>
        </a>
        <a
          href="tel:+919595959595"
          onClick={toggleMenu} // Close menu on click
          className="flex items-center space-x-2 text-xl font-medium hover:bg-[#dd751e] hover:text-white py-2 px-4 rounded-lg transition-all duration-300"
        >
          <i className="bx bxs-phone text-2xl"></i>
          <span>9595959595</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
