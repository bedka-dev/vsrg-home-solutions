import { Button } from "@/components/ui/button";

interface CTAButtonsProps {
  variant?: "light" | "dark"; // light for light backgrounds, dark for dark backgrounds
}

const CTAButtons = ({ variant = "light" }: CTAButtonsProps) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        variant="outline"
        className={`px-8 py-6 text-lg font-semibold border-2 hover:scale-105 transition-transform ${
          variant === "dark"
            ? "!bg-transparent border-primary-foreground !text-primary-foreground hover:bg-primary-foreground/10"
            : ""
        }`}
        onClick={scrollToContact}
      >
        Talk to Our Family
      </Button>

      <Button
        size="lg"
        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform"
        onClick={scrollToContact}
      >
        Get My Cash Offer
      </Button>
    </div>
  );
};

export default CTAButtons;
