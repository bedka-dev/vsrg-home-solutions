import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Home, Heart, Truck, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Layout from "@/components/common/Layout";
import CTAButtons from "@/components/common/CTAButtons";

// Import the images
import foreclosureImg from "@/assets/challenges/foreclosure.jpg";
import inheritedImg from "@/assets/challenges/inherited.jpg";
import relocateImg from "@/assets/challenges/relocate.jpg";
import divorceImg from "@/assets/challenges/divorce-meeting.jpg";

const Challenges = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const situations = [
    {
      id: "foreclosure",
      icon: AlertCircle,
      title: "Facing Foreclosure?",
      shortDescription: "Looming auction dates and potential credit damage can be...",
      image: foreclosureImg,
      imageAlt: "Family stressed about foreclosure",
      subtitle: "Stop Foreclosure — We Can Help",
      fullTitle: "Facing Foreclosure or Pre-Foreclosure",
      stat: "39% of DFW families are at risk of losing their home",
      challenge: `In the Dallas-Fort Worth area, one in four homeowners is behind on mortgage payments. If you're facing foreclosure, every day counts. A foreclosure doesn't just affect your credit score—it can impact your ability to rent, buy, or finance for years to come. The process is stressful, costly, and can feel impossible to stop once it starts.`,
      solution: [
        "We can close quickly—often before the foreclosure sale date",
        "Our cash offer may help you avoid a foreclosure on your permanent record",
        "You walk away with cash instead of losing everything",
        "We handle all paperwork and work directly with your lender if needed",
        "No waiting for buyer financing or inspections"
      ],
      cta: "Get Help Now — Request Your Cash Offer",
    },
    {
      id: "inherited",
      icon: Home,
      title: "Inherited a Property?",
      shortDescription: "Unexpected taxes, maintenance, and family disagreements can tu...",
      image: inheritedImg,
      imageAlt: "Family dealing with inherited property complexity",
      subtitle: "Inherited a House You Don't Want?",
      fullTitle: "Inherited Property",
      stat: "Managing an inherited home adds stress during an already difficult time",
      challenge: `Inheriting property can be overwhelming—especially if you live out of state, the home needs repairs, or multiple heirs are involved. Probate delays, estate taxes, and maintenance costs can drain resources fast. You may feel obligated to keep a property you didn't choose, in a location far from where you live.`,
      solution: [
        "We buy inherited houses in any condition—no repairs needed",
        "No need to clean out belongings, stage, or maintain the property",
        "We work directly with multiple heirs, executors, and attorneys",
        "Fast closing lets you settle the estate and move forward",
        "We handle all details so you can focus on what matters"
      ],
      cta: "Sell Your Inherited Property — Get Your Offer",
    },
    {
      id: "divorce",
      icon: Heart,
      title: "Going Through Divorce?",
      shortDescription: "Separating assets shouldn't add to the emotional toll. We offer a...",
      image: divorceImg,
      imageAlt: "Professional meeting about divorce settlement",
      subtitle: "Simplify Your Divorce Settlement",
      fullTitle: "Going Through a Divorce",
      stat: "Home sale disputes complicate 60% of divorce proceedings",
      challenge: `Divorce is already stressful without the added complexity of selling a shared home. You may disagree on repairs, pricing, or timeline. Traditional sales take 60-90 days, extending the emotional and financial burden. Meanwhile, both parties are tied to the property, and every decision requires agreement from someone you may not want to negotiate with.`,
      solution: [
        "Fast, fair cash offers so you can divide assets and move forward",
        "We work with both parties and attorneys—no need to agree on everything",
        "No disputes over repairs, staging, or listing price",
        "Close in 7-14 days instead of waiting months",
        "Stop being tied to a shared property during proceedings"
      ],
      cta: "Simplify Your Divorce — Get Your Cash Offer",
    },
    {
      id: "relocate",
      icon: Truck,
      title: "Relocating Quickly?",
      shortDescription: "New job or lifestyle change? Don't let an unsold house hold you back.",
      image: relocateImg,
      imageAlt: "Man excited about quick relocation",
      subtitle: "Relocating for Work or Family?",
      fullTitle: "Need to Relocate Quickly",
      stat: "DFW's rapidly growing job market means relocation is common",
      challenge: `Whether it's a job transfer, military deployment, or a family emergency, sometimes you need to move fast. Traditional real estate takes 60-90+ days. You can't wait that long—you need to sell now. Most buyers need financing and inspections, which adds weeks or months to the process.`,
      solution: [
        "Close in as few as 7 days—not months",
        "No waiting for buyer financing or appraisals",
        "Sell as-is—no repairs, cleaning, or preparation needed",
        "Flexible closing dates that match your move timeline",
        "Certainty instead of hoping a buyer's financing falls through"
      ],
      cta: "Relocate Without the Stress — Get Your Offer",
    },
    {
      id: "repairs",
      icon: Wrench,
      title: "House Needs Major Repairs?",
      shortDescription: "Foundation issues, water damage, or outdated systems? We buy as...",
      image: null,
      imageAlt: "",
      subtitle: "Selling a Home That Needs Work",
      fullTitle: "House Needs Major Repairs?",
      stat: "Repairs can cost thousands and take months to complete",
      challenge: `Whether it's foundation issues, roof damage, electrical problems, or outdated systems, major repairs can be a nightmare. Getting estimates is expensive, contractors take forever, and you still need to find a buyer who will accept a fixer-upper. Meanwhile, you're paying property taxes and insurance on a home you can't sell.`,
      solution: [
        "We buy homes in any condition—no repairs needed",
        "No need for expensive inspections or contractor estimates",
        "We handle all repairs and renovations after closing",
        "Sell as-is and move on without the hassle",
        "Fast, fair offers even with significant issues"
      ],
      cta: "Sell As-Is — Get Your Offer",
    },
    {
      id: "landlord",
      icon: AlertCircle,
      title: "Tired Landlord?",
      shortDescription: "Bad tenants, late rent, and constant calls? Cash out your...",
      image: null,
      imageAlt: "",
      subtitle: "Landlord Burnout? We Can Help",
      fullTitle: "Tired Landlord?",
      stat: "Property management stress affects 40% of landlords",
      challenge: `Being a landlord sounds passive, but it's anything but. Bad tenants, late payments, emergency repairs at 2 AM, eviction processes, and constant headaches drain your time and energy. You're trapped with a property that's more trouble than it's worth, but selling traditionally means dealing with tenant issues and a slow sale process.`,
      solution: [
        "We buy rental properties—tenant issues are our problem now",
        "Fast closing means you're out of the landlord business quickly",
        "No need to worry about evictions or tenant disputes",
        "We handle everything including tenant relocation",
        "Fair offers even with problem tenants or delinquent rent"
      ],
      cta: "Exit Landlord Life — Get Your Offer",
    },
  ];

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

  const cardVariants = {
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

  const paginate = (newDirection: number) => {
    if (selectedIndex === null) return;
    setSelectedIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = situations.length - 1;
      if (nextIndex >= situations.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const selectedSituation = selectedIndex !== null ? situations[selectedIndex] : null;

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
                {situations.map((situation, index) => {
                const Icon = situation.icon;
                const isSelected = selectedIndex === index;

                return (
                    <motion.button
                    key={situation.id}
                    variants={cardVariants}
                    onClick={() => setSelectedIndex(index)}
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
                        isSelected ? "bg-secondary-foreground/20" : "bg-blue-100"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Icon className={`w-5 h-5 ${isSelected ? "text-secondary-foreground" : "text-blue-600"}`} />
                    </motion.div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold ${isSelected ? "" : "text-primary"}`}>
                        {situation.title}
                    </h3>
                    </motion.button>
                );
                })}
            </motion.div>
            </div>
        </section>

        {/* Carousel/Slider Section */}
        <AnimatePresence mode="wait" custom={selectedIndex}>
            {selectedIndex !== null && selectedSituation && (
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
                        onClick={() => setSelectedIndex(idx)}
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
            )}
        </AnimatePresence>

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