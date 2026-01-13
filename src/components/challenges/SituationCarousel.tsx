import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Situation } from "./situationsData";

interface SituationCarouselProps {
  situations: Situation[];
  selectedIndex: number;
  onIndexChange: (index: number) => void;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const SituationCarousel = ({ situations, selectedIndex, onIndexChange }: SituationCarouselProps) => {
  const selectedSituation = situations[selectedIndex];

  const paginate = (newDirection: number) => {
    let nextIndex = selectedIndex + newDirection;
    if (nextIndex < 0) nextIndex = situations.length - 1;
    if (nextIndex >= situations.length) nextIndex = 0;
    onIndexChange(nextIndex);
  };

  return (
    <AnimatePresence mode="wait" custom={selectedIndex}>
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              {selectedSituation.fullTitle}
            </p>
            <h2 className="mb-4">
              {selectedSituation.subtitle}
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          {/* Carousel Content */}
          <motion.div
            key={selectedIndex}
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="max-w-5xl mx-auto"
          >
            {/* Stat */}
            <p className="text-xl font-semibold text-primary mb-6 text-center italic">
              "{selectedSituation.stat}"
            </p>

            {/* Image + Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Image */}
              {selectedSituation.image && (
                <motion.div
                  className="rounded-lg overflow-hidden shadow-lg h-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={selectedSituation.image}
                    alt={selectedSituation.imageAlt}
                    className="w-full h-full object-cover min-h-[280px]"
                  />
                </motion.div>
              )}

              {/* Text Content */}
              <div className={selectedSituation.image ? "flex flex-col justify-center" : "md:col-span-2"}>
                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-foreground leading-normal">
                    {selectedSituation.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    How We Can Help
                  </h3>
                  <ul className="space-y-1">
                    {selectedSituation.solution.map((point, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2 text-foreground leading-tight"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                      >
                        <span className="text-secondary font-bold mt-0.5">✓</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              className="flex gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 font-semibold text-lg"
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {selectedSituation.cta}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div
            className="flex items-center justify-between mt-12 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            {/* Left Arrow */}
            <motion.button
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Indicator Dots */}
            <div className="flex gap-2">
              {situations.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => onIndexChange(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === selectedIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30 w-2 hover:bg-primary/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <motion.button
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>

          {/* Step Counter */}
          <motion.div
            className="text-center mt-8 text-primary font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <p>
              Situation {selectedIndex + 1} of {situations.length}
            </p>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default SituationCarousel;
