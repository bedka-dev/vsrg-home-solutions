import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CTASize = "small" | "medium" | "large";

interface PrimaryCTAProps {
  text?: string;
  size?: CTASize;
  showArrow?: boolean;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const sizeClasses: Record<CTASize, string> = {
  small: "h-14 px-6 text-base",
  medium: "h-14 px-8 text-lg",
  large: "h-16 px-10 text-xl",
};

const PrimaryCTA = ({
  text = "Get My Cash Offer",
  size = "medium",
  showArrow = true,
  onClick,
  className,
  fullWidth = false,
}: PrimaryCTAProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold rounded-xl transition-all hover:scale-105",
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
    >
      {text}
      {showArrow && <ArrowRight className="w-5 h-5 ml-2" />}
    </Button>
  );
};

export default PrimaryCTA;
