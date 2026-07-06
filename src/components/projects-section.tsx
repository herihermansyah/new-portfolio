"use client";
import React from "react";
import Wrapper from "./wrapper";
import Link from "next/link";
import {IoIosArrowRoundForward} from "react-icons/io";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Mousewheel, Navigation} from "swiper/modules";
import {FaRegArrowAltCircleLeft} from "react-icons/fa";
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import {motion} from "motion/react";
import {projectsData} from "@/data/projects-data";

const Projects = () => {
  return (
    <motion.section
      initial={{opacity: 0, y: -50}}
      animate={{opacity: 1, y: 0}}
      id="projects"
      className="pt-15"
    >
      <Wrapper className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-semibold text-Dark-Maroon capitalize">
            Projects
          </h2>
          <Link
            href={"/portfolio"}
            className="text-Dark-Maroon/80 font-semibold flex items-center gap-1 capitalize"
          >
            <span>See all projects</span>
            <span>
              <IoIosArrowRoundForward size={25} />
            </span>
          </Link>
        </div>
        <ProjectCards />
      </Wrapper>
    </motion.section>
  );
};

const ProjectCards = () => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        mousewheel={{forceToAxis: true}}
        loop={true}
        modules={[Mousewheel, Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        className="w-full h-110"
      >
        {projectsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={cn(
                "border-4 rounded-xl p-4 flex flex-col gap-2 items-center justify-center overflow-hidden",
                item.id % 2 === 0
                  ? "shadow-brutal-Dark-Maroon"
                  : "shadow-brutal-Orange-Mustard",
                item.id % 2 === 0 ? "border-Pale-Mint" : "border-Dark-Maroon",
                "bg-Light-Yellow-Cream",
              )}
            >
              {/* image */}
              <div
                className={cn(
                  "overflow-hidden rounded-md w-50 h-50 border-2 border-purple flex items-center justify-center",
                  item.id % 2 === 0 ? "bg-Dark-Maroon" : "bg-Pale-Mint",
                  "p-4",
                  item.id % 2 === 0
                    ? "shadow-brutal-Pale-Mint"
                    : "shadow-brutal-Dark-Maroon",
                )}
              >
                <Image
                  src={item.thumbnail}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="object-cover object-top rounded-md"
                />
              </div>
              <h3 className="text-[18px] text-charcoal-gray-100 line-clamp-1 font-semibold text-center">
                {item.name}
              </h3>
              <p className="text-[14px] text-charcoal-gray/50 line-clamp-3 text-center">
                {item.about}
              </p>
              {/* badge  */}
              <div className="flex items-center gap-2 justify-center">
                {item.tech.map((tech, index) => (
                  <div
                    key={index}
                    className={cn(
                      "rounded-md p-1 text-[8px] capitalize whitespace-nowrap",
                      index % 2 === 0 ? "bg-Orange-Mustard" : "bg-Pale-Mint",
                      "text-center",
                    )}
                  >
                    <span className="text-Dark-Maroon">{tech.name}</span>
                  </div>
                ))}
              </div>
              {/* action */}
              <div className="flex gap-2 mt-3">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.live}
                  className="text-clear-off-white bg-Dark-Maroon rounded-md text-[10px] font-bold p-2 capitalize"
                >
                  live demo
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.github}
                  className="text-Dark-Maroon bg-Pale-Mint rounded-md text-[10px] font-bold p-2 capitalize"
                >
                  github
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* navigation */}
      <div className="flex items-center">
        <button
          className={cn(
            "absolute swiper-button-prev cursor-pointer rounded-full active:scale-95",
            "translate-y-10 z-10 left-5 top-1/3 p-2",
            "bg-Pale-Mint text-clear-off-white shadow-brutal-Dark-Maroon border-2 border-Orange-Mustard",
            "transition-all duration-500 ease-in-out",
          )}
        >
          <FaRegArrowAltCircleLeft size={30} />
        </button>
        <button
          className={cn(
            "absolute swiper-button-next cursor-pointer rounded-full active:scale-95",
            "top-1/3 translate-y-10 z-10 right-5 p-2",
            "bg-Pale-Mint  text-clear-off-white shadow-brutal-Dark-Maroon border-2 border-Orange-Mustard",
            "transition-all duration-500 ease-in-out",
          )}
        >
          <FaRegArrowAltCircleRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
