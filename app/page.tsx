import { AboutSection } from "@/components/about";
import { BackToTop } from "@/components/back-to-top";
import { ContactSection } from "@/components/contact";
import { CursorGlow } from "@/components/cursor-glow";
import { ExperienceSection } from "@/components/experience";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { MediaCoverageSection } from "@/components/media-coverage";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects";
import { ScrollProgress } from "@/components/scroll-progress";
import { SkillsSection } from "@/components/skills";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <CursorGlow />
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <MediaCoverageSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
