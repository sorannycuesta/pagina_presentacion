// src/components/Header.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? "bg-slate-950/80 backdrop-blur-xl shadow-2xl" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg rotate-45" />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Soranny
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Inicio", "Sobre Mí", "Proyectos", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-gray-300 hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-950/90 backdrop-blur-xl px-6 py-6">
          {["Inicio", "Sobre Mí", "Proyectos", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-300 py-2 text-lg"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
