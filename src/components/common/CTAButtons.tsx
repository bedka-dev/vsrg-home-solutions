import PhoneCTA from "./PhoneCTA";
import PrimaryCTA from "./PrimaryCTA";

interface CTAButtonsProps {
  variant?: "light" | "dark";
}

const CTAButtons = ({ variant = "light" }: CTAButtonsProps) => {
  const isDark = variant === "dark";

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <PhoneCTA
        variant="outline"
        size="medium"
        darkBackground={isDark}
      />
      <PrimaryCTA
        text="Get My Cash Offer"
        size="medium"
        showArrow
      />
    </div>
  );
};

export default CTAButtons;
