import Spline from "@splinetool/react-spline";
import { cover } from "@/assets";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  // useEffect for Aos
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1800, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });

    // Refresh AOS to handle new elements dynamically added to the DOM
    AOS.refresh();
  }, []);

  return (
    <section data-aos="zoom-in" className="md:h-[73vh] h-[25vh]">
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
      <div className="hidden lg:block">
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
