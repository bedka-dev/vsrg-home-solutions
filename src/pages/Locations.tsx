import { useState, useEffect } from "react";
import Layout from "@/components/common/Layout";
import CTAButtons from "@/components/common/CTAButtons";
import {
  colors,
  MapPin,
  Building,
  Phone,
  ArrowRight,
  dallasSuburbs,
  fortWorthSuburbs,
  cityLandings,
  DFWMap,
  CitySection,
} from "@/components/locations";

export default function Locations() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Layout>
      <div
        className="min-h-screen font-sans py-20"
        style={{ backgroundColor: colors.background }}
      >
        {/* Hero */}
        <section className="py-20 pt-16" style={{ backgroundColor: colors.background }}>
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className="transition-all duration-700"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateX(0)" : "translateX(-30px)",
                }}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: colors.card }}
                >
                  <MapPin className="w-4 h-4" style={{ color: colors.trustBlue }} />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: colors.primary }}
                  >
                    Serving the DFW Metroplex
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                  style={{ color: colors.primary }}
                >
                  We Buy Houses Across{" "}
                  <span style={{ color: colors.trustBlue }}>Dallas-Fort Worth</span>
                </h1>

                <p
                  className="text-xl leading-relaxed mb-8"
                  style={{ color: colors.mutedForeground }}
                >
                  From growing suburbs to established neighborhoods, we help
                  homeowners in every situation. No matter why you're selling—we're
                  here to make it simple.
                </p>

                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "24+", label: "Cities" },
                    { value: "24hr", label: "Offers" },
                    { value: "$0", label: "Fees" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div
                        className="text-2xl font-bold"
                        style={{ color: colors.primary }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: colors.mutedForeground }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="transition-all duration-700"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateX(0)" : "translateX(30px)",
                  transitionDelay: "0.2s",
                }}
              >
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
              <p style={{ color: colors.mutedForeground }}>
                Click any city to learn more about selling your home there.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: colors.background }}
              >
                <div
                  className="flex items-center gap-3 mb-4 pb-3"
                  style={{ borderBottom: `2px solid ${colors.trustBlue}20` }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${colors.trustBlue}20` }}
                  >
                    <Building className="w-4 h-4" style={{ color: colors.trustBlue }} />
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ color: colors.primary }}>
                      Dallas Area
                    </h3>
                    <p className="text-xs" style={{ color: colors.mutedForeground }}>
                      Collin, Dallas & Denton Counties
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dallasSuburbs.map((suburb) => (
                    <span
                      key={suburb}
                      className="px-3 py-1.5 rounded-full text-sm cursor-pointer transition-all hover:scale-105"
                      style={{ backgroundColor: colors.card, color: colors.foreground }}
                    >
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: colors.background }}
              >
                <div
                  className="flex items-center gap-3 mb-4 pb-3"
                  style={{ borderBottom: `2px solid ${colors.secondary}40` }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <Building className="w-4 h-4" style={{ color: colors.secondary }} />
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ color: colors.primary }}>
                      Fort Worth Area
                    </h3>
                    <p className="text-xs" style={{ color: colors.mutedForeground }}>
                      Tarrant & Mid-Cities
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {fortWorthSuburbs.map((suburb) => (
                    <span
                      key={suburb}
                      className="px-3 py-1.5 rounded-full text-sm cursor-pointer transition-all hover:scale-105"
                      style={{ backgroundColor: colors.accent, color: colors.foreground }}
                    >
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="mt-8 text-center p-5 rounded-xl"
              style={{ backgroundColor: colors.background }}
            >
              <p style={{ color: colors.foreground }} className="mb-2">
                <span className="font-semibold">Don't see your city?</span> We serve
                the entire DFW metroplex.
              </p>
              <a
                href="tel:9722110909"
                className="inline-flex items-center gap-2 font-semibold min-h-[56px] px-6 rounded-xl transition-all hover:scale-105"
                style={{ color: colors.trustBlue }}
              >
                <Phone className="w-4 h-4" /> (972) 211-0909{" "}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Section Intro */}
        <section
          className="py-14 text-center"
          style={{ backgroundColor: colors.primary }}
        >
          <h2 className="mb-3 text-primary-foreground">Every City. Every Situation.</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto px-4">
            Whether you're in a fast-growing suburb or an established neighborhood,
            we understand the unique challenges homeowners face in each area.
          </p>
        </section>

        {/* City Sections */}
        {cityLandings.map((city, index) => (
          <CitySection key={city.city} city={city} index={index} />
        ))}

        {/* Final CTA */}
        <section className="py-20" style={{ backgroundColor: colors.primary }}>
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="mb-6 text-primary-foreground">
              Your Home. Your Story. Your Terms.
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Whatever brought you here, we're ready to listen. Get a fair cash offer
              with no pressure, no judgment, and no obligation.
            </p>
            <CTAButtons variant="dark" />
            <p className="mt-6 text-white/60 text-sm">
              No obligation • No pressure • 100% confidential
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
