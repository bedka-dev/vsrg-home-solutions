import { motion } from "framer-motion";

export const FormIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <motion.rect
      x="12"
      y="8"
      width="40"
      height="48"
      rx="4"
      stroke="currentColor"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.path
      d="M20 20h24M20 28h24M20 36h16"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
    <motion.path
      d="M20 46l4 4 8-8"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    />
  </svg>
);

export const PhoneIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <motion.path
      d="M14 24c0-5.523 4.477-10 10-10h16c5.523 0 10 4.477 10 10v16c0 5.523-4.477 10-10 10H24c-5.523 0-10-4.477-10-10V24z"
      stroke="currentColor"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.circle
      cx="32"
      cy="32"
      r="8"
      stroke="currentColor"
      strokeWidth="2.5"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
    />
    <motion.path
      d="M44 12l4-4M48 16l4-4M52 12l-4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
    />
  </svg>
);

export const HomeCheckIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <motion.path
      d="M8 28L32 8l24 20"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    />
    <motion.path
      d="M12 26v24a4 4 0 004 4h32a4 4 0 004-4V26"
      stroke="currentColor"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
    <motion.circle
      cx="44"
      cy="44"
      r="12"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 1, type: "spring" }}
    />
    <motion.path
      d="M39 44l3 3 6-6"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 1.3 }}
    />
  </svg>
);

export const KeysIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <motion.circle
      cx="20"
      cy="20"
      r="12"
      stroke="currentColor"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
    <motion.circle
      cx="20"
      cy="20"
      r="5"
      stroke="currentColor"
      strokeWidth="2.5"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
    />
    <motion.path
      d="M28 28l24 24"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    />
    <motion.path
      d="M44 44l6-6M48 52l6-6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 1.2 }}
    />
    <motion.circle
      cx="52"
      cy="52"
      r="4"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1.4, type: "spring" }}
    />
  </svg>
);
