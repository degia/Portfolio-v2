import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificate", href: "#certif" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", handleKey);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-30 transition-all duration-300",
        isScrolled
          ? "py-5 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5 bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between mx-auto px-4">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> DEGIA </span>PARLOPA
          </span>
        </a>

        {/* Desktop */}

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a key={key} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 relative"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu overlay */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            "fixed inset-0 z-20 md:hidden flex flex-col items-center justify-center",
            "bg-background/95 backdrop-blur-md transition-all duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          <div
            className="flex flex-col space-y-8 text-xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
