import { useState, useEffect, useRef } from "react";
import { colors } from "./colors";
import { CityLanding, cityImages } from "./citiesData";
import { MapPin, CheckCircle2, Clock, DollarSign, ArrowRight } from "./Icons";

interface CitySectionProps {
  city: CityLanding;
  index: number;
}

const CitySection = ({ city, index }: CitySectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const isEven = index % 2 === 0;
  const Icon = city.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Text content column
  const TextColumn = (
    <div>
      {/* Title */}
      <div className="flex items-start gap-4 mb-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: colors.card }}
        >
          <Icon className="w-6 h-6" style={{ color: colors.primary }} />
        </div>
        <div>
          <h2
            className="text-2xl md:text-3xl font-bold mb-1"
            style={{ color: colors.primary }}
          >
            Sell My House in {city.city}
          </h2>
          <p style={{ color: colors.mutedForeground }}>{city.tagline}</p>
        </div>
      </div>
      <p
        className="text-lg leading-relaxed mb-6"
        style={{ color: colors.foreground }}
      >
        {city.description}
      </p>
      <div className="mb-6">
        <h3 className="font-semibold mb-3" style={{ color: colors.primary }}>
          Common Reasons {city.city} Homeowners Sell to Us:
        </h3>
        <ul className="space-y-2">
          {city.reasons.map((reason, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                style={{ color: colors.secondary }}
              />
              <span style={{ color: colors.foreground }}>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
        style={{ backgroundColor: colors.accent, color: colors.primary }}
      >
        <MapPin className="w-4 h-4" />
        {city.highlight}
      </div>
    </div>
  );

  // Image + CTA column
  const ImageCTAColumn = (
    <div
      className="rounded-2xl overflow-hidden text-white"
      style={{ backgroundColor: colors.primary }}
    >
      {/* City image */}
      <div className="h-40 overflow-hidden">
        <img
          src={cityImages[city.city]}
          alt={`${city.city}, Texas`}
          className="w-full h-full object-cover"
        />
      </div>
      {/* CTA content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Ready to Sell in {city.city}?</h3>
        <p className="text-white/80 mb-5">
          Get a fair cash offer in 24 hours. No repairs, no fees, no hassle.
        </p>
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="w-full font-semibold min-h-[56px] py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105"
          style={{ backgroundColor: colors.secondary, color: colors.primary }}
        >
          Get My Cash Offer <ArrowRight className="w-5 h-5" />
        </button>
        <div className="flex items-center justify-center gap-4 mt-4 text-sm text-white/70">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> 24hr Response
          </span>
          <span className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" /> No Fees
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={ref}
      className="py-16"
      style={{ backgroundColor: isEven ? colors.background : colors.muted }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div
          className="transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-10">
            {isEven ? (
              <>
                {TextColumn}
                {ImageCTAColumn}
              </>
            ) : (
              <>
                {ImageCTAColumn}
                {TextColumn}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitySection;
