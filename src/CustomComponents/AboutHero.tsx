import { cover, diversity, curiosity } from "../assets";

function AboutHero() {
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

export default AboutHero;
