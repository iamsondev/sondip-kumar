"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Printer,
  ChevronLeft,
  ExternalLink,
  Calendar,
  GraduationCap,
  Briefcase,
  Layers
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const resumeData = {
  name: "Sondip Kumar",
  title: "Full-Stack Developer",
  email: "sondipkumarsk@gmail.com",
  phone: "+880 1774032681",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/iamsondev",
  linkedin: "https://www.linkedin.com/in/sondip-kumar-8637b9179",
  summary: "Results-driven Full-Stack Developer with expertise in building scalable, modern web applications. Specialized in the MERN stack and Next.js, with a strong focus on high-performance architecture, clean code, and intuitive user experiences. Passionate about solving complex problems and delivering pixel-perfect digital solutions.",
  experience: [
    {
      role: "Full-Stack Developer",
      company: "GreenVaya",
      period: "...",
      description: "Leading the development of complex web applications with Next.js and Node.js. Optimizing system performance and leading a team of developers."
    },
    {
      role: "Full Stack Developer",
      company: "medistore",
      period: "...",
      description: "Assisted in building responsive front-end interfaces and integrating RESTful APIs using React and Express."
    }
  ],
  education: [
    {
      degree: "Bachelor of Social Science",
      school: "National University, Bangladesh",
      period: "2020 - 2024",
      highlight: "Focused on Software Engineering, Data Structures, and Algorithms. Graduated with honors."
    },
    {
      degree: "HSC (Science)",
      school: "Pirganj Govt College",
      period: "2015",
      highlight: "Completed Higher Secondary Certificate with a focus on Mathematics and Physics."
    }
  ],
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma"],
    tools: ["Git", "GitHub", "Postman", "Vercel", "Docker"]
  },
  projects: [
    {
      name: "GreenVaya Sustainability Platform",
      description: "A full-stack community platform for sharing eco-friendly ideas and sustainability innovations.",
      tech: "Next.js, Node.js, PostgreSQL, Shadcn/UI"
    },
    {
      name: "MediStore E-Pharmacy",
      description: "An online pharmacy shop with categorized OTC medicines and a streamlined checkout flow.",
      tech: "React, Express.js, MongoDB, Tailwind CSS"
    }
  ]
};

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-muted/30 dark:bg-background pb-20 print:bg-white print:pb-0">
      {/* Navigation & Actions - Hidden in Print */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b print:hidden">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <div className="flex gap-3">
            <Button onClick={handlePrint} size="sm" className="gap-2">
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </Button>
          </div>
        </div>
      </nav>

      {/* Resume Container */}
      <div className="container mx-auto px-4 py-10 md:py-16 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[850px] bg-background print:shadow-none shadow-2xl rounded-3xl overflow-hidden border print:border-none print:m-0"
        >
          {/* Header */}
          <header className="bg-primary p-10 md:p-14 text-primary-foreground relative overflow-hidden print:p-8">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                {resumeData.name}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-8">
                {resumeData.title}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm md:text-base">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-foreground/70" />
                  {resumeData.email}
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-foreground/70" />
                  {resumeData.phone}
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary-foreground/70" />
                  {resumeData.location}
                </div>
                <div className="flex items-center gap-3">
                  <FaGithub className="w-5 h-5 text-primary-foreground/70" />
                  <a href={resumeData.github} target="_blank" className="hover:underline">github.com/sondip</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaLinkedin className="w-5 h-5 text-primary-foreground/70" />
                  <a href={resumeData.linkedin} target="_blank" className="hover:underline">linkedin.com/in/sondip</a>
                </div>
              </div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl animate-pulse"></div>
          </header>

          <div className="p-10 md:p-14 md:grid md:grid-cols-12 gap-12 print:p-8">
            {/* Main Content (Left in Resume) */}
            <div className="md:col-span-8 space-y-12">
              <section>
                <h2 className="text-lg font-bold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Profile Summary
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {resumeData.summary}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold uppercase tracking-widest text-primary mb-8 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Work Experience
                </h2>
                <div className="space-y-10">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-primary/20">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <span className="text-sm font-bold bg-muted px-3 py-1 rounded-full text-muted-foreground print:bg-transparent print:p-0">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-primary font-semibold mb-3">{exp.company}</h4>
                      <p className="text-muted-foreground text-sm">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold uppercase tracking-widest text-primary mb-8 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Featured Projects
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {resumeData.projects.map((project, index) => (
                    <div key={index} className="p-5 rounded-2xl bg-muted/40 border border-border/50">
                      <h3 className="font-bold mb-2">{project.name}</h3>
                      <p className="text-xs text-muted-foreground mb-4">{project.description}</p>
                      <div className="text-[10px] font-bold text-primary uppercase tracking-wider">
                        {project.tech}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar (Right in Resume) */}
            <div className="md:col-span-4 space-y-12 mt-12 md:mt-0">
              <section>
                <h2 className="text-lg font-bold uppercase tracking-widest text-primary mb-6">Skills</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-bold text-muted-foreground uppercase mb-3 px-2 border-l-2 border-primary/40">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.frontend.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-muted rounded text-xs font-medium">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-muted-foreground uppercase mb-3 px-2 border-l-2 border-primary/40">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.backend.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-muted rounded text-xs font-medium">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-muted-foreground uppercase mb-3 px-2 border-l-2 border-primary/40">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.tools.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-muted rounded text-xs font-medium">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </h2>
                <div className="space-y-8">
                  {resumeData.education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="font-bold text-base leading-tight mb-1">{edu.degree}</h3>
                      <p className="text-sm text-primary/80 mb-1">{edu.school}</p>
                      <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {edu.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Footer - Only visible in digital, hidden in print */}
          <footer className="p-8 bg-muted/20 border-t text-center text-sm text-muted-foreground print:hidden">
            Generated via Portfolio Resume Hub • Sondip Kumar
          </footer>
        </motion.div>
      </div>

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          @page {
            margin: 0;
            size: auto;
          }
          .container {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
