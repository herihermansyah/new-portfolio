"use client"
import React from "react";
import Wrapper from "./wrapper";
import {motion} from "motion/react";

const ContactSection = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="py-15"
      id="contact"
    >
      <Wrapper className="flex flex-col gap-6">
        <h2 className="text-[32px] font-extrabold text-Dark-Maroon capitalize text-center">
          contact
        </h2>
        <div className="w-full aspect-video border-4 border-Dark-Maroon rounded-xl overflow-hidden shadow-brutal-Orange-Mustard">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.20960976086!2d112.6302825975777!3d-7.275612006408551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1783319358694!5m2!1sen!2sid"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default ContactSection;
