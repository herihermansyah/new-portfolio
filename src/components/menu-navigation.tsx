import React from "react";
import {cn} from "@/lib/utils";

const menuData = [
  {id: 1, name: "home", link: "#home"},
  {id: 2, name: "projects", link: "#projects"},
  {id: 3, name: "service", link: "#service"},
  {id: 4, name: "about", link: "#about"},
  {id: 5, name: "contact", link: "#contact"},
];

interface MenuNavigationProps {
  className?: React.ReactNode;
}

const MenuNavigation = ({className}: MenuNavigationProps) => {
  return (
    <nav aria-label="menu header">
      <ul className={cn("flex items-center gap-5 capitalize", className)}>
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
