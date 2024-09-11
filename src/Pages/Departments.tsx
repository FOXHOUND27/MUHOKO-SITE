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
      <Navigation />
      <AlternateHeroSection imageSource={cover} />
      <MuhokoDepartmentsText />
      <DepartmentCard />
      <FooterSection />
    </>
  );
}

export default Departments;
