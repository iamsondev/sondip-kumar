"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Layout, Smartphone, Globe, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    description: "Building fast, scalable, and secure web applications using modern technologies like Next.js and Node.js.",
    icon: <Globe className="w-10 h-10" />,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning user interfaces focusing on user experience and accessibility.",
    icon: <Layout className="w-10 h-10" />,
  },
  {
    title: "App Development",
    description: "Developing cross-platform mobile applications with high performance and seamless transitions.",
    icon: <Smartphone className="w-10 h-10" />,
  },
  {
    title: "Backend Solutions",
    description: "Designing robust server-side architectures, API integration, and database management.",
    icon: <Code2 className="w-10 h-10" />,
  },
  {
    title: "Performance Optimization",
    description: "Speeding up existing applications to ensure smooth user interaction and better SEO rankings.",
    icon: <Zap className="w-10 h-10" />,
  },
  {
    title: "Security Audits",
    description: "Verifying and implementing high-level security protocols for web applications and data.",
    icon: <ShieldCheck className="w-10 h-10" />,
  },
];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".services-header > *", {
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Cards animation
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto">
        
        <div className="services-header text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>My Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            What I <span className="text-primary italic">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
            Providing high-quality digital solutions tailored to meet your business needs and creative vision.
          </p>
        </div>

        <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="service-card group relative p-10 rounded-3xl border border-border bg-muted/40 backdrop-blur-md hover:bg-muted/70 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center sm:items-start sm:text-left">
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 12, backgroundColor: "hsl(var(--primary) / 0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary shadow-lg shadow-primary/5 cursor-pointer"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
