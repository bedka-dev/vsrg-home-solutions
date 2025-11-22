import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Comparison />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
