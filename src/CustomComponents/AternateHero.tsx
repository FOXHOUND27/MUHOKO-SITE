import { cover } from "../assets";

function AlternateHeroSection() {
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

export default AlternateHeroSection;
