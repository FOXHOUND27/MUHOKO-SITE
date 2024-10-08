import {
  AlternateHeroSection,
  Navigation,
  MuhokoDepartmentsText,
  DepartmentCard,
  FooterSection,
} from "@/CustomComponents";
import { cover } from "@/assets";
import { motion } from "framer-motion";

function Departments() {
  return (
    <>
      <motion.div
        className="fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Navigation navColor="bg-black" />
        <AlternateHeroSection
          imageSource={cover}
          width="w-full"
          height="h-64"
        />
        <MuhokoDepartmentsText />
        <DepartmentCard />
        <FooterSection />
      </motion.div>
    </>
  );
}

export default Departments;
