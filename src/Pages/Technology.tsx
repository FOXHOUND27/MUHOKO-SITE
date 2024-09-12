import { MuhokoTechnology } from "../assets";
import {
  Navigation,
  AlternateHeroSection,
  MuhokoTechnologyText,
  MuhokoTechnologyCards,
  MuhokoTechnologyServices,
  FooterSection,
} from "@/CustomComponents";
import { motion } from "framer-motion";

function Technology() {
  return (
    <>
      <motion.div
        className="fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Navigation navColor="bg-service-gradient" />
        <AlternateHeroSection
          imageSource={MuhokoTechnology}
          width="w-full"
          height="h-64 pt-16"
        />
        <MuhokoTechnologyText />
        <MuhokoTechnologyCards />
        <MuhokoTechnologyServices />
        <FooterSection />
      </motion.div>
    </>
  );
}

export default Technology;
