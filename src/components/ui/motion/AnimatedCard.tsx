"use client";

import { motion } from "framer-motion";
import { staggerItem, easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Use as a child of <StaggerChildren>.
 * Animates in with stagger + subtle hover lift.
 */
export function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: easeOut } }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
