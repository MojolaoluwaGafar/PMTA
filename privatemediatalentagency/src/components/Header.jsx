import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="p-5 bg-gray-900 text-white flex justify-between items-center w-full ">
      {/* Logo */}
      <div>
        <Link to="/">
          <p className="text-xl font-bold leading-tight bg-gradient-to-r from-blue-200 to-blue-800 bg-clip-text text-transparent">
            Private Media <br /> Talent Agency
          </p>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="text-blue-400 md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-lg flex justify-end z-50">
          {/* Sliding Menu */}
          <div className="w-3/4 max-w-xs bg-gradient-to-b from-gray-900 to-black shadow-lg p-6 h-full transform translate-x-0 transition-transform">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-6 text-blue-400"
            >
              <HiX size={30} />
            </button>

            {/* Navigation Links */}
            <nav className="mt-16 space-y-8 text-lg font-semibold">
              <Link
                to="/application"
                onClick={closeMenu}
                className="block text-white hover:text-blue-400 transition duration-300"
              >
                Online Application
              </Link>
              <Link
                to="/talent"
                onClick={closeMenu}
                className="block text-white hover:text-blue-400 transition duration-300"
              >
                Talents Blog
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className="block text-white hover:text-blue-400 transition duration-300"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block text-white hover:text-blue-400 transition duration-300"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        <Link to="/application" className="hover:text-blue-400">
          Online Application
        </Link>
        <Link to="/talent" className="block text-white hover:text-blue-400">
          Talents Blog
        </Link>
        {/* <Link to="/name-generator" className="hover:text-blue-400">
          Porn Name Generator
        </Link> */}
        <Link to="/about" className="block text-white hover:text-blue-400">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-blue-400">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export default Header;
