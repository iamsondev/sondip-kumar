"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Code2, GraduationCap, Briefcase, Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main heading and text
      gsap.from(".about-content > *", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Animate stats
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 90%",
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "Projects Completed", value: "05+" },
    { label: "Technologies Used", value: "12+" },
    { label: "Commitment", value: "100%" },
    { label: "Professional Exp", value: "03+" },
  ];

  const features = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Clean Code",
      text: "Writing scalable, efficient, and well-documented code architecture.",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Scalable Logic",
      text: "Building backend systems that grow seamlessly with your business.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Decorative Aura Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Image/Visual Area */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative z-10 aspect-square max-w-md mx-auto rounded-[60px] overflow-hidden border-8 border-background shadow-2xl shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://i.ibb.co.com/8nZwwfFJ/Gemini-Generated-Image-h300nuh300nuh300-Photoroom.png" 
                alt="Sondip Kumar" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            {/* Stats Overlay on Desktop */}
            <div className="stats-grid absolute -bottom-10 -right-10 md:grid grid-cols-2 gap-4 hidden z-20">
              {stats.slice(0, 2).map((stat, i) => (
                <div key={i} className="stat-item p-6 rounded-3xl bg-background/80 backdrop-blur-xl border border-primary/20 shadow-xl shadow-primary/10">
                  <div className="text-3xl font-black text-primary tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="about-content space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                <User className="w-3.5 h-3.5" />
                <span>My Journey</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                Engineering <br /> <span className="text-primary italic">Excellence.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                I am a Full-Stack Developer specializing in building high-performance Next.js applications and scalable backend systems. I transform complex ideas into intuitive digital experiences.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-border bg-muted/20 space-y-3">
                  <div className="text-primary">{feature.icon}</div>
                  <h3 className="text-sm font-bold uppercase tracking-widest">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="/resume"
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
              >
                Download Full CV
              </Link>
              <div className="flex -space-x-3 items-center">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" className="w-full h-full object-cover" />
                  </div>
                ))}
                <span className="pl-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Trusted by Clients</span>
              </div>
            </div>
          </div>

        </div>
        
        {/* Mobile Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-20 md:hidden stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item p-6 rounded-3xl bg-muted/30 border border-border text-center">
              <div className="text-3xl font-black text-primary tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
