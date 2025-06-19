
import { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const nameVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Additional smooth animation variants for consistent use across components
export const smoothBounceAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: [0.25, 0.46, 0.45, 0.94]
  }
};

export const textUpDownAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: [0.25, 0.46, 0.45, 0.94]
  }
};
