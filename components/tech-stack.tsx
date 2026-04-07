"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiPrisma, 
  SiGit, 
  SiGithub, 
  SiPostman,
  SiJavascript
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-foreground" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
      { name: "Framer", icon: <SiFramer />, color: "text-foreground" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
      { name: "Express", icon: <SiExpress />, color: "text-foreground" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#4169E1]" },
      { name: "Prisma", icon: <SiPrisma />, color: "text-[#2D3748]" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <SiGit />, color: "text-[#F05032]" },
      { name: "GitHub", icon: <SiGithub />, color: "text-foreground" },
      { name: "Postman", icon: <SiPostman />, color: "text-[#FF6C37]" },
    ],
  },
];

export function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".tech-header > *", {
        scrollTrigger: {
          trigger: ".tech-header",
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Infinite Marquee Animation
      const setupMarquee = (el: HTMLElement, direction: number) => {
        const width = el.offsetWidth;
        gsap.to(el, {
          x: direction === 1 ? -width / 2 : 0,
          duration: 30,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % (width / 2))
          }
        });
      };

      if (marquee1Ref.current) setupMarquee(marquee1Ref.current, 1);
      if (marquee2Ref.current) setupMarquee(marquee2Ref.current, -1);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const allItems = techStack.flatMap(cat => cat.items);
  const row1 = [...allItems, ...allItems]; // Double items for seamless loop
  const row2 = [...allItems.reverse(), ...allItems];

  return (
    <section id="tech-stack" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="tech-header text-center mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
            <span>My Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            Technologies I <span className="text-primary italic">Mastered.</span>
          </h2>
        </div>

        <div className="space-y-12">
          {/* Marquee Row 1 */}
          <div className="relative flex overflow-hidden py-4 mask-fade">
            <div ref={marquee1Ref} className="flex gap-8 whitespace-nowrap">
              {row1.map((item, i) => (
                <div key={i} className="flex items-center gap-4 px-8 py-4 rounded-2xl border border-border bg-muted/20 backdrop-blur-md group hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  <div className={`text-3xl ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-black tracking-tight">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 */}
          <div className="relative flex overflow-hidden py-4 mask-fade">
            <div ref={marquee2Ref} className="flex gap-8 whitespace-nowrap">
              {row2.map((item, i) => (
                <div key={i} className="flex items-center gap-4 px-8 py-4 rounded-2xl border border-border bg-muted/20 backdrop-blur-md group hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  <div className={`text-3xl ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-black tracking-tight">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
