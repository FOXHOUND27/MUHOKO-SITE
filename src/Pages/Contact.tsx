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
      <AlternateHeroSection imageSource={cover} />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default Contact;
