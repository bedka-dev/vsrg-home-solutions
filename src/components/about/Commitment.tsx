import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const Commitment = () => {
  const commitments = [
    "We'll treat you with respect and dignity, always",
    "We'll provide honest offers based on real market data",
    "We'll never pressure you to accept our offer",
    "We'll work on your timeline, not ours",
    "We'll maintain clear communication every step of the way",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Our Commitment */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="mb-6 text-primary-foreground">
              Our Commitment To You
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              We know trust is earned, so our goal is to earn yours through our actions, transparency, and compassion — not just words. If you give our family the chance to help, we'll work hard to make sure you feel supported, informed, and confident at every step.
            </p>

            {/* Commitment Points */}
            <motion.div
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground">{commitment}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Note From Our Family */}
          <motion.div
            className="bg-secondary/20 rounded-xl p-8 border-2 border-secondary"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              A Note From Our Family
            </h3>

            <p className="text-primary-foreground/90 mb-4 leading-relaxed">
              As a newly launched, family-run real estate investment company, our reputation means everything to us. While we're still building our early client reviews, we want to be fully transparent.
            </p>

            <div className="bg-secondary text-primary rounded-lg p-4 mb-4">
              <p className="font-bold text-lg">
                We're new — but we're committed to doing things the right way.
              </p>
            </div>

            <p className="text-primary-foreground/90 leading-relaxed">
              Every homeowner we meet gets: honest offers, clear explanations, respectful communication, and no pressure — ever.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
