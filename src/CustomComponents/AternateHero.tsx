type imageProp = {
  imageSource: string; // Expecting a string type for imageSource
};

function AlternateHeroSection({ imageSource }: imageProp) {
  return (
    <section>
      {/* Hero Image */}{" "}
      <img
        src={imageSource}
        className="object-cover md:h-auto h-64"
        alt="Hero Image"
      />
    </section>
  );
}

export default AlternateHeroSection;
