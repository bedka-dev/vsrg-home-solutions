import { motion } from "framer-motion";

interface FloatingElementProps {
  delay: number;
  duration: number;
  className: string;
}

const FloatingElement = ({ delay, duration, className }: FloatingElementProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      y: [0, -30, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={className}
  />
);

export default FloatingElement;
