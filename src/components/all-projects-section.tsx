import React from "react";
import Wrapper from "./wrapper";
import {projectsData} from "@/data/projects-data";
import Image from "next/image";
import {cn} from "@/lib/utils";
import Link from "next/link";

const AllProjectsSection = () => {
  return (
    <section className="py-15">
      <Wrapper className="flex flex-col gap-6">
        <h2 className="text-[32px] font-extrabold text-center text-Dark-Maroon uppercase">
          portfolio
        </h2>
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "flex flex-col items-center p-4 gap-6 border-4 rounded-xl",
                "lg:flex-row lg:items-start",
                index % 2 === 0
                  ? "shadow-brutal-Pale-Mint"
                  : "shadow-brutal-Orange-Mustard",
              )}
            >
              <div
                className={cn(
                  "sm:w-100 sm:h-70 border-2 border-Pale-Mint rounded-xl overflow-hidden",
                  index % 2 === 0
                    ? "shadow-brutal-Orange-Mustard"
                    : "shadow-brutal-Pale-Mint",
                )}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover rounded-lg object-top"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                {/* title and description */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[22px] text-Dark-Maroon capitalize font-semibold">
                    {project.name}
                  </h3>
                  <p className="text-[18px] text-Dark-Maroon/75 ">
                    {project.about}
                  </p>
                </div>
                {/* tags */}
                <div className="flex items-center gap-3 flex-wrap">
                  {project.tech.map((tech, index) => (
                    <div
                      className={cn(
                        "bg-Orange-Mustard p-2 rounded-md",
                        "shadow-brutal-Dark-Maroon",
                        index % 2 === 0 ? "bg-Orange-Mustard" : "bg-Pale-Mint",
                      )}
                      key={index}
                    >
                      <span className="text-[14px] capitalize text-Dark-Maroon">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                {/* action */}
                <div className="flex gap-4 mt-3">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.live}
                    className={cn(
                      "text-Pale-Mint bg-Dark-Maroon rounded-md text-[14px] font-bold p-3 capitalize",
                      index % 2 === 0
                        ? "shadow-brutal-Pale-Mint"
                        : "shadow-brutal-Dark-Maroon",
                    )}
                  >
                    live demo
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                    className={cn(
                      "text-Dark-Maroon bg-Pale-Mint rounded-md text-[14px] font-bold p-3 capitalize",
                      index % 2 === 0
                        ? "shadow-brutal-Dark-Maroon"
                        : "shadow-brutal-Pale-Mint",
                    )}
                  >
                    github
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default AllProjectsSection;
