import { ibia, gameDev, character, films } from "../assets";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MuhokoStudioCards() {
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
      <h1
        data-aos="zoom-out"
        className="text-3xl font-semibold my-5 md:my-0 md:text-5xl text-black text-center"
      >
        Muhoko Studio Services
      </h1>

      {/* Cards container */}
      <div className="w-full h-auto pt-0 md:pt-8 flex flex-col space-y-5 md:space-y-20 justify-center items-center mb-10 md:mb-20">
        {/* Service Card 1 */}
        <div className="w-[90%] md:w-[85%] h-auto md:h-[285px] space-x-0 md:space-x-56 flex flex-col md:flex-row justify-center items-center bg-studio-gradient bg-black rounded-md md:rounded-none  md:rounded-tl-[120px] md:rounded-br-[120px] shadow-2xl">
          <img
            data-aos="zoom-out"
            src={gameDev}
            className="w-28 md:w-52 mt-2 md:mt-0"
            alt="Logo"
          />
          {/* Text Div */}
          <div>
            <h1
              data-aos="zoom-out"
              className="text-white text-center py-2 text-2xl md:text-4xl"
            >
              Game Development
            </h1>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="w-[90%] pt-0 md:pt-8 md:w-[85%] h-auto md:h-[285px] space-x-0 md:space-x-[260px] bg-studio-gradient flex flex-col md:flex-row justify-center items-center bg-black rounded-md md:rounded-none md:rounded-tl-[120px] md:rounded-br-[120px] shadow-2xl">
          <img
            data-aos="zoom-out"
            src={character}
            className="w-28 md:w-52 mt-2 md:mt-0"
            alt="Logo"
          />
          {/* Text Div */}
          <div>
            <h1
              data-aos="zoom-out"
              className="text-white text-center py-2 text-2xl md:text-4xl"
            >
              Character Design
            </h1>
          </div>
        </div>

        {/* Service Card 3 */}

        <div className="w-[90%] pt-0 md:pt-8 md:w-[85%] h-auto md:h-[285px] space-x-0 md:space-x-[300px] flex flex-col md:flex-row justify-center items-center bg-studio-gradient bg-black rounded-md md:rounded-none md:rounded-tl-[120px] md:rounded-br-[120px] shadow-2xl">
          <img
            data-aos="zoom-out"
            src={films}
            className="w-28 md:w-52 mt-2 md:mt-0"
            alt="Logo"
          />
          {/* Text Div */}
          <div>
            <h1
              data-aos="zoom-out"
              className="text-white text-center py-2 text-2xl md:text-4xl"
            >
              Animated Films
            </h1>
          </div>
        </div>

        {/* Service Card 4 */}

        <div className="w-[90%] pt-0 md:pt-8 md:w-[85%] h-auto md:h-[285px] space-x-0 md:space-x-0 flex flex-col md:flex-row justify-center items-center bg-studio-gradient bg-black rounded-md md:rounded-none md:rounded-tl-[120px] md:rounded-br-[120px] shadow-2xl">
          <img
            data-aos="zoom-out"
            src={ibia}
            className="w-32 ml-0 md:ml-16 md:w-96 mt-4 md:mt-0"
            alt="Logo"
          />
          {/* Text Div */}
          <div className="flex flex-col justify-center items-center">
            <h1
              data-aos="zoom-out"
              className="text-white text-center py-2 text-2xl md:text-4xl"
            >
              IBIATV
            </h1>
            <p
              data-aos="zoom-out"
              className="text-white w-[60%] text-center md:text-justify mb-5 md:mb-0"
            >
              A Namibian streaming service that offers a wide variety of movies
              series, live TV and more on internet connected devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MuhokoStudioCards;
