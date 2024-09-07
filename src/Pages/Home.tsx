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

function Home() {
  return (
    <>
      {" "}
      <Navigation />
      <HeroSection />
      <Partners />
      <SolutionSection />
      <InfoCardSection />
      <TechnologySection />
      <TestimonialSection />
      <FooterSection />
    </>
  );
}

export default Home;
