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
      <Navigation navColor="bg-muhoko-gradient" />
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
