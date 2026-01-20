import { motion } from "framer-motion";
import { MessageSquare, Calendar, Handshake, LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: MessageSquare,
    title: "We'll Call You",
    description:
      "Within 24 hours, a member of our team will reach out to learn more about your property and situation.",
  },
  {
    icon: Calendar,
    title: "Schedule a Visit",
    description:
      "We'll arrange a convenient time to visit your property—no need to clean or make repairs.",
  },
  {
    icon: Handshake,
    title: "Receive Your Offer",
    description:
      "Get a fair, no-obligation cash offer. If you accept, choose your closing date.",
  },
];

const WhatHappensNext = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-12">What Happens Next?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-trust-blue/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-trust-blue" />
                </div>
                <div className="text-sm font-semibold text-trust-blue mb-2">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatHappensNext;
