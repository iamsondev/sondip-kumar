"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const roles = [
  "Full-Stack Developer",
  "MERN Stack Expert",
  "UI/UX Designer",
  "Problem Solver"
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text sliding up
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      // Animate left side social links
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out", delay: 0.3 }
        );
      }

      // Animate right side image
      gsap.fromTo(
        rightColRef.current,
        { x: 50, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero" 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-16 md:py-24"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-8 items-center">

          {/* Left Side: Social Links */}
          <div ref={leftColRef} className="md:col-span-2 flex flex-row md:flex-col items-center justify-center gap-6 mt-8 md:mt-0">
            <Link href="https://github.com/iamsondev" target="_blank" className="p-3 bg-muted/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="p-3 bg-muted/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="p-3 bg-muted/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <X className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <div className="hidden md:block w-[1px] h-24 bg-border mt-4"></div>
          </div>

          {/* Middle Part: Hey Text & Hand Icon */}
          <div className="md:col-span-6 flex flex-col items-start justify-center space-y-4 text-center md:text-left mx-auto md:mx-0">
            <div className="flex items-center space-x-3 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              <h1 ref={textRef}>Hey</h1>
              <motion.div
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="origin-bottom-right inline-block"
              >
                👋
              </motion.div>
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl text-foreground font-bold">
                I'm Sondip Kumar
              </h2>
              <div className="h-8 md:h-10 flex items-center justify-center md:justify-start">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-xl md:text-2xl text-primary font-medium italic"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            <p className="text-lg text-muted-foreground/80 max-w-[600px] mt-4">
              I build modern, responsive, and visually stunning web applications with cutting-edge technologies.
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="#contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 py-2">
                Let's Talk <Mail className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Right Side: Photo */}
          <motion.div 
            ref={rightColRef} 
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="md:col-span-4 flex justify-center md:justify-end items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Spinning Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-12px] rounded-full border-2 border-dashed border-primary/60 shadow-[0_0_20px_rgba(var(--primary),0.2)]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-24px] rounded-full border border-dotted border-primary/40"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent rounded-full blur-3xl -z-10"></div>

              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl relative bg-muted group">
                <Image
                  src="https://i.ibb.co.com/8nZwwfFJ/Gemini-Generated-Image-h300nuh300nuh300-Photoroom.png"
                  alt="Sondip Kumar"
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}