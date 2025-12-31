import aboutHeroImg from "@/assets/about-us/conversation.png";

const AboutHero = () => {
  return (
    <section className="py-10 pt-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: Text */}
          <div>
            <h2 className="mb-6">
              Our Story
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Victory Springs Realty Group began as a simple promise between a father and his daughter — to use their skills and values to create something meaningful for families facing challenges.
            </p>
            <div className="w-16 h-1 bg-secondary"></div>
          </div>

          {/* Right: Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={aboutHeroImg}
              alt="Victory Springs team meeting with homeowners on their porch"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
