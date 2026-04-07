import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Skills } from "@/components/skills";
import { Services } from "@/components/service";
import { Qualification } from "@/components/qualification";
import { Testimonials } from "@/components/testimonials";
import { Project } from "@/components/project";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <TechStack />
      <Skills />
      <Services />
      <Qualification />
      <Testimonials />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
