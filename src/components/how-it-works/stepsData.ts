import { FormIcon, PhoneIcon, HomeCheckIcon, KeysIcon } from "./StepIcons";

export interface Step {
  number: string;
  icon: React.ComponentType;
  title: string;
  description: string;
  accent: string;
  bgPattern: string;
}

export const steps: Step[] = [
  {
    number: "01",
    icon: FormIcon,
    title: "Fill Out Our Simple Form",
    description:
      "Tell us about your property and situation. Takes less than 60 seconds, and there's absolutely no obligation.",
    accent: "#3B82F6",
    bgPattern:
      "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
  },
  {
    number: "02",
    icon: PhoneIcon,
    title: "We'll Contact You Within 24 Hours",
    description:
      "Our team will call to learn more about your home and schedule a convenient time to visit.",
    accent: "#EAB308",
    bgPattern:
      "radial-gradient(circle at 80% 20%, rgba(234, 179, 8, 0.15) 0%, transparent 50%)",
  },
  {
    number: "03",
    icon: HomeCheckIcon,
    title: "Receive Your Fair Cash Offer",
    description:
      "After visiting your property, we'll present a no-obligation cash offer based on current market conditions.",
    accent: "#3B82F6",
    bgPattern:
      "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
  },
  {
    number: "04",
    icon: KeysIcon,
    title: "Close on Your Timeline",
    description:
      "Choose your closing date—whether that's 7 days or 7 months. We work around your schedule.",
    accent: "#EAB308",
    bgPattern:
      "radial-gradient(circle at 80% 80%, rgba(234, 179, 8, 0.15) 0%, transparent 50%)",
  },
];
