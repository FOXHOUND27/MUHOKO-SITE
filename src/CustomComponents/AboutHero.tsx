import { cover } from "../assets";

function AboutHeroSection() {
  return (
    <section>
      {/* Hero Image */}{" "}
      <img
        src={cover}
        className="object-cover md:h-auto h-64"
        alt="Hero Image"
      />
    </section>
  );
}

export default AboutHeroSection;
