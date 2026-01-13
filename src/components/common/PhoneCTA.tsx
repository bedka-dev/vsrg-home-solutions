import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

type PhoneVariant = "outline" | "solid" | "text";
type PhoneSize = "small" | "medium" | "large";

interface PhoneCTAProps {
  variant?: PhoneVariant;
  size?: PhoneSize;
  darkBackground?: boolean;
  className?: string;
  showIcon?: boolean;
}

const PHONE_NUMBER = "(972) 211-0909";
const PHONE_TEL = "tel:9722110909";

const sizeClasses: Record<PhoneSize, string> = {
  small: "h-12 px-4 text-sm gap-2",
  medium: "h-14 px-6 text-base gap-2",
  large: "h-16 px-8 text-lg gap-3",
};

const PhoneCTA = ({
  variant = "outline",
  size = "medium",
  darkBackground = false,
  className,
  showIcon = true,
}: PhoneCTAProps) => {
  const baseClasses = cn(
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all hover:scale-105",
    sizeClasses[size]
  );

  const variantClasses: Record<PhoneVariant, string> = {
    outline: darkBackground
      ? "border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
      : "border-2 border-primary text-primary bg-transparent hover:bg-primary/5",
    solid: darkBackground
      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
      : "bg-primary text-primary-foreground hover:bg-primary/90",
    text: darkBackground
      ? "text-primary-foreground hover:text-secondary underline-offset-4 hover:underline"
      : "text-primary hover:text-secondary underline-offset-4 hover:underline",
  };

  return (
    <a
      href={PHONE_TEL}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {showIcon && <Phone className="w-5 h-5" />}
      <span>{PHONE_NUMBER}</span>
    </a>
  );
};

export default PhoneCTA;
export { PHONE_NUMBER, PHONE_TEL };
