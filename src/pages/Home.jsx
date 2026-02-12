import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectsSection";
import { ContactsSection } from "../components/ContactSection";
import { FooterSection } from "../components/Footer";
import { Certificate } from "../components/Certificate";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* // Theme Toggle */}
      <ThemeToggle />

      {/* // Background Effect */}
      <StarBackground />

      {/* // Navbar */}
      <Navbar />

      {/* // Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <Certificate />
        <ContactsSection />
      </main>

      {/* // Footer */}
      <FooterSection />
      {/* <a
        href="https://www.youtube.com/watch?v=ifOJ0R5UQOc  "
        className="text-blue-500 underline"
      >
        Link of Project YouTube
      </a> */}
    </div>
  );
};
