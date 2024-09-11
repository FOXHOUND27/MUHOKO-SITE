type imageProp = {
  imageSource: string; // Expecting a string type for imageSource
  width: string; // Expecting a string type for custom width class
  height: string;
};

function AlternateHeroSection({ imageSource, width, height }: imageProp) {
  return (
    <section>
      {/* Hero Image */}{" "}
      <img
        src={imageSource}
        className={`object-cover ${width} md:h-auto ${height}`}
        alt="Hero Image"
      />
    </section>
  );
}

export default AlternateHeroSection;
