import Spline from "@splinetool/react-spline";

function Hero() {
  return (
    <section className="md:h-[73vh] h-[25vh]">
      {/* Text ontainer and styles */}
      <div className="md:absolute static top-48 left-20 pt-32 md:pt-0 pl-14 bg-transparent">
        {/* Title text */}
        <h1 className="md:text-4xl text-2xl font-semibold md:text-left">
          Transforming Visions into Reality <br /> with Innovative Technology
        </h1>
        {/* Subtitle text */}
        <p className="md:text-xl text-left font-medium">
          Partnering to Achieve Your Goals with <br /> Safety, Sustainability,
          and Excellence
        </p>
      </div>
      {/* 3d model and responsive styles */}
      <div className="sm:block hidden">
        {" "}
        <Spline scene="https://prod.spline.design/RaAPLDOrrirThDRD/scene.splinecode" />
      </div>
    </section>
  );
}

export default Hero;
