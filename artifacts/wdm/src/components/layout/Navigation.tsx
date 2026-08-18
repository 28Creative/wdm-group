import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/sector-expertise", label: "Sector Expertise" },
  { href: "/projects", label: "Projects" },
  { href: "/insights", label: "Insights" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/contact", label: "Contact Us" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[var(--color-white)]/95 backdrop-blur-md border-[var(--color-stone)] py-4 shadow-sm"
          : "bg-[var(--color-white)] border-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo-charcoal.svg"
            alt="Why Design Matters"
            className="h-16 w-auto"
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--color-gold)]",
                location === link.href ? "text-[var(--color-gold)]" : "text-[var(--color-graphite)]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" asChild>
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[var(--color-graphite)] p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[var(--color-white)] border-b border-[var(--color-stone)] shadow-lg py-4 px-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-base font-medium py-2 border-b border-[var(--color-stone)]/50",
                location === link.href ? "text-[var(--color-gold)]" : "text-[var(--color-graphite)]"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" className="w-full mt-4" asChild onClick={() => setMobileMenuOpen(false)}>
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
