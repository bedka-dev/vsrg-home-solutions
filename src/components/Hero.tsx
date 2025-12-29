import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-dfw.jpeg";

const Hero = () => {
  // Get scroll position for parallax
  const { scrollY } = useViewportScroll();
  const videoOpacity = useTransform(scrollY, [0, 200], [1, 0.5]);
  const videoScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6 + index * 0.1,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };

  const benefits = [
    { title: "No Fees or Commissions", description: "Keep 100% of your sale" },
    { title: "Houses in Any Condition", description: "We buy as-is" },
    { title: "Close in as Few as 7 Days", description: "Fast and flexible" },
    { title: "Family Owned & Operated", description: "Local DFW experts" },
  ];

  return (
    <section id="home" className="relative bg-hero-gradient text-primary-foreground overflow-hidden h-screen pt-20">
      {/* Fallback Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Animated Video Background with Parallax */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        style={{
          opacity: videoOpacity,
          scale: videoScale,
        }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-dfw.mp4" type="video/mp4" />
        <source src="/videos/hero-dfw.webm" type="video/webm" />
      </motion.video>

      {/* Dark Overlay for Text Readability */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 h-full flex items-center">
        <motion.div 
          className="max-w-4xl mx-auto text-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl font-semibold mb-6 leading-tight"
            variants={itemVariants}
          >
            Sell Your DFW Home Fast & Fair
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            We specialize in helping homeowners sell their properties - as is, quickly - no matter the situation. 
            Get a cash offer today with no hidden fees or obligations.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
            >
              <Button 
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8 py-6 w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get My Cash Offer
              </Button>
            </motion.div>
            
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
            >
              <Button 
                size="lg"
                variant="outline"
                className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20 font-semibold text-lg px-8 py-6 w-full sm:w-auto"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Key Benefits Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-background/10 backdrop-blur rounded-lg p-6 border border-primary-foreground/20 hover:bg-background/20 transition-colors"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle2 className="h-10 w-10 mb-3 text-secondary mx-auto" />
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-primary-foreground/80">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
