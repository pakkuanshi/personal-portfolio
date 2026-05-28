import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { ExperiencePolaroidSection } from "@/components/home/experience-polaroid-section";
import { HeroSection } from "@/components/home/hero-section";
import { SkillsPreviewSection } from "@/components/home/skills-preview-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <ExperiencePolaroidSection />
      <SkillsPreviewSection />
    </>
  );
}
