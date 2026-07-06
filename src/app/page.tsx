import ContactSection from "@/components/contact-section";
import Hero from "@/components/hero-section";
import Projects from "@/components/projects-section";
import ServiceSection from "@/components/service-section";
import SkillsSection from "@/components/skills-section";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <SkillsSection />
      <ServiceSection />
      <ContactSection />
    </div>
  );
};

export default page;
