"use client"
import React from "react";
import Wrapper from "./wrapper";
import {motion} from "motion/react";
import {cn} from "@/lib/utils";
import {serviceData} from "@/data/service-data";

const ServiceSection = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="py-15"
      id="service"
    >
      <Wrapper className="flex flex-col gap-6">
        <h2 className="text-[32px] font-extrabold text-Dark-Maroon capitalize text-center">
          service
        </h2>
        <ServiceCard />
      </Wrapper>
    </motion.section>
  );
};

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {serviceData.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className={cn(
              "border-4 border-Dark-Maroon rounded-2xl overflow-hidden flex flex-col gap-10 pb-5",
              index % 2 === 0
                ? "shadow-brutal-Orange-Mustard"
                : "shadow-brutal-Pale-Mint",
            )}
          >
            {/* bg top */}
            <div
              className={cn(
                "h-25 relative",
                index % 2 === 0 ? "bg-Pale-Mint" : "bg-Orange-Mustard",
              )}
            >
              <p
                className={cn(
                  "text-[26px] font-extrabold text-Dark-Maroon capitalize whitespace-nowrap",
                  "absolute left-1/2 -translate-x-1/2 top-5",
                )}
              >
                {item.name}
              </p>
              <span
                className={cn(
                  "absolute -bottom-6 left-5  p-3 rounded-full text-clear-off-white",
                  "shadow-brutal-Dark-Maroon",
                  index % 2 === 0 ? "bg-Orange-Mustard" : "bg-Pale-Mint",
                )}
              >
                <Icon size="50" />
              </span>
            </div>
            <div className="px-5 flex flex-col gap-2">
              {/* title and desc */}
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-semibold text-Dark-Maroon/65 capitalize">
                  {item.description}
                </p>
              </div>
              {/* tech icon */}
              <div className="flex gap-2">
                {item.tech.map((item, index) => {
                  const TechIcon = item.iconTech;
                  return (
                    <div
                      key={index}
                      className={cn(
                        "p-2 rounded-full shadow-brutal-Dark-Maroon",
                        index % 2 === 0 ? "bg-Orange-Mustard" : "bg-Pale-Mint",
                      )}
                    >
                      <TechIcon size="25" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSection;
