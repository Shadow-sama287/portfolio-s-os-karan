"use client";

import { useState, useCallback, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
    setTimeout(() => setShowContent(true), 100);
  }, []);

  // Dark mode on by default
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      <div
        className="transition-opacity duration-700"
        style={{ opacity: showContent ? 1 : 0 }}
      >
        {/* Top scroll-progress bar */}
        <ScrollProgress />

        {/* Bottom navbar */}
        <Navbar />

        {/* All sections — pb-14 so content doesn't hide behind the bottom navbar */}
        <main className="pb-14">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
