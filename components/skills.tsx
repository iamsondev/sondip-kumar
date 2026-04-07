"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Monitor, GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Monitor className="w-5 h-5" />,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript / JavaScript", level: 85 },
      { name: "Tailwind CSS / UI Design", level: 95 },
      { name: "GSAP / Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "MongoDB / PostgreSQL", level: 75 },
      { name: "GraphQL / REST APIs", level: 85 },
      { name: "Prisma / Drizzle ORM", level: 70 },
    ],
  },
];

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title and Description animation
      gsap.from(".skills-header > *", {
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Skill cards animation
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        
        <div className="skills-header text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>My Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Technical <span className="text-primary italic">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[650px] mx-auto leading-relaxed">
            Exploring the powerful technologies I use to build scalable, high-performance web applications.
          </p>
        </div>

        <div className="skills-grid grid gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center space-x-4 px-4">
                <div className="p-2 bg-primary/10 rounded-xl text-primary">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tighter">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-card group relative p-6 rounded-[24px] border border-border bg-muted/20 hover:bg-background hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden text-center">
                    <div className="relative z-10 space-y-3">
                      <span className="text-sm font-black tracking-tighter group-hover:text-primary transition-colors">{skill.name}</span>
                      <div className="flex items-center justify-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                        <div className="h-1 w-8 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-[10px] font-black tabular-nums">{skill.level}%</span>
                      </div>
                    </div>
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
