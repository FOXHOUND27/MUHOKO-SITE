
import { Technology, Home, About, Contact, Departments } from "./Pages";
import { AlternateHeroSection, MuhokoStudioCards, Navigation } from "./CustomComponents";
import { muhokoStudio } from "./assets";
import MuhokoStudioText from "./CustomComponents/MuhokoStudioText";
function App() {
  return (
    <>
      <Navigation />
      <AlternateHeroSection
        imageSource={muhokoStudio}
        width="w-full"
        height="h-64 pt-16"
      />
      <MuhokoStudioText />
      <MuhokoStudioCards />
    </>
  );
}

export default App;
