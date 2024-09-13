import {
  Navigation,
  HeroSection,
  Partners,
  SolutionSection,
  InfoCardSection,
  TechnologySection,
  TestimonialSection,
  FooterSection,
} from "../CustomComponents/index";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        className="fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        {" "}
        <Navigation navColor="bg-black" />
        <HeroSection />
        <Partners />
        <SolutionSection />
        <InfoCardSection />
        <TechnologySection />
        <TestimonialSection />
        <FooterSection />
      </motion.div>
    </>
  );
}

export default Home;
