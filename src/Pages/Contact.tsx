import {
  Navigation,
  AlternateHeroSection,
  ContactSection,
  FooterSection,
} from "../CustomComponents";

import { cover } from "../assets";

function Contact() {
  return (
    <>
      <Navigation />
      <AlternateHeroSection imageSource={cover} width="w-full" height="h-64" />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default Contact;
