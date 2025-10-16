import { useState } from "react";
import { Instagram, Linkedin, Mail, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur-md dark:bg-background/70">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="font-extrabold tracking-tight text-xl cursor-pointer">
          <span className="text-[#143367] ">Sumit</span>{" "}
          <span className="text-foreground">Chaudhary</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-[#143367] /10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-background border-t border-border/50 shadow-lg animate-slideDown">
          <nav className="flex flex-col items-center py-4 gap-4 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-muted-foreground hover:text-[#143367]  transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* <div className="flex items-center gap-4 mt-3 text-muted-foreground">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="hover:text-[#143367]  transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="hover:text-[#143367]  transition" />
              </a>
              <a href="mailto:sumit.fake@example.com">
                <Mail className="hover:text-[#143367]  transition" />
              </a>
            </div> */}
          </nav>
        </div>
      )}
    </header>
  );
}
