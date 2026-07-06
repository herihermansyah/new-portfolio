"use client";
import React from "react";
import Wrapper from "./wrapper";
import Image from "next/image";
import {motion} from "motion/react";

const Hero = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      id="home"
      className="py-20 bg-Light-Yellow-Cream shadow-dropdown-Pale-Mint"
    >
      <Wrapper className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center justify-between">
        <div className="flex flex-col gap-5 lg:w-200">
          <div className="flex flex-col gap-1">
            <h1 className="flex flex-col text-Dark-Maroon text-[36px] sm:text-[52px] leading-10 sm:leading-15 font-bold">
              <span className="text-[30px] leading-5">Hello, I&apos;m</span>
              <span>Heri Hermansyah</span>
            </h1>
            <h2 className="text-Dark-Maroon/80 text-[22px] sm:text-[32px] font-semibold">
              Frontend Web Developer
            </h2>
          </div>
          <p className="text-Dark-Maroon/70">
            I specialize in building high-performance, SEO-friendly web
            applications using Next.js and Tailwind CSS. I don&apos;t just
            translate designs into code—I focus on writing clean, scalable
            architecture and optimizing loading speeds to deliver seamless user
            experiences that actually drive results.
          </p>
        </div>
        <div className="overflow-hidden rounded-4xl shadow-brutal-Pale-Mint">
          <Image
            src={"/vector-hero.webp"}
            alt="me"
            width={500}
            height={500}
            className="object-cover object-top"
            priority
          />
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default Hero;
