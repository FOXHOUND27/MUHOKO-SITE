import { MuhokoTechnology, muhokoStudio } from "@/assets";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function DepartmentCard() {
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
    <>
      <section>
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row bg-black text-white w-[80%] mx-auto my-5 rounded-xl ">
          <img
            className="object-cover w-full  md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none rounded-tl-xl rounded-tr-xl"
            src={MuhokoTechnology}
            alt="logo"
          />

          <div className="flex justify-center items-center flex-col p-0 md:p-5">
            <h1
              data-aos="zoom-out"
              className=" text-2xl font-semibold text-center mt-3 md:mt-0"
            >
              MUHOKO TECHNOLOGY
            </h1>

            <p
              data-aos="zoom-out"
              className="w-[90%] my-2 md:my-5 py-2 md:py-0 text-center"
            >
              Muhoko Technology began with a simple belief in serving people who
              use machines. The Company believes that by taking time to
              understand each clients business and operations , it can build a
              level of trust and understanding that will allow us to deliver the
              highest of quality technology services.
            </p>

            <Link to="/technology">
              {" "}
              <button className="bg-[#ED2330] text-white hover:text-black hover:bg-white transition-all duration-500 rounded-md py-1 px-4 mb-4 md:mb-0 text-center">
                Learn more about Muhoko Technology
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row bg-black text-white w-[80%] mx-auto my-5 rounded-xl ">
          <img
            className="object-cover h-[186px] md:h-auto  w-full md:w-[373.7px] md:rounded-tl-xl md:rounded-bl-xl rounded-tl-xl rounded-tr-xl md:rounded-tr-none"
            src={muhokoStudio}
            alt=""
          />

          <div className="flex justify-center items-center flex-col p-0 md:p-5">
            <h1
              data-aos="zoom-out"
              className="text-2xl font-semibold text-center mt-3 md:mt-0"
            >
              MUHOKO STUDIO
            </h1>

            <p
              data-aos="zoom-out"
              className="w-[90%] my-2 md:my-5 py-2 md:py-0 text-center"
            >
              Muhoko Studio is a division of Muhoko that is dedicated to quality
              game-making, creative graphical representations such as animations
              , sounds and phenomenal entertainment to consumers throughout
              Namibia. It is dedicated to providing a wide range of
              entertainment options to the people of Namibia.
            </p>

            <Link to="/studio">
              <button className="bg-[#8351A1] text-white hover:bg-white hover:text-black transition-all duration-500 rounded-xl py-1 px-4 mb-4 md:mb-0">
                Learn more about Muhoko Studio
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default DepartmentCard;
