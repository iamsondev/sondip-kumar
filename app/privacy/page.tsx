import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-primary hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Legal Document</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            Privacy <span className="text-primary italic">Policy</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Last updated: April 07, 2026. Your privacy is important to me. This policy outlines how I handle your data.
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground leading-loose">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Data Collection</h2>
            <p>
              This portfolio website does not actively collect personal data from visitors unless you voluntarily provide it through the contact form (Name, Email, Message).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Use of Information</h2>
            <p>
              Information provided via the contact form is used solely to respond to your inquiries or project proposals. I do not sell or share your personal information with third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Cookies</h2>
            <p>
              I use standard technical cookies (via Next-Themes) to remember your theme preference (Dark/Light mode). No tracking or advertising cookies are used.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. External Links</h2>
            <p>
              My portfolio contains links to external sites (GitHub, LinkedIn, Vercel). I am not responsible for the privacy practices or content of these external platforms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Contact Me</h2>
            <p>
              If you have any questions regarding this policy, feel free to reach out via the contact section on the main page.
            </p>
          </section>
        </div>

        <div className="pt-12 border-t border-border/40 text-xs font-bold text-muted-foreground/40 uppercase tracking-[0.3em] text-center">
          © 2026 Sondip Kumar. Built with integrity.
        </div>
      </div>
    </main>
  );
}
