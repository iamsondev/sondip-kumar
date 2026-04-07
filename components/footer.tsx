"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-24 border-t border-border bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 md:gap-16">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-sm font-sans">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-primary/60 text-primary-foreground font-black text-2xl shadow-xl shadow-primary/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                S
                <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
              </div>

              <div className="flex flex-col leading-tight">
                <span className="font-black text-2xl tracking-tighter text-foreground group-hover:text-primary transition-colors uppercase">
                  sondip kumar
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  Solutions Studio
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm font-medium leading-relaxed">
              Engineering state-of-the-art digital experiences with high-performance architectures and human-centered design principles.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Explore</h4>
            <nav className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 transition-colors">
              <Link href="#about" className="hover:text-primary">About</Link>
              <Link href="#skills" className="hover:text-primary">Skills</Link>
              <Link href="#services" className="hover:text-primary">Services</Link>
              <Link href="#project" className="hover:text-primary">Projects</Link>
              <Link href="#contact" className="hover:text-primary">Contact Me</Link>
            </nav>
          </div>

          <div className="flex flex-col items-center lg:items-start space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Connect</h4>
            <div className="flex items-center space-x-4">
              {[
                { icon: <FaGithub />, href: "https://github.com/iamsondev" },
                { icon: <FaLinkedin />, href: "https://linkedin.com" },
                { icon: <FaTwitter />, href: "https://twitter.com" },
                { icon: <FaInstagram />, href: "https://instagram.com" },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-4 bg-muted/40 rounded-2xl border border-border/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="w-5 h-5 flex items-center justify-center text-xl">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em] text-center md:text-left">
          <div className="space-y-4">
            <p>© {currentYear} Sondip Kumar. <span className="hidden sm:inline">All rights reserved.</span></p>
            <div className="flex items-center gap-2 justify-center md:justify-start pt-1">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-primary text-sm"
              >
                ❤️
              </motion.span>
              <span>by Sondip Kumar</span>
            </div>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
