import Hero from "@/components/hero-section";
import Projects from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <SkillsSection />
    </div>
  );
};

export default page;
