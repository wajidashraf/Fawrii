"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerContainerWide, viewportConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  /** Use wider stagger delay (for card grids) */
  wide?: boolean;
}

export function StaggerChildren({
  children,
  className,
  wide = false,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={wide ? staggerContainerWide : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
