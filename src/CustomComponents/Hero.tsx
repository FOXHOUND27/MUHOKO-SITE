import Spline from "@splinetool/react-spline";

function Hero() {
  return (
    <section className="h-[100vh]">
      <div className="fixed mt-20">
        <div className="absolute left-10 top-48">
          <h1 className="text-4xl font-semibold">
            Transforming Visions into Reality with <br /> Innovative Technology
          </h1>
          <p className="text-lg text-pretty font-medium">
            Partnering to Achieve Your Goals with <br /> Safety, Sustainability,
            and Excellence
          </p>
        </div>
        <div className="container w-full h-full">
          <Spline scene="https://prod.spline.design/RaAPLDOrrirThDRD/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
