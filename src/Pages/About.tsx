import {
  Navigation,
  AlternateHeroSection,
  AboutMission,
  AboutDescriptionSection,
  AboutValues,
  FooterSection,
} from "../CustomComponents";

import { cover } from "@/assets";

function About() {
  return (
    <>
      <Navigation />
      <AlternateHeroSection imageSource={cover} height="h-64" width="w-full" />
      <AboutDescriptionSection />
      <AboutMission />
      <AboutValues />
      <FooterSection />
    </>
  );
}

export default About;
