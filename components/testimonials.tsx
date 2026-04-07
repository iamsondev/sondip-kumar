"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Product Manager @ GreenTech",
    content: "Sondip transformed our vision into a high-performance reality. His attention to detail and mastery of Next.js is truly impressive.",
    image: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Miller",
    role: "Founder @ EcoVibe",
    content: "Working with Sondip was a game-changer for our sustainability platform. He delivers clean, scalable code every single time.",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "David Chen",
    role: "CTO @ MediCare",
    content: "His ability to solve complex backend challenges while maintaining a beautiful UI is what sets him apart from other developers.",
    image: "https://i.pravatar.cc/150?u=david",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef} 
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            What People <span className="text-primary italic">Say.</span>
          </h2>
        </div>

        <div className="testimonials-grid grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -10 }}
              className="testimonial-card relative p-10 rounded-[40px] border border-border bg-muted/20 backdrop-blur-md flex flex-col space-y-6 hover:border-primary/40 transition-all duration-500 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex gap-1 text-primary">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-12 h-12 text-primary/10 absolute -top-4 -left-4" />
                <p className="text-muted-foreground leading-relaxed italic relative z-10 font-medium">
                   "{item.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-sm tracking-tight">{item.name}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
