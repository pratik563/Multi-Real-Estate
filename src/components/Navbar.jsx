import React, { useState, useEffect } from "react";
import logo from "../images/navlogowhite.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to handle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Dropdown menu
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //

  return (
    <header className="sticky top-0 border-b-2 border-[#cc8b12] z-50 flex justify-between md:justify-center bg-[#2f0547] items-center py-3 px-6 md:px-16 transition-all duration-300">
      <img
        className="w-14 md:w-24 cursor-pointer mr-16 "
        src={logo}
        alt="Logo"
      />

      {/* Navigation Links for Desktop */}
      <nav className="hidden relative md:flex space-x-6 items-center">
        <a className="text-lg lg:text-xl font-medium text-white hover:bg-[#910fdb] py-2 px-3 rounded-lg transition-all duration-300">
          <Link to="/">Home</Link>
        </a>
        <a className="text-lg lg:text-xl font-medium text-white hover:bg-[#910fdb] py-2 px-3 rounded-lg transition-all duration-300">
          <Link to="/about">About us</Link>
        </a>
        <a
          className="text-lg lg:text-xl font-medium text-white hover:bg-[#910fdb] py-2 px-3 rounded-lg transition-all duration-300"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link to="#">
            Projects <i class="fa fa-caret-down"></i>
          </Link>

          {dropdownOpen && (
            <div className="absolute bg-[#2f0547] text-white mt-2 py-2 w-64 rounded-lg shadow-lg">
              {/* Ongoing Projects Label */}
              <div className="lg:text-xl font-medium px-4 py-2">
                <i class="fa fa-caret-down"></i> Ongoing Projects
              </div>
              <Link
                to="/skyline-avenue"
                className="block px-4 py-2 lg:text-lg hover:bg-[#910fdb] transition-all duration-200"
              >
                <i class="fa fa-caret-right fa-fw"></i> Skyline Avenue
              </Link>
              <Link
                to="/morya-enclave"
                className="block px-4 py-2 lg:text-lg hover:bg-[#910fdb] transition-all duration-200"
              >
                <i class="fa fa-caret-right fa-fw"></i> Morya Enclave
              </Link>
              {/*  <Link
                to="/xyz-projects"
                className="block px-4 py-2 hover:bg-gray-200 transition-all duration-200"
              >
                XYZ Projects
              </Link> */}
              <Link
                to="/projects"
                className="block px-4 py-2 lg:text-lg hover:bg-[#910fdb] transition-all duration-200"
              >
                Completed Projects
              </Link>
            </div>
          )}
        </a>
        <a className="text-lg lg:text-xl font-medium text-white hover:bg-[#910fdb] py-2 px-3 rounded-lg transition-all duration-300">
          <Link to="/contact">Contact Us</Link>
        </a>
      </nav>

      {/* Phone Icon and Number for Desktop */}
      <a
        href="tel:+919595959595"
        className="hidden md:flex items-center space-x-2 text-lg lg:text-xl text-white font-medium hover:bg-[#910fdb] ml-3 py-2 px-4 rounded-lg transition-all duration-300"
      >
        <i className="bx bxs-phone text-2xl"></i>
        <span>9595959595</span>
      </a>

      {/* Hamburger Menu for Mobile */}
      <i
        className="md:hidden bx bx-menu text-4xl cursor-pointer hover:bg-[#910fdb] rounded-lg p-1 text-white transition duration-300"
        onClick={toggleMenu}
      ></i>

      {/* Mobile Menu - Conditional Rendering */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-[75px] h-[370px] right-0 w-full text-white bg-[#2f0547] shadow-lg transition-transform duration-300 ease-in-out md:hidden flex flex-col items-start pl-6 space-y-6 pt-6`}
      >
        <a
          href="#home"
          onClick={toggleMenu} // Close menu on click
          className="text-base font-medium hover:bg-[#910fdb] hover:text-white py-2 px-2 rounded-lg transition-all duration-300"
        >
          <Link to="/">Home</Link>
        </a>
        <a
          href="#about"
          onClick={toggleMenu} // Close menu on click
          className="text-base font-medium hover:bg-[#910fdb] hover:text-white py-2 px-2 rounded-lg transition-all duration-300"
        >
          <Link to="/about">About us</Link>
        </a>
        <a
          className="text-base lg:text-xl font-medium text-white hover:bg-[#910fdb] py-2 px-3 rounded-lg transition-all duration-300"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link to="#">
            Projects <i class="fa fa-caret-down"></i>
          </Link>

          {dropdownOpen && (
            <div className="absolute bg-[#2f0547] text-white mt-2 py-2 w-64 rounded-lg shadow-lg">
              {/* Ongoing Projects Label */}
              <div className="lg:text-xl text-base font-medium px-4 py-2">
                <i class="fa fa-caret-down"></i> Ongoing Projects
              </div>
              <Link
                to="/skyline-avenue"
                className="block px-4 py-2 text-base lg:text-lg hover:bg-[#910fdb] transition-all duration-200"
              >
                <i class="fa fa-caret-right fa-fw"></i> Skyline Avenue
              </Link>
              <Link
                to="/morya-enclave"
                className="block px-4 py-2 text-base lg:text-lg hover:bg-[#910fdb] transition-all duration-200"
              >
                <i class="fa fa-caret-right fa-fw"></i> Morya Enclave
              </Link>
              {/*  <Link
                to="/xyz-projects"
                className="block px-4 py-2 hover:bg-gray-200 transition-all duration-200"
              >
                XYZ Projects
              </Link> */}
              <Link
                to="/projects"
                className="block px-4 py-2 text-base lg:text-lg hover:bg-[#910fdb] transition-all duration-200"
              >
                Completed Projects
              </Link>
            </div>
          )}
        </a>
        <a
          href="#contact"
          onClick={toggleMenu} // Close menu on click
          className="text-base font-medium hover:bg-[#910fdb] hover:text-white py-2 px-2 rounded-lg transition-all duration-300"
        >
          <Link to="/contact">Contact Us</Link>
        </a>
        <a
          href="tel:+919595959595"
          onClick={toggleMenu} // Close menu on click
          className="flex items-center space-x-2 text-base font-medium hover:bg-[#910fdb] hover:text-white py-2 px-2 rounded-lg transition-all duration-300"
        >
          <i className="bx bxs-phone text-xl"></i>
          <span>9595959595</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
