import { curiosity, courage, diversity } from "../assets";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutValues() {
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
    <section className="md:my-10 md:mt-0 mt-52 overflow-hidden">
      <h1
        data-aos="zoom-out"
        className="text-center text-5xl font-semibold mb-4"
      >
        Our Values
      </h1>
      {/* Cards Container */}
      <div className="w-[90%] h-auto mx-auto flex flex-col justify-center items-center md:flex-row space-x-0 md:space-x-5 md:mt-5 space-y-5  md:space-y-0 mb-5 md:mb-0 overflow-hidden">
        {/* Card 1 */}
        <div
          data-aos="fade-up"
          className="md:w-[400px] md:h-[200px] w-[350px] h-[150px] bg-black rounded-lg shadow-2xl flex flex-col justify-center items-center p-5"
        >
          <img
            src={curiosity}
            className=" w-[45px] md:w-[52px]"
            alt="websites icon"
          />

          <h1 className="text-white text-sm md:text-lg my-1">Curiosity</h1>

          <p className="text-white text-xs md:text-base text-center">
            Our curiosity is our most valuable asset. It allows the
            encouragement of innovation and creativity to think differently with
            our stakeholders and clients.
          </p>
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-up"
          className="md:w-[400px] md:h-[200px] w-[350px] h-[150px] bg-black rounded-lg shadow-2xl flex flex-col justify-center items-center p-5"
        >
          <img
            src={diversity}
            className="w-[45px] md:w-[52px]"
            alt="websites icon"
          />

          <h1 className="text-white text-sm md:text-lg my-1">Diversity</h1>

          <p className="text-white text-xs md:text-base text-center">
            Every dream is different, and so is every client we strive for
            excellence and distinction in serving our clients to achieve their
            respective objectives.
          </p>
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-up"
          className="md:w-[400px] md:h-[200px] w-[350px] h-[150px] bg-black rounded-lg shadow-2xl flex flex-col justify-center items-center p-5"
        >
          <img
            src={courage}
            className="w-[45px] md:w-[52px]"
            alt="websites icon"
          />

          <h1 className="text-white text-sm md:text-lg my-1">Courage</h1>

          <p className="text-white text-xs md:text-base text-center">
            We have the courage and we commit our collective experience as an
            organization as well as Research and Development to build our
            clients dreams.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutValues;
