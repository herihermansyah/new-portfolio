import {cn} from "@/lib/utils";
import React, {forwardRef} from "react";

interface ToggleMenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const ToggleMenu = forwardRef<HTMLButtonElement, ToggleMenuProps>(
  ({className, children, ...props}, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "text-[24px] text-clear-off-white bg-purple p-2 rounded-md",
          "cursor-pointer active:scale-95 transition-all duration-100 ease-in-out",
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

ToggleMenu.displayName = "ToggleMenu";

export default ToggleMenu;
