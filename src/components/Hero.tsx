import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative bg-hero-gradient text-primary-foreground overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sell Your DFW Home Fast & Fair
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto">
            We specialize in helping homeowners sell their properties - as is, quickly - no matter the situation. 
            Get a cash offer today with no hidden fees or obligations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get My Cash Offer
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20 font-semibold text-lg px-8 py-6"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "No Fees or Commissions", description: "Keep 100% of your sale" },
              { title: "Houses in Any Condition", description: "We buy as-is" },
              { title: "Close in as Few as 7 Days", description: "Fast and flexible" },
              { title: "Family Owned & Operated", description: "Local DFW experts" },
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-background/10 backdrop-blur rounded-lg p-6 border border-primary-foreground/20 hover:bg-background/20 transition-all"
              >
                <CheckCircle2 className="h-10 w-10 mb-3 text-secondary mx-auto" />
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-primary-foreground/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
