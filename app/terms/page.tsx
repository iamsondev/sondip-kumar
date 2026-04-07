import React from "react";
import Link from "next/link";
import { ArrowLeft, Gavel } from "lucide-react";

export default function TermsPage() {
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
            <Gavel className="w-4 h-4" />
            <span>Legal Document</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            Terms of <span className="text-primary italic">Service</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            By accessing this portfolio, you agree to the following terms and conditions.
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground leading-loose">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Intellectual Property</h2>
            <p>
              The design, code, and content of this portfolio are the intellectual property of Sondip Kumar unless otherwise stated. Projects showcased remain the property of their respective owners or follow their specific open-source licenses.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Acceptable Use</h2>
            <p>
              You may browse this site for professional purposes, such as recruiting or networking. Any attempt to disrupt the site's performance or scrape data without permission is prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Disclaimers</h2>
            <p>
              The projects displayed are for demonstration purposes. While I strive for accuracy, I provide no warranties regarding the uptime or complete error-free nature of the code presented.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Professional Relationship</h2>
            <p>
              Communication via this site does not constitute a formal contract for services. Binding agreements will be handled via separate, formal documentation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Modifications</h2>
            <p>
              I reserve the right to update these terms at any time without prior notice.
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
