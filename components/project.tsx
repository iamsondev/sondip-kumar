"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Monitor, Smartphone, Layout, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "GreenVaya Sustainability",
    shortDesc: "A community-driven sustainability platform empowering eco-innovators.",
    description: "GreenVaya is a mission-driven platform designed to connect environmental enthusiasts. It allows users to submit eco-friendly ideas, participate in discussions, and track community impact. The platform features a robust voting system and real-time interactions.",
    challenges: "Handling real-time data synchronization for social features and ensuring a high-performance image optimization strategy for community uploads.",
    results: "Achieved 95+ PageSpeed scores and successfully hosted 50+ community-driven green initiatives.",
    futurePlans: "Integrating AI-powered eco-recommendations, expanding to a mobile app with offline support, and adding a gamification system to reward eco-friendly actions.",
    image: "https://i.ibb.co.com/MxWD7CLf/Screenshot-6.png",
    tags: ["Next.js", "PostgreSQL", "Shadcn UI"],
    github: "https://github.com/iamsondev/greenvaya_client",
    demo: "https://greenvayaclient.vercel.app",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "MediStore Pharmacy",
    shortDesc: "A comprehensive online pharmacy platform for browsing OTC medicines.",
    description: "MediStore simplifies the healthcare experience by providing a clean interface for medicine discovery. It includes advanced filtering, a secure cart system, and real-time delivery estimation based on geographic data.",
    challenges: "Building a complex filtering system that maintains performance across thousands of medical SKUs and ensuring secure checkout flows.",
    results: "Reduced average medicine search time by 40% and improved ordering efficiency for rural users.",
    futurePlans: "Adding AI-based medicine suggestions, prescription upload feature, real-time inventory tracking, and integration with local pharmacy APIs.",
    image: "https://i.ibb.co.com/mKgjp41/Screenshot-4.png",
    tags: ["Next.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/iamsondev/mdeistore-client",
    demo: "https://medistore-client-bice.vercel.app",
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    title: "Blog Site",
    shortDesc: "A modern blogging platform with rich content creation and discovery.",
    description: "A professional blogging platform built for writers and readers. Features a rich text editor, category-based filtering, comment system, and a clean reading experience optimized for all devices.",
    challenges: "Visualizing high-velocity data in real-time while maintaining mobile responsiveness and accessible UI/UX patterns.",
    results: "Currently used by 3 community groups to track zero-waste progress and energy savings.",
    futurePlans: "Adding AI-generated content suggestions, multi-author support, a monetization system, and newsletter integration.",
    image: "https://i.ibb.co.com/RrYWdn4/pexels-pixabay-265667.jpg",
    tags: ["Framer Motion", "Recharts", "Lucide"],
    github: "https://github.com/iamsondev/blog-site-client",
    demo: "https://github.com/iamsondev/blog-site-client",
    icon: <Layout className="w-5 h-5" />,
  },
];

export function Project() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null);

  useEffect(() => {
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      gsap.fromTo(".proj-header > *",
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".proj-header",
            start: "top 90%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="project"
      ref={sectionRef}
      className="py-24 md:py-32 bg-muted/20 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto">

        <div className="proj-header text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
            <Layout className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Architecting <span className="text-primary italic">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[650px] mx-auto leading-relaxed">
            From green tech to healthcare solutions, exploring how I solve complex problems through code.
          </p>
        </div>

        <div className="projects-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="project-card group relative rounded-[40px] border border-border bg-background overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              {/* Image Preview */}
              <div className="relative h-72 w-full bg-muted overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-muted rounded-full border border-border/50 text-muted-foreground group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-2xl border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="https://github.com/iamsondev"
            target="_blank"
            className="inline-flex items-center space-x-4 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-[10px] hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 transition-all"
          >
            <span>Explore All Repositories</span>
            <FaGithub className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-background border border-border rounded-[48px] overflow-hidden shadow-2xl shadow-black/20"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto bg-muted">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent hidden md:block"></div>
                </div>
                <div className="p-10 md:p-16 space-y-8 max-h-[80vh] overflow-y-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-xl text-primary">
                        {selectedProject.icon}
                      </div>
                      <h3 className="text-3xl font-black tracking-tighter">{selectedProject.title}</h3>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-primary/10 rounded-full text-primary border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Overview</h4>
                      <p className="text-muted-foreground leading-relaxed font-medium">{selectedProject.description}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">The Challenge</h4>
                        <p className="text-sm text-muted-foreground font-medium">{selectedProject.challenges}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">The Result</h4>
                        <p className="text-sm text-muted-foreground font-medium">{selectedProject.results}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Future Plans</h4>
                      <p className="text-sm text-muted-foreground font-medium">{selectedProject.futurePlans}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                      href={selectedProject.demo}
                      target="_blank"
                      className="flex-1 px-8 py-5 rounded-2xl bg-primary text-primary-foreground font-black text-[10px] uppercase tracking-[0.2em] text-center hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                    <Link
                      href={selectedProject.github}
                      target="_blank"
                      className="flex-1 px-8 py-5 rounded-2xl border border-border hover:bg-muted font-black text-[10px] uppercase tracking-[0.2em] text-center transition-all flex items-center justify-center gap-2"
                    >
                      <FaGithub className="w-4 h-4" />
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}