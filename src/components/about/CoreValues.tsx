import { motion } from "framer-motion";
import { Heart, Handshake, MapPin } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Family Focus",
      description: "Every homeowner we work with becomes part of our extended family. Your success is our success. We treat your situation with the care we'd want for our own.",
    },
    {
      icon: Handshake,
      title: "Integrity First",
      description: "We believe in complete transparency. You'll always know exactly how we calculated our offer and what to expect at closing. No hidden fees, ever.",
    },
    {
      icon: MapPin,
      title: "Community Commitment",
      description: "We're invested in the DFW communities we serve, and we're proud to help our neighbors find solutions during tough times.",
    },
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
    <section className="py-10 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground">
            The principles that guide every interaction and every offer we make.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className="bg-card rounded-lg p-8 shadow-medium hover:shadow-lg transition-all border-t-4 border-secondary"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
