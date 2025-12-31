import Layout from "@/components/common/Layout";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import HowItWorks from "@/components/home/HowItWorks";
import Comparison from "@/components/home/Comparison";
import ContactForm from "@/components/home/ContactForm";

const Home = () => {
  return (
    <Layout transparentHeader>
      <Hero />
      <About />
      <HowItWorks />
      <Comparison />
      <ContactForm />
    </Layout>
  );
};

export default Home;
