import React from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";

const menuData = [
  {id: 1, name: "projects", link: "#projects"},
  {id: 2, name: "skills", link: "#skills"},
  {id: 3, name: "service", link: "#service"},
  {id: 4, name: "contact", link: "#contact"},
];

interface MenuNavigationProps {
  className?: React.ReactNode;
}

const MenuNavigation = ({className}: MenuNavigationProps) => {
  return (
    <nav aria-label="menu header">
      <ul className={cn("flex items-center gap-5 capitalize", className)}>
        <Link
          href="/"
          className="text-Dark-Maroon font-semibold text-[18px] lg:text-[20px]"
        >
          home
        </Link>
        {menuData.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              className="text-Dark-Maroon font-semibold text-[18px] lg:text-[20px]"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuNavigation;
