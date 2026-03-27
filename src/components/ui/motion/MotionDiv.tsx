"use client";

import { motion, type Variants } from "framer-motion";
import { fadeInUp, viewportConfig, viewportConfigRepeat } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MotionDivProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: "div" | "article" | "aside";
  repeat?: boolean;
}

export function MotionDiv({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
  as = "div",
  repeat = false,
}: MotionDivProps) {
  const Component = motion.create(as);
  const viewport = repeat ? viewportConfigRepeat : viewportConfig;

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={delay ? { delay } : undefined}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
