import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import ContactForm from "@/components/common/ContactForm";
import {
  parseAddressString,
  PhoneCard,
  ContactInfoCard,
  ServiceAreaMap,
  ServiceAreasBadge,
  WhatHappensNext,
  BottomCTA,
} from "@/components/contact";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const formRef = useRef<HTMLDivElement>(null);

  // Get address from URL params and parse it
  const addressParam = searchParams.get("address");
  const decodedAddress = addressParam ? decodeURIComponent(addressParam) : "";
  const parsedAddress = parseAddressString(decodedAddress);

  // Scroll to form if address is provided
  useEffect(() => {
    if (decodedAddress && formRef.current) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    }
  }, [decodedAddress]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Layout>
      <div className="bg-background">
        {/* Hero Section */}
        <section className="py-20 pt-32 bg-gradient-to-br from-muted to-background">
          <div className="container mx-auto px-4 mt-12">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Get Your Cash Offer
              </h1>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and receive a no-obligation cash offer
                within 24 hours. No repairs, no fees, no hassle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content - Two Column Layout */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Left Column - Company Info */}
              <motion.div className="lg:col-span-2 space-y-6" variants={itemVariants}>
                <PhoneCard />
                <ContactInfoCard />
                <ServiceAreaMap />
                <ServiceAreasBadge />
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div className="lg:col-span-3" variants={itemVariants} ref={formRef}>
                <ContactForm
                  title=""
                  subtitle=""
                  showCard={true}
                  initialAddress={parsedAddress.streetAddress}
                  initialCity={parsedAddress.city}
                  initialState={parsedAddress.state}
                  initialZip={parsedAddress.zip}
                  source={decodedAddress ? "home-cta" : "contact-page"}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <WhatHappensNext />

        {/* Bottom CTA */}
        <BottomCTA />
      </div>
    </Layout>
  );
};

export default Contact;
