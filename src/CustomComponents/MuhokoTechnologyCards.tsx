import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MuhokoTechnologyCards() {
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
      <div className="w-[90%] h-auto mx-auto flex flex-col justify-center items-center md:flex-row space-x-0 md:space-x-5 md:mt-5 space-y-5  md:space-y-0 mb-5 md:mb-5">
        {/* Card 1 */}
        <div
          data-aos="fade-up"
          className="md:w-[450px] md:h-[200px] w-[350px] h-[150px] bg-[#ED2330] rounded-lg shadow-2xl flex flex-col justify-center items-center p-5"
        >
          <h1 className="text-white text-sm md:text-lg my-1">MISSION </h1>

          <p className="text-white text-xs md:text-base text-center">
            to deliver quality technology services that are tailored to the
            specific needs of each client.
          </p>
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-up"
          className="md:w-[450px] md:h-[200px] w-[350px] h-[150px] bg-[#ED2330] rounded-lg shadow-2xl flex flex-col justify-center items-center p-5"
        >
          <h1 className="text-white text-sm md:text-lg my-1">VALUES</h1>

          <p className="text-white text-xs md:text-base text-center">
            Spearheading technology,
            <br /> serving people who use machines
          </p>
        </div>
      </div>
    </section>
  );
}

export default MuhokoTechnologyCards;
