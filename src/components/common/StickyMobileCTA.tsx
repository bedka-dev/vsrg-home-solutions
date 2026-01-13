import { useState, useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { PHONE_TEL, PHONE_NUMBER } from "./PhoneCTA";
import { cn } from "@/lib/utils";

interface StickyMobileCTAProps {
  scrollThreshold?: number;
  className?: string;
}

const StickyMobileCTA = ({
  scrollThreshold = 300,
  className,
}: StickyMobileCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300",
        isVisible ? "translate-y-0" : "translate-y-full",
        className
      )}
    >
      <div className="bg-white border-t border-border shadow-lg px-4 py-3 safe-area-inset-bottom">
        <div className="flex gap-3">
          <a
            href={PHONE_TEL}
            className="flex-1 flex items-center justify-center gap-2 min-h-[56px] px-4 text-base font-semibold rounded-xl border-2 border-primary text-primary transition-all active:scale-95"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden xs:inline">{PHONE_NUMBER}</span>
            <span className="xs:hidden">Call</span>
          </a>
          <button
            onClick={scrollToContact}
            className="flex-1 flex items-center justify-center gap-2 min-h-[56px] px-4 text-base font-semibold rounded-xl transition-all active:scale-95"
            style={{ backgroundColor: "#F5B800", color: "#373128" }}
          >
            Get Offer
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
