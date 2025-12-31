import CTAButtons from "@/components/common/CTAButtons";

const AboutCTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4">
            When you know, you know. Ready?
          </h2>
          <p className="text-lg text-foreground mb-12">
            Just reach out for an honest conversation with a family who understands. No obligations, just options.
          </p>

          <CTAButtons variant="light" />
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
