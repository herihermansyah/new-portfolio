"use client";
import React from "react";
import Wrapper from "./wrapper";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";
import {
  designToolsData,
  developmentData,
  frameworkData,
  langugeData,
  SkillsType,
  stylingData,
} from "@/data/skills-data";

const SkillsSection = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="py-15"
      id="skills"
    >
      <Wrapper className="flex flex-col gap-6">
        <h2 className="text-[32px] font-extrabold text-Dark-Maroon capitalize text-center">
          skills
        </h2>
        <div className="flex items-center gap-13 gap-y-8 flex-wrap">
          <SkillCards title="Languages" item={langugeData} />
          <SkillCards title="Frameworks" item={frameworkData} />
          <SkillCards title="Styling / Ui" item={stylingData} />
          <SkillCards title="Development" item={developmentData} />
          <SkillCards title="Design" item={designToolsData} />
        </div>
      </Wrapper>
    </motion.section>
  );
};

interface SkillCardsProps {
  title?: string;
  item: SkillsType[];
}

const SkillCards = ({title, item}: SkillCardsProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[20px] font-semibold text-Dark-Maroon capitalize">
        {title}
      </h3>
      <div className="flex gap-4">
        {item.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={cn(
                "border border-Dark-Maroon ",
                "p-4 rounded-md flex-col flex items-center gap-4",
                index % 2 === 0
                  ? "shadow-brutal-Orange-Mustard"
                  : "shadow-brutal-Dark-Maroon",
              )}
            >
              <div className="text-[50px]">
                <Icon size={50} />
              </div>
              <div
                className={cn(
                  "bg-Pale-Mint rounded-md",
                  "flex items-center justify-center",
                )}
              >
                <span className="text-Dark-Maroon p-1 font-semibold text-[10px] uppercase">
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
