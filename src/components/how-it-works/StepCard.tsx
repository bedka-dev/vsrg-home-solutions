import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Step, steps } from "./stepsData";

interface StepCardProps {
  step: Step;
  index: number;
}

const StepCard = ({ step, index }: StepCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative"
    >
      {/* Connection line to next card */}
      {index < steps.length - 1 && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
          className="absolute top-24 left-1/2 w-full h-0.5 origin-left hidden lg:block"
          style={{
            background: `linear-gradient(90deg, ${step.accent}40 0%, ${steps[index + 1].accent}40 100%)`,
          }}
        />
      )}

      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden"
        style={{ background: step.bgPattern }}
      >
        {/* Large step number background */}
        <div
          className="absolute -top-4 -right-4 text-[140px] font-black leading-none opacity-[0.03] select-none pointer-events-none"
          style={{ color: step.accent }}
        >
          {step.number}
        </div>

        {/* Step number badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: index * 0.15 + 0.3,
          }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          style={{
            background: `${step.accent}20`,
            color: step.accent,
            border: `1px solid ${step.accent}40`,
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: step.accent }}
          />
          Step {step.number}
        </motion.div>

        {/* Icon container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.4,
            type: "spring",
          }}
          className="relative w-20 h-20 mb-6"
          style={{ color: step.accent }}
        >
          {/* Glow effect */}
          <div
            className="absolute inset-0 blur-2xl opacity-40 rounded-full"
            style={{ background: step.accent }}
          />
          <Icon />
        </motion.div>

        {/* Content */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
          className="text-xl font-bold text-white mb-3 leading-tight"
        >
          {step.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
          className="text-white/60 leading-relaxed"
        >
          {step.description}
        </motion.p>

        {/* Hover accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-1 origin-left"
          style={{
            background: `linear-gradient(90deg, ${step.accent}, transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default StepCard;
