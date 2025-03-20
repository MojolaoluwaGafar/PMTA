import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="p-5 bg-gray-800 text-white flex justify-between items-center w-full ">
      {/* Logo */}
      <div>
        <Link to="/">
          <p className="text-xl font-bold leading-tight">
            Private Media <br /> Talent Agency
          </p>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="text-teal-400 md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-6 text-teal-400"
          >
            <HiX size={30} />
          </button>
          <nav className="text-center space-y-6 text-lg">
            <Link
              to="/application"
              onClick={closeMenu}
              className="block text-white hover:text-teal-400"
            >
              Online Application
            </Link>
            <Link
              to="/name-generator"
              onClick={closeMenu}
              className="block text-white hover:text-teal-400"
            >
              Porn Name Generator
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block text-white hover:text-teal-400"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        <Link to="/application" className="hover:text-teal-400">
          Online Application
        </Link>
        <Link to="/name-generator" className="hover:text-teal-400">
          Porn Name Generator
        </Link>
        <Link to="/contact" className="hover:text-teal-400">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export default Header;
