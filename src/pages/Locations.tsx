import Layout from "@/components/common/Layout";
import CTAButtons from "@/components/common/CTAButtons";
import React, { useState, useEffect, useRef } from 'react';

// Brand Colors
const colors = {
  primary: "#1C2B42",
  secondary: "#F5B800",
  navy600: "#1D2530",
  trustBlue: "#2E8CB8",
  background: "#F9F7F3",
  card: "#DCE8E8",
  muted: "#F7F4F0",
  accent: "#FCF8F0",
  foreground: "#1D2530",
  mutedForeground: "#6E7A8A",
};

// Icon props type
interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

// Icons
const MapPin = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const Building = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
  </svg>
);

const Clock = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const DollarSign = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const CheckCircle2 = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
  </svg>
);

const ArrowRight = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Phone = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Home = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const TrendingUp = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
);

const Calendar = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const Stadium = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12h20M12 2a10 10 0 0 1 10 10M12 2a10 10 0 0 0-10 10M12 2v10M2 12a10 10 0 0 0 10 10M22 12a10 10 0 0 1-10 10M12 12v10" />
  </svg>
);

// Data
const dallasSuburbs = ["Dallas", "Plano", "Frisco", "McKinney", "Allen", "Richardson", "Garland", "Irving", "Carrollton", "Denton", "Lewisville", "Flower Mound", "The Colony", "Mesquite", "Rowlett"];
const fortWorthSuburbs = ["Fort Worth", "Arlington", "Grand Prairie", "Mansfield", "Bedford", "Euless", "Hurst", "Grapevine", "North Richland Hills"];

const cityLandings = [
  {
    city: "Dallas",
    tagline: "The Heart of North Texas Real Estate",
    icon: Building,
    description: "Dallas is a city of contrasts—from historic Oak Cliff bungalows to modern uptown condos. Whether you're in a gentrifying neighborhood, dealing with an older home that needs work, or simply ready to move on, we buy houses in every Dallas neighborhood.",
    reasons: ["Older home in a changing neighborhood", "Inherited property you can't manage from afar", "Relocating for work or retirement", "Tired of maintaining a large property"],
    neighborhoods: ["Oak Cliff", "Lake Highlands", "East Dallas", "Pleasant Grove", "Oak Lawn"],
    zipCodes: ["75201", "75204", "75214", "75218", "75223"],
    highlight: "Every neighborhood, every condition",
  },
  {
    city: "Plano",
    tagline: "Ready for Your Next Chapter?",
    icon: TrendingUp,
    description: "Plano has transformed from a quiet suburb into one of DFW's most desirable cities. Whether you're an empty nester ready to downsize, relocating for work, or simply ready for a change, we make selling simple.",
    reasons: ["Downsizing after kids move out", "Job relocation or career change", "Rising costs and home values", "Ready to cash out your equity"],
    neighborhoods: ["West Plano", "East Plano", "Legacy", "Downtown Plano"],
    zipCodes: ["75023", "75024", "75025", "75074", "75075"],
    highlight: "Average home equity: $180K+",
  },
  {
    city: "Frisco",
    tagline: "Cashing Out at the Right Time",
    icon: TrendingUp,
    description: "Frisco's explosive growth has created incredible equity for homeowners. If you bought 5-10 years ago, your home may be worth 2-3x what you paid. We help you turn that equity into cash—fast, without the hassle of listing.",
    reasons: ["Capitalize on record-high home values", "Avoid the hassle of a competitive market", "Skip repairs, staging, and open houses", "Close on your timeline, not a buyer's"],
    neighborhoods: ["Stonebriar", "Frisco Square", "Starwood", "Newman Village"],
    zipCodes: ["75033", "75034", "75035"],
    highlight: "Home values up 45% in 5 years",
  },
  {
    city: "Arlington",
    tagline: "Entertainment Capital, Real Solutions",
    icon: Stadium,
    description: "Arlington's neighborhoods range from 1950s ranch homes to modern developments. Many longtime residents are facing the reality of aging homes that need significant work—or life changes that make selling the smart choice.",
    reasons: ["Home built before 1980 needs major updates", "Health issues making stairs or maintenance difficult", "Divorcing and need to split assets quickly", "Relocating for work or retirement"],
    neighborhoods: ["North Arlington", "South Arlington", "East Arlington", "Viridian", "Pantego"],
    zipCodes: ["76001", "76002", "76006", "76010", "76011", "76012"],
    highlight: "Tarrant County's largest city",
  },
  {
    city: "Garland",
    tagline: "Your Home, Your Timeline",
    icon: Calendar,
    description: "Garland's working-class neighborhoods are filled with hardworking families. When you need to sell quickly—whether it's to avoid foreclosure, settle an estate, or simply move on—we provide fair cash offers without the runaround.",
    reasons: ["Behind on mortgage payments", "Inherited property with back taxes owed", "Tired of being a landlord with problem tenants", "Home needs more repairs than it's worth"],
    neighborhoods: ["Firewheel", "Duck Creek", "Eastern Hills", "Downtown Garland", "Rowlett Creek"],
    zipCodes: ["75040", "75041", "75042", "75043", "75044"],
    highlight: "Close in as few as 7 days",
  },
  {
    city: "Richardson",
    tagline: "Serving Richardson Families for Generations",
    icon: Home,
    description: "Richardson's established neighborhoods have been home to generations of families. Whether you're dealing with an inherited property, facing costly repairs on an older home, or ready to retire closer to family, we're here to help.",
    reasons: ["Inherited a family home you can't maintain", "Facing major repairs (foundation, roof, HVAC)", "Retiring and moving closer to grandkids", "Home has become too much to manage alone"],
    neighborhoods: ["Canyon Creek", "Prairie Creek", "Breckinridge", "Heights Park"],
    zipCodes: ["75080", "75081", "75082"],
    highlight: "Many homes built 1960s-1980s",
  },
  {
    city: "Irving",
    tagline: "Life Changes. We Make Selling Easy.",
    icon: Home,
    description: "Irving's diverse neighborhoods have seen decades of families come and go. When life throws you a curveball—divorce, job loss, health issues, or caring for aging parents—the last thing you need is a complicated home sale.",
    reasons: ["Going through a divorce or separation", "Dealing with job loss or financial hardship", "Health issues making homeownership difficult", "Relocating to care for aging parents"],
    neighborhoods: ["Las Colinas", "Valley Ranch", "South Irving", "Northwest Park"],
    zipCodes: ["75038", "75039", "75060", "75061"],
    highlight: "No judgment, just solutions",
  },
];

// Google Maps Embed
const DFWMap = () => (
  <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ height: "350px" }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429155.25456899043!2d-97.19752849218748!3d32.82058547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647571f!2sDallas-Fort%20Worth%20Metroplex%2C%20TX!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="DFW Metroplex Map"
    />
    <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg shadow-md" style={{ backgroundColor: colors.primary }}>
      <div className="flex items-center gap-2 text-white">
        <MapPin className="w-4 h-4" style={{ color: colors.secondary }} />
        <span className="text-sm font-semibold">We Buy Houses in All DFW Cities</span>
      </div>
    </div>
  </div>
);

// City images mapping
const cityImages: Record<string, string> = {
  Dallas: "https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=800&q=80",
  Plano: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
  Frisco: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  Arlington: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
  Garland: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  Richardson: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  Irving: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
};

// City Section
const CitySection = ({ city, index }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const isEven = index % 2 === 0;
  const Icon = city.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsInView(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Text content column
  const TextColumn = (
    <div>
      {/* Title */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.card }}>
          <Icon className="w-6 h-6" style={{ color: colors.primary }} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: colors.primary }}>
            Sell My House in {city.city}
          </h2>
          <p style={{ color: colors.mutedForeground }}>{city.tagline}</p>
        </div>
      </div>
      <p className="text-lg leading-relaxed mb-6" style={{ color: colors.foreground }}>{city.description}</p>
      <div className="mb-6">
        <h3 className="font-semibold mb-3" style={{ color: colors.primary }}>
          Common Reasons {city.city} Homeowners Sell to Us:
        </h3>
        <ul className="space-y-2">
          {city.reasons.map((reason, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.secondary }} />
              <span style={{ color: colors.foreground }}>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: colors.accent, color: colors.primary }}>
        <MapPin className="w-4 h-4" />{city.highlight}
      </div>
    </div>
  );

  // Image + CTA column
  const ImageCTAColumn = (
    <div className="rounded-2xl overflow-hidden text-white" style={{ backgroundColor: colors.primary }}>
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
        <p className="text-white/80 mb-5">Get a fair cash offer in 24 hours. No repairs, no fees, no hassle.</p>
        <button className="w-full font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2" style={{ backgroundColor: colors.secondary, color: colors.primary }}>
          Get My Cash Offer <ArrowRight className="w-5 h-5" />
        </button>
        <div className="flex items-center justify-center gap-4 mt-4 text-sm text-white/70">
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 24hr Response</span>
          <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> No Fees</span>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={ref} className="py-16" style={{ backgroundColor: isEven ? colors.background : colors.muted }}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="transition-all duration-700" style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(30px)' }}>
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

// Main
export default function Locations() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <Layout>
        <div className="min-h-screen font-sans py-20" style={{ backgroundColor: colors.background }}>
        {/* Hero */}
        <section className="py-20 pt-16" style={{ backgroundColor: colors.background }}>
            <div className="max-w-5xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="transition-all duration-700" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateX(0)' : 'translateX(-30px)' }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: colors.card }}>
                    <MapPin className="w-4 h-4" style={{ color: colors.trustBlue }} />
                    <span className="text-sm font-semibold" style={{ color: colors.primary }}>Serving the DFW Metroplex</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: colors.primary }}>
                    We Buy Houses Across <span style={{ color: colors.trustBlue }}>Dallas-Fort Worth</span>
                </h1>

                <p className="text-xl leading-relaxed mb-8" style={{ color: colors.mutedForeground }}>
                    From growing suburbs to established neighborhoods, we help homeowners in every situation. No matter why you're selling—we're here to make it simple.
                </p>

                <div className="grid grid-cols-3 gap-6">
                    {[{ value: "24+", label: "Cities" }, { value: "24hr", label: "Offers" }, { value: "$0", label: "Fees" }].map((stat) => (
                    <div key={stat.label} className="text-center">
                        <div className="text-2xl font-bold" style={{ color: colors.primary }}>{stat.value}</div>
                        <div className="text-sm" style={{ color: colors.mutedForeground }}>{stat.label}</div>
                    </div>
                    ))}
                </div>
                </div>

                <div className="transition-all duration-700" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateX(0)' : 'translateX(30px)', transitionDelay: '0.2s' }}>
                <DFWMap />
                </div>
            </div>
            </div>
        </section>

        {/* City List */}
        <section className="py-16" style={{ backgroundColor: colors.muted }}>
            <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
                <h2 className="mb-3">Cities We Serve</h2>
                <p style={{ color: colors.mutedForeground }}>Click any city to learn more about selling your home there.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-2xl p-6" style={{ backgroundColor: colors.background }}>
                <div className="flex items-center gap-3 mb-4 pb-3" style={{ borderBottom: `2px solid ${colors.trustBlue}20` }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${colors.trustBlue}20` }}>
                    <Building className="w-4 h-4" style={{ color: colors.trustBlue }} />
                    </div>
                    <div>
                    <h3 className="font-bold" style={{ color: colors.primary }}>Dallas Area</h3>
                    <p className="text-xs" style={{ color: colors.mutedForeground }}>Collin, Dallas & Denton Counties</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {dallasSuburbs.map((suburb) => (
                    <span key={suburb} className="px-3 py-1.5 rounded-full text-sm cursor-pointer transition-all hover:scale-105" style={{ backgroundColor: colors.card, color: colors.foreground }}>{suburb}</span>
                    ))}
                </div>
                </div>

                <div className="rounded-2xl p-6" style={{ backgroundColor: colors.background }}>
                <div className="flex items-center gap-3 mb-4 pb-3" style={{ borderBottom: `2px solid ${colors.secondary}40` }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${colors.secondary}20` }}>
                    <Building className="w-4 h-4" style={{ color: colors.secondary }} />
                    </div>
                    <div>
                    <h3 className="font-bold" style={{ color: colors.primary }}>Fort Worth Area</h3>
                    <p className="text-xs" style={{ color: colors.mutedForeground }}>Tarrant & Mid-Cities</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {fortWorthSuburbs.map((suburb) => (
                    <span key={suburb} className="px-3 py-1.5 rounded-full text-sm cursor-pointer transition-all hover:scale-105" style={{ backgroundColor: colors.accent, color: colors.foreground }}>{suburb}</span>
                    ))}
                </div>
                </div>
            </div>

            <div className="mt-8 text-center p-5 rounded-xl" style={{ backgroundColor: colors.background }}>
                <p style={{ color: colors.foreground }} className="mb-2">
                <span className="font-semibold">Don't see your city?</span> We serve the entire DFW metroplex.
                </p>
                <button className="inline-flex items-center gap-2 font-semibold" style={{ color: colors.trustBlue }}>
                <Phone className="w-4 h-4" /> Contact us to check <ArrowRight className="w-4 h-4" />
                </button>
            </div>
            </div>
        </section>

        {/* Section Intro */}
        <section className="py-14 text-center" style={{ backgroundColor: colors.primary }}>
            <h2 className="mb-3 text-primary-foreground">Every City. Every Situation.</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto px-4">
            Whether you're in a fast-growing suburb or an established neighborhood, we understand the unique challenges homeowners face in each area.
            </p>
        </section>

        {/* City Sections */}
        {cityLandings.map((city, index) => (
            <CitySection key={city.city} city={city} index={index} />
        ))}

        {/* Final CTA */}
        <section className="py-20" style={{ backgroundColor: colors.primary }}>
            <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="mb-6 text-primary-foreground">Your Home. Your Story. Your Terms.</h2>
            <p className="text-xl text-white/80 mb-10">Whatever brought you here, we're ready to listen. Get a fair cash offer with no pressure, no judgment, and no obligation.</p>
            <CTAButtons variant="dark" />
            <p className="mt-6 text-white/60 text-sm">No obligation • No pressure • 100% confidential</p>
            </div>
        </section>
        </div>
    </Layout>
  );
}