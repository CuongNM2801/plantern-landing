import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X} from "lucide-react";
import logo from "../assets/LOGO-GREEN.png"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Download", path: "/download" },
  { name: "Privacy", path: "/privacy-policy" },
  // { name: "Terms", path: "/terms-of-service" },
];

const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b shadow-sm py-3" : "bg-transparent py-5"
      }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img
              src={logo}
              alt="Plantern Logo"
              className="h-7 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isHash = link.path.startsWith("#");

              const isActive =
                location.pathname === link.path ||
                (isHash && location.hash === link.path);

              if (isHash) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-green-600"
                        : "text-gray-600 hover:text-green-600"
                    }`}>
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-green-600"
                      : "text-gray-600 hover:text-green-600"
                  }`}>
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <X color={scrolled ? "black" : "white"} />
            ) : (
              <Menu color={scrolled ? "black" : "white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => {
              const isHash = link.path.startsWith("#");

              const isActive =
                location.pathname === link.path ||
                (isHash && location.hash === link.path);

              if (isHash) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={closeMenu}
                    className={`px-4 py-2 rounded-lg ${
                      isActive
                        ? "bg-green-100 text-green-600"
                        : "hover:bg-gray-100"
                    }`}>
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`px-4 py-2 rounded-lg ${
                    isActive
                      ? "bg-green-100 text-green-600"
                      : "hover:bg-gray-100"
                  }`}>
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
