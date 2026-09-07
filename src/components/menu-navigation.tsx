import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChildMotion } from "./ui/wrapper-motion";

const menuData = [
  { id: 1, name: "projects", link: "/portfolio" },
  { id: 2, name: "service", link: "/service" },
  { id: 3, name: "blog", link: "/blog" },
  { id: 4, name: "about", link: "/about" },
];

interface MenuNavigationProps {
  className?: React.ReactNode;
}

const MenuNavigation = ({ className }: MenuNavigationProps) => {
  return (
    <nav aria-label="menu header">
      <ul className={cn("flex items-center gap-5 capitalize", className)}>
        {menuData.map((item) => (
          <ChildMotion key={item.id}>
            <li>
              <Link
                href={item.link}
                className="text-Dark-Maroon font-semibold text-[18px] lg:text-[20px]"
              >
                {item.name}
              </Link>
            </li>
          </ChildMotion>
        ))}
      </ul>
    </nav>
  );
};

export default MenuNavigation;
