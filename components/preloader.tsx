"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setComplete(true),
    });

    tl.to(".preloader-text", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
    })
    .to(".preloader-bar", {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut",
    })
    .to(".preloader-content", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.in",
    })
    .to(".preloader-bg", {
      height: 0,
      duration: 0.8,
      ease: "power4.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-auto overflow-hidden">
          {/* Main Background */}
          <div className="preloader-bg absolute inset-0 bg-background flex flex-col items-center justify-center">
            
            <div className="preloader-content flex flex-col items-center space-y-8">
              {/* Monogram */}
              <div className="relative w-24 h-24 flex items-center justify-center rounded-3xl bg-gradient-to-tr from-primary to-primary/60 text-primary-foreground font-black text-4xl shadow-2xl shadow-primary/30">
                S
                <div className="absolute inset-0 rounded-3xl border border-white/20"></div>
              </div>

              {/* Text Animation */}
              <div className="preloader-text opacity-0 transform translate-y-4 flex flex-col items-center space-y-2">
                <span className="text-2xl font-black uppercase tracking-[0.3em] text-foreground">
                  sondip kumar
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">
                  Crafting Digital Experiences
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-64 h-[2px] bg-muted/20 rounded-full overflow-hidden relative">
                <div className="preloader-bar absolute top-0 left-0 h-full w-0 bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]"></div>
              </div>
            </div>

          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
