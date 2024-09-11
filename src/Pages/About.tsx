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
      <AlternateHeroSection imageSource={cover} />
      <AboutDescriptionSection />
      <AboutMission />
      <AboutValues />
      <FooterSection />
    </>
  );
}

export default About;
