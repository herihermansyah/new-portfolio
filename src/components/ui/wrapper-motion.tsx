"use client";
import { motion, Variants } from "motion/react";
import React, { ComponentProps, forwardRef } from "react";

type MotionDivType = ComponentProps<typeof motion.div>;

interface MotionWrapperProps extends MotionDivType {
  children?: React.ReactNode;
}

// ==================== wrapper motion =====================

const wrapperMotion: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
      ease: "easeInOut",
    },
  },
};

const WrapperMotion = forwardRef<HTMLDivElement, MotionWrapperProps>(
  (
    { initial, viewport, animate, variants, className, children, ...props },
    ref,
  ) => {
    const hashWhileInView = props.whileInView !== undefined;
    return (
      <motion.div
        variants={variants || wrapperMotion}
        initial={initial !== undefined ? initial : "hidden"}
        animate={
          animate !== undefined
            ? animate
            : hashWhileInView
              ? undefined
              : "visible"
        }
        viewport={
          viewport !== undefined
            ? viewport
            : hashWhileInView
              ? { once: true, amount: 0.5 }
              : undefined
        }
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

WrapperMotion.displayName = "WrapperMotion";

// ===================== child motion =====================

const childMotion: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const ChildMotion = forwardRef<HTMLDivElement, MotionDivType>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        variants={childMotion}
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

ChildMotion.displayName = "ChildMotion";

export { WrapperMotion, ChildMotion };
