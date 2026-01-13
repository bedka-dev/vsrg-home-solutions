import Layout from "@/components/common/Layout";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import HowItWorks from "@/components/home/HowItWorks";
import Comparison from "@/components/home/Comparison";
import AddressCTA from "@/components/common/AddressCTA";

const Home = () => {
  return (
    <Layout transparentHeader>
      <Hero />
      <About />
      <HowItWorks />
      <Comparison />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="mb-4">Contact Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to get started? Enter your property address and we'll provide a fair cash offer within 24 hours.
            </p>
          </div>
          <AddressCTA />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
