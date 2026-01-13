import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/common/Layout";
import CTAButtons from "@/components/common/CTAButtons";
import { situations, SituationCard, SituationCarousel } from "@/components/challenges";

const Challenges = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <Layout>
      <div className="bg-background">
        {/* Hero Section */}
        <section className="py-20 pt-32 bg-gradient-to-br from-muted to-muted/80">
          <div className="container mx-auto px-4 mt-12">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Life Happens. We're Here to Help.
              </h1>
              <p className="text-xl text-foreground leading-relaxed">
                Life happens. Whether you are facing foreclosure, going through a divorce, or inherited a property you can't manage,
                we provide respectful, fast solutions to help you move forward.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Situation Cards Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {situations.map((situation, index) => (
                <SituationCard
                  key={situation.id}
                  situation={situation}
                  index={index}
                  isSelected={selectedIndex === index}
                  onSelect={() => setSelectedIndex(index)}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Carousel/Slider Section */}
        <SituationCarousel
          situations={situations}
          selectedIndex={selectedIndex}
          onIndexChange={setSelectedIndex}
        />

        {/* Why We're Different Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="mb-6">
                Why Work With Victory Springs?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    title: "Fast Closing",
                    description: "Sell in as few as 7 days—not months",
                  },
                  {
                    title: "No Stress",
                    description: "No repairs, inspections, or showings",
                  },
                  {
                    title: "Fair Offers",
                    description: "Honest prices based on real market data",
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

        {/* Final CTA */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="mb-6">
                Your Situation Isn't Uncommon—Your Solution Is
              </h2>
              <p className="text-lg text-foreground mb-12">
                Thousands of families in the DFW area are facing similar challenges.
                The difference is how quickly and easily you can solve them.
              </p>

              <CTAButtons variant="light" />
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Challenges;
