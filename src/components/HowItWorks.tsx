import { FileText, Phone, DollarSign, Calendar } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Fill Out Our Simple Form",
      description: "Tell us about your property in just a few minutes",
    },
    {
      icon: Phone,
      title: "We'll Contact You Within 24 Hours",
      description: "A real person will reach out to discuss your situation",
    },
    {
      icon: DollarSign,
      title: "Receive Your Fair Cash Offer",
      description: "No obligation, no pressure - just a straightforward offer",
    },
    {
      icon: Calendar,
      title: "Close on Your Timeline",
      description: "Choose the closing date that works best for you",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Four simple steps to selling your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow h-full">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-card-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
