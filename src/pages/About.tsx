import Layout from "@/components/common/Layout";
import AboutHero from "@/components/about/AboutHero";
import CoreValues from "@/components/about/CoreValues";
import Commitment from "@/components/about/Commitment";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <CoreValues />
      <Commitment />
      <AboutCTA />
    </Layout>
  );
};

export default About;
