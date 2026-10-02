import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { WhyChooseMeSection } from "@/components/WhyChooseMeSection";
import { ExperienceEducationSection } from "@/components/ExperienceEducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <WhyChooseMeSection />
        <ExperienceEducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

