
import React, { useState } from "react";
import {Header}  from "../components/Header";
import { Home } from "../components/Home";
import AboutSection from "../components/AboutSection";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

type SectionType = "home" | "about" | "experience" | "projects" | "resume" | "blogs";

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionType>("home");

  // Update URL hash when section changes
  React.useEffect(() => {
    window.location.hash = activeSection;
  }, [activeSection]);

  // Handle hash change from browser navigation
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ["home", "about", "experience", "projects", "resume", "blogs"].includes(hash)) {
        setActiveSection(hash as SectionType);
      }
    };

    // Set initial section based on hash in URL
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Custom Header with navigation that updates state
  const CustomHeader = () => {
    const menuItems = [
      { label: "Home", section: "home" },
      { label: "About", section: "about" },
      { label: "Experience", section: "experience" },
      { label: "Projects", section: "projects" },
      { label: "Resume", section: "resume" },
      { label: "Blogs", section: "blogs" },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const handleNavClick = (section: SectionType, e: React.MouseEvent) => {
      e.preventDefault();
      setActiveSection(section);
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <Header />
    );
  };

  // Render the active section
  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "about":
        return <AboutSection />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "resume":
        return <Resume />;
      case "blogs":
        return <Blogs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 mt-16">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;