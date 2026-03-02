import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Coverage", href: "#coverage" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.12 0.06 260 / 0.97)"
          : "oklch(0.12 0.06 260 / 0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid oklch(0.28 0.05 258 / 0.5)"
          : "none",
        boxShadow: scrolled ? "0 4px 24px oklch(0.05 0.04 260 / 0.4)" : "none",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm overflow-hidden flex-shrink-0">
              <img
                src="/assets/generated/flaw-free-logo-transparent.dim_300x300.png"
                alt="Flaw Free Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-display font-bold text-lg md:text-xl tracking-tight"
                style={{ color: "oklch(0.95 0.01 255)" }}
              >
                Flaw Free
              </span>
              <span
                className="text-xs font-body font-medium tracking-widest uppercase"
                style={{ color: "oklch(0.72 0.18 55)" }}
              >
                NDT Services
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 relative group"
                style={{ color: "oklch(0.82 0.03 255)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "oklch(0.75 0.18 55)";
                  (e.currentTarget as HTMLElement).style.background =
                    "oklch(0.22 0.05 260 / 0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "oklch(0.82 0.03 255)";
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="hidden md:flex font-semibold text-sm px-5"
              style={{
                background: "oklch(0.72 0.18 55)",
                color: "oklch(0.12 0.04 30)",
              }}
              onClick={() => handleNavClick("#contact")}
            >
              Get a Quote
            </Button>

            <button
              type="button"
              className="md:hidden p-2 rounded-md transition-colors"
              style={{ color: "oklch(0.9 0.01 255)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ background: "oklch(0.11 0.05 260 / 0.98)" }}
            className="md:hidden overflow-hidden border-t"
            data-border="oklch(0.25 0.05 258 / 0.5)"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 text-sm font-medium rounded-md transition-colors"
                  style={{ color: "oklch(0.82 0.03 255)" }}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-2 font-semibold"
                style={{
                  background: "oklch(0.72 0.18 55)",
                  color: "oklch(0.12 0.04 30)",
                }}
                onClick={() => handleNavClick("#contact")}
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
