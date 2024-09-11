import {
  AlternateHeroSection,
  Navigation,
  MuhokoStudioText,
  MuhokoStudioCards,
  FooterSection,
} from "@/CustomComponents";

import { muhokoStudio } from "@/assets";

function Studio() {
  return (
    <>
      <Navigation navColor="bg-studio-gradient" />
      <AlternateHeroSection
        imageSource={muhokoStudio}
        width="w-full"
        height="h-64 pt-16"
      />
      <MuhokoStudioText />
      <MuhokoStudioCards />
      <FooterSection />
    </>
  );
}

export default Studio;
