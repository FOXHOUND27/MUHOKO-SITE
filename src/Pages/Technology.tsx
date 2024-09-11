import { MuhokoTechnology } from "../assets";
import {
  Navigation,
  AlternateHeroSection,
  MuhokoTechnologyText,
} from "@/CustomComponents";

function Technology() {
  return (
    <>
      <Navigation />
      <AlternateHeroSection
        imageSource={MuhokoTechnology}
        width="w-full"
        height="h-64 pt-16"
      />
      <MuhokoTechnologyText />
    </>
  );
}

export default Technology;
