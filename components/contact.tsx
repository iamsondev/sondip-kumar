"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".contact-header > *", {
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Form and Info animation
      gsap.from(".contact-info, .contact-form", {
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Mock simulation
    setTimeout(() => {
      setStatus("sent");
    }, 2000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        
        <div className="contact-header text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 italic">Project</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[650px] mx-auto leading-relaxed">
            Ready to bring your vision to life? Whether it's a new project or just a friendly hello, I'm just a message away.
          </p>
        </div>

        <div className="contact-grid grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto items-start">
          
          {/* Contact Info */}
          <div className="contact-info lg:col-span-4 space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-8 text-primary">Connectivity</h3>
            
            <div className="space-y-5">
              {[
                { icon: <Mail className="w-5 h-5" />, title: "Digital Mail", value: "hello@sondip.dev", action: "Send Email" },
                { icon: <Phone className="w-5 h-5" />, title: "Instant Contact", value: "+880 1712-345678", action: "WhatsApp / Call" },
                { icon: <MapPin className="w-5 h-5" />, title: "My Workspace", value: "Dhaka, Bangladesh", action: "Locate Me" },
              ].map((item, idx) => (
                <div key={idx} className="group relative flex items-start space-x-5 p-8 rounded-[32px] border border-border bg-muted/20 backdrop-blur-md hover:bg-muted/40 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ring-1 ring-primary/20">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-[10px] text-muted-foreground/60 mb-2">{item.title}</h4>
                    <p className="font-bold text-foreground mb-3">{item.value}</p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      {item.action} <Send className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="contact-form lg:col-span-8">
            <div className="p-10 md:p-16 rounded-[48px] border border-border bg-muted/30 backdrop-blur-2xl shadow-3xl shadow-black/10 relative overflow-hidden min-h-[600px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {status !== "sent" ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative z-10"
                  >
                    <h3 className="text-3xl font-black tracking-tighter mb-12">Direct <span className="text-primary italic">Inquiry</span></h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-10">
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div className="space-y-3 group">
                          <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 ml-1 group-focus-within:text-primary transition-colors">Integrity Name</label>
                          <input
                            required
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="w-full px-6 py-5 rounded-2xl bg-background/40 border border-border/50 focus:border-primary/40 focus:bg-background focus:ring-8 focus:ring-primary/5 outline-none transition-all duration-500 font-medium"
                          />
                        </div>
                        <div className="space-y-3 group">
                          <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 ml-1 group-focus-within:text-primary transition-colors">Digital Identity</label>
                          <input
                            required
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            className="w-full px-6 py-5 rounded-2xl bg-background/40 border border-border/50 focus:border-primary/40 focus:bg-background focus:ring-8 focus:ring-primary/5 outline-none transition-all duration-500 font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-3 group">
                        <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 ml-1 group-focus-within:text-primary transition-colors">Vision Briefing</label>
                        <textarea
                          required
                          id="message"
                          rows={5}
                          placeholder="What high-impact project are we building?"
                          className="w-full px-6 py-6 rounded-[32px] bg-background/40 border border-border/50 focus:border-primary/40 focus:bg-background focus:ring-8 focus:ring-primary/5 outline-none transition-all duration-500 resize-none font-medium leading-relaxed"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full py-6 px-10 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-[0.3em] text-[10px] hover:shadow-[0_25px_50px_-12px_rgba(var(--primary),0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-500 flex items-center justify-center gap-4 group/btn disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Establishing Connection...
                          </>
                        ) : (
                          <>
                            Propel Proposal
                            <Send className="w-4 h-4 group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-1.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center space-y-8 relative z-10"
                  >
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150"></div>
                        <CheckCircle2 className="w-32 h-32 text-primary relative z-10" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-4xl font-black tracking-tighter">Connection <span className="text-primary italic">Established!</span></h3>
                      <p className="text-muted-foreground text-lg max-w-[400px] mx-auto leading-relaxed font-medium">
                        Your vision has been received. I'll reach out to you within 24 hours to begin our journey.
                      </p>
                    </div>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-foreground transition-colors"
                    >
                      Return to Project Entry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
