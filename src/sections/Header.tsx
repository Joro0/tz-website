import { useState, useEffect } from "react";
import LogoTz from "../assets/logotz.svg?react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  border-b-1  transition-colors duration-500 ${
        isScrolled ? "bg-background border-main/20" : " border-image/40"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div
          className={`flex flex-row py-2 px-4 gap-2 border-r-1 ${
            isScrolled ? " border-main/20" : "border-image/40"
          }`}
        >
          <LogoTz className="w-9" />
          <div>
            <p
              className={`text-sm font-semibold transition-colors duration-500 ${
                isScrolled ? "text-main" : "text-image"
              }`}
            >
              TRANSPORTES
            </p>
            <p
              className={`text-sm font-semibold transition-colors duration-500 ${
                isScrolled ? "text-main" : "text-image"
              }`}
            >
              ZUÑIGA S.R.L.
            </p>
          </div>
        </div>

        {/* Center: Navigation Buttons */}
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-700 hover:text-main">
            Services
          </a>
          <a href="#projects" className="text-gray-700 hover:text-main">
            Projects
          </a>
          <a href="#about" className="text-gray-700 hover:text-main">
            About Us
          </a>
        </nav>

        {/* Right: Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 bg-main text-white rounded hover:bg-main-dark"
          >
            Contact
          </a>
        </div>

        {/* Mobile: Hamburger Menu */}
        <div className="md:hidden flex items-center mr-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-highlight focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 28 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h24M4 12h24M4 18h24"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 px-4 py-3">
            <a href="#services" className="text-gray-700 hover:text-main">
              Services
            </a>
            <a href="#projects" className="text-gray-700 hover:text-main">
              Projects
            </a>
            <a href="#about" className="text-gray-700 hover:text-main">
              About Us
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-main text-white rounded hover:bg-main-dark"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
