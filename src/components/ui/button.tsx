import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "bg-Dark-Maroon text-white",
    },
    size: {
      default: "h-10 py-2 px-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = forwardRef<HTMLButtonElement>(() => {
  return <button>Button</button>;
});

Button.displayName = "Button";

export default Button;
