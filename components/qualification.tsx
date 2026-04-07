"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const qualifications = {
  education: [
    {
      title: "Bachelor of Social Science",
      subtitle: "National University, Bangladesh",
      date: "2020 - 2024",
      description: "Focused on Software Engineering, Data Structures, and Algorithms.",
    },
    {
      title: "HSC (Science)",
      subtitle: "Pirganj Government College",
      date: "2017 - 2019",
      description: "Completed Higher Secondary Certificate with a focus on Mathematics and Physics.",
    },
  ],
  experience: [
    {
      title: " Full-Stack Developer",
      subtitle: "GreenVaya Tech Solutions",
      date: "2024 - Present",
      description: "Leading the development of complex web applications with Next.js and Node.js.",
    },
    {
      title: "Web Developer",
      subtitle: "Medistore",
      date: "2022 - 2023",
      description: "Assisted in building responsive front-end interfaces and integrating RESTful APIs.",
    },
  ],
};

export function Qualification() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".qual-header > *", {
        scrollTrigger: {
          trigger: ".qual-header",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Timeline items animation (staggered)
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".qual-content",
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section
      id="qualification"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto">

        <div className="qual-header text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <GraduationCap className="w-4 h-4" />
            <span>My Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Qualifications & <span className="text-primary italic">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
            A professional timeline showcasing my academic background and career milestones.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16 sm:mb-20">
          <div className="inline-flex p-1.5 bg-muted/60 backdrop-blur-md rounded-2xl border border-border shadow-inner">
            <button
              onClick={() => setActiveTab("education")}
              className={`px-8 py-3 rounded-xl text-sm font-bold tracking-tight transition-all duration-500 flex items-center gap-2 ${activeTab === "education" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
            >
              <GraduationCap className="w-4 h-4" />
              Education History
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-8 py-3 rounded-xl text-sm font-bold tracking-tight transition-all duration-500 flex items-center gap-2 ${activeTab === "experience" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
            >
              <Briefcase className="w-4 h-4" />
              Professional Experience
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="qual-content max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/20 ml-4 sm:ml-10 pl-8 sm:pl-12 space-y-16">
            {qualifications[activeTab].map((item, idx) => (
              <div key={idx} className="timeline-item relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] sm:-left-[57px] top-1 w-6 h-6 bg-primary rounded-full border-4 border-background group-hover:scale-125 transition-transform duration-500 shadow-xl shadow-primary/30 z-10">
                  <div className="absolute inset-0 bg-primary blur-md opacity-40 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-8 md:p-10 rounded-3xl border border-border bg-muted/30 backdrop-blur-md hover:bg-muted/50 hover:border-primary/30 transition-all duration-500 shadow-xl shadow-black/5 relative group/card">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary/40 rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary px-4 py-1.5 bg-primary/10 rounded-full w-fit border border-primary/20">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-muted-foreground mb-6 flex items-center gap-2 italic">
                    <span className="w-8 h-[1px] bg-primary/30"></span>
                    {item.subtitle}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
