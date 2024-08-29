import Spline from "@splinetool/react-spline";
import { cover } from "@/assets";

function HeroSection() {
  return (
    <section className="md:h-[73vh] h-[25vh]">
      {/* Text ontainer and styles */}
      <div className="md:absolute md:block hidden top-48 left-20 pt-32 md:pt-0 pl-14 bg-transparent">
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

      {/* div for mobile hero */}
      <div className="md:hidden block">
        <img src={cover} className="h-64 object-cover" alt="hero image" />
      </div>
    </section>
  );
}

export default HeroSection;
