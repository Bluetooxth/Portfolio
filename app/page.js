"use client";
import React, { useState } from "react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Nav from "@/components/Nav";

const LandingPage = () => {
  const [currentSection, setCurrentSection] = useState("About");

  const renderContent = () => {
    switch (currentSection) {
      case "About":
        return <AboutMe />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <ContactMe />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <React.Fragment>
      <Nav />
      <main className="py-12 space-y-12">
        <Hero />
        <Navigation
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        {renderContent()}
      </main>
    </React.Fragment>
  );
};

export default LandingPage;
