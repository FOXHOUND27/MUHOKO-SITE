import { TEAM } from "../assets";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMission() {
  // initializing aos
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1200, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });

    // Refresh AOS to handle new elements dynamically added to the DOM
    AOS.refresh();
  }, []);

  return (
    <section>
      {/* Container Div */}
      <div className="w-[90%] h-[344px] md:h-auto md:p-5  bg-black mx-auto mt-10 md:mt-16 mb-5 md:mb-10 rounded-md shadow-2xl flex lg:flex-row flex-col">
        {/* Text Div */}
        <div className="text-center w-full flex justify-center items-center flex-col my-3 md:my-0">
          <h1
            data-aos="zoom-out"
            className="text-white text-2xl md:text-4xl font-semibold"
          >
            Our Mission
          </h1>
          <p
            data-aos="zoom-out"
            className="text-white w-[90%] text-justify font-medium"
          >
            We aim to build strong relationships with our clients and
            stakeholders by leveraging our services to help them achieve their
            goals. We are deeply committed to finding innovative solutions to
            real-world technological problems, focusing on safety and
            sustainability. Our mission is to enhance the quality of life for
            individuals, communities, and society as a whole through our
            unwavering dedication and efforts.
          </p>
        </div>
        {/* Image  */}
        <img
          src={TEAM}
          className="md:rounded-tr-md md:rounded-br-md rounded-br-md rounded-bl-md md:hidden"
          alt="Team"
        />
      </div>
    </section>
  );
}

export default AboutMission;
