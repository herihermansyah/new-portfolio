import {cn} from "@/lib/utils";
import React, {forwardRef} from "react";

interface WrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn("container mx-auto lg:w-main px-4 lg:px-0", className)}
      >
        {children}
      </div>
    );
  },
);

Wrapper.displayName = "Wrapper";

export default Wrapper;
