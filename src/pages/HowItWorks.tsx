import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/common/Layout";
import CTAButtons from "@/components/common/CTAButtons";

// Custom SVG Icons with animated paths
const FormIcon = () => (
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

const PhoneIcon = () => (
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

const HomeCheckIcon = () => (
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

const KeysIcon = () => (
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

const steps = [
  {
    number: "01",
    icon: FormIcon,
    title: "Fill Out Our Simple Form",
    description:
      "Tell us about your property and situation. Takes less than 60 seconds, and there's absolutely no obligation.",
    accent: "#3B82F6",
    bgPattern:
      "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
  },
  {
    number: "02",
    icon: PhoneIcon,
    title: "We'll Contact You Within 24 Hours",
    description:
      "Our team will call to learn more about your home and schedule a convenient time to visit.",
    accent: "#EAB308",
    bgPattern:
      "radial-gradient(circle at 80% 20%, rgba(234, 179, 8, 0.15) 0%, transparent 50%)",
  },
  {
    number: "03",
    icon: HomeCheckIcon,
    title: "Receive Your Fair Cash Offer",
    description:
      "After visiting your property, we'll present a no-obligation cash offer based on current market conditions.",
    accent: "#3B82F6",
    bgPattern:
      "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
  },
  {
    number: "04",
    icon: KeysIcon,
    title: "Close on Your Timeline",
    description:
      "Choose your closing date—whether that's 7 days or 7 months. We work around your schedule.",
    accent: "#EAB308",
    bgPattern:
      "radial-gradient(circle at 80% 80%, rgba(234, 179, 8, 0.15) 0%, transparent 50%)",
  },
];

interface StepCardProps {
  step: (typeof steps)[0];
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

const FloatingElement = ({
  delay,
  duration,
  className,
}: {
  delay: number;
  duration: number;
  className: string;
}) => (
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
              className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
            />
            <FloatingElement
              delay={2}
              duration={10}
              className="absolute top-40 right-20 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl"
            />
            <FloatingElement
              delay={4}
              duration={12}
              className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
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