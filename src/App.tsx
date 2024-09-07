import HeroSection from "./CustomComponents/HeroSection";
import InfoCardSection from "./CustomComponents/infoCardSection";
import Navigation from "./CustomComponents/Navigation";
import Partners from "./CustomComponents/PartnersSection";
import SolutionSection from "./CustomComponents/SolutionSection";
import TechnologySection from "./CustomComponents/TechnologySection";
import TestimonialSection from "./CustomComponents/TestimonialSection";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Partners />
      <SolutionSection />
      <InfoCardSection />
      <TechnologySection />
      <TestimonialSection />
    </>
  );
}

export default App;
