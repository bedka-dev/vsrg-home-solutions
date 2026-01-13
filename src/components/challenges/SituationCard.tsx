import { motion } from "framer-motion";
import { Situation } from "./situationsData";

interface SituationCardProps {
  situation: Situation;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SituationCard = ({ situation, isSelected, onSelect }: SituationCardProps) => {
  const Icon = situation.icon;

  return (
    <motion.button
      variants={cardVariants}
      onClick={onSelect}
      className={`rounded-lg px-4 py-3 shadow-medium transition-all text-left group flex items-center gap-3 ${
        isSelected
          ? "bg-secondary text-secondary-foreground border-2 border-secondary shadow-lg"
          : "bg-card text-foreground hover:border-secondary border border-transparent hover:shadow-lg"
      }`}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon */}
      <motion.div
        className={`p-2 rounded-lg shrink-0 ${
          isSelected ? "bg-secondary-foreground/20" : "bg-trust-blue/10"
        }`}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className={`w-5 h-5 ${isSelected ? "text-secondary-foreground" : "text-trust-blue"}`} />
      </motion.div>

      {/* Title */}
      <h3 className={`text-lg font-bold ${isSelected ? "" : "text-primary"}`}>
        {situation.title}
      </h3>
    </motion.button>
  );
};

export default SituationCard;
