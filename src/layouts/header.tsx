"use client";
import Logo from "@/components/logo";
import MenuNavigation from "@/components/menu-navigation";
import ToggleMenu from "@/components/toggle-menu";
import Wrapper from "@/components/wrapper";
import {cn} from "@/lib/utils";
import React from "react";
import {HiMenuAlt3} from "react-icons/hi";
import {MdOutlineCloseFullscreen} from "react-icons/md";
import {motion} from "motion/react";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div
      initial={{y: -100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      className="bg-Pale-Mint py-5 relative z-10 shadow-dropdown-Dark-Maroon"
    >
      <Wrapper className="flex items-center justify-between ">
        <Logo />
        <div
          className={cn(
            "absolute bg-Pale-Mint w-full left-1/2 -translate-x-1/2 py-10",
            isOpen ? "translate-y-42" : "-translate-y-full",
            "transition-all duration-500 ease-in-out -z-10",
            "lg:static lg:z-10 lg:translate-y-0 lg:left-0 lg:translate-x-0 lg:py-0 lg:bg-transparent lg:w-fit",
            "lg:transition-none",
          )}
        >
          <MenuNavigation className="flex-col gap-5 items-center lg:flex-row" />
        </div>
        <ToggleMenu
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden"
        >
          {isOpen ? <MdOutlineCloseFullscreen /> : <HiMenuAlt3 />}
        </ToggleMenu>
      </Wrapper>
    </motion.div>
  );
};

export default Header;
