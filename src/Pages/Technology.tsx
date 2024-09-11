import { MuhokoTechnology } from "../assets";
import {
  Navigation,
  AlternateHeroSection,
  MuhokoTechnologyText,
  MuhokoTechnologyCards,
  MuhokoTechnologyServices,
  FooterSection,
} from "@/CustomComponents";

function Technology() {
  return (
    <>
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
    </>
  );
}

export default Technology;
