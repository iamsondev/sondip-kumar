"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Tech stack", href: "#tech-stack" },
  { name: "Qualification", href: "#qualification" },
  { name: "Project", href: "#project" },
  { name: "Contact me", href: "#contact" },
];

interface NavbarProps {
  themeToggle?: React.ReactNode;
}

export function Navbar({ themeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  // Close menu on scroll or resize
  React.useEffect(() => {
    const handleClose = () => setIsOpen(false);
    window.addEventListener("scroll", handleClose);
    window.addEventListener("resize", handleClose);
    return () => {
      window.removeEventListener("scroll", handleClose);
      window.removeEventListener("resize", handleClose);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = elem.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-3">
              {/* Modern Monogram Icon */}
              <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-primary/60 text-primary-foreground font-black text-xl shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                S
                <div className="absolute inset-0 rounded-xl border border-white/20"></div>
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col leading-tight">
                <span className="font-black text-xl tracking-tighter text-foreground group-hover:text-primary transition-colors">
                  sondip kumar
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  Fullstack Dev
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest text-foreground/60">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="transition-all hover:text-primary hover:-translate-y-0.5"
                >
                  {item.name}
                </Link>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center transition-all hover:text-primary hover:-translate-y-0.5 outline-none">
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md rounded-xl border-border/40">
                  <DropdownMenuItem asChild>
                    <button 
                      onClick={(e) => handleScroll(e, "#about")}
                      className="w-full text-left font-bold uppercase tracking-widest text-[10px] py-3 cursor-pointer"
                    >
                      About me
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link 
                      href="/resume"
                      className="w-full text-left font-bold uppercase tracking-widest text-[10px] py-3 flex items-center justify-between group/resume"
                    >
                      <span>Get My Resume</span>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover/resume:scale-150 transition-transform"></div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
            {themeToggle}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {themeToggle}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 text-foreground"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }} 
            className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="container px-4 py-8 space-y-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="block px-4 py-3 text-lg font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-primary/10 hover:text-primary transition-all active:scale-95"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6 border-t border-border/20 mt-6 space-y-2">
                <p className="px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Explorer More</p>
                {[
                  { name: "About Me", href: "#about", isAnchor: true },
                  { name: "Professional Resume", href: "/resume", isAnchor: false }
                ].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (navItems.length + i) * 0.05 + 0.2 }}
                  >
                    {item.isAnchor ? (
                      <button 
                        onClick={(e) => handleScroll(e, item.href)}
                        className="w-full text-left block px-4 py-3 text-base font-bold uppercase tracking-[0.1em] rounded-2xl hover:bg-primary/5 hover:text-primary transition-all active:scale-95 text-muted-foreground"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-base font-bold uppercase tracking-[0.1em] rounded-2xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
