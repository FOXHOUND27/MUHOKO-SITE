import {
  Navigation,
  AlternateHeroSection,
  AboutMission,
  AboutDescriptionSection,
  AboutValues,
  FooterSection,
} from "../CustomComponents";

import { cover } from "@/assets";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <motion.div
        className="fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Navigation navColor="bg-muhoko-gradient" />
        <AlternateHeroSection
          imageSource={cover}
          height="h-64"
          width="w-full"
        />
        <AboutDescriptionSection />
        <AboutMission />
        <AboutValues />
        <FooterSection />
      </motion.div>
    </>
  );
}

export default About;
