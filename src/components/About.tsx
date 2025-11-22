const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            About Us
          </h2>
          <p className="text-xl mb-8 text-foreground leading-relaxed">
            Life's transitions don't have to be complicated. We help homeowners move forward quickly.
          </p>
          <div className="bg-card rounded-xl p-8 shadow-medium text-left">
            <p className="text-lg text-card-foreground leading-relaxed">
              At Victory Springs Realty Group, we're proud to be a locally based company in the DFW metroplex, 
              helping homeowners in Denton, Collin, and Far North Dallas counties. Our team is committed to 
              transparency, empathy, and making the process as simple as possible for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
