import {
  AlternateHeroSection,
  Navigation,
  MuhokoDepartmentsText,
  DepartmentCard,
  FooterSection,
} from "@/CustomComponents";
import { cover } from "@/assets";

function Departments() {
  return (
    <>
      <Navigation navColor="bg-muhoko-gradient" />
      <AlternateHeroSection imageSource={cover} width="w-full" height="h-64" />
      <MuhokoDepartmentsText />
      <DepartmentCard />
      <FooterSection />
    </>
  );
}

export default Departments;
