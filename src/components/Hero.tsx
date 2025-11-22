import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  return (
    <>
      {/* Hero Section with Split Layout */}
      <section id="home" className="relative bg-hero-gradient text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                The <span className="italic font-light">Trusted Partner</span> in<br />
                Selling Your Home Fast<br />
                and Moving Forward.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
                We help homeowners facing challenging situations sell their properties quickly - as is, 
                with no fees or complications. With 25+ years of real estate experience, we provide 
                fair cash offers and close on your timeline.
              </p>
              <Button 
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8 py-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Your Cash Offer Today →
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/30 rounded-full -z-10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/20 rounded-full -z-10 blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Dallas-Fort Worth Home" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Card Overlay */}
      <section className="relative -mt-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: CheckCircle2, title: "No Fees or Commissions", description: "Keep 100% of Your Sale" },
                { icon: CheckCircle2, title: "Any Condition", description: "We Buy Houses As-Is" },
                { icon: CheckCircle2, title: "7-Day Close", description: "Fast and Flexible Timeline" },
                { icon: CheckCircle2, title: "Family Owned", description: "Local DFW Experts" },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-3">
                  <stat.icon className="h-12 w-12 text-secondary mx-auto" />
                  <h3 className="font-bold text-lg text-card-foreground">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
