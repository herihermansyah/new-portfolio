"use client";
import Wrapper from "@/components/wrapper";
import React from "react";
import {motion} from "motion/react";

const Footer = () => {
  const allYear = new Date().getFullYear();
  return (
    <motion.div
      initial={{y: 100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      className="py-8 bg-Orange-Mustard"
    >
      <Wrapper>
        <p className="text-center text-clear-off-white">
          &copy; {allYear} Herman | Frontend Web Developer. All Rights Reserved.
        </p>
      </Wrapper>
    </motion.div>
  );
};

export default Footer;
