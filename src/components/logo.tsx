import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-1 uppercase">
      <h1 className="text-Dark-Maroon text-[24px] sm:text-[36px] font-bold">
        Hermansyah
      </h1>
      <div className="w-0.5 h-7 sm:h-8 bg-Dark-Maroon" />
      <h2 className="flex flex-col leading-4 text-Dark-Maroon/80 font-semibold">
        <span>Frontend</span> <span>Developer</span>
      </h2>
    </Link>
  );
};

export default Logo;
