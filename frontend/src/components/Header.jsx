import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Products",
    "Clients",
    "Recognitions",
    "Contact",
  ];

  const scrollToSection = (item) => {
    setIsMobileMenuOpen(false);
    const sectionMap = {
      Home: "hero",
      About: "about",
      Products: "products",
      Clients: "clients",
      Recognitions: "recognitions",
      About: "about",
      Contact: "contact",
    };
    const sectionId = sectionMap[item];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1a0f08]/95 backdrop-blur-md" : "bg-[#1a0f08]/80"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="/rew-logo.png"
              alt="REW Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-white text-lg font-light tracking-wider uppercase">
              Rahul Engineering Works
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white/90 hover:text-[#d4a574] transition-colors text-md tracking-wide"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <span className="text-white/70 text-sm">GST: 09ACSPC3613R1Z1</span>
            <Button
              onClick={() => scrollToSection("Contact")}
              className="bg-[#c9923f] hover:bg-[#b8822e] text-white font-medium px-6 py-2 rounded-md transition-all"
            >
              Get Quote
            </Button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#1a0f08]/95 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-white/90 hover:text-[#d4a574] transition-colors"
              >
                {item}
              </button>
            ))}
            <div className="px-4 py-2 text-white/70 text-sm">
              GST: 09ACSPC3613R1Z1
            </div>
            <div className="px-4">
              <Button
                onClick={() => scrollToSection("Contact")}
                className="w-full bg-[#c9923f] hover:bg-[#b8822e] text-white"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
