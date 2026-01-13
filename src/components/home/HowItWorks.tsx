import { motion } from "framer-motion";
import { CheckCircle2, FileText, Phone, DollarSign, Calendar } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Fill Out Our Simple Form",
      description: "Tell us about your property in just a few minutes",
      color: "text-navy-600",
    },
    {
      icon: Phone,
      title: "We'll Contact You Within 24 Hours",
      description: "A real person will reach out to discuss your situation",
      color: "text-navy-600",
    },
    {
      icon: DollarSign,
      title: "Receive Your Fair Cash Offer",
      description: "No obligation, no pressure - just a straightforward offer",
      color: "text-navy-600",
    },
    {
      icon: Calendar,
      title: "Close on Your Timeline",
      description: "Choose the closing date that works best for you",
      color: "text-navy-600",
    },
  ];

  // Container animation with staggered children
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

  // Individual card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Icon animation
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Step number circle - no hover animation
  const stepNumberVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3 + index * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {},
  };

  return (
    <section id="how-it-works" className="py-10 bg-gradient-to-br from-muted to-muted/80">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, straightforward process to get your home sold fast
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                variants={cardVariants}
              >
                {/* Step Number Badge */}
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  custom={index}
                  variants={stepNumberVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: false }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg" style={{ backgroundColor: '#2E8CB8' }}>
                    {index + 1}
                  </div>
                </motion.div>

                {/* Card - Fixed Height */}
                <motion.div
                  className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow pt-12 h-full flex flex-col"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon Container */}
                  <motion.div
                    className="flex justify-center mb-6"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: false }}
                  >
                    <Icon className={`w-12 h-12 ${step.color}`} strokeWidth={1.5} />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-semibold text-foreground text-center mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                    viewport={{ once: false }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description - Flex grow to push to bottom */}
                  <motion.p
                    className="text-muted-foreground text-center text-sm leading-relaxed flex-grow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                    viewport={{ once: false }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Hover Checkmark */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: false }}
        >
          <p className="text-muted-foreground mb-6">
            Ready to get started? It's as easy as 1, 2, 3, 4!
          </p>
          <motion.button
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Process
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
