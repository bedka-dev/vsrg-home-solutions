import { motion } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/common/Layout";
import CTAButtons from "@/components/common/CTAButtons";
import { steps, StepCard, FloatingElement } from "@/components/how-it-works";

const HowItWorks = () => {
  const sectionRef = useRef(null);

  return (
    <Layout>
      <div className="bg-background">
        {/* Hero Section with Steps */}
        <section
          ref={sectionRef}
          className="relative pt-32 pb-24 lg:pb-32 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #0a0f1a 0%, #111827 50%, #0a0f1a 100%)",
          }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElement
              delay={0}
              duration={8}
              className="absolute top-20 left-10 w-64 h-64 rounded-full bg-trust-blue/10 blur-3xl"
            />
            <FloatingElement
              delay={2}
              duration={10}
              className="absolute top-40 right-20 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl"
            />
            <FloatingElement
              delay={4}
              duration={12}
              className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-trust-blue/10 blur-3xl"
            />
            <FloatingElement
              delay={1}
              duration={9}
              className="absolute bottom-40 right-10 w-72 h-72 rounded-full bg-yellow-500/10 blur-3xl"
            />

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Header */}
            <motion.div
              className="text-center mb-20 mt-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Selling Your Home Made Simple
              </h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                No agents, no fees, no stress. Our straightforward process gets
                you from first contact to closing in just four simple steps.
              </p>
            </motion.div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <StepCard key={step.number} step={step} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="mb-6">Why Choose Our Process?</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    title: "No Hidden Fees",
                    description:
                      "Zero commissions, no closing costs, no surprises",
                  },
                  {
                    title: "Sell As-Is",
                    description:
                      "No repairs, cleaning, or staging required",
                  },
                  {
                    title: "You Choose the Date",
                    description:
                      "Close in 7 days or 7 months—your timeline",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    viewport={{ once: false }}
                    className="bg-card rounded-lg p-6 shadow-medium"
                  >
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Preview Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="text-center mb-12">Common Questions</h2>

              <div className="space-y-6">
                {[
                  {
                    question: "How do you determine your offer price?",
                    answer:
                      "We analyze current market conditions, recent comparable sales in your area, and your home's condition to present a fair, competitive cash offer.",
                  },
                  {
                    question: "Are there any fees or commissions?",
                    answer:
                      "Absolutely not. There are no agent commissions, no closing costs, and no hidden fees. The offer we make is the amount you receive.",
                  },
                  {
                    question: "What if my house needs major repairs?",
                    answer:
                      "We buy houses in any condition. Foundation issues, roof damage, outdated systems—it doesn't matter. You don't need to fix anything.",
                  },
                ].map((faq, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-card rounded-lg p-6 shadow-medium"
                  >
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-foreground">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-foreground mb-12">
                Take the first step today. Fill out our simple form and receive
                your no-obligation cash offer within 24 hours.
              </p>

              <CTAButtons variant="light" />
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HowItWorks;
