import {
  AlternateHeroSection,
  Navigation,
  MuhokoStudioText,
  MuhokoStudioCards,
  FooterSection,
} from "@/CustomComponents";

import { muhokoStudio } from "@/assets";
import { motion } from "framer-motion";

function Studio() {
  return (
    <>
      <motion.div
        className="fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Navigation navColor="bg-studio-gradient" />
        <AlternateHeroSection
          imageSource={muhokoStudio}
          width="w-full"
          height="h-64 pt-16"
        />
        <MuhokoStudioText />
        <MuhokoStudioCards />
        <FooterSection />
      </motion.div>
    </>
  );
}

export default Studio;
