import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing-plant", label: "Manufacturing" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5 lg:py-8"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="bg-primary p-2 rounded-sm text-white transform group-hover:rotate-3 transition-transform">
                <Globe className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-display font-bold text-2xl tracking-tighter leading-none uppercase",
                  scrolled ? "text-slate-900" : "text-slate-900 lg:text-white"
                )}>
                  Aadesh<span className="text-primary">Impex</span>
                </span>
                <span className={cn(
                  "text-[0.65rem] tracking-widest uppercase opacity-80",
                  scrolled ? "text-slate-600" : "text-slate-600 lg:text-white/80"
                )}>
                  Global Trade & Explosives
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "text-sm font-medium uppercase tracking-wide cursor-pointer transition-colors relative group py-2",
                    scrolled ? "text-slate-700 hover:text-primary" : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button 
                size="lg" 
                className={cn(
                  "font-display uppercase tracking-wider rounded-none transition-all hover:-translate-y-1 hover:shadow-lg",
                  scrolled ? "shadow-primary/20" : "bg-white text-primary hover:bg-white/90 hover:text-primary border-none"
                )}
              >
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-md",
              scrolled ? "text-slate-900" : "text-slate-900 lg:text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span 
                    className="text-2xl font-display uppercase font-bold text-slate-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="w-full text-lg py-6 font-display uppercase rounded-none" onClick={() => setIsOpen(false)}>
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
