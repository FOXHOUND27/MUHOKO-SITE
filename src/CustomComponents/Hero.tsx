import Spline from "@splinetool/react-spline";

function Hero() {
  return (
    <section className="md:h-[73vh] h-[60vh] bg-custom-gradient">
      <div className="md:absolute static top-48 left-36 pt-32 md:pt-0 pl-20">
        <h1 className="md:text-4xl text-2xl font-semibold md:text-left">
          Transforming Visions into Reality <br /> with Innovative Technology
        </h1>
        <p className="md:text-xl font-medium">
          Partnering to Achieve Your Goals with <br /> Safety, Sustainability,
          and Excellence
        </p>
      </div>
      <div className="sm:block hidden">
        {" "}
        <Spline scene="https://prod.spline.design/RaAPLDOrrirThDRD/scene.splinecode" />
      </div>
    </section>
  );
}

export default Hero;
